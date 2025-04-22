import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <div className="flex flex-1 items-center justify-center py-12 px-4">
        <div className="mx-auto max-w-md w-full rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="p-6 space-y-1">
            <div className="flex items-center gap-2">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-black">
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                    R
                  </div>
                </div>
                <span className="text-xl font-bold">RentLinkUp</span>
              </Link>
              <span className="text-xl font-bold text-black">| Management</span>
            </div>
            <h1 className="text-2xl font-bold mt-4">Sign in to your account</h1>
            <p className="text-sm text-gray-500">Enter your email and password to access your dashboard</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Password
                </label>
                <Link
                  href="/landlordlens/forgot-password"
                  className="text-sm text-black underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
              Sign In
            </button>
          </div>
          <div className="p-6 flex flex-col gap-4 border-t border-gray-200">
            <div className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <Link href="/landlordlens/register" className="text-black underline-offset-4 hover:underline">
                Sign up
              </Link>
            </div>
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

