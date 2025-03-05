import './globals.css';
import { ThemeProvider } from "@/theme/theme-provider";
import React from "react";
import DevDaphSidebar from "@/components/page-components/sidebar";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
        <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        {/*<ThemeProvider>*/}
            <div className="flex flex-row min-h-screen">
                <DevDaphSidebar />
                <main className="flex-1 ml-0 md:ml-64 p-4">
                    {children}
                </main>
            </div>
        {/*</ThemeProvider>*/}
        </body>
        </html>
    );
}
