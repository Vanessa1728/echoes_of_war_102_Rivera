
import "./recipe-filters.scss";

interface RecipeFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  difficulty: string;
  setDifficulty: (value: string) => void;
  onClear: () => void;
}

function RecipeFilters({
  search,
  setSearch,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  onClear
}: RecipeFiltersProps) {
  return (
    <section className="recipe-filters">
      <div className="recipe-filters__search">
        <span>⌕</span>
        <input
          type="search"
          placeholder="Busca una receta..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Buscar recetas"
        />
      </div>

      <div className="recipe-filters__selects">
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filtrar por categoría"
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Comida">Comida</option>
          <option value="Postre">Postres</option>
        </select>

        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          aria-label="Filtrar por dificultad"
        >
          <option value="Todas">Todas las dificultades</option>
          <option value="Fácil">Fácil</option>
          <option value="Intermedia">Intermedia</option>
        </select>

        <button
          type="button"
          className="recipe-filters__clear"
          onClick={onClear}
        >
          Limpiar filtros
        </button>
      </div>
    </section>
  );
}

export default RecipeFilters;
