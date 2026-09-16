/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import DemoPreview from "./components/demoPreview";

const Home = () => {
  return (
    <div className="relative bg-[#fbf8f5] overflow-x-hidden">
      {/* organic background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-green-300 to-green-100 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute top-64 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-green-200 to-green-50 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-gradient-to-br from-green-100 to-green-50 blur-3xl opacity-40" />

      <div className="relative max-w-4xl w-full mx-auto flex flex-col items-center px-4">
        {/* Hero */}
        <div className="flex flex-col items-center text-center pt-16 pb-14">
          <div className="mb-8">
            <Image
              src="/logo.png"
              width={691}
              height={329}
              className="h-16 w-auto"
              alt="Agrisync Lab"
            />
          </div>
          <h1 className="font-semibold text-3xl md:text-6xl text-balance text-black leading-tight">
            <span>Get Paid Faster with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-green-500">
              Agrisync Lab Invoice Generator
            </span>
          </h1>
          <p className="mt-5 text-neutral-500 text-lg max-w-xl text-balance">
            Built to help farmers get paid faster and keep their books in
            order — quick, consistent invoicing.
          </p>
          <Link
            href="/new"
            className="mt-9 inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 font-medium shadow-md shadow-green-200/50 bg-gradient-to-br from-green-700 to-green-500 text-white hover:opacity-90 px-8 py-3 text-lg"
          >
            Generate Invoice
          </Link>
        </div>

        {/* Demo preview */}
        <div className="w-full mb-16 rounded-[2rem] bg-white/60 p-4 md:p-8 shadow-sm">
          <DemoPreview />
        </div>

        {/* Bottom CTA */}
        <div className="w-full pb-16">
          <div className="flex flex-col items-center gap-4 rounded-[2.5rem] bg-gradient-to-br from-green-100 to-green-200 px-6 py-12 text-center">
            <p className="font-semibold text-xl md:text-3xl text-black max-w-2xl text-balance">
              Need to invoice a client? Generate it now — no spreadsheets
              required.
            </p>
            <Link
              href="/new"
              className="mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 font-medium shadow-md shadow-green-200/50 bg-gradient-to-br from-green-700 to-green-500 text-white hover:opacity-90 px-8 py-3 text-lg"
            >
              Generate Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
