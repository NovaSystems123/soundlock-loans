import headphonesImage from "@/assets/headphones.jpg";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const BinaryRain = () => {
  const binaryString = "1010110010101100110010101010110010101100110010101010110010101100110010101010110010101100110010101010110010101100110010101010110010101100110010101010110010101100110010101010110010101100110010101010110010101100110010101010110010101100110010101010110010101100110010101";
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="animate-binary text-electric-blue text-xs font-mono leading-3 whitespace-pre">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-2">
            {binaryString.slice(i * 10, (i + 1) * 10)}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative py-16 bg-studio-deep border-t border-border/20 overflow-hidden">
      <BinaryRain />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold bg-gradient-electric bg-clip-text text-transparent mb-4">
              SoundVault
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Revolutionizing music IP financing through encrypted revenue forecasting and blockchain technology.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">IP Valuation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Loan Calculator</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Token Management</a></li>
            </ul>
          </div>
          
          {/* Security Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Security</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Encryption Standards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Audit Reports</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Animated Headphones Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <img 
              src={headphonesImage} 
              alt="Glowing Headphones with Binary Code" 
              className="h-24 w-auto mx-auto rounded-lg animate-glow-rotate"
            />
            <div className="absolute inset-0 bg-gradient-electric opacity-20 rounded-lg animate-pulse-glow" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Secure • Encrypted • Decentralized
          </p>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SoundVault. All rights reserved. Music IP financing platform.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;