import { Separator } from "@/components/ui/separator";
import { currentYear, quickLinks, supportLinks, legalLinks } from "@/lib/testimonials";

export function Footer() {
  return (
    <footer className="bg-white py-10 px-6 md:px-10 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Araish</h3>
            <p className="text-muted-foreground mb-4">
              The ultimate GBP/JPY trading solution powered by advanced AI algorithms.
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:araiiishkhan@gmail.com" className="hover:text-primary">araiiishkhan@gmail.com</a>
              </p>
              <p className="text-sm text-muted-foreground flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+923005952613" className="hover:text-primary">+92 300 5952613</a>
              </p>
            </div>
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
