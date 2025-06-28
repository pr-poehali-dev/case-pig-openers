import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  pigCoins: number;
}

const Header = ({ pigCoins }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center pig-coin-glow">
              <span className="text-2xl">🐷</span>
            </div>
            <h1 className="text-2xl font-oswald font-bold text-foreground">
              PIG<span className="text-primary">CASE</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary font-oswald"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary font-oswald"
            >
              Кейсы
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary font-oswald"
            >
              Инвентарь
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary font-oswald"
            >
              Профиль
            </Button>
          </nav>

          {/* Pig Coins Balance */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-military-dark px-4 py-2 rounded-lg border border-primary/20">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs animate-coin-flip">
                🐷
              </div>
              <span className="font-oswald font-bold text-primary">
                {pigCoins.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground">PC</span>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-oswald">
              <Icon name="Plus" size={16} className="mr-2" />
              Пополнить
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
