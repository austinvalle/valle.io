import React from "react";
import "./layout.css"
import { Helmet } from "react-helmet"
import Navigation from "./navigation";

export default function Layout({ children }) {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>valle.io</title>
			</Helmet>
			<header>
				<Navigation />
			</header>
			<main>
				{children}
			</main>
		</div>
	)
}
