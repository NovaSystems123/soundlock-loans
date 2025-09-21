import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformSection from "@/components/PlatformSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, Coins, Music, Database, Key, Zap, Users, Globe } from "lucide-react";

const Platform = () => {
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
                  Platform
                </span>{" "}
                <span className="text-foreground">Overview</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete blockchain infrastructure for music IP financing, built with enterprise-grade security and AI-powered analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <PlatformSection />

        {/* Technical Architecture */}
        <section className="py-20 bg-studio-deep/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Technical Architecture</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built on cutting-edge blockchain technology with scalable microservices architecture.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20">
                <div className="p-3 bg-primary/20 rounded-lg glow-primary w-fit mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">High Performance</h3>
                <p className="text-muted-foreground">
                  Process thousands of transactions per second with sub-second finality.
                </p>
              </Card>

              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20">
                <div className="p-3 bg-secondary/20 rounded-lg glow-secondary w-fit mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Party Support</h3>
                <p className="text-muted-foreground">
                  Seamless collaboration between artists, labels, and financial institutions.
                </p>
              </Card>

              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20">
                <div className="p-3 bg-accent/20 rounded-lg glow-accent w-fit mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Access</h3>
                <p className="text-muted-foreground">
                  Available worldwide with regulatory compliance across major markets.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Integration Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Integration Options</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with your existing tools and streaming platforms seamlessly.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Streaming Platform APIs</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-studio-medium/30 rounded-lg">
                    <Music className="h-5 w-5 text-primary" />
                    <span>Spotify for Artists</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-studio-medium/30 rounded-lg">
                    <Music className="h-5 w-5 text-secondary" />
                    <span>Apple Music for Artists</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-studio-medium/30 rounded-lg">
                    <Music className="h-5 w-5 text-accent" />
                    <span>YouTube Music Analytics</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Financial Integrations</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-studio-medium/30 rounded-lg">
                    <Database className="h-5 w-5 text-primary" />
                    <span>Banking APIs</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-studio-medium/30 rounded-lg">
                    <Key className="h-5 w-5 text-secondary" />
                    <span>KYC/AML Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-studio-medium/30 rounded-lg">
                    <Shield className="h-5 w-5 text-accent" />
                    <span>Institutional Custody</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="glow-primary hover:animate-pulse-glow">
                Start Integration
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;