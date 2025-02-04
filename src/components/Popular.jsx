import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CardSkeleton from "./CardSkeleton";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="mb-10">
      <h1 className="mb-4 font-bold">Popular Picks</h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {isLoading && <CardSkeleton count={4} height={150} />}
      </div>

      <Splide
        aria-label="Popular Recipes"
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
          breakpoints: {
            640: {
              perPage: 3,
            }
          },
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-transparent to-black opacity-20"></div>

                <div className="px-6 mb-2 py-4 text-sm absolute z-20 left-1/2 bottom-0 translate-x-[-50%] text-white w-full text-center font-bold flex justify-center items-center">
                  {recipe.title}
                </div>

                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
