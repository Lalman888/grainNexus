import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Headernav from "@/components/Header";
import {Karla, Montserrat} from "@next/font/google"
import Footer from '@/components/Footer';

const karla =Karla({ subsets: ['latin'], weight: ['400','700'] })

export const metadata: Metadata = {
  title: 'GrainNexus',
  description: 'Generated by YL Group',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className}>
   
        {children}
    
      </body>
    </html>
  );
}
