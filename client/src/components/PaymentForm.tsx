import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Copy, Loader2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { copyToClipboard } from "@/lib/utils";
import { paymentAddress, productPrice } from "@/lib/cryptoData";

export function PaymentForm() {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

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

  const handleVerifyPayment = () => {
    if (!transactionHash.trim()) {
      toast({
        title: "Missing information",
        description: "Please enter your transaction hash.",
        variant: "destructive",
      });
      return;
    }

    // Basic TRON transaction hash validation
    const tronHashRegex = /^[0-9a-fA-F]{64}$/;
    if (!tronHashRegex.test(transactionHash)) {
      toast({
        title: "Invalid transaction hash",
        description: "Please enter a valid TRON transaction hash.",
        variant: "destructive",
      });
      return;
    }
    
    setVerificationStatus("verifying");
    
    // Verify transaction - simulated for now
    // In production, this should make an API call to verify:
    // 1. Transaction exists on TRON network
    // 2. Transaction amount matches required payment
    // 3. Transaction recipient matches our wallet
    // 4. Transaction is confirmed
    setTimeout(() => {
      setVerificationStatus("error");
      toast({
        title: "Verification failed",
        description: "Transaction not found or invalid. Please ensure you've sent the correct amount to the correct address.",
        variant: "destructive",
      });
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
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
            disabled={verificationStatus === "verifying" || verificationStatus === "success"}
          />
          
          {verificationStatus === "idle" && (
            <Button
              className="brand-button text-white w-full"
              onClick={handleVerifyPayment}
            >
              Verify Transaction
            </Button>
          )}
          
          {verificationStatus === "verifying" && (
            <Button disabled className="w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </Button>
          )}
          
          {verificationStatus === "error" && (
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => setVerificationStatus("idle")}
            >
              Try Again
            </Button>
          )}
          
          {verificationStatus === "success" && (
            <div className="space-y-4">
              <div className="bg-green-50 text-green-700 rounded-lg p-3 text-sm border border-green-200">
                Payment verified successfully! Please enter your email to receive your download link.
              </div>
              
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
              
              <Button
                className="brand-button text-white w-full"
                onClick={() => {
                  if (!email.trim()) {
                    toast({
                      title: "Email required",
                      description: "Please enter your email to receive the download link.",
                      variant: "destructive",
                    });
                    return;
                  }
                  
                  window.location.href = "https://drive.google.com/file/d/1P6Z_De5HEabK3cBwPjidx7DVpCtS17w8/view?usp=drive_link";
                  toast({
                    title: "Download started!",
                    description: "Your download should begin shortly in a new tab.",
                  });
                }}
              >
                Send Download Link <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;