import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import QuickActions from '@/components/QuickActions';
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = { metadataBase:new URL('https://irctc.eu.org') };
const jsonLd={"@context":"https://schema.org","@type":"WebSite","name":"IRCTC Satire"};
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang='en-IN'><head><script type='application/ld+json' dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></head><body className='font-sans flex flex-col min-h-screen'><Header/><main className='flex-1'>{children}</main><Footer/><BackToTop/><QuickActions/><Analytics/></body></html>)}