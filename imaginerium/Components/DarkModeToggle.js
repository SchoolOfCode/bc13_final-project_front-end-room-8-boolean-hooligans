import style from "../styles/darkModeToggle.module.css";
//import { theme, useTheme } from "next-themes";

const ButtonToggleDarkMode = () => {
  //const { theme, setTheme } = useTheme();

  return (
    <div>
      {/* <input
          type="checkbox"
          className={style.checkbox}
           onChange={() => setTheme(theme == "dark" ? "light" : "dark")}

           checked={theme == "dark" ? true : false}
          id="chk"
        />
        <label className={style.label} htmlFor="chk">
          <i className={`fas fa-moon ${style.faMoon}`}></i>
          <i className={`fas fa-sun ${style.faSun}`}></i>
          <div className={style.ball}></div>
        </label> */}
    </div>
  );
};

export default ButtonToggleDarkMode;
