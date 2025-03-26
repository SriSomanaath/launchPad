"use client";

import { ChangeEvent, useState, useEffect } from "react";
import SignInButtonWithProvider from "./SignInButtonWithProvider";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
// import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
// import { signIn, useSession } from "next-auth/react";
// import { toast } from "@/components/ui/use-toast";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
//   const { data: session } = useSession();
  const router = useRouter();

  const FormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    rememberMe: z.boolean(),
  });

//   useEffect(() => {
//     if (session) {
//       router.replace("/dashboard"); // 🔥 Redirect authenticated users
//     }
//   }, [session, router]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);

    // Remember me logic: store email in localStorage if checked.
    if (data.rememberMe) {
      Cookies.set("rememberMe", "true", { expires: 30 }); // 30 days expiry
      Cookies.set("email", data.email, { expires: 30 });
    } else {
      Cookies.remove("rememberMe");
      Cookies.remove("email");
    }

    // Use NextAuth's signIn method with the credentials provider.
    // const res = await signIn("credentials", {
    //   redirect: false, // We handle redirection manually.
    //   username: data.email, // NextAuth expects a field named 'username'.
    //   password: data.password,
    //   callbackUrl: callbackUrl, // Redirect URL after successful login.
    // });

    // if (res?.error) {
    //   toast({
    //     title: "Login failed",
    //     description: res.error,
    //   });
    //   setIsLoading(false);
    //   return;
    // }

    // if (res?.ok && res.url) {
    //   // Redirect to the callbackUrl (/dashboard)
    //   router.push(res.url);
    // }

    setIsLoading(false);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const invalidEmail = () => {
    // Basic regex pattern for validating an email
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.trim().length === 0 || !regexPattern.test(email.trim());
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChangeEmail(e);
                  }}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Password Field with Eye Icon */}
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                  className="pr-10" // Extra padding to accommodate the icon
                />
              </FormControl>
              {/* Toggle Icon */}
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500 mt-5" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500 mt-5" />
                )}
              </div>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Remember Me Checkbox */}
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="h-4 w-4"
                />
              </FormControl>
              <FormLabel className="!m-0">Remember me</FormLabel>
            </FormItem>
          )}
        />

        <SignInButtonWithProvider disabled={invalidEmail()} provider="email" params={{ email }} />
      </form>
    </Form>
  );
};
export default SignInForm;