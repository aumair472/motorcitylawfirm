import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LegalSchemas } from "@/components/legal-schemas";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCallBar } from "@/components/sticky-call-bar";
import { legalServiceSchema, localBusinessSchema } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motorcitylawfirm.com"),
  title: {
    default: "Motor City Law Firm | Criminal Defense Lawyer Michigan",
    template: "%s | Motor City Law Firm",
  },
  description:
    "Motor City Law Firm defends people charged with DUI, drug crimes, assault, and theft across Detroit and Michigan with immediate, strategic criminal defense.",
  openGraph: {
    title: "Motor City Law Firm | Criminal Defense Lawyer Michigan",
    description:
      "Urgent, high-trust criminal defense representation for people charged in Michigan.",
    url: "https://motorcitylawfirm.com",
    siteName: "Motor City Law Firm",
    type: "website",
  },
  alternates: {
    canonical: "https://motorcitylawfirm.com",
  },
  icons: {
    icon: "/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="text-slate-950 antialiased" suppressHydrationWarning>
        <LegalSchemas schemas={[localBusinessSchema, legalServiceSchema]} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyCallBar />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
