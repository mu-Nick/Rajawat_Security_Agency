import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";

function App() {
	return (
		<BrowserRouter>
			<Parallax />
			<Header />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
