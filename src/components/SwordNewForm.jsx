import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../global.css'


const API = import.meta.env.VITE_API_URL;

function SwordNewForm() {
  const navigate = useNavigate();
  const [sword, setSword] = useState({
    name: "",
    maker: "",
    price: 0,
    is_upgraded: false,
    is_cursed: false,
    rarity: 1, // Default to 1 (Common)
  });

  const handleTextChange = (event) => {
    setSword({ ...sword, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setSword({ ...sword, [event.target.id]: event.target.checked });
  };

  const handleRarityChange = (event) => {
    setSword({ ...sword, rarity: parseInt(event.target.value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSword();
  };

  const addSword = () => {
    const swordData = {
      name: sword.name,
      maker: sword.maker,
      price: sword.price,
      is_upgraded: sword.is_upgraded,
      is_cursed: sword.is_cursed,
      rarity: sword.rarity,
    };

    try {
      fetch(`${API}/swords`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(swordData),
      })
        .then((res) => res.json())
        .then(() => navigate("/swords"));
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={sword.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Sword"
          required
        />

        <label htmlFor="maker">Maker:</label>
        <input
          id="maker"
          value={sword.maker}
          type="text"
          onChange={handleTextChange}
          placeholder="Maker of Sword"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={sword.price}
          type="number"
          onChange={handleTextChange}
          placeholder="Price of Sword"
          required
        />

        <label htmlFor="is_upgraded">Upgraded:</label>
        <input
          id="is_upgraded"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={sword.is_upgraded}
        />

        <label htmlFor="is_cursed">Cursed:</label>
        <input
          id="is_cursed"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={sword.is_cursed}
        />

        <label htmlFor="rarity">Rarity:</label>
        <select
          id="rarity"
          value={sword.rarity}
          onChange={handleRarityChange}
          required
        >
          <option value="1">Common</option>
          <option value="2">Uncommon</option>
          <option value="3">Rare</option>
          <option value="4">Epic</option>
          <option value="5">Legendary</option>
        </select>

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div><Link to={`/swords`}>
        <button>Back to the Forge</button>
      </Link></div>
    </div>

  );
}

export default SwordNewForm;
