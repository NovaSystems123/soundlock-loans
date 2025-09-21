import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SoundWaveAnimation from "./SoundWaveAnimation";
import { Shield, BarChart3, Coins, Music, Database, Key } from "lucide-react";

const PlatformSection = () => {
  return (
    <section id="platform" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-electric bg-clip-text text-transparent">
              Secure Music
            </span>{" "}
            <span className="text-foreground">IP Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced blockchain technology meets music industry expertise. 
            Your creative assets, properly valued and securely financed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/20 rounded-lg glow-primary">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-muted-foreground">
                  Revenue forecasts encrypted with military-grade security until loan conditions are met.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary/20 rounded-lg glow-secondary">
                <BarChart3 className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analytics</h3>
                <p className="text-muted-foreground">
                  Machine learning algorithms analyze streaming patterns and market trends.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-accent/20 rounded-lg glow-accent">
                <Coins className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tokenized Assets</h3>
                <p className="text-muted-foreground">
                  Convert your music IP into tradeable digital assets with verified ownership.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Display */}
          <Card className="p-8 bg-studio-surface/30 backdrop-blur-md border-border/20">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-semibold mb-2">Live IP Valuation</h4>
              <p className="text-muted-foreground">Real-time streaming revenue analysis</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-studio-medium/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Music className="h-5 w-5 text-primary" />
                  <span>Track Portfolio</span>
                </div>
                <span className="text-accent font-semibold">$2.4M</span>
              </div>
              
              <div className="h-32 bg-studio-deep/50 rounded-lg p-4 flex items-end justify-center">
                <SoundWaveAnimation bars={24} className="h-full w-full" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-studio-medium/30 rounded">
                  <Database className="h-5 w-5 text-secondary mx-auto mb-1" />
                  <div className="text-sm text-muted-foreground">Encrypted Data</div>
                  <div className="font-semibold">47 Assets</div>
                </div>
                <div className="text-center p-3 bg-studio-medium/30 rounded">
                  <Key className="h-5 w-5 text-accent mx-auto mb-1" />
                  <div className="text-sm text-muted-foreground">Active Loans</div>
                  <div className="font-semibold">3 Running</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="glow-primary hover:animate-pulse-glow">
            Explore Platform Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;