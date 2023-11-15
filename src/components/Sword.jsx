import { Link } from "react-router-dom";

function Sword({ sword }) {
  return (
    <tr>
      <td>
        {sword.is_cursed ? (
          <span>💀</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/swords/${sword.id}`}>{sword.name}</Link>
      </td>
      <td>{sword.maker}</td>
      <td>${sword.price}</td>
      <td>{sword.is_upgraded ? "Yes" : "No"}</td>
      <td>{sword.is_cursed ? "Yes" : "No"}</td>
      <td>{sword.rarity}</td>
    </tr>
  );
}

export default Sword;
