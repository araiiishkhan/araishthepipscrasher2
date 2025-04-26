import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { copyToClipboard } from "@/lib/utils";
import { paymentAddress, productPrice, originalPrice } from "@/lib/cryptoData";
import { images } from "@/assets/images";

export function BuyNow() {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await copyToClipboard(paymentAddress);
      setIsCopied(true);
      toast({
        title: "Address copied!",
        description: "The payment address has been copied to your clipboard.",
      });
      
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please select and copy the address manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="buy-now" className="py-16 px-6 md:px-10 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Buy and <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">Download Now</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the elite traders who are leveraging Araish to dominate the GBP/JPY market
          </p>
        </div>
        
        <Card className="bg-white shadow-xl rounded-xl p-6 md:p-8 max-w-4xl mx-auto border-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-muted/30 rounded-xl p-6 mb-6 relative">
                  <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    LIMITED OFFER
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={images.productBox} alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Araish Pips Crasher</h3>
                      <p className="text-sm text-muted-foreground">Professional GBP/JPY Trading System</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 items-center mb-4">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                      ${productPrice}
                    </span>
                    <span className="text-sm">USDT</span>
                    <span className="ml-2 line-through text-muted-foreground text-sm">${originalPrice}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {[
                      "Full Access to Trading Algorithm", 
                      "Lifetime Updates & Improvements", 
                      "Step-by-Step Setup Guide", 
                      "24/7 Technical Support", 
                      "Private Community Access"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="text-primary mt-1">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="brand-button text-white rounded-full w-full py-5"
                  >
                    Purchase Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col h-full justify-between">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4">Payment Information</h3>
                  <Card className="bg-muted/30 border-0 mb-6">
                    <CardContent className="p-4">
                      <p className="text-sm mb-2 font-medium">USDT Payment Address (TRC20):</p>
                      <div className="bg-white p-3 rounded-lg font-mono text-xs break-all mb-3 border border-border">
                        {paymentAddress}
                      </div>
                      <Button
                        onClick={handleCopyAddress}
                        className="w-full brand-button text-white"
                        variant="default"
                      >
                        {isCopied ? (
                          <>
                            <Check className="mr-2 h-4 w-4" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2 h-4 w-4" /> Copy Address
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm">After Payment:</h4>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <ol className="list-decimal pl-4 space-y-2 text-sm">
                        <li>Send payment confirmation to <span className="font-medium">support@araishpipscrasher.com</span></li>
                        <li>Include your transaction ID and email address</li>
                        <li>Receive download link within 24 hours</li>
                        <li>Follow setup instructions to start trading</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-lg">
                  <div className="bg-primary/10 rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs">Secured transaction with 24/7 support. Once payment is confirmed, you'll receive your download link.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default BuyNow;
