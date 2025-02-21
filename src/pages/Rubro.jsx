import { useState, useEffect } from "react";
import { SearchBar } from "../components/search/SearchBar";
import { Category } from "../components/category-filter/Category";
import { Card } from "../components/cards/Cards";
import { CardsContainer } from "../styles/CardContainer";
import { Hero } from "../components/hero/Hero";
import { FilterContainer, MainContainer } from "../styles/GlobalStyles";

export const Rubro = ({ data, title, heroImage, rubro }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredEquipos, setFilteredEquipos] = useState(data);

  // Obtener las categorías dinámicamente a partir de los datos
  const categories = [...new Set(data.map((equipo) => equipo.marca))];

  const removeAccents = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  useEffect(() => {
    const filtered = data.filter((equipo) => {
      const normalizedNombre = removeAccents(equipo.nombre);
      const normalizedMarca = removeAccents(equipo.marca);
      const normalizedCategoria = removeAccents(equipo.categoria);
      const normalizedCombined = `${normalizedNombre} ${normalizedMarca} ${normalizedCategoria}`;

      // Normalizamos el término de búsqueda
      const normalizedSearch = removeAccents(searchTerm);
      const searchWords = normalizedSearch.trim().split(" ");

      const matchesSearch = searchWords.every((word) =>
        normalizedCombined.includes(word)
      );

      const normalizedSelectedCategory = removeAccents(selectedCategory);
      const normalizedEquipoMarca = normalizedMarca; // ya normalizado
      const matchesCategory =
        selectedCategory === "" ||
        normalizedEquipoMarca === normalizedSelectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredEquipos(filtered);
  }, [searchTerm, selectedCategory, data]);

  return (
    <MainContainer>
      {/* Hero dinámico */}
      <Hero backgroundImage={heroImage} title={title} />

      {/* Filtros y barra de búsqueda */}
      <FilterContainer>
        <Category
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </FilterContainer>

      {/* Tarjetas dinámicas */}
      <CardsContainer>
        <div className="cards-container">
          {filteredEquipos.map((equipo) => (
            <Card key={equipo.id} equipo={equipo} rubro={rubro} />
          ))}
        </div>
      </CardsContainer>
    </MainContainer>
  );
};
