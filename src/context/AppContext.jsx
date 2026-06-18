import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
const user = {
  name: "Jamila Waziry",
  role: "Frontend Developer",
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const themes = ["dark", "light", "ocean"];

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);

    const nextIndex = (currentIndex + 1) % themes.length;

    setTheme(themes[nextIndex]);
  };

  const toggleFavorite = (projectId) => {
    if (favorites.includes(projectId)) {
      setFavorites(favorites.filter((id) => id !== projectId));
    } else {
      setFavorites([...favorites, projectId]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        favorites,
        toggleFavorite,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
