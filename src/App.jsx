import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
