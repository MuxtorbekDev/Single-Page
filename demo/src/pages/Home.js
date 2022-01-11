import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../components/CatigoreList";
import { useLocation, useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import Search from "../components/search";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?qidirish=${str}`,
    });
  };
  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Loader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}
