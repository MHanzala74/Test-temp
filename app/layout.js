import "./globals.css";
import { TempsAnalyticsProvider } from "@temps-sdk/react-analytics";

export const metadata = {
  title: "Temps Next.js App",
  description: "A Next.js app deployed on Temps after a GitHub push",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TempsAnalyticsProvider basePath="/api/_temps">
          {children}
        </TempsAnalyticsProvider>
      </body>
    </html>
  );
}
