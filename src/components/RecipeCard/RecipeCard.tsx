
import type { Recipe } from "../../data/recipes";
import "./recipe-card.scss";

interface RecipeCardProps {
  recipe: Recipe;
  onView: (recipe: Recipe) => void;
}

function RecipeCard({ recipe, onView }: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <div className="recipe-card__image-container">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-card__image"
        />

        <span className="recipe-card__category">
          {recipe.category}
        </span>
      </div>

      <div className="recipe-card__content">
        <div className="recipe-card__details">
          <span>◷ {recipe.time} min</span>
          <span>{recipe.difficulty}</span>
        </div>

        <h3 className="recipe-card__title">
          {recipe.name}
        </h3>

        <p className="recipe-card__description">
          {recipe.description}
        </p>

        <div className="recipe-card__footer">
          <span className="recipe-card__servings">
            Para {recipe.servings} personas
          </span>

          <button
            className="recipe-card__button"
            onClick={() => onView(recipe)}
          >
            Ver receta <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
