import { useContract, useContractWrite, useContractRead } from 'wagmi';
import { useAccount } from 'wagmi';

// Contract ABI - this would be generated from the compiled contract
const SOUNDLOCK_ABI = [
  {
    "inputs": [
      {"name": "_verifier", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {"name": "_musicIPHash", "type": "string"},
      {"name": "_applicantName", "type": "string"},
      {"name": "_requestedAmount", "type": "bytes"},
      {"name": "_loanTerm", "type": "bytes"},
      {"name": "inputProof", "type": "bytes"}
    ],
    "name": "submitLoanApplication",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "applicationId", "type": "uint256"},
      {"name": "lender", "type": "address"},
      {"name": "_interestRate", "type": "bytes"},
      {"name": "inputProof", "type": "bytes"}
    ],
    "name": "approveLoanApplication",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "_title", "type": "string"},
      {"name": "_artist", "type": "string"},
      {"name": "_ipfsHash", "type": "string"},
      {"name": "_estimatedValue", "type": "bytes"},
      {"name": "inputProof", "type": "bytes"}
    ],
    "name": "registerMusicIP",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "loanId", "type": "uint256"},
      {"name": "_amount", "type": "bytes"},
      {"name": "inputProof", "type": "bytes"}
    ],
    "name": "makeRepayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "loanId", "type": "uint256"},
      {"name": "encryptedAmount", "type": "bytes"}
    ],
    "name": "withdrawFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "loanId", "type": "uint256"},
      {"name": "encryptedAmount", "type": "bytes"}
    ],
    "name": "processLoanDisbursement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000"; // Replace with actual deployed address

export function useSoundLockContract() {
  const { address } = useAccount();
  
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: SOUNDLOCK_ABI,
  });

  const submitLoanApplication = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: SOUNDLOCK_ABI,
    functionName: 'submitLoanApplication',
  });

  const registerMusicIP = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: SOUNDLOCK_ABI,
    functionName: 'registerMusicIP',
  });

  const makeRepayment = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: SOUNDLOCK_ABI,
    functionName: 'makeRepayment',
  });

  const withdrawFunds = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: SOUNDLOCK_ABI,
    functionName: 'withdrawFunds',
  });

  const processLoanDisbursement = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: SOUNDLOCK_ABI,
    functionName: 'processLoanDisbursement',
  });

  return {
    contract,
    submitLoanApplication,
    registerMusicIP,
    makeRepayment,
    withdrawFunds,
    processLoanDisbursement,
    isConnected: !!address,
  };
}
