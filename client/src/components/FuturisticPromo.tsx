import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/assets/images";

export function FuturisticPromo() {
  return (
    <section className="py-16 px-6 md:px-10 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              AI-Powered Trading <span className="text-primary">Revolution</span>
            </h2>
            <p className="text-xl mb-6 text-muted-foreground">
              Araish isn't just a trading system. It's an AI-driven companion that evolves with the market to consistently crush pips.
            </p>
            <div className="space-y-4 mb-6">
              <Card className="bg-gray-50 shadow-sm">
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg text-primary">Neural Network Analysis</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-muted-foreground">
                    Our proprietary neural network continuously learns from market data to refine entry and exit points.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 shadow-sm">
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg text-primary">Adaptive Algorithms</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-muted-foreground">
                    Market conditions change, and so does Araish. The system automatically adjusts to volatility and trend strength.
                  </p>
                </CardContent>
              </Card>
            </div>
            <a href="#buy-now">
              <Button className="bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground hover:opacity-90 px-8 py-6 text-lg h-auto">
                Experience the Future
              </Button>
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src={images.aiTrading}
              alt="Araish AI Trading"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FuturisticPromo;
