
import { useMemo, useState } from "react";
import { recipes, type Recipe } from "../../data/recipes";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeFilters from "../../components/RecipeFilters/RecipeFilters";
import "./index.scss";

interface IndexProps {
  onViewRecipe: (recipe: Recipe) => void;
}

function Index({ onViewRecipe }: IndexProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [difficulty, setDifficulty] = useState("Todas");

  // Normaliza el texto para facilitar las búsquedas.
  const normalizeText = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  };

  // Filtra las recetas según la búsqueda y los filtros seleccionados.
  const filteredRecipes = useMemo(() => {
    const searchText = normalizeText(search);

    return recipes.filter((recipe) => {
      const recipeName = normalizeText(recipe.name);
      const recipeDescription = normalizeText(recipe.description);
      const recipeCategory = normalizeText(recipe.category);
      const recipeDifficulty = normalizeText(recipe.difficulty);

      const matchesSearch =
        searchText === "" ||
        recipeName.includes(searchText) ||
        recipeDescription.includes(searchText) ||
        recipeCategory.includes(searchText);

      const matchesCategory =
        category === "Todas" ||
        recipeCategory === normalizeText(category);

      const matchesDifficulty =
        difficulty === "Todas" ||
        recipeDifficulty === normalizeText(difficulty);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty
      );
    });
  }, [search, category, difficulty]);

  // Restablece todos los filtros.
  const clearFilters = () => {
    setSearch("");
    setCategory("Todas");
    setDifficulty("Todas");
  };

  return (
    <main className="home">
      {/* Presentación principal */}
      <section className="home__hero">
        <div className="home__hero-content">
          <span className="home__eyebrow">
            COCINAR ES COMPARTIR AMOR
          </span>

          <h1>
            El recetario de
            <span> Vanessa Rivera</span>
          </h1>

          <p>
            Recetas especiales, sabores que enamoran.
            Descubre preparaciones deliciosas para compartir
            momentos inolvidables.
          </p>

          <a href="#recetas" className="home__hero-button">
            Explorar recetas <span>↓</span>
          </a>
        </div>

        <div className="home__hero-decoration">
          <span>♡</span>
          <p>Hecho con amor</p>
        </div>
      </section>

      {/* Sección de recetas */}
      <section className="home__recipes" id="recetas">
        <div className="home__section-heading">
          <span className="home__eyebrow">
            UN POCO DE INSPIRACIÓN
          </span>

          <h2>Encuentra tu próxima receta</h2>

          <p>
            Explora nuestras recetas y encuentra algo delicioso
            para preparar.
          </p>
        </div>

        {/* Buscador y filtros */}
        <RecipeFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          onClear={clearFilters}
        />

        {/* Cantidad de resultados */}
        <div className="home__results">
          <span>
            {filteredRecipes.length}{" "}
            {filteredRecipes.length === 1
              ? "receta encontrada"
              : "recetas encontradas"}
          </span>
        </div>

        {/* Resultados de búsqueda */}
        {filteredRecipes.length > 0 ? (
          <div className="home__grid">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onView={onViewRecipe}
              />
            ))}
          </div>
        ) : (
          <div className="home__empty">
            <span>♡</span>

            <h3>No encontramos recetas</h3>

            <p>
              Prueba con otra búsqueda o limpia los filtros.
            </p>

            <button type="button" onClick={clearFilters}>
              Ver todas las recetas
            </button>
          </div>
        )}
      </section>

      {/* Pie de página */}
      <footer className="home__footer">
        <p>El recetario de Vanessa Rivera</p>
        <span>Preparado con amor ♡</span>
      </footer>
    </main>
  );
}

export default Index;
