import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
//compoments
import Nav from "./components/Nav";
import Footer from "./components/Footer";

//react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//css
import "./scss/style.css";

//google book api
import googleBook from "./services/googleBook";

const App = () => {
  const [query, setQuery] = useState("nonFiction");
  const [bookData, setBookData] = useState([]);
  // Themes
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "bark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const themes = {
    light: {
      bg: "#f5f5f5",
      text: "#333",
      width: "100%",
    },
    bark: {
      bg: "#2c3e50",
      text: "#fff",
      width: "100%",
    },
  };

  // call api
  useEffect(() => {
    async function getData() {
      try {
        const res = await googleBook(query);
        setBookData(res.data.items);
        console.log(res.data.items);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [query]);

  //get search box input value and setQuery => on button click
  const handleClick = (value) => {
    setQuery(value);
  };

  return (
    // id will change by click the button
    <div
      style={{
        backgroundColor: themes[theme].bg,
        color: themes[theme].text,
      }}
    >
      <button
        id="button"
        onClick={switchTheme}
        style={{ width: themes[theme].width }}
      >
        Switch Themes
      </button>
      <Nav handleClick={handleClick} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home bookData={bookData} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
