import { get } from "lodash";
import { Image } from "components/UI";
import { Link } from "react-router-dom";
import { Button } from "components/fields";
import { useEffect, useState } from "react";
import { isOpenNavbar } from "store/navbar";
import { lodash, storage, store } from "services";
import { categories, header, languages } from "data";
import { Intro, Telegram, Times } from "assets/images/svg";

const index = () => {
  const { useSelector, changeLanguage, useDispatch, useSearchParams } =
    lodash.get(store, "store");
  const dispatch = useDispatch();
  const [, setLangParams] = useSearchParams();
  const [langObj, setLangObj] = useState<string[]>([]);
  const [categoryData, setCategoryData] = useState<string[]>([]);
  const { isOpen, language }: any = useSelector((state) =>
    get(state, "navbar")
  );
  const openNavbarFunc = (e: any) => {
    if (e.target.classList.contains("open-navbar")) {
      dispatch(isOpenNavbar());
    }
  };

  const tabToggleLang = (lang: string) => {
    storage.set("lang", lang);
    dispatch(changeLanguage(lang));
    setLangParams((params) => {
      params.set("lang", (storage.get("lang") as string) || language);
      return params;
    });
  };

  useEffect(() => {
    setLangParams((params) => {
      params.set("lang", (storage.get("lang") as string) || "uz");
      return params;
    });
    setLangObj(...[header[0][(storage.get("lang") as string) || language]]);
  }, [language, storage.get("lang")]);

  if (isOpen) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  useEffect(() => {
    setCategoryData([
      ...categories[0][(storage.get("lang") as string) || language],
    ]);
  }, [language, storage.get("lang") as string]);

  return (
    <>
      <section
        onClick={(e) => openNavbarFunc(e)}
        className={`open-navbar ${isOpen && "open-navbar--active"}`}
      >
        <div className="open-navbar__bg">
          <div className="container">
            <div className="open-navbar__top">
              <Link to="/">
                <img
                  src={Intro}
                  alt="intro"
                  title="intro"
                  className="open-navbar__top-intro"
                />
              </Link>
              <ul className="open-navbar__languages">
                {languages.length > 0 &&
                  languages.map((el) => {
                    return (
                      el.hidden && (
                        <li
                          onClick={() => tabToggleLang(el.lang)}
                          className={`open-navbar__languages-lang ${
                            storage.get("lang") === el.lang &&
                            "open-navbar__languages-lang--active"
                          }`}
                        >
                          <h4 className="open-navbar__languages-heading">
                            {el.title}
                          </h4>
                        </li>
                      )
                    );
                  })}
              </ul>
              <Button
                type="button"
                className="open-navbar__btn"
                onClick={() => dispatch(isOpenNavbar())}
              >
                <img
                  alt="times"
                  src={Times}
                  className="open-navbar__btn-icon"
                />
              </Button>
            </div>
            <Button className="nav-buttons__btn" type="button">
              <Image
                src={Telegram}
                alt="telegram"
                className="nav-buttons__btn-icon"
              />
              <h4 className="nav-buttons__btn-heading">мурожаат</h4>
            </Button>
            <ul className="open-navbar__list">
              <li className="open-navbar__item open-navbar__item--left">
                <h2 className="open-navbar__item-heading">Рукнлар</h2>
              </li>
              {langObj.length > 0 &&
                langObj.map((el: any) => {
                  return (
                    <li className="open-navbar__item">
                      <Link className="open-navbar__link" to="/">
                        {el.title}
                      </Link>
                    </li>
                  );
                })}
              <li className="open-navbar__item open-navbar__item--left">
                <h2 className="open-navbar__item-heading">Viloyatlar</h2>
              </li>
              {categoryData.length > 0 &&
                categoryData.map((el: any) => {
                  return (
                    el.hidden && (
                      <li className="open-navbar__item">
                        <Link className="open-navbar__link" to="/">
                          {el.title}
                        </Link>
                      </li>
                    )
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
