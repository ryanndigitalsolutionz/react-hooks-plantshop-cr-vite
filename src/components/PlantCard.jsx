import React from "react";

function PlantCard({ plant, onToggleStock }) {
  const { id, name, image, price, inStock } = plant;

  function normalizeImagePath(path) {
    if (!path) return "";
    if (path.startsWith("/images/")) return path;
    if (path.startsWith("./images/")) return path.replace("./", "/");
    if (path.startsWith("images/")) return "/" + path;
    return path;
  }

  const imageSrc = normalizeImagePath(image);
  const isInStock = inStock ?? true;

  return (
    <li className="card" data-testid="plant-item">
      <img src={imageSrc} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      {isInStock ? (
        <button
          className="primary"
          onClick={() => onToggleStock(id)}
        >
          In Stock
        </button>
      ) : (
        <button onClick={() => onToggleStock(id)}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
