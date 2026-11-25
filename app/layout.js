import "./globals.css";

export const metadata = {
  title: "Temps Next.js App",
  description: "A Next.js app deployed on Temps after a GitHub push",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
