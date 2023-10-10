// React
import React, { useState } from "react";
// React

// CSS
import styles from "./Header.module.css";
// CSS

// Redux
import {
  useAppDispatch,
  useAppSelector,
} from "../../StateManagement/RTK/store";
import { logo } from "../../Images/images";
// Redux

// Icons
import { AiOutlineMinus, AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { mainUrl } from "../../Constants/urls";
import { IoMdAdd } from "react-icons/io";
import { cartSlice } from "../../StateManagement/RTK/Slices/CartSlice/cartSlice";
// Icons

const Header = () => {
  const navigate = useNavigate();
  const categories = useAppSelector((state) => state.categories);
  const { cartData } = useAppSelector((state) => state.cartItems);

  const [cartItemsShow, setCartItemsShow] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.headerContainer}`}>
      <img
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
        }}
        style={{
          cursor: "pointer",
        }}
      />
      <div className={`${styles.categoriesItemsAndCartItemsLogo}`}>
        <div className={styles.cartItemsCount}>
          <AiOutlineShoppingCart
            onClick={() => {
              setCartItemsShow((prevState) => !prevState);
            }}
          />
          <span>
            {cartData.length > 0
              ? cartData
                  .map((item) => item.count)
                  .reduce((prev, curr) => prev + curr)
              : 0}
          </span>
          {cartItemsShow ? (
            <div className={`${styles.cartItemsContainer}`}>
              <p className={`${styles.allProductsCount}`}>
                <span>
                  {cartData.length > 0
                    ? cartData
                        .map((item) => item.count)
                        .reduce((prev, curr) => prev + curr)
                    : 0}
                </span>
                &nbsp;
                <span>قلم کالا</span>
              </p>

              {cartData.map((item) => (
                <div className={`${styles.cartItem}`} key={item.id}>
                  <img src={`${mainUrl}${item.image}`} alt="" />
                  <div className={`${styles.productDetail}`}>
                    <p className={`${styles.nameContainer}`}>{item.name}</p>
                    <div className={styles.productCountContainer}>
                      <AiOutlineMinus
                        fill="#007E82"
                        style={{
                          fontSize: "0.8rem",
                        }}
                        onClick={() => {
                          if (item.count > 1) {
                            dispatch(
                              cartSlice.actions.removeOneCountFromItem(item)
                            );
                            return;
                          }
                          dispatch(cartSlice.actions.removeItemFromCart(item));
                        }}
                      />
                      <input
                        value={item.count}
                        onChange={(e) => {
                          if (Number.isNaN(e.target.valueAsNumber)) return;
                          if (e.target.valueAsNumber <= 0) {
                            dispatch(
                              cartSlice.actions.removeItemFromCart(item)
                            );
                            return;
                          }
                          dispatch(
                            cartSlice.actions.changeCountByInput({
                              id: item.id,
                              count: e.target.valueAsNumber,
                            })
                          );
                        }}
                        type="number"
                      />
                      <IoMdAdd
                        fill="#007E82"
                        style={{
                          fontSize: "0.8rem",
                        }}
                        onClick={() => {
                          dispatch(cartSlice.actions.addItemToCart(item));
                        }}
                      />
                    </div>
                    <p className={styles.priceContainer}>
                      <span>{Number(item.price).toLocaleString("fa-IR")}</span>
                      &nbsp;
                      <span>تومان</span>
                    </p>
                  </div>
                </div>
              ))}

              <div className={`${styles.cartItemDetail}`}>
                <p>
                  <span>جمع کل :</span>
                  <span>
                    {cartData.length > 0
                      ? cartData
                          .map((item) => Number(item.price) * item.count)
                          .reduce((prev, curr) => prev + curr)
                          .toLocaleString("fa-IR")
                      : 0}
                    &nbsp; تومان
                  </span>
                </p>
                <p>
                  <span>مبلغ قابل پرداخت</span>
                  <span>
                    {cartData.length > 0
                      ? cartData
                          .map((item) => Number(item.price) * item.count)
                          .reduce((prev, curr) => prev + curr)
                          .toLocaleString("fa-IR")
                      : 0}
                    &nbsp; تومان
                  </span>
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className={`${styles.categoriesContainer}`}>
          {categories.categories.map((item) => (
            <React.Fragment key={item.id}>
              <NavLink
                to={`/categories/${item.id}`}
                style={({ isActive }) => ({
                  color: isActive ? "#E53253" : "#000",
                  marginRight: "8px",
                })}
              >
                {item.name}
              </NavLink>
              &nbsp;
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
