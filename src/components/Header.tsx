import { Button } from "@/components/ui/button";
import { WalletConnect } from "@/components/WalletConnect";
import logoImage from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="relative z-50 border-b border-border/20 bg-studio-medium/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="Music IP Financing" 
            className="h-8 w-8 animate-glow-rotate"
          />
          <h1 className="text-xl font-bold bg-gradient-electric bg-clip-text text-transparent">
            SoundVault
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/platform" className="text-muted-foreground hover:text-primary transition-colors">
            Platform
          </a>
          <a href="/security" className="text-muted-foreground hover:text-primary transition-colors">
            Security
          </a>
          <a href="/loans" className="text-muted-foreground hover:text-primary transition-colors">
            Loans
          </a>
          <a href="/analytics" className="text-muted-foreground hover:text-primary transition-colors">
            Analytics
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden sm:flex">
            Dashboard
          </Button>
          <WalletConnect />
        </div>
      </div>
    </header>
  );
};

export default Header;