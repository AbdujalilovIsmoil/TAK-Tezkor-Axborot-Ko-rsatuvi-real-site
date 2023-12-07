import axios from "axios";
import { NavLink } from "react-router-dom";

const index = ({ langObj }: any) => {
  const clickPlace = (title: any) => {
    axios
      .post("http://taknews-backend.uz/api/placenews/", { place: title })
      .then((response) => response)
      .catch((error) => error);
  };

  return (
    <>
      <ul className="nav__list">
        {langObj.length > 0 &&
          langObj.map((el: any) => {
            return (
              <li
                key={el.id}
                className="nav__item"
                onClick={() => clickPlace(el.title)}
              >
                <NavLink className="nav__link" to="/">
                  {el.title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default index;
