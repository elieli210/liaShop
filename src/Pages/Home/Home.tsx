// React
import React from "react";
// React

// CSS
import styles from "./Home.module.css";
// CSS

// Redux
import { useAppSelector } from "../../StateManagement/RTK/store";
// Redux

// Modules
import { useNavigate } from "react-router-dom";
import { mainUrl } from "../../Constants/urls";
// Modules

const Home = () => {
  const categories = useAppSelector((state) => state.categories.categories);
  const navigate = useNavigate();
  return (
    <div className={`${styles.homeContainer}`}>
      <p>دسته بندی ها</p>

      <div className={`${styles.categoryContainer}`}>
        {categories.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`categories/${item.id}`);
            }}
            className={`${styles.categoryItem}`}
          >
            <img src={`${mainUrl}${item.image}`} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
