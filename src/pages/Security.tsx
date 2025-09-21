import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Key, CheckCircle, AlertTriangle, FileText, Server } from "lucide-react";

const Security = () => {
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
                  Security
                </span>{" "}
                <span className="text-foreground">First</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Military-grade encryption and blockchain security protecting your music IP and financial data.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg glow-primary">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                    <p className="text-muted-foreground">
                      AES-256 encryption ensures your revenue forecasts and IP data remain confidential until loan conditions are met.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/20 rounded-lg glow-secondary">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zero-Knowledge Proofs</h3>
                    <p className="text-muted-foreground">
                      Verify revenue potential without exposing sensitive streaming data or financial information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/20 rounded-lg glow-accent">
                    <Key className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Signature Wallets</h3>
                    <p className="text-muted-foreground">
                      Institutional-grade custody with multi-party authorization for maximum security.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-studio-surface/30 backdrop-blur-md border-border/20">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-semibold mb-2">Security Status</h4>
                  <p className="text-muted-foreground">Real-time security monitoring</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-studio-medium/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Encryption Status</span>
                    </div>
                    <span className="text-green-500 font-semibold">Active</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-studio-medium/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Wallet Security</span>
                    </div>
                    <span className="text-green-500 font-semibold">Secured</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-studio-medium/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Eye className="h-5 w-5 text-primary" />
                      <span>Access Monitoring</span>
                    </div>
                    <span className="text-primary font-semibold">24/7</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="py-20 bg-studio-deep/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Compliance & Certifications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meeting the highest standards for financial and data security worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-muted-foreground">Security & availability controls</p>
              </Card>

              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">ISO 27001</h3>
                <p className="text-sm text-muted-foreground">Information security management</p>
              </Card>

              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Server className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">GDPR</h3>
                <p className="text-sm text-muted-foreground">Data protection compliance</p>
              </Card>

              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">PCI DSS</h3>
                <p className="text-sm text-muted-foreground">Payment card security</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Security Audit */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Independent Security Audits</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Our smart contracts and security infrastructure are regularly audited by leading cybersecurity firms.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">256-bit</div>
                  <div className="text-muted-foreground">AES Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-muted-foreground">Security Monitoring</div>
                </div>
              </div>

              <Button size="lg" className="glow-primary hover:animate-pulse-glow">
                View Security Report
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Security;