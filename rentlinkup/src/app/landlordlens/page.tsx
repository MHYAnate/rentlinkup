"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState, useEffect, useCallback, useRef } from "react"




export default function LandlordLens() {

  const [qNav, setQNav] = useState("");

	const q1 = useRef<HTMLDivElement>(null);

	const q2 = useRef<HTMLDivElement>(null);

	const q3 = useRef<HTMLDivElement>(null);

	const q4 = useRef<HTMLDivElement>(null);

  const qView1 = () => q1.current?.scrollIntoView({ behavior: "smooth" });

	const qView2 = () => q2.current?.scrollIntoView({ behavior: "smooth" });

	const qView3 = () => q3.current?.scrollIntoView({ behavior: "smooth" });

	const qView4 = () => q4.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
		if (qNav === "services") {
			qView1();
		}
		if (qNav === "service") {
			qView2();
		}
		if (qNav === "features") {
			qView3();
		}
		if (qNav === "contact") {
			qView4();
		}

	
	}, [qNav, setQNav]);
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-black">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">R</div>
              </div>
              <span className="text-xl font-bold">RentLinkUp</span>
            </Link>
            <span className="text-xl font-bold text-black">| Management</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/landlordlens/login">
              <button className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                Sign In
              </button>
            </Link>
            <Link href="/landlordlens/register">
              <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                Register
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/b.jpeg"
              alt="Modern dashbard interface"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto py-24 md:py-32 lg:py-40 px-4">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Property Management Simplified
              </h1>
              <p className="text-xl text-white/90 md:text-2xl">
                The all-in-one platform for landlords, agents and client to manage the real estate market.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/landlordlens/register">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto">
                    Get Started
                  </button>
                </Link>
                <Link href="/landlordlens/demo">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-white/20 hover:bg-white/30 border border-white/30 px-8 py-2 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto">
                    Request a Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12 md:py-24 px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need in One Place</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rentlinkup Managent provides powerful tools designed specifically for property owners, managers and clients.
              </p>
            </div>
          </div>

          <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                ),
                title: "Property Management",
                description: "Track all your properties in one place. Add photos, details, and maintenance records.",
                features: ["Property listings and details", "Maintenance tracking", "Document storage"],
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                title: "Tenant Management",
                description: "Keep track of all tenant information, communications, and lease agreements.",
                features: ["Tenant profiles and history", "Lease management", "Communication tools"],
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                ),
                title: "Financial Tracking",
                description: "Manage rent payments, expenses, and generate financial reports.",
                features: ["Rent collection and tracking", "Expense management", "Financial reporting"],
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                ),
                title: "Scheduling",
                description: "Organize property viewings, maintenance visits, and important dates.",
                features: ["Calendar integration", "Automated reminders", "Appointment scheduling"],
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="18" x2="18" y1="20" y2="10"></line>
                    <line x1="12" x2="12" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="14"></line>
                  </svg>
                ),
                title: "Analytics & Reporting",
                description: "Gain insights into your property portfolio with detailed analytics.",
                features: ["Performance metrics", "Customizable reports", "Data visualization"],
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                ),
                title: "Security & Compliance",
                description: "Keep your data secure and stay compliant with local regulations.",
                features: ["Secure data storage", "Compliance tools", "Permission controls"],
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white p-6 flex flex-col items-center text-center space-y-4"
              >
                <div className="rounded-full bg-gray-100 p-3">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
                <ul className="space-y-2 text-left">
                  {feature.features.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
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
                        className="h-4 w-4 text-green-500"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your needs. All plans include a 14-day free trial.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: 29,
                  description: "Perfect for landlords with up to 5 properties.",
                  features: ["Up to 5 properties", "Basic tenant management", "Rent tracking", "Document storage"],
                  popular: false,
                },
                {
                  name: "Professional",
                  price: 59,
                  description: "Ideal for growing property portfolios with up to 20 properties.",
                  features: [
                    "Up to 20 properties",
                    "Advanced tenant management",
                    "Online rent collection",
                    "Maintenance requests",
                    "Basic reporting",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: 99,
                  description: "For professional property managers with unlimited properties.",
                  features: [
                    "Unlimited properties",
                    "Complete tenant management",
                    "Advanced financial tools",
                    "Team access",
                    "Advanced analytics",
                    "Priority support",
                  ],
                  popular: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-lg border-2 ${plan.popular ? "border-black" : "border-gray-200"} bg-white relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-4xl font-bold">
                        ${plan.price}
                        <span className="text-lg font-normal text-gray-500">/month</span>
                      </p>
                      <p className="text-gray-500">{plan.description}</p>

                      <ul className="space-y-2 mt-4">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2">
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
                              className="h-4 w-4 text-green-500"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className={`mt-4 w-full inline-flex h-10 items-center justify-center rounded-md ${plan.popular ? "bg-black text-white hover:bg-gray-800" : "bg-white border border-gray-200 text-black hover:bg-gray-100"} px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950`}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12 md:py-24 px-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to transform your property management?
              </h2>
              <p className="text-gray-500 md:text-xl">
                Join thousands who have simplified their property management with Rentlinkup Management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/landlordlens/register">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto">
                    Start Your Free Trial
                  </button>
                </Link>
                <Link href="/landlordlens/demo">
                  <button className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto">
                    Schedule a Demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/c.jpeg"
                alt="LandlordLens dashboard preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-black">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">R</div>
              </div>
              <span className="text-xl font-bold">Rentlinkup</span>
              <span className="text-xl font-bold text-black">| Management</span>
            </Link>
            <p className="text-sm text-gray-500">Property management simplified.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <nav className="flex flex-col gap-2 md:flex-row md:gap-6">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/properties" className="text-sm font-medium">
                Properties
              </Link>
              <Link href="/landlordlens/features" className="text-sm font-medium">
                Features
              </Link>
              <Link href="/landlordlens/pricing" className="text-sm font-medium">
                Pricing
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} RentLinkUp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

