import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSkeleton from "../components/CardSkeleton";
import { Link } from "react-router-dom";

const Searched = () => {
  const [searched, setSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const getSearched = async (name) => {
    setIsLoading(true);

    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${name}`
    );
    const data = await api.json();

    setSearched(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="container">
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading && (
          <CardSkeleton
            count={9}
            height={200}
          />
        )}

        {searched.map((item) => (
          <Link
            to={`/recipes/${item.id}`}
            key={item.id}
          >
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
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

export default Searched;
