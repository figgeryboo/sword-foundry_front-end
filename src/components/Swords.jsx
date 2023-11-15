import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import daggerImage from '../assets/dagger.png';
import Sword from './Sword';

const API = import.meta.env.VITE_API_URL;
const getRarityText = (rarity) => {
  switch (rarity) {
    case 1:
      return 'Common';
    case 2:
      return 'Uncommon';
    case 3:
      return 'Rare';
    case 4:
      return 'Epic';
    case 5:
      return 'Legendary';
    default:
      return 'Unknown';
  }
}


function Swords() {
	const [swords, setSwords] = useState([]);

	const fetchData = async () => {
		try {
			fetch(`${API}/swords`)
				.then((res) => res.json())
				.then((res) => {
					setSwords(res);
				});
		} catch (error) {
			return error;
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="Swords">
			<section>
				<div className="swords-container">
					{swords.map((sword) => (
						<div key={sword.id} className="sword-card">
							<img src={daggerImage} alt={sword.id} className='daggerImage'/>
							<h1>{sword.name}{sword.is_cursed ? ' 💀' : null }</h1>
							<p>Maker: {sword.maker}</p>
							<p>Price: {sword.price} GP</p>
							<p>Upgraded: {sword.is_upgraded ? 'Yes' : 'No'}</p>
							<p>Rarity: {getRarityText(sword.rarity)}</p>
							<button><Link to={`/swords/${sword.id}`}>Examine Further</Link>
						</button></div>
					))}
				</div>
			</section>
		</div>
	);
}

export default Swords;
