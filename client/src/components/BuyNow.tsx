import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { copyToClipboard } from "@/lib/utils";
import { paymentAddress, productPrice, originalPrice } from "@/lib/cryptoData";

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
    <section id="buy-now" className="py-16 px-6 md:px-10 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Ready to <span className="text-primary">Crush Pips?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the elite traders who are leveraging Araish to dominate the GBP/JPY market
          </p>
        </div>
        
        <Card className="bg-background p-6 md:p-10 max-w-3xl mx-auto">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Araish Pips Crasher</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="text-primary mr-3 pt-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Full Access to Trading Algorithm</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-3 pt-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Lifetime Updates & Improvements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-3 pt-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Step-by-Step Setup Guide</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-3 pt-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>24/7 Technical Support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mr-3 pt-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Private Community Access</span>
                  </li>
                </ul>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    ${productPrice} <small className="text-sm">USDT</small>
                  </span>
                  <span className="line-through text-muted-foreground">${originalPrice}</span>
                </div>
                <div className="bg-primary rounded-lg p-3 mb-4">
                  <p className="text-primary-foreground font-bold text-center">Limited Time Offer - 40% OFF</p>
                </div>
              </div>
              
              <div>
                <Card className="bg-secondary mb-6">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-base">USDT Payment Address:</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <div className="bg-background p-3 rounded font-mono text-sm break-all mb-3">
                      {paymentAddress}
                    </div>
                    <Button
                      onClick={handleCopyAddress}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
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
                  <h4 className="font-bold">After Payment:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Send payment confirmation to support@araishpipscrasher.com</li>
                    <li>Include your transaction ID and email address</li>
                    <li>Receive download link within 24 hours</li>
                    <li>Follow setup instructions to start trading</li>
                  </ol>
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
