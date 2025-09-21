import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SoundWaveAnimation from "./SoundWaveAnimation";
import studioImage from "@/assets/studio-hero.jpg";
import { Lock, TrendingUp, Wallet } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${studioImage})` }}
      >
        <div className="absolute inset-0 bg-studio-deep/60 backdrop-blur-[1px]" />
      </div>
      
      {/* Floating Sound Waves */}
      <div className="absolute top-20 left-10 opacity-30">
        <SoundWaveAnimation bars={8} className="h-32" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <SoundWaveAnimation bars={12} encrypted className="h-24" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-electric bg-clip-text text-transparent">
              Confidential
            </span>
            <br />
            <span className="text-foreground">IP-Backed</span>
            <br />
            <span className="bg-gradient-sound bg-clip-text text-transparent">
              Loans
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Unlock the value of your music IP with encrypted streaming revenue forecasts. 
            Secure financing backed by your creative assets.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="glow-primary hover:animate-pulse-glow text-lg px-8 py-6">
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              View Demo
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-studio-surface/50 backdrop-blur-md border-border/30 hover:bg-studio-surface/70 transition-all duration-300">
              <Lock className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Encrypted Forecasts</h3>
              <p className="text-muted-foreground text-sm">
                Revenue predictions secured until loan repayment
              </p>
            </Card>
            
            <Card className="p-6 bg-studio-surface/50 backdrop-blur-md border-border/30 hover:bg-studio-surface/70 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">IP Valuation</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered streaming analytics and market assessment
              </p>
            </Card>
            
            <Card className="p-6 bg-studio-surface/50 backdrop-blur-md border-border/30 hover:bg-studio-surface/70 transition-all duration-300">
              <Wallet className="h-12 w-12 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Token Claims</h3>
              <p className="text-muted-foreground text-sm">
                Decentralized ownership and automated repayments
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Central Sound Wave Display */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <SoundWaveAnimation bars={30} className="h-20 w-80" />
      </div>
    </section>
  );
};

export default HeroSection;