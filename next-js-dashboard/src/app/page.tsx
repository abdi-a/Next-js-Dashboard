import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-black">
      <div className="text-center space-y-6 max-w-lg p-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          Next.js Auth <span className="text-blue-600">Mastery</span>
        </h1>
        <p className="text-lg text-gray-600">
          A professional-grade implementation of authentication, security, and dashboard patterns in Next.js 15.
        </p>
        
        <div className="flex gap-4 justify-center pt-4">
          <Link 
            href="/sign-in" 
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
          <Link 
            href="/sign-up" 
            className="px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
