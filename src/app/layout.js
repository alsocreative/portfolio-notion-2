import "./globals.css";

export const metadata = {
  title: "John Doe - Developer Portfolio",
  description: "Full Stack Developer specializing in React, Node.js, and modern web technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
