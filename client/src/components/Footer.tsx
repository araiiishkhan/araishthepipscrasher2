import { Separator } from "@/components/ui/separator";
import { currentYear, quickLinks, supportLinks, legalLinks } from "@/lib/testimonials";

export function Footer() {
  return (
    <footer className="bg-secondary py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Araish</h3>
            <p className="text-muted-foreground mb-4">
              The ultimate GBP/JPY trading solution powered by advanced AI algorithms.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <i className="fab fa-discord"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-border/50" />
        
        <div className="text-center">
          <p className="text-muted-foreground text-sm max-w-4xl mx-auto">
            RISK DISCLAIMER: Trading forex and cryptocurrencies involves significant risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Past performance is not indicative of future results. Consider your experience level and financial objectives before trading.
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            &copy; {currentYear} Araish Pips Crasher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
