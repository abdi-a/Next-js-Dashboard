import { SignUpForm } from "./form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Create an account
      </h1>
      <p className="text-sm text-gray-500">
        Enter your email below to create your account
      </p>
      <div className="mt-6">
        <SignUpForm />
      </div>
      <p className="px-8 text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
