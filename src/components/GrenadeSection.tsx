import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const GrenadeSection = () => {
  const [isOpening, setIsOpening] = useState(false);

  const chances = [
    { range: "1-50₽", chance: 45, color: "cs2-blue" },
    { range: "51-100₽", chance: 25, color: "cs2-purple" },
    { range: "101-200₽", chance: 15, color: "cs2-pink" },
    { range: "201-350₽", chance: 10, color: "cs2-red" },
    { range: "351-500₽", chance: 5, color: "cs2-gold" },
  ];

  const handleOpenGrenade = () => {
    setIsOpening(true);
    setTimeout(() => setIsOpening(false), 2000);
  };

  return (
    <section className="py-16 bg-military-darker/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold mb-4">
              HE <span className="text-cs2-red">Гранаты</span>
            </h2>
            <p className="text-muted-foreground">
              100 рублей = 1 граната • Скины до 500₽ • Мгновенный результат
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Grenade Opening */}
            <Card className="border-cs2-red bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="font-oswald text-2xl text-cs2-red">
                  Открыть Гранату
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div
                  className={`text-8xl mb-6 ${isOpening ? "animate-spin" : ""}`}
                >
                  💣
                </div>

                <div className="space-y-4">
                  <div className="text-lg font-oswald">
                    <span className="text-primary">100</span> рублей =
                    <span className="text-cs2-red ml-2">1 граната</span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-cs2-red hover:bg-cs2-red/90 text-white font-oswald text-lg"
                    onClick={handleOpenGrenade}
                    disabled={isOpening}
                  >
                    {isOpening ? (
                      <>
                        <Icon
                          name="Loader"
                          size={20}
                          className="mr-2 animate-spin"
                        />
                        Взрыв...
                      </>
                    ) : (
                      <>
                        <Icon name="Bomb" size={20} className="mr-2" />
                        Купить и Открыть
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Chances */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-oswald text-xl">
                  Шансы выпадения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {chances.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-oswald text-${item.color}`}>
                        {item.range}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.chance}%
                      </span>
                    </div>
                    <Progress value={item.chance} className="h-2" />
                  </div>
                ))}

                <div className="mt-6 p-4 bg-military-dark rounded-lg border border-primary/20">
                  <div className="text-center">
                    <Icon
                      name="TrendingUp"
                      size={20}
                      className="mx-auto mb-2 text-primary"
                    />
                    <div className="text-sm text-muted-foreground">
                      Чем дороже скин, тем меньше шансов
                    </div>
                    <div className="text-xs text-primary mt-1">
                      Максимальный выигрыш: 500₽
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrenadeSection;
