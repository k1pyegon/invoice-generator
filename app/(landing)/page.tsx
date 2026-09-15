/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Hourglass,
  NotebookText,
  Receipt,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoPreview from "./components/demoPreview";

const features = [
  {
    icon: Rocket,
    title: "Fast & Easy",
    description:
      "Fill in the blanks and generate a professional invoice in seconds.",
  },
  {
    icon: Users,
    title: "Team-Ready",
    description:
      "Anyone on the team can generate invoices without learning new tools.",
  },
  {
    icon: NotebookText,
    title: "Consistent Templates",
    description: "Every invoice follows the same Barnview branding automatically.",
  },
  {
    icon: Receipt,
    title: "Get Paid Faster",
    description:
      "Share invoices with secure payment details for faster client payments.",
  },
  {
    icon: Hourglass,
    title: "Save Time",
    description: "Skip spreadsheets and manual formatting for every invoice.",
  },
  {
    icon: ShieldCheck,
    title: "Internal Use Only",
    description: "Built for the Barnview team — kept off the public web.",
  },
];

const Home = () => {
  return (
    <div className="relative bg-[#fbf8f5] overflow-x-hidden">
      {/* organic background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-orange-200 to-pink-200 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute top-64 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-pink-200 to-orange-100 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-gradient-to-br from-orange-100 to-pink-100 blur-3xl opacity-40" />

      <div className="relative max-w-4xl w-full mx-auto flex flex-col items-center px-4">
        {/* Hero */}
        <div className="flex flex-col items-center text-center pt-16 pb-14">
          <div className="rounded-[2rem] p-2 bg-white/70 shadow-sm mb-8">
            <Image
              src="/android-chrome-512x512.png"
              width={88}
              height={88}
              className="rounded-3xl"
              alt="logo"
            />
          </div>
          <h1 className="font-semibold text-3xl md:text-6xl text-balance text-black leading-tight">
            <span>Get Paid Faster with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-pink-400">
              Barnview Invoice Generator
            </span>
          </h1>
          <p className="mt-5 text-neutral-500 text-lg max-w-xl text-balance">
            The internal tool for creating and sending Barnview invoices —
            quick, consistent, and just for us.
          </p>
          <Link
            href="/new"
            className="mt-9 inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 font-medium shadow-md shadow-orange-200/50 bg-gradient-to-br from-orange-500 to-pink-400 text-white hover:opacity-90 px-8 py-3 text-lg"
          >
            Generate Invoice
          </Link>
        </div>

        {/* Demo preview */}
        <div className="w-full mb-16 rounded-[2rem] bg-white/60 p-4 md:p-8 shadow-sm">
          <DemoPreview />
        </div>

        {/* Features */}
        <p className="font-medium text-2xl md:text-3xl text-neutral-700 text-center mb-10">
          Why this makes invoicing easier for the team
        </p>
        <div className="grid sm:grid-cols-2 gap-5 w-full mb-16">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[1.75rem] bg-white/70 p-7 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100 text-orange-600">
                <Icon className="w-6 h-6" />
              </div>
              <p className="font-bold text-xl">{title}</p>
              <p className="text-neutral-500 mt-1">{description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="w-full pb-16">
          <div className="flex flex-col items-center gap-4 rounded-[2.5rem] bg-gradient-to-br from-orange-100 to-pink-100 px-6 py-12 text-center">
            <p className="font-semibold text-xl md:text-3xl text-black max-w-2xl text-balance">
              Need to invoice a client? Generate it now — no spreadsheets
              required.
            </p>
            <Link
              href="/new"
              className="mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 font-medium shadow-md shadow-orange-200/50 bg-gradient-to-br from-orange-500 to-pink-400 text-white hover:opacity-90 px-8 py-3 text-lg"
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
