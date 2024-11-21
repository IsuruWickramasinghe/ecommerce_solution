import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
    { label: 'Home', dropdown: [] },
    { label: 'Pages', dropdown: ['About', 'Team', 'Prices', 'Offers', 'Our Works'] },
    { label: 'Services', dropdown: ['Service 1', 'Service 2', 'Service 3'] },
    { label: 'Shop', dropdown: ['Product 1', 'Product 2', 'Product 3'] },
    { label: 'Blogs', dropdown: ['Blog 1', 'Blog 2', 'Blog 3'] },
];


const NavPages = () => {

    return (
        <div className="flex  gap-6  uppercase font-chakraPetch">
          <FlyoutLink href="#" FlyoutContent={PricingContent}>
            Pricing
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={PricingContent}>
             pages
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={PricingContent}>
            Pricing
          </FlyoutLink>
        </div>
      );
    };

    const FlyoutLink = ({ children, href, FlyoutContent }) => {
        const [open, setOpen] = useState(false);
      
        const showFlyout = FlyoutContent && open;
      
        return (
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
          >
            <a href={href} className="relative text-white">
              {children}
              <span
                style={{
                  transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                }}
                className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
              />
            </a>
            <AnimatePresence>
              {showFlyout && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  style={{ translateX: "-50%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-[100px] top-12 bg-white text-black"
                >
                  <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                  {/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" /> */}
                  <FlyoutContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      };
      const PricingContent = () => {
  return (
    <div className="w-[200px] bg-[#161616] py-4 shadow-xl border-2 border-white">
      <div className="mb-3 space-y-6 text-[#ededed] text-[15px] font-[700] uppercase font-chakraPetch">
        <ul>
            <a href="/about"><li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">About</li></a>
            <a href="/team"><li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">Team</li></a>
            <a href="/prices"><li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">Prices</li></a>
            <li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">Offers</li>
            <li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">Our Works</li>
            <li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">promotion details</li>
            <li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">faq</li>
            <li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">404</li>
            <li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">contact</li>
            <li className="border-b-[1px] pl-4 pb-2 border-[#343a40] border-solid ">landing</li>
        </ul>
      
      </div>
    </div>
  );
};

export default NavPages;