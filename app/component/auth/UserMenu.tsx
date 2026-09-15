"use client";

import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth";
import { History, LogOut } from "lucide-react";

export const UserMenu = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-3 text-sm text-neutral-500">
      <span className="truncate max-w-[10rem]">{user.email}</span>
      <Link
        href="/invoices"
        className="flex items-center gap-1 hover:text-green-700"
      >
        <History className="h-4 w-4" /> History
      </Link>
      <button
        type="button"
        onClick={() => signOut()}
        className="flex items-center gap-1 hover:text-green-700"
      >
        <LogOut className="h-4 w-4" /> Sign out
      </button>
    </div>
  );
};
