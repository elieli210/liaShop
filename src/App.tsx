// React
import React, { useEffect } from "react";
// React

// styles
import styles from "./app.module.css";
// styles

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// Components

// Router
import Router from "./Router/Router";
// Router

// Redux
import { useAppDispatch } from "./StateManagement/RTK/store";
import { getAsyncAllCategories } from "./StateManagement/RTK/Slices/CategoriesSlice/CategoriesSlice";
// Redux

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAsyncAllCategories());
  }, [dispatch]);

  return (
    <div className={`${styles.masterContainer}`}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
