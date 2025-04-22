"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header/header"
import Hero from "@/components/hero/hero";

export default function Home() {

  const [qNav, setQNav] = useState("");

	const q1 = useRef<HTMLDivElement>(null);

  const qView1 = () => q1.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
		if (qNav === "services") {
			qView1();
		}
	}, [qNav, setQNav]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header setQNav={setQNav} qNav={qNav}/>
     
      <main className="flex-1">
        <Hero/>
     

        <section className="container mx-auto py-12 md:py-24 px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Featured Properties</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Your Dream Home</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our selection of premium properties available for rent in your area.
              </p>
            </div>
          </div>

          <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={`Property ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-black shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
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
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                      <span className="sr-only">Add to favorites</span>
                    </button>
                  </div>
                  <div className="absolute top-2 left-2 flex gap-2">
                    {i % 3 === 0 && (
                      <span className="inline-flex items-center rounded-md bg-green-500 px-2 py-1 text-xs font-medium text-white">
                        New
                      </span>
                    )}
                    {i % 2 === 0 && (
                      <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-xs font-medium text-white">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg line-clamp-1">Modern Apartment {i}</h3>
                      <p className="font-bold text-lg">${(1800 + i * 200).toLocaleString()}/mo</p>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-1">{123 + i} Main St, New York, NY 10001</p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1 text-sm">
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
                          className="h-4 w-4 text-gray-500"
                        >
                          <path d="M2 9V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4"></path>
                          <path d="M2 13h20"></path>
                          <path d="M2 17h20"></path>
                          <path d="M2 21h20"></path>
                          <path d="M6 13v8"></path>
                          <path d="M18 13v8"></path>
                        </svg>
                        <span>
                          {(i % 3) + 1} {(i % 3) + 1 === 1 ? "Bed" : "Beds"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
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
                          className="h-4 w-4 text-gray-500"
                        >
                          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path>
                          <line x1="10" x2="8" y1="5" y2="7"></line>
                          <line x1="2" x2="22" y1="12" y2="12"></line>
                          <line x1="7" x2="7" y1="19" y2="21"></line>
                          <line x1="17" x2="17" y1="19" y2="21"></line>
                        </svg>
                        <span>
                          {Math.floor(i / 2) + 1} {Math.floor(i / 2) + 1 === 1 ? "Bath" : "Baths"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
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
                          className="h-4 w-4 text-gray-500"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        </svg>
                        <span>{(800 + i * 100).toLocaleString()} sq ft</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <Link href={`/properties/${i}`} className="w-full">
                    <button className="inline-flex h-9 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/properties">
              <button className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 gap-1">
                View All Properties
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
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </section>

        <section className="bg-gray-100 py-12 md:py-24">
          <div className="container mx-auto space-y-12 px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">LandlordLens</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Manage Your Properties Effortlessly</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  LandlordLens provides powerful tools for landlords to manage properties and tenants in one place.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-gray-100 p-3">
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
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Property Management</h3>
                <p className="text-gray-500">Easily add, edit, and track all your properties in one dashboard.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
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
                    <span>Property listings and details</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Maintenance tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Document storage</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-gray-100 p-3">
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
                </div>
                <h3 className="text-xl font-bold">Tenant Management</h3>
                <p className="text-gray-500">Keep track of tenant information, lease agreements, and communications.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
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
                    <span>Tenant profiles and history</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Lease management</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Communication tools</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-gray-100 p-3">
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
                </div>
                <h3 className="text-xl font-bold">Financial Tracking</h3>
                <p className="text-gray-500">Monitor rent payments, expenses, and generate financial reports.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
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
                    <span>Rent collection and tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Expense management</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Financial reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center flex-col sm:flex-row gap-4">
              <Link href="/landlordlens/login">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 gap-1 w-full sm:w-auto">
                  Contact Sales
                </button>
              </Link>
              <Link href="/landlordlens">
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto">
                  Tour the Platform
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12 md:py-24 px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our community has to say.
              </p>
            </div>
          </div>

          <div className="grid gap-6 pt-8 md:grid-cols-3">
            {[
              {
                quote:
                  "Finding our dream apartment was so easy with this platform. The search filters helped us narrow down exactly what we were looking for.",
                author: "Sarah Johnson",
                role: "Tenant",
              },
              {
                quote:
                  "As a landlord, LandlordLens has completely transformed how I manage my properties. The tenant tracking and payment system is invaluable.",
                author: "Michael Chen",
                role: "Property Owner",
              },
              {
                quote:
                  "The platform made it simple to find quality tenants quickly. I've reduced my vacancy periods significantly since using this service.",
                author: "Rebecca Torres",
                role: "Property Manager",
              },
            ].map((testimonial, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col gap-4">
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
                      className="h-8 w-8 text-gray-300"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                    <p className="text-lg">{testimonial.quote}</p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-500">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-12 md:py-24">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <Link href="#" className="w-full sm:w-auto">
                <button className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                  Contact Sales
                </button>
              </Link>
              <Link href="#" className="w-full sm:w-auto">
                <button className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                  Learn more
                </button>
              </Link>
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
              <span className="text-xl font-bold">RealEstate</span>
            </Link>
            <p className="text-sm text-gray-500">Finding your perfect home, simplified.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <nav className="flex flex-col gap-2 md:flex-row md:gap-6">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/properties" className="text-sm font-medium">
                Properties
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>
              <Link href="/landlordlens" className="text-sm font-medium">
                LandlordLens
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm font-medium">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} RealEstate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

