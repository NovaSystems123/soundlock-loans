import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSoundLockContract } from "@/hooks/useContract";
import { useAccount } from "wagmi";
import { useState } from "react";
import { DollarSign, TrendingUp, Clock, Calculator, CheckCircle, Users, Music, BarChart3 } from "lucide-react";

const Loans = () => {
  const { isConnected } = useAccount();
  const { submitLoanApplication, registerMusicIP } = useSoundLockContract();
  const [loanForm, setLoanForm] = useState({
    musicIPHash: '',
    applicantName: '',
    requestedAmount: '',
    loanTerm: ''
  });

  const handleLoanApplication = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    try {
      // In a real implementation, you would encrypt the values using FHE
      // For now, we'll use placeholder encrypted values
      const encryptedAmount = new Uint8Array(32); // Placeholder
      const encryptedTerm = new Uint8Array(32); // Placeholder
      const inputProof = new Uint8Array(64); // Placeholder

      await submitLoanApplication.writeAsync({
        args: [
          loanForm.musicIPHash,
          loanForm.applicantName,
          encryptedAmount,
          encryptedTerm,
          inputProof
        ]
      });
    } catch (error) {
      console.error('Error submitting loan application:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-electric bg-clip-text text-transparent">
                  IP-Backed
                </span>{" "}
                <span className="text-foreground">Loans</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Unlock the value of your music catalog with confidential revenue-based financing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Loan Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg glow-primary">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
                    <p className="text-muted-foreground">
                      Access capital at rates as low as 3.5% APR based on your streaming revenue history and projections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/20 rounded-lg glow-secondary">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Approval</h3>
                    <p className="text-muted-foreground">
                      AI-powered underwriting provides loan decisions within 24 hours, not weeks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/20 rounded-lg glow-accent">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Revenue-Based Repayment</h3>
                    <p className="text-muted-foreground">
                      Flexible repayment terms tied to your actual streaming revenue performance.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-studio-surface/30 backdrop-blur-md border-border/20">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-semibold mb-2">Loan Calculator</h4>
                  <p className="text-muted-foreground">Estimate your loan potential</p>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-studio-medium/50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Monthly Streams</span>
                      <span className="font-semibold">2.4M</span>
                    </div>
                    <div className="w-full bg-studio-deep/50 rounded-full h-2">
                      <div className="bg-gradient-electric h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-studio-medium/50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Estimated Loan Amount</span>
                    </div>
                    <div className="text-3xl font-bold text-accent">$450,000</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-studio-medium/30 rounded">
                      <div className="text-sm text-muted-foreground">Interest Rate</div>
                      <div className="font-semibold text-primary">4.2% APR</div>
                    </div>
                    <div className="text-center p-3 bg-studio-medium/30 rounded">
                      <div className="text-sm text-muted-foreground">Term</div>
                      <div className="font-semibold text-secondary">36 months</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-20 bg-studio-deep/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Loan Products</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored financing solutions for every stage of your music career.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Catalog Advance</h3>
                <div className="text-3xl font-bold text-primary mb-2">$10K - $1M</div>
                <p className="text-muted-foreground mb-6">
                  Leverage your existing catalog for immediate capital.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">6-36 month terms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">No personal guarantees</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Revenue-based repayment</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </Card>

              <Card className="p-8 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center border-primary">
                <BarChart3 className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Growth Capital</h3>
                <div className="text-3xl font-bold text-secondary mb-2">$50K - $5M</div>
                <p className="text-muted-foreground mb-6">
                  Fund marketing, tours, and new releases.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">12-48 month terms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Future royalty sharing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Performance milestones</span>
                  </li>
                </ul>
                <Button className="w-full glow-secondary">Apply Now</Button>
              </Card>

              <Card className="p-8 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Label Credit Line</h3>
                <div className="text-3xl font-bold text-accent mb-2">$500K - $50M</div>
                <p className="text-muted-foreground mb-6">
                  Institutional-grade financing for record labels.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Revolving credit facility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Portfolio-based underwriting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Custom terms</span>
                  </li>
                </ul>
                <Button className="w-full">Contact Sales</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Simple Application Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get funded in 4 easy steps with our streamlined digital process.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Connect Accounts</h3>
                <p className="text-sm text-muted-foreground">
                  Link your streaming platforms and bank accounts
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-secondary">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your revenue patterns
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-accent">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Decision</h3>
                <p className="text-sm text-muted-foreground">
                  Get approved within 24 hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Receive Funds</h3>
                <p className="text-sm text-muted-foreground">
                  Capital delivered to your account
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="glow-primary hover:animate-pulse-glow">
                Start Application
              </Button>
            </div>
          </div>
        </section>

        {/* Loan Application Form */}
        <section className="py-20 bg-studio-deep/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Apply for a Loan</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Submit your music IP information to get started with your loan application.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="p-8 bg-studio-surface/30 backdrop-blur-md border-border/20">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="musicIPHash">Music IP Hash</Label>
                    <Input
                      id="musicIPHash"
                      placeholder="Enter your music IP hash"
                      value={loanForm.musicIPHash}
                      onChange={(e) => setLoanForm({...loanForm, musicIPHash: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="applicantName">Applicant Name</Label>
                    <Input
                      id="applicantName"
                      placeholder="Enter your name"
                      value={loanForm.applicantName}
                      onChange={(e) => setLoanForm({...loanForm, applicantName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="requestedAmount">Requested Amount (USD)</Label>
                    <Input
                      id="requestedAmount"
                      type="number"
                      placeholder="Enter loan amount"
                      value={loanForm.requestedAmount}
                      onChange={(e) => setLoanForm({...loanForm, requestedAmount: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="loanTerm">Loan Term (months)</Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      placeholder="Enter loan term in months"
                      value={loanForm.loanTerm}
                      onChange={(e) => setLoanForm({...loanForm, loanTerm: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleLoanApplication}
                    disabled={!isConnected}
                    className="w-full glow-primary hover:animate-pulse-glow"
                  >
                    {isConnected ? 'Submit Loan Application' : 'Connect Wallet to Apply'}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Loans;