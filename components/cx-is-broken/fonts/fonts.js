import localFont from "next/font/local";

const unbounded = localFont({
  src: "./unbounded-var.woff2",
  variable: "--font-unbounded",
  display: "swap",
  weight: "400 900",
  style: "normal",
});

const hankenGrotesk = localFont({
  src: "./hanken-grotesk-var.woff2",
  variable: "--font-hanken",
  display: "swap",
  weight: "400 700",
  style: "normal",
});

const jetbrainsMono = localFont({
  src: "./jetbrains-mono-var.woff2",
  variable: "--font-jetbrains",
  display: "swap",
  weight: "400 700",
  style: "normal",
});

export const fontVariables = `${unbounded.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`;
