import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { productBenefits, productPrice, originalPrice, discountPercentage } from "@/lib/cryptoData";
import { images } from "@/assets/images";

export function ProductShowcase() {
  return (
    <section id="pricing" className="py-16 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={images.productBox}
              alt="Araish Product Box"
              className="rounded-lg shadow-2xl w-3/4 mx-auto floating"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              The Ultimate <span className="text-primary">GBP/JPY</span> Trading System
            </h2>
            <div className="space-y-4 mb-8">
              {productBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary mr-3 pt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-5 mb-8">
              <span className="text-4xl font-bold text-primary">
                ${productPrice} <small className="text-sm">USDT</small>
              </span>
              <span className="line-through text-muted-foreground text-xl">${originalPrice}</span>
              <span className="bg-[#0ECB81] text-primary-foreground px-3 py-1 rounded text-sm font-bold">
                {discountPercentage}% OFF
              </span>
            </div>
            <a href="#buy-now">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-7 text-lg h-auto"
              >
                Buy Now and Start Profiting
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;