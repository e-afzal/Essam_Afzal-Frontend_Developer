// GLOBAL STYLES
import "./globals.css";

// GENERAL META DATA
export const metadata = {
  title: "SpaceX - Dragon",
  description:
    "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
