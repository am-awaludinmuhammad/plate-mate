import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const RecipeDetail = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("instructions");

  const getRecipeDetail = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    const data = await api.json();

    setRecipe(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getRecipeDetail(params.id);
  }, [params.id]);

  return (
    <div className="grid gap-20 grid-cols-1 md:grid-cols-2">
      <div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <h1 className="font-semibold mb-4">{recipe.title}</h1>
        )}

        {isLoading ? (
          <Skeleton
            height={200}
            className="w-full rounded"
          />
        ) : (
          <img
            className="w-full rounded"
            src={recipe.image}
            alt={recipe.title}
          />
        )}
      </div>
      <div>
        <Button
          variant={activeTab === "instructions" ? "primary" : "outline"}
          onClick={(e) => setActiveTab("instructions")}
        >
          Instruction
        </Button>

        <Button
          className="ml-4"
          onClick={(e) => setActiveTab("ingredients")}
          variant={activeTab === "ingredients" ? "primary" : "outline"}
        >
          Ingredients
        </Button>

        {isLoading && (
          <div className="mt-4">
            <Skeleton count={8} />
          </div>
        )}

        {activeTab === "instructions" && (
          <div>
            <p
              className="my-4"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            ></p>
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="list-disc pl-5 my-4">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
