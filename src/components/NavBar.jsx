import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className="navbar">
			<Link to="/swords">
				<h1>The Sword Foundry</h1>
			</Link>
			<button>
				<Link to="/swords/new">Selling a Sword?</Link>
			</button>
		</nav>
	);
}
