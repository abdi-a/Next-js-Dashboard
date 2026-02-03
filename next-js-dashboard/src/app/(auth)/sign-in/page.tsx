import { SignInForm } from "./form";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Sign in to your account
      </h1>
      <p className="text-sm text-gray-500">
        Enter your email below to sign in
      </p>
      <div className="mt-6">
        <SignInForm />
      </div>
      <p className="px-8 text-center text-sm text-gray-500 mt-4">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
