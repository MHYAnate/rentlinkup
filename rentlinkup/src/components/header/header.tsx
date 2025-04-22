"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"


interface Props {
	setQNav: (value: string) => void;
	qNav: string;
}


export default function Header({setQNav, qNav}:Props) {



  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="relative h-8 w-8 overflow-hidden rounded-full bg-black">
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">R</div>
          </div> */}
          <span className="cursor-pointer text-3xl font-bold font-[family-name:var(--ProtestGuerrilla)] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-900 mb-2 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-500 transition-all duration-300 hover:animate-[fadeInUp_1s_ease-in-out_forwards]">RentLinkUp</span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full" onClick={() => setQNav(qNav === "home" ? "" : "home")}>
          Home
        </Link>
        <Link href="/properties" className="text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Properties
        </Link>
        <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/landlordlens" className="hidden sm:block">
          <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 overflow-hidden hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
            Management
          </button>
        </Link>
        <Link href="/landlordlens/login">
          <button className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 overflow-hidden">
            Sign In
          </button>
        </Link>
      </div>
    </div>
    <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .feature-card {
          opacity: 0;
        }
        .feature-visible {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
  </header>
  )
}