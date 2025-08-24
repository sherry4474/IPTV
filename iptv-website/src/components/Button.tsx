"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "ghost";
	size?: "sm" | "md" | "lg";
};

const base =
	"inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
	primary:
		"bg-gradient-to-tr from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 focus-visible:ring-indigo-500",
	secondary:
		"bg-white/10 text-white border border-white/15 hover:bg-white/15 focus-visible:ring-white",
	ghost:
		"bg-transparent text-foreground hover:bg-black/5 dark:hover:bg-white/10 focus-visible:ring-foreground",
};

const sizes: Record<string, string> = {
	sm: "h-9 px-3 text-sm",
	md: "h-11 px-5 text-sm",
	lg: "h-12 px-6 text-base",
};

export default function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
	return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}

