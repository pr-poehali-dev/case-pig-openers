import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with embedded image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/bcc9667f-ceaa-4aff-94cc-ed6484bd4f45.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-military-darker via-military-dark/50 to-military-darker" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-oswald font-bold mb-6">
            <span className="text-foreground">PIG</span>
            <span className="text-primary">CASE</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 font-roboto">
            Открывай кейсы со свиньями и получай лучшие скины CS2!
            <br />
            Минимальный обмен 75% • HE гранаты • Апгрейд спина
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 font-oswald text-lg px-8 py-3"
            >
              <Icon name="Package" size={20} className="mr-2" />
              Открыть Кейс
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cs2-red text-cs2-red hover:bg-cs2-red hover:text-white font-oswald text-lg px-8 py-3"
            >
              <Icon name="Bomb" size={20} className="mr-2" />
              HE Граната
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-oswald font-bold text-primary">
                75%
              </div>
              <div className="text-sm text-muted-foreground">Мин. обмен</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-oswald font-bold text-cs2-gold">
                100₽
              </div>
              <div className="text-sm text-muted-foreground">За гранату</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-oswald font-bold text-cs2-purple">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-oswald font-bold text-cs2-pink">
                5000+
              </div>
              <div className="text-sm text-muted-foreground">Скинов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
