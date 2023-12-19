import Link from "next/link";
import { footerImgLink } from "../_utils";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img src="images/logo.svg" alt="logo" className="scale-50" />
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    FAQs
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    Press Kit
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    Install Guide
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-32 py-1">
              {footerImgLink.map(({ src, alt }) => (
                <Link href="#" key={src}>
                  <img src={src} alt={alt} className="ficon duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
