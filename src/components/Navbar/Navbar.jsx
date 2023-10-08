import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
      nested: true,
      items: [
        {
          label: "Our Team",
          href: "/about/team",
        },
        {
          label: "Our Mission",
          href: "/about/mission",
        },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="dropdown-menu">
      <motion.button
        layout
        onClick={toggleMenu}
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="open-button"
      >
        Menu
      </motion.button>
      {isOpen && (
        <>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              staggerChildren: 0.1,
            }}
          >
            <ul>
              {menuItems.map((item, index) => (
                <motion.li key={index} layout>
                  <a href={item.href}>{item.label}</a>
                  {item.nested && (
                    <motion.ul layout>
                      {item.items.map((nestedItem, nestedIndex) => (
                        <motion.li key={nestedIndex} layout>
                          <a href={nestedItem.href}>{nestedItem.label}</a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.button
            layout
            onClick={toggleMenu}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="close-button"
          >
            Close
          </motion.button>
        </>
      )}
    </div>
  );
};

export default Navbar;
