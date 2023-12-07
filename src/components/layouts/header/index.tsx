import { header, languages } from "data";
import { Intro } from "assets/images/png";
import { useState, useEffect } from "react";
import { Image, LangObj } from "components/UI";
import { storage, store, lodash } from "services";
import { Button, Input } from "components/fields";
import { Search, Down, Telegram, Bars, Times } from "assets/images/svg";

const index = () => {
  const [langObj, setLangObj] = useState<any[]>([]);
  const [openLang, setOpenLang] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const {
    Link,
    useSelector,
    useDispatch,
    isOpenNavbar,
    changeLanguage,
    useSearchParams,
  } = lodash.get(store, "store");
  const dispatch = useDispatch();
  const [, setLangParams] = useSearchParams();
  const { language }: any = useSelector((state) => lodash.get(state, "navbar"));

  useEffect(() => {
    setLangParams((params) => {
      params.set("lang", (storage.get("lang") as string) || "uz");
      return params;
    });
    setLangObj(...[header[0][(storage.get("lang") as string) || language]]);
  }, [language, storage.get("lang")]);

  const changeLangFunction = (lang: string) => {
    dispatch(changeLanguage(lang));
    setOpenLang(false);
    storage.set("lang", lang);
    setLangParams((params) => {
      params.set("lang", (storage.get("lang") as string) || language);
      return params;
    });
    setLangObj(...[header[0][(storage.get("lang") as string) || language]]);
  };

  const openSearchNavbar = (e: any) => {
    if (e.target.getAttribute("class").split(" ")[0] === "nav-bg__form") {
      setOpenForm(false);
    }
    if (e.target.getAttribute("class") === "nav__form-times") {
      setOpenForm(false);
    }
  };

  // Category
  // http://taknews-backend.uz/api/categorynews
  // axios.post("http://taknews-backend.uz/api/categorynews", {
  //   category: "dunyo",
  // });

  // Shu joy nomini berib yuborish kerak.
  // http://taknews-backend.uz/api/placenews/
  // axios.post("http://taknews-backend.uz/api/placenews/", {place: "Namangan"})

  return (
    <>
      <header className="header">
        <div
          onClick={(e) => openSearchNavbar(e)}
          className={`nav-bg__form ${openForm && "nav-bg__form--scale"}`}
        >
          <div className="nav__form">
            <Image src={Search} alt="search" className="nav__form-bars" />
            <Input
              type="search"
              placeholder="Search"
              className="nav__form-search"
            />
            <img className="nav__form-times" src={Times} alt="times" />
          </div>
        </div>
        <div className="container">
          <nav className="nav">
            <div
              className="nav__click"
              onClick={() => dispatch(isOpenNavbar())}
            >
              <Image src={Bars} alt="bars" className="nav__bars" />
            </div>
            <Link to="/">
              <Image
                src={Intro}
                alt="TAK uz"
                title="TAK uz"
                className="nav__intro"
              />
            </Link>
            <LangObj langObj={langObj} />
            <div
              className="nav__search-click"
              onClick={() => setOpenForm(true)}
            >
              <Image className="nav__search" src={Search} alt="search" />
            </div>
            <div className="nav-buttons">
              <div className="nav-buttons__lang">
                <div
                  className="nav-buttons__option"
                  onClick={() => setOpenLang((prevLangState) => !prevLangState)}
                >
                  <h4 className="nav-buttons__lang-heading">
                    {storage.get("lang") || "uz"}
                  </h4>
                  <Image
                    src={Down}
                    alt="down"
                    className="nav-buttons__lang-down"
                  />
                </div>
                <ul
                  className={`nav-buttons__list ${
                    openLang && "nav-buttons__list--top"
                  }`}
                >
                  {languages?.length > 0 &&
                    languages?.map((el: any) => {
                      return (
                        el.hidden && (
                          <li
                            key={el.id}
                            className="nav-buttons__item"
                            onClick={() => changeLangFunction(el.lang)}
                          >
                            <h4 className="nav-buttons__item-heading">
                              {el.title}
                            </h4>
                          </li>
                        )
                      );
                    })}
                </ul>
              </div>
              <Button className="nav-buttons__btn" type="button">
                <Image
                  src={Telegram}
                  alt="telegram"
                  className="nav-buttons__btn-icon"
                />
                <h4 className="nav-buttons__btn-heading">мурожаат</h4>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
