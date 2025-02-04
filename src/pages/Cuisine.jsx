import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardSkeleton from "../components/CardSkeleton";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const getCuisine = async (name) => {
    setIsLoading(true);

    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}`
    );
    const data = await api.json();
    setCuisines(data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="container">
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading && (
          <CardSkeleton
            count={9}
            height={200}
          />
        )}
        {cuisines.map((item) => (
          <Link key={item.id} to={`/recipes/${item.id}`}>
            <div
              key={item.id}
              className="max-w-sm rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                className="w-full"
                src={item.image}
                alt={item.title}
              />
              <div className="px-6 py-4 text-center">
                <div className="font-bold mb-2">{item.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
