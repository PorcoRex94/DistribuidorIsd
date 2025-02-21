import React from "react";
import { ContainerCategory } from "./categoryFilter-styles";

export const Category = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <ContainerCategory className="category__container">
      {/* Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category__select"
      >
        <option value="" className="option__marcas">
          Marcas
        </option>{" "}
        {/* Opción para mostrar todas las categorías */}
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </ContainerCategory>
  );
};
