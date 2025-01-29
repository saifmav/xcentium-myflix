import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  href: string; // Add href prop
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ label, icon, href, variant = "primary" }) => {
  return (
    <Link
      href={href}
      className={`btn btn-${variant}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Button;
