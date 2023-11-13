import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";

function App() {

	return (
		<div className="App">
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/swords" element={<Index />} />
						<Route path="/swords/new" element={<New />} />
						<Route path="/swords/:index" element={<Show />} />
						<Route path="/swords/:index/edit" element={<Edit />}/>
            <Route path="/swords/:index/cursed" element={<Cursed />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
