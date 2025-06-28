import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CaseItem {
  id: number;
  name: string;
  price: number;
  image: string;
  rarityColor: string;
  featured?: boolean;
}

const FeaturedCases = () => {
  const cases: CaseItem[] = [
    {
      id: 1,
      name: "Свиной Элитный Кейс",
      price: 299,
      image: "🐷",
      rarityColor: "cs2-gold",
      featured: true,
    },
    {
      id: 2,
      name: "Military Pig Case",
      price: 199,
      image: "🥓",
      rarityColor: "cs2-red",
    },
    {
      id: 3,
      name: "Bacon Legends",
      price: 149,
      image: "🐽",
      rarityColor: "cs2-pink",
    },
    {
      id: 4,
      name: "Pig Warfare",
      price: 99,
      image: "🐖",
      rarityColor: "cs2-purple",
    },
    {
      id: 5,
      name: "Oink Strike",
      price: 49,
      image: "🥩",
      rarityColor: "cs2-blue",
    },
  ];

  const getRarityBorder = (color: string) => {
    switch (color) {
      case "cs2-gold":
        return "border-cs2-gold";
      case "cs2-red":
        return "border-cs2-red";
      case "cs2-pink":
        return "border-cs2-pink";
      case "cs2-purple":
        return "border-cs2-purple";
      case "cs2-blue":
        return "border-cs2-blue";
      default:
        return "border-muted";
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-oswald font-bold mb-4">
            Популярные <span className="text-primary">Кейсы</span>
          </h2>
          <p className="text-muted-foreground">
            Открывай кейсы и получай лучшие скины CS2!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cases.map((caseItem) => (
            <Card
              key={caseItem.id}
              className={`case-glow border-2 ${getRarityBorder(caseItem.rarityColor)} bg-card/80 backdrop-blur-sm hover:bg-card ${caseItem.featured ? "ring-2 ring-primary" : ""}`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">{caseItem.image}</div>

                <h3 className="font-oswald font-bold text-lg mb-2">
                  {caseItem.name}
                </h3>

                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-xs">
                    🐷
                  </div>
                  <span className="font-bold text-primary">
                    {caseItem.price}
                  </span>
                  <span className="text-xs text-muted-foreground">PC</span>
                </div>

                <Button
                  className="w-full bg-military-dark hover:bg-military-darker border border-primary/20 font-oswald"
                  variant="outline"
                >
                  Открыть
                </Button>

                {caseItem.featured && (
                  <div className="mt-2">
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded font-bold">
                      ХИТ!
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCases;
