import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishitha Jayadeva — Data Scientist",
  description:
    "Data Scientist turning messy, real-world data into dashboards and decisions. Portfolio of Rishitha Jayadeva — SQL, Python, Power BI, R.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
