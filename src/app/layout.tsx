import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ana Vitória Melo | Desenvolvedora Front-End",
  description:
    "Portfólio de Ana Vitória Melo, estudante de Engenharia de Software com foco em cibersegurança e desenvolvimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
