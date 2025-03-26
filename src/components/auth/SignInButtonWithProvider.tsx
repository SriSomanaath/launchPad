"use client";

import { useState } from "react";

import { signIn } from "@/lib/auth/actions";
import { FaGithub, FaGitlab, FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Loader2 } from "lucide-react";

const providersConfig = {
  github: {
    label: "Sign in with GitHub",
    icon: <FaGithub />,
  },
  google: {
    label: "Sign in with Google",
    icon: <FaGoogle />,
  },
  gitlab: {
    label: "Sign in with Gitlab",
    icon: <FaGitlab />,
  },
  email: {
    label: "Sign in with email",
    icon: <MdOutlineMailOutline />,
  },
};

interface SignInButtonWithProviderProps {
  provider: "google" | "github" | "email";
  disabled?: boolean;
  params?: { email: string };
}

const SignInButtonWithProvider = ({
  provider,
  disabled = false,
  params,
}: SignInButtonWithProviderProps) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
  
    try {
      await signIn(provider, { callbackUrl: `${window.location.origin}` });
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      setLoading(false);
    }
  };  

  let IconButton = loading ? <Loader2 className="animate-spin"/> : providersConfig[provider].icon;

  return (
    <button
      className="bg-slate-600 rounded-md p-3 w-full disabled:opacity-60 transition-all hover:bg-slate-800"
      disabled={loading || disabled}
      onClick={onSubmit}
    >
      <div className="flex gap-2 items-center justify-center text-white">
        {IconButton}
        {providersConfig[provider].label}
      </div>
    </button>
  );
};

export default SignInButtonWithProvider;