import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}`
    );
    const data = await api.json();
    setCuisines(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="container">
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cuisines.map((item) => (
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
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
