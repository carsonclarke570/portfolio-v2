import type { Metadata } from "next";
import { Open_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/app/theme-provider";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ['latin']
})

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Carson's Portfolio",
  description: "",
};

export default function RootLayout({
  section,
  profile
}: Readonly<{
  section: React.ReactNode,
  profile: React.ReactNode,
}>) {

  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${sourceSans.variable} antialiased bg-zinc-950 text-zinc-100 flex flex-col items-center xl:h-lvh`}
      >
        <ThemeProvider>
          <div className="xl:flex xl:flex-row w-full xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[600] px-2 sm:px-4 mt-4 sm:mt-12 xl:space-x-4 xl:space-y-0 space-y-4 md:mb-12 mb-20 xl:h-lvh xl:overflow-hidden">

            {/* Profile */}
            {/* <aside className="flex-none"> */}
            <div className="xl:flex-none xl:w-1/4 border h-fit rounded-xl border-zinc-700 bg-zinc-900">
              {profile}
            </div>


            {/* Section */}
            <div className="xl:overflow-y-scroll xl:relative w-full">

              <div className="xl:flex-1 border rounded-xl border-zinc-700 bg-zinc-900 ">
                {section}
              </div>

              <div className="xl:inline-block xl:sticky xl:bottom-0 xl:w-full xl:h-20 bg-linear-to-b from-transparent to-zinc-950 hidden" />
            </div>


          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
