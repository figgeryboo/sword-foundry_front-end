import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import commonImage from '../assets/common.png';
import uncommonImage from '../assets/uncommon.png';
import rareImage from '../assets/rare.png';
import epicImage from '../assets/epic.png';
import legendaryImage from '../assets/legendary.png';
import anvilImage from '../assets/anvil.png';

const API = import.meta.env.VITE_API_URL;
const getRarityText = (rarity) => {
  switch (rarity) {
    case 1:
      return 'fairly common';
    case 2:
      return 'strictly uncommon,';
    case 3:
      return 'somewhat rare,';
    case 4:
      return 'storied epic';
    case 5:
      return 'blade of legend,';
    default:
      return 'blade of unknown rarity,';
  }
}

function SwordDetails() {
  const [sword, setSword] = useState({
    name: '',
    maker: '',
    price: 0,
    is_upgraded: false,
    is_cursed: false,
    rarity: 1, 
  });
  const [background, setBackground] = useState('');
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const fetchSword = async () => {
      try {
        const res = await fetch(`${API}/swords/${id}`);
        const data = await res.json();

        setSword(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSword();
  }, [id]);

  const getRarityImageUrl = (rarity) => {
    switch (rarity) {
      case 1:
        return commonImage;
      case 2:
        return uncommonImage;
      case 3:
        return rareImage;
      case 4:
        return epicImage;
      case 5:
        return legendaryImage;
      default:
        return anvilImage;
    }
  };

  useEffect(() => {
    const { rarity } = sword;
    const imageUrl = getRarityImageUrl(rarity);
    setBackground(imageUrl);
  }, [sword.name, sword.rarity]);

  const handleDelete = async () => {
    try {
      await fetch(`${API}/swords/${id}`, {
        method: 'DELETE',
      });
      navigate('/swords');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div><img
    src={getRarityImageUrl(sword.rarity)}
    alt={`${sword.name} - ${sword.rarity}`}
  />
    <div className="sword-details">
      <h1>
        {sword.name}</h1>
       <h3> {sword.is_cursed ? '💀 THIS BLADE BE CURSED, BEWARE 💀' : null}
      </h3>
      <p>
          Forged in the {sword.maker}'s blazing kiln, the {getRarityText(sword.rarity)} {sword.name} is {sword.is_upgraded ? 'upgraded' : 'not upgraded'} and
          available to {sword.is_cursed ? 'one deeply unfortunate soul' : 'any truly lucky hero'} for {sword.price} gold pieces.
        </p>
      <div className="showNavigation">
        <div>
          {' '}
          <Link to={`/swords/${id}/edit`}>
            <button>Reforge</button>
          </Link>
          {' '}
          <button onClick={handleDelete}>Destroy</button>
        </div>
        <div>
          {' '}
          <Link to={`/swords`}>
            <button>Back to the Foundry</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
  
export default SwordDetails;
