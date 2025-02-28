import { useState, useMemo } from "react";
import { SearchBar } from "../components/search/SearchBar";
import { Category } from "../components/category-filter/Category";
import { Card } from "../components/cards/Cards";
import { CardsContainer } from "../styles/CardContainer";
import { Hero } from "../components/hero/Hero";
import { FilterContainer, MainContainer } from "../styles/GlobalStyles";

export const Rubro = ({
  data = [],
  productos = [],
  title,
  heroImage,
  rubro,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredEquipos, setFilteredEquipos] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(productos);

  // Obtener las categorías dinámicamente a partir de los datos
  const categoriesEquipos = [
    ...new Set(data.map((equipo) => equipo.marca).filter(Boolean)),
  ];
  const categoriesProductos = [
    ...new Set(productos.map((product) => product.marca).filter(Boolean)),
  ];
  const categories = [
    ...new Set([...categoriesEquipos, ...categoriesProductos]),
  ];
  const removeAccents = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const filteredItems = useMemo(() => {
    if (!data || !productos) return [];

    return [...data, ...productos].filter((item) => {
      const normalizedNombre = removeAccents(item.nombre || "");
      const normalizedMarca = removeAccents(item.marca || "");
      const normalizedCategoria = removeAccents(item.categoria || "");
      const normalizedCombined = `${normalizedNombre} ${normalizedMarca} ${normalizedCategoria}`;

      const normalizedSearch = removeAccents(searchTerm).trim();
      const searchWords = normalizedSearch.split(" ");

      const matchesSearch = searchWords.every((word) =>
        normalizedCombined.includes(word)
      );

      const normalizedSelectedCategory = removeAccents(selectedCategory);
      const matchesCategory =
        selectedCategory === "" ||
        normalizedMarca === normalizedSelectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, data, productos]); // 🔥 Se recalcula solo cuando cambian estos valores

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
          {filteredItems.map((item) => (
            <Card key={item.id} equipo={item} rubro={rubro} />
          ))}
        </div>
      </CardsContainer>
    </MainContainer>
  );
};
