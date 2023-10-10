// React
import React, { useEffect } from "react";
// React

// CSS
import styles from "./SingleCategory.module.css";
// CSS

// Modules
import { useParams } from "react-router-dom";
// Modules

// Redux
import {
  useAppDispatch,
  useAppSelector,
} from "../../StateManagement/RTK/store";
import {
  getAsyncProductsByCategory,
  productsSlice,
} from "../../StateManagement/RTK/Slices/ProductsSlice/productsSlice";
import Pagination from "../../Components/Pagination/Pagination";
// Redux

// Urls
import { mainUrl } from "../../Constants/urls";
// Urls

// Icons
import { BiCartAdd } from "react-icons/bi";
import { cartSlice } from "../../StateManagement/RTK/Slices/CartSlice/cartSlice";
// Icons

const SingleCategory = () => {
  const { categoryId } = useParams();
  const dispatch = useAppDispatch();

  const { currPage } = useAppSelector((state) => state.products);
  const products = useAppSelector((state) => state.products.list);
  const { pagecount: totalPages } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(
      getAsyncProductsByCategory({
        productCategoryId: String(categoryId),
        currPage,
      })
    );
  }, [dispatch, categoryId, currPage]);

  useEffect(() => {
    console.log(categoryId);
    return () => {
      dispatch(productsSlice.actions.setCurrPage(1));
      dispatch(productsSlice.actions.resetProducts());
    };
  }, [dispatch, categoryId]);

  return (
    <div className={`${styles.singleCategoryContainer}`}>
      <div className={`${styles.productsContainer}`}>
        {products.map((item) => (
          <div
            key={item.id}
            className={`${styles.productItem}`}
            onClick={() => {
              dispatch(
                cartSlice.actions.addItemToCart({
                  image: item.small_pic,
                  count: 1,
                  price: item.price.price,
                  name: item.title,
                  id: item.id,
                })
              );
            }}
          >
            <img src={`${mainUrl}${item.small_pic}`} alt="" />
            <p>{item.title}</p>
            <div className={`${styles.bottomItems}`}>
              <BiCartAdd />

              <p>
                <span>{Number(item.price.price).toLocaleString("fa-IR")}</span>
                &nbsp;
                <span>تومان</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        dataForPagination={{
          currPage,
          totalPages,
        }}
        onPageNumberChange={(_currPage) => {
          dispatch(productsSlice.actions.setCurrPage(_currPage));
        }}
        onPageNumbersClick={(_currPage) => {
          dispatch(
            getAsyncProductsByCategory({
              productCategoryId: String(categoryId),
              currPage: _currPage,
            })
          );
        }}
      />
    </div>
  );
};

export default SingleCategory;
