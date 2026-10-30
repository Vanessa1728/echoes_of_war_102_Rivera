
import type { Recipe } from "../../data/recipes";
import "./recipe-info.scss";

interface RecipeInfoProps {
  recipe: Recipe;
  onBack: () => void;
}

function RecipeInfo({ recipe, onBack }: RecipeInfoProps) {
  return (
    <main className="recipe-info">
      <header className="recipe-info__header">
        <button
          className="recipe-info__back"
          type="button"
          onClick={onBack}
        >
          <span>←</span> Volver a las recetas
        </button>

        <p className="recipe-info__brand">
          El recetario de Vanessa Rivera
        </p>
      </header>

      <section className="recipe-info__hero">
        <div className="recipe-info__image-container">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="recipe-info__image"
          />
        </div>

        <div className="recipe-info__intro">
          <span className="recipe-info__category">
            {recipe.category}
          </span>

          <h1>{recipe.name}</h1>

          <p className="recipe-info__description">
            {recipe.description}
          </p>

          <div className="recipe-info__stats">
            <div>
              <span>◷</span>
              <p>Tiempo</p>
              <strong>{recipe.time} minutos</strong>
            </div>

            <div>
              <span>♧</span>
              <p>Dificultad</p>
              <strong>{recipe.difficulty}</strong>
            </div>

            <div>
              <span>♙</span>
              <p>Porciones</p>
              <strong>{recipe.servings} personas</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="recipe-info__content">
        <div className="recipe-info__ingredients">
          <span className="recipe-info__eyebrow">
            LO QUE NECESITAS
          </span>

          <h2>Ingredientes</h2>

          <p className="recipe-info__section-description">
            Prepara todos tus ingredientes antes de comenzar.
          </p>

          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="recipe-info__bullet">✓</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="recipe-info__preparation">
          <span className="recipe-info__eyebrow">
            PASO A PASO
          </span>

          <h2>Preparación</h2>

          <p className="recipe-info__section-description">
            Sigue cada paso y disfruta el proceso.
          </p>

          <ol>
            {recipe.preparation.map((step, index) => (
              <li key={index}>
                <span className="recipe-info__step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="recipe-info__footer">
        <p>El recetario de Vanessa Rivera</p>
        <span>Preparado con amor ♡</span>
      </footer>
    </main>
  );
}

export default RecipeInfo;
