import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navigation.css";

const navItems = [
  { label: "Chat", path: "/" },
  { label: "About", path: "/about" },
];

export default function Navigation() {
  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <motion.div
          whileHover={{ scale: 1.1, color: "#4951ed" }}
          key={item.label}
          className="nav-link-wrapper"
        >
          <NavLink
            to={item.path}
            className="nav-link"
            activeclassname="active"
            exact={item.path === "/"}
          >
            {item.label}
          </NavLink>
        </motion.div>
      ))}
    </nav>
  );
}
