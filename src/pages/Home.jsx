import forgeImage from "../assets/forgeanimation.gif"

 function Home() {
	return (
		<div>
		<br />
			<img src={forgeImage} alt={"Blacksmith hammering"} />
			<h3 className="homeMessage">Welcome weary traveler and rest your bones by the fire.</h3>
		</div>
	);
}

export default Home;