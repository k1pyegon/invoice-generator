"use client";
import Image from "next/image";
import { UserInputForm } from "@/app/component/form/userInputForm";
import { FormSteps } from "@/app/component/form/step/fromSteps";
import { UserDataPreview } from "@/app/new/component/userDataPreview";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import { getProfile } from "@/lib/supabase/profiles";
import { UserMenu } from "@/app/component/auth/UserMenu";
import { SignInButton } from "@/app/component/auth/SignInButton";

export const NewInvoiceForm = () => {
  const methods = useForm();
  const [isClient, setIsClient] = useState(false);
  const { user, status: authStatus } = useAuth();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seedStep = () => {
      try {
        const step = localStorage.getItem("step");
        if (!(step && typeof +step === "number"))
          localStorage.setItem("step", "1");
      } catch (e) {
        localStorage.setItem("step", "1");
      }
    };

    if (authStatus === "loading") return;

    if (authStatus !== "authenticated" || !user) {
      seedStep();
      setIsClient(true);
      return;
    }

    getProfile(user.id)
      .then((profile) => {
        if (profile) {
          const remembered = {
            ...profile.your_details,
            ...profile.company_details,
          };
          Object.entries(remembered).forEach(([key, value]) => {
            if (value && !localStorage.getItem(key)) {
              localStorage.setItem(key, String(value));
            }
          });
        }
      })
      .catch((e) => console.error("Failed to load saved details:", e))
      .finally(() => {
        seedStep();
        setIsClient(true);
      });
  }, [authStatus, user]);

  return (
    <>
      {isClient ? (
        <FormProvider {...methods}>
          <div className="max-w-lg min-h-screen w-full h-full p-4 md:p-12 border-r border-dashed flex flex-col justify-between">
            <div>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/android-chrome-512x512.png"
                    width={40}
                    height={40}
                    className="rounded-lg"
                    alt="logo"
                  />
                  <div>
                    <p className="font-semibold">Invoice Generator</p>
                    <p className="text-green-700 text-sm">By Agrisync Lab</p>
                  </div>
                </div>
                {user ? <UserMenu /> : <SignInButton size="sm" />}
              </div>
              <UserInputForm />
            </div>
            <FormSteps />
          </div>
          <div className="relative min-h-screen h-full w-full flex justify-center items-center p-4 md:p-0">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <UserDataPreview />
          </div>
        </FormProvider>
      ) : (
        <div />
      )}
    </>
  );
};
