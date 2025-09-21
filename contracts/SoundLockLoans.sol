// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract SoundLockLoans is SepoliaConfig {
    using FHE for *;
    
    struct LoanApplication {
        euint32 applicationId;
        euint32 requestedAmount;
        euint32 loanTerm;
        euint32 creditScore;
        ebool isApproved;
        ebool isActive;
        string musicIPHash;
        string applicantName;
        address applicant;
        uint256 applicationTime;
        uint256 expiryTime;
    }
    
    struct Loan {
        euint32 loanId;
        euint32 principalAmount;
        euint32 interestRate;
        euint32 remainingBalance;
        euint32 monthlyPayment;
        ebool isActive;
        ebool isDefaulted;
        address borrower;
        address lender;
        uint256 startTime;
        uint256 nextPaymentDue;
    }
    
    struct MusicIP {
        euint32 ipId;
        euint32 estimatedValue;
        euint32 revenueGenerated;
        ebool isVerified;
        string title;
        string artist;
        string ipfsHash;
        address owner;
        uint256 creationTime;
    }
    
    struct Repayment {
        euint32 repaymentId;
        euint32 amount;
        address borrower;
        uint256 timestamp;
    }
    
    mapping(uint256 => LoanApplication) public loanApplications;
    mapping(uint256 => Loan) public loans;
    mapping(uint256 => MusicIP) public musicIPs;
    mapping(uint256 => Repayment) public repayments;
    mapping(address => euint32) public borrowerCreditScore;
    mapping(address => euint32) public lenderReputation;
    
    uint256 public applicationCounter;
    uint256 public loanCounter;
    uint256 public ipCounter;
    uint256 public repaymentCounter;
    
    address public owner;
    address public verifier;
    
    event LoanApplicationSubmitted(uint256 indexed applicationId, address indexed applicant, string musicIPHash);
    event LoanApproved(uint256 indexed applicationId, uint256 indexed loanId, address indexed borrower);
    event LoanCreated(uint256 indexed loanId, address indexed borrower, address indexed lender);
    event RepaymentMade(uint256 indexed repaymentId, uint256 indexed loanId, address indexed borrower);
    event MusicIPRegistered(uint256 indexed ipId, address indexed owner, string title);
    event CreditScoreUpdated(address indexed borrower, uint32 creditScore);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function submitLoanApplication(
        string memory _musicIPHash,
        string memory _applicantName,
        externalEuint32 _requestedAmount,
        externalEuint32 _loanTerm,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(bytes(_musicIPHash).length > 0, "Music IP hash cannot be empty");
        require(bytes(_applicantName).length > 0, "Applicant name cannot be empty");
        
        uint256 applicationId = applicationCounter++;
        
        // Convert external encrypted values to internal
        euint32 requestedAmount = FHE.fromExternal(_requestedAmount, inputProof);
        euint32 loanTerm = FHE.fromExternal(_loanTerm, inputProof);
        
        loanApplications[applicationId] = LoanApplication({
            applicationId: FHE.asEuint32(0), // Will be set properly later
            requestedAmount: requestedAmount,
            loanTerm: loanTerm,
            creditScore: borrowerCreditScore[msg.sender],
            isApproved: FHE.asEbool(false),
            isActive: FHE.asEbool(true),
            musicIPHash: _musicIPHash,
            applicantName: _applicantName,
            applicant: msg.sender,
            applicationTime: block.timestamp,
            expiryTime: block.timestamp + 30 days
        });
        
        emit LoanApplicationSubmitted(applicationId, msg.sender, _musicIPHash);
        return applicationId;
    }
    
    function approveLoanApplication(
        uint256 applicationId,
        address lender,
        externalEuint32 _interestRate,
        bytes calldata inputProof
    ) public {
        require(msg.sender == verifier, "Only verifier can approve loans");
        require(loanApplications[applicationId].applicant != address(0), "Application does not exist");
        require(block.timestamp <= loanApplications[applicationId].expiryTime, "Application has expired");
        
        // Convert external encrypted interest rate
        euint32 interestRate = FHE.fromExternal(_interestRate, inputProof);
        
        // Mark application as approved
        loanApplications[applicationId].isApproved = FHE.asEbool(true);
        
        // Create new loan
        uint256 loanId = loanCounter++;
        LoanApplication storage application = loanApplications[applicationId];
        
        loans[loanId] = Loan({
            loanId: FHE.asEuint32(0), // Will be set properly later
            principalAmount: application.requestedAmount,
            interestRate: interestRate,
            remainingBalance: application.requestedAmount,
            monthlyPayment: FHE.asEuint32(0), // Will be calculated off-chain
            isActive: FHE.asEbool(true),
            isDefaulted: FHE.asEbool(false),
            borrower: application.applicant,
            lender: lender,
            startTime: block.timestamp,
            nextPaymentDue: block.timestamp + 30 days
        });
        
        emit LoanApproved(applicationId, loanId, application.applicant);
        emit LoanCreated(loanId, application.applicant, lender);
    }
    
    function registerMusicIP(
        string memory _title,
        string memory _artist,
        string memory _ipfsHash,
        externalEuint32 _estimatedValue,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_artist).length > 0, "Artist cannot be empty");
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");
        
        uint256 ipId = ipCounter++;
        
        // Convert external encrypted estimated value
        euint32 estimatedValue = FHE.fromExternal(_estimatedValue, inputProof);
        
        musicIPs[ipId] = MusicIP({
            ipId: FHE.asEuint32(0), // Will be set properly later
            estimatedValue: estimatedValue,
            revenueGenerated: FHE.asEuint32(0),
            isVerified: FHE.asEbool(false),
            title: _title,
            artist: _artist,
            ipfsHash: _ipfsHash,
            owner: msg.sender,
            creationTime: block.timestamp
        });
        
        emit MusicIPRegistered(ipId, msg.sender, _title);
        return ipId;
    }
    
    function makeRepayment(
        uint256 loanId,
        externalEuint32 _amount,
        bytes calldata inputProof
    ) public {
        require(loans[loanId].borrower == msg.sender, "Only borrower can make repayments");
        require(loans[loanId].isActive, "Loan is not active");
        
        uint256 repaymentId = repaymentCounter++;
        
        // Convert external encrypted amount
        euint32 amount = FHE.fromExternal(_amount, inputProof);
        
        repayments[repaymentId] = Repayment({
            repaymentId: FHE.asEuint32(0), // Will be set properly later
            amount: amount,
            borrower: msg.sender,
            timestamp: block.timestamp
        });
        
        // Update loan balance
        loans[loanId].remainingBalance = FHE.sub(loans[loanId].remainingBalance, amount);
        
        // Check if loan is fully repaid
        ebool isFullyRepaid = FHE.le(loans[loanId].remainingBalance, FHE.asEuint32(0));
        if (FHE.decrypt(isFullyRepaid)) {
            loans[loanId].isActive = FHE.asEbool(false);
        }
        
        emit RepaymentMade(repaymentId, loanId, msg.sender);
    }
    
    function updateCreditScore(address borrower, euint32 newScore) public {
        require(msg.sender == verifier, "Only verifier can update credit scores");
        require(borrower != address(0), "Invalid borrower address");
        
        borrowerCreditScore[borrower] = newScore;
        emit CreditScoreUpdated(borrower, 0); // FHE.decrypt(newScore) - will be decrypted off-chain
    }
    
    function updateLenderReputation(address lender, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(lender != address(0), "Invalid lender address");
        
        lenderReputation[lender] = reputation;
    }
    
    function verifyMusicIP(uint256 ipId, ebool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify IP");
        require(musicIPs[ipId].owner != address(0), "IP does not exist");
        
        musicIPs[ipId].isVerified = isVerified;
    }
    
    function getLoanApplicationInfo(uint256 applicationId) public view returns (
        string memory musicIPHash,
        string memory applicantName,
        address applicant,
        uint8 requestedAmount,
        uint8 loanTerm,
        uint8 creditScore,
        bool isApproved,
        bool isActive,
        uint256 applicationTime,
        uint256 expiryTime
    ) {
        LoanApplication storage application = loanApplications[applicationId];
        return (
            application.musicIPHash,
            application.applicantName,
            application.applicant,
            0, // FHE.decrypt(application.requestedAmount) - will be decrypted off-chain
            0, // FHE.decrypt(application.loanTerm) - will be decrypted off-chain
            0, // FHE.decrypt(application.creditScore) - will be decrypted off-chain
            false, // FHE.decrypt(application.isApproved) - will be decrypted off-chain
            false, // FHE.decrypt(application.isActive) - will be decrypted off-chain
            application.applicationTime,
            application.expiryTime
        );
    }
    
    function getLoanInfo(uint256 loanId) public view returns (
        uint8 principalAmount,
        uint8 interestRate,
        uint8 remainingBalance,
        uint8 monthlyPayment,
        bool isActive,
        bool isDefaulted,
        address borrower,
        address lender,
        uint256 startTime,
        uint256 nextPaymentDue
    ) {
        Loan storage loan = loans[loanId];
        return (
            0, // FHE.decrypt(loan.principalAmount) - will be decrypted off-chain
            0, // FHE.decrypt(loan.interestRate) - will be decrypted off-chain
            0, // FHE.decrypt(loan.remainingBalance) - will be decrypted off-chain
            0, // FHE.decrypt(loan.monthlyPayment) - will be decrypted off-chain
            false, // FHE.decrypt(loan.isActive) - will be decrypted off-chain
            false, // FHE.decrypt(loan.isDefaulted) - will be decrypted off-chain
            loan.borrower,
            loan.lender,
            loan.startTime,
            loan.nextPaymentDue
        );
    }
    
    function getMusicIPInfo(uint256 ipId) public view returns (
        string memory title,
        string memory artist,
        string memory ipfsHash,
        uint8 estimatedValue,
        uint8 revenueGenerated,
        bool isVerified,
        address owner,
        uint256 creationTime
    ) {
        MusicIP storage ip = musicIPs[ipId];
        return (
            ip.title,
            ip.artist,
            ip.ipfsHash,
            0, // FHE.decrypt(ip.estimatedValue) - will be decrypted off-chain
            0, // FHE.decrypt(ip.revenueGenerated) - will be decrypted off-chain
            false, // FHE.decrypt(ip.isVerified) - will be decrypted off-chain
            ip.owner,
            ip.creationTime
        );
    }
    
    function getBorrowerCreditScore(address borrower) public view returns (uint8) {
        return 0; // FHE.decrypt(borrowerCreditScore[borrower]) - will be decrypted off-chain
    }
    
    function getLenderReputation(address lender) public view returns (uint8) {
        return 0; // FHE.decrypt(lenderReputation[lender]) - will be decrypted off-chain
    }
    
    // Secure fund withdrawal with encrypted amounts
    function withdrawFunds(uint256 loanId, euint32 encryptedAmount) public {
        require(loans[loanId].borrower == msg.sender, "Only borrower can withdraw");
        require(loans[loanId].isActive, "Loan must be active");
        
        // Encrypted fund withdrawal - amount remains private
        // The actual transfer amount is encrypted and verified off-chain
        loans[loanId].isActive = FHE.asEbool(false);
        
        // Emit encrypted withdrawal event for off-chain processing
        emit EncryptedWithdrawal(loanId, msg.sender, encryptedAmount);
    }
    
    // Process encrypted loan disbursement
    function processLoanDisbursement(uint256 loanId, euint32 encryptedAmount) public {
        require(msg.sender == verifier, "Only verifier can process disbursement");
        require(loans[loanId].isActive, "Loan must be active");
        
        // Update loan with encrypted disbursement amount
        loans[loanId].principalAmount = encryptedAmount;
        
        // Emit encrypted disbursement event
        emit EncryptedDisbursement(loanId, loans[loanId].borrower, encryptedAmount);
    }
    
    // Events for encrypted operations
    event EncryptedWithdrawal(uint256 indexed loanId, address indexed borrower, euint32 encryptedAmount);
    event EncryptedDisbursement(uint256 indexed loanId, address indexed borrower, euint32 encryptedAmount);
}
