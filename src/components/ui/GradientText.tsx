import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  style?: React.CSSProperties;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  style = {},
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
  };

  return (
    <span
      className={`inline-block text-transparent bg-clip-text ${className}`}
      style={{ ...gradientStyle, ...style }}
    >
      {children}
    </span>
  );
}
