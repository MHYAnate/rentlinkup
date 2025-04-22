"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import SearchCTO from "./search";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="relative">
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/key.jpeg"
					alt="Modern apartment building"
					fill
					className="object-cover brightness-[0.5]"
					priority
				/>
			</div>
			<div className="relative z-10 container mx-auto py-14 md:py-20 lg:py-28 px-4">
				<div className="max-w-3xl space-y-6">
					<h1
						className={`text-5xl text-white md:text-7xl font-bold mb-4 animate-fade-in-up font-[family-name:var(--Poppins-Bold)] transition-all duration-1000 ease-out delay-300 transform ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-10 opacity-0"
						}`}
					>
						Find Your Perfect Rental Property
					</h1>
					<p
						className={`text-xl  text-white md:text-2xl mb-8 animate-fade-in-up animation-delay-300 transition-all duration-1000 ease-out delay-300 transform font-[family-name:var(--Poppins-SemiBold)] ${
							isVisible
								? "translate-x-0 opacity-100"
								: "translate-x-10 opacity-0"
						}`}
					>
						Browse the finest of rental properties across the country. No login
						required.
					</p>

					<SearchCTO />

					<div className="flex flex-col sm:flex-row gap-4">
						<Link href="/properties">
							<button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-medium text-black shadow  hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 overflow-hidden">
								Browse All Properties
							</button>
						</Link>
						<Link href="/landlordlens">
							<button className="inline-flex h-10 items-center justify-center rounded-md bg-white/20 hover:bg-white/30 border border-white/30 px-8 py-2 text-sm font-medium text-white shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 overflow-hidden">
								Landlord Portal
							</button>
						</Link>
					</div>
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
		</section>
	);
}
