import React from "react";
import "./Button.css";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  ariaLabel?: string;

  color?: "default" | "black" | "white";

  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  label,
  ariaLabel,
  color,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{
        scale: 0.98,
      }}
      aria-label={ariaLabel}
      className={`btn ${
        disabled === true
          ? "btn__disabled"
          : color == "black"
          ? "btn__black"
          : color == "white"
          ? "btn__white"
          : "btn__default"
      } `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </motion.button>
  );
}
