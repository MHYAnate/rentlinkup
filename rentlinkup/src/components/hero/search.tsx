"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SearchSvg from "../btn/searchSvg";
import XSvg from "../btn/xSvg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";

interface EstateProps {
	id: number;
	name: string;
	src: string;
	link: string;
}

interface SearchComponentProps {
	estateList: EstateProps[];
}

export default function SearchCTO() {
	const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

  useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);


	return (
		<div className={styles.card}>
			<div className="w-full">
				<div className="grid w-full grid-cols-2 mb-4 gap-x-2">
					<button className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 overflow-hidden">
						Rent
					</button>
					<button className="inline-flex h-9 items-center justify-center rounded-md hover:bg-slate-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 overflow-hidden">
						Buy
					</button>
				</div>
				<div className="flex flex-col sm:flex-row gap-3">
					<div className="relative flex-1">
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
							className="absolute left-3 top-3 h-4 w-4 text-gray-500"
						>
							<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<input
							type="text"
							placeholder="City, neighborhood, or address"
							className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-9 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
						/>
					</div>
					<button className="inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 gap-2">
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
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</svg>
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
