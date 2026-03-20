import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "light" | "dark";
}

// Dark logo for light backgrounds
const LOGO_DARK =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/logo-black-1.webp";
// Light logo for dark backgrounds
const LOGO_LIGHT =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/logo-white.webp";

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className,
  alt = "Ignite Logo",
  ...props
}) => {
  const src = variant === "light" ? LOGO_LIGHT : LOGO_DARK;

  return (
    <img
      src={src}
      alt={alt}
      className={twMerge(clsx("object-contain w-auto h-8", className))}
      {...props}
    />
  );
};
