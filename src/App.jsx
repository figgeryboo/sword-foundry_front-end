import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/NewPage";
import Show from "./pages/ShowPage";
import Edit from "./pages/EditPage";
import Error404 from "./pages/Error404Page"
import './global.css'

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
						<Route path="/swords/:id" element={<Show />} />
						<Route path="/swords/:id/edit" element={<Edit />}/>
            			<Route path="*" element={<Error404 />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
