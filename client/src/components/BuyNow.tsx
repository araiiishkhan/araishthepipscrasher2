import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy, CheckCircle, ArrowRight, Loader2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { copyToClipboard } from "@/lib/utils";
import { paymentAddress, productPrice, originalPrice } from "@/lib/cryptoData";
import { images } from "@/assets/images";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BuyNow() {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");

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
  
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setVerificationStatus("idle");
    setTransactionHash("");
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  
  const handleVerifyPayment = () => {
    if (!transactionHash.trim()) {
      toast({
        title: "Missing information",
        description: "Please enter your transaction hash.",
        variant: "destructive",
      });
      return;
    }
    
    setVerificationStatus("verifying");
    
    // Simulate verification process
    setTimeout(() => {
      // In a real application, this would be an API call to verify the transaction
      // For demo purposes, we're simulating success after a short delay
      
      if (transactionHash.length < 10) {
        setVerificationStatus("error");
        toast({
          title: "Verification failed",
          description: "We couldn't verify your transaction. Please make sure you entered the correct transaction hash.",
          variant: "destructive",
        });
      } else {
        setVerificationStatus("success");
        toast({
          title: "Payment verified!",
          description: "Your payment has been successfully verified. You can now download Araish Pips Crasher.",
        });
      }
    }, 2000);
  };
  
  const handleDownload = () => {
    // In a real application, this would trigger the actual download
    // or redirect to a download page
    toast({
      title: "Download started",
      description: "Your download should begin shortly. If it doesn't, please contact support.",
    });
    
    // Close the dialog after download is initiated
    setIsDialogOpen(false);
  };

  return (
    <section id="buy-now" className="py-16 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Buy and <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">Download Now</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the elite traders who are leveraging Araish to dominate the GBP/JPY market
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Product Info Column */}
          <div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6 relative">
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
                <span className="text-3xl font-bold text-primary" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>
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
              
              <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-lg mb-6">
                <div className="bg-primary/10 rounded-full p-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs">Secured transaction with 24/7 support. Once payment is confirmed, you'll receive instant download access.</p>
              </div>
              
              <Button
                className="brand-button text-white rounded-full w-full py-5"
                onClick={handleOpenDialog}
              >
                Verify Payment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Payment Column */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 text-center">
              <h3 className="text-xl font-bold">Secure Crypto Payment</h3>
              <p className="text-sm opacity-90">Complete your purchase using USDT on the TRON blockchain</p>
            </div>
            
            <div className="p-6 bg-white">
              <div className="flex justify-center mb-6">
                <div className="bg-white p-2 rounded-md border border-gray-200 inline-block">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TFJt7YsWUKb3To8UfBmx55ZWpUMoDdRvAo" 
                    alt="USDT TRC20 Payment QR Code" 
                    className="w-36 h-36"
                  />
                </div>
              </div>
              
              <p className="text-center text-sm mb-3">Send exactly ${productPrice} worth of USDT to this address:</p>
              
              <div className="relative mb-4">
                <div className="bg-gray-50 p-3 rounded-lg font-mono text-xs break-all border border-gray-200">
                  {paymentAddress}
                </div>
                <Button 
                  onClick={handleCopyAddress} 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-base mb-2">Verify Your Transaction</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  After sending your payment, enter the transaction hash (TXID) from TRON blockchain to verify.
                </p>
                
                <Input
                  placeholder="Enter transaction hash (TXID)"
                  value={transactionHash}
                  onChange={(e) => setTransactionHash(e.target.value)}
                  className="mb-4"
                />
                
                <Button
                  className="brand-button text-white w-full"
                  onClick={handleOpenDialog}
                >
                  Verify Transaction
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Verification Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Verify Your Payment</DialogTitle>
            <DialogDescription>
              Enter your transaction hash to verify your payment and download Araish Pips Crasher.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="tx-hash">Transaction Hash</Label>
              <Input
                id="tx-hash"
                value={transactionHash}
                onChange={(e) => setTransactionHash(e.target.value)}
                placeholder="e.g., 3a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u"
                disabled={verificationStatus === "verifying" || verificationStatus === "success"}
              />
              <p className="text-xs text-muted-foreground">
                Enter the transaction hash/ID from your USDT payment
              </p>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            {verificationStatus === "idle" && (
              <Button
                type="button"
                variant="default"
                className="w-full sm:w-auto brand-button"
                onClick={handleVerifyPayment}
              >
                Verify Payment
              </Button>
            )}
            
            {verificationStatus === "verifying" && (
              <Button disabled className="w-full sm:w-auto">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </Button>
            )}
            
            {verificationStatus === "error" && (
              <Button
                type="button"
                variant="destructive"
                className="w-full sm:w-auto"
                onClick={() => setVerificationStatus("idle")}
              >
                Try Again
              </Button>
            )}
            
            {verificationStatus === "success" && (
              <Button
                type="button"
                variant="default"
                className="w-full sm:w-auto brand-button"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Now
              </Button>
            )}
            
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={handleCloseDialog}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default BuyNow;
