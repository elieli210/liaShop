// React
import React from "react";
// React

// CSS
import styles from "./Footer.module.css";
// CSS

// Icons
import { BiLogoTelegram } from "react-icons/bi";
// Icons

// Images
import { logo } from "../../Images/images";
// Images

const Footer = () => {
  return (
    <div className={`${styles.footerContainer}`}>
      <div className={`${styles.top}`}>
        <div className={`${styles.socialMedias}`}>
          <p>لیا را دنبال کنید</p>
          <div>
            <BiLogoTelegram />
            <BiLogoTelegram />
            <BiLogoTelegram />
          </div>
        </div>
        <div className={`${styles.about}`}>
          <p>
            تمامی حقوق محفوظ است
            <br />
            تمامی حقوق محفوظ است
          </p>
        </div>
        <div className={`${styles.logo}`}>
          <img src={logo} alt="pic" />
        </div>
      </div>
      <div className={`${styles.bottom}`}>
        <p>
          این شرکت هیچگونه وابستگی به نهاد ارگانها و نهاد های دولتی ، غیر دولتی
          و امنیتی ندارد
        </p>

        <p>شماره واحد بازرسی : 1234566789 و 12344566788</p>
      </div>
    </div>
  );
};

export default Footer;
