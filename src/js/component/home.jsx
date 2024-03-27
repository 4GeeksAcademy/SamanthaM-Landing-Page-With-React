import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Row from "./row.jsx";
import Footer from "./footer.jsx";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<Row />
			<Footer />
		</div>
	);
};

export default Home;



