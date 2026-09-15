"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/hooks/useAuth";
import { LogIn } from "lucide-react";

export const SignInButton = ({
  className,
  size,
}: {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}) => {
  const { signInWithGoogle } = useAuth();

  return (
    <Button
      type="button"
      size={size}
      className={className}
      onClick={() => signInWithGoogle(window.location.href)}
    >
      <LogIn className="mr-2 h-5 w-5" /> Sign in with Google
    </Button>
  );
};
