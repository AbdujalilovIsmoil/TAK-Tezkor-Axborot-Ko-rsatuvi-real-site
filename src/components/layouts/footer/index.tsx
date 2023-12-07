import { get } from "lodash";
import { footer } from "data";
import { storage } from "services";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaYoutube,
  FaTelegram,
  FaInstagram,
} from "../../../assets/react-icons";

const index = () => {
  const [langObj, setLangObj] = useState<any[]>([]);
  const { language }: any = useSelector((state) => get(state, "navbar"));

  useEffect(() => {
    setLangObj(...[footer[0][(storage.get("lang") as string) || language]]);
  }, [storage.get("lang") as string, language]);


  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            {langObj.length > 0 &&
              langObj.map((el) => {
                return (
                  <>
                    <ul className="footer__list">
                      <li className="footer__item">
                        <h2 className="footer__item-heading">{el.about}</h2>
                      </li>
                      <li className="footer__item">
                        <h4 className="footer__item-paragraph">{el.date}</h4>
                      </li>
                      <li className="footer__item">
                        <h4 className="footer__item-paragraph">{el.date}</h4>
                      </li>
                      <li className="footer__item">
                        <h4 className="footer__item-paragraph">{el.desc}</h4>
                      </li>
                    </ul>
                    {el?.list?.length > 0 &&
                      el.list.map((el: any) => {
                        return (
                          <ul className="footer-list">
                            <li className="footer__item">
                              <h2 className="footer__item-heading">
                                {el.title}
                              </h2>
                            </li>
                            {el?.language?.length > 0 &&
                              el.language.map((el: any) => {
                                return (
                                  <>
                                    <li className="footer__item">
                                      <NavLink
                                        to={`/${el.title}`}
                                        className="footer__item-link"
                                      >
                                        {el.title}
                                      </NavLink>
                                    </li>
                                  </>
                                );
                              })}
                          </ul>
                        );
                      })}
                    {el?.our.length > 0 &&
                      el?.our.map((el: any) => {
                        return (
                          <>
                            <ul className="footer__list">
                              <li className="footer__item">
                                <h2 className="footer__item-heading">
                                  {el.title}
                                </h2>
                              </li>
                              {el?.about?.length > 0 &&
                                el.about.map((el: any) => {
                                  return (
                                    <>
                                      <li className="footer__item">
                                        <NavLink
                                          to={`${el.title}`}
                                          className="footer__item-link"
                                        >
                                          {el.title}
                                        </NavLink>
                                      </li>
                                    </>
                                  );
                                })}

                              <ul className="footer-logos">
                                <li className="footer-logos__item">
                                  <a
                                    href="#"
                                    target="_blank"
                                    className="footer-logos__item-link"
                                  >
                                    <FaTelegram className="footer-logos__item-icon footer-logos__item-icon--telegram" />
                                  </a>
                                </li>
                                <li className="footer-logos__item">
                                  <a
                                    href="#"
                                    target="_blank"
                                    className="footer-logos__item-link"
                                  >
                                    <FaInstagram className="footer-logos__item-icon footer-logos__item-icon--instagram" />
                                  </a>
                                </li>
                                <li className="footer-logos__item">
                                  <a
                                    href="#"
                                    target="_blank"
                                    className="footer-logos__item-link"
                                  >
                                    <FaYoutube className="footer-logos__item-icon footer-logos__item-icon--youtube" />
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </>
                        );
                      })}
                  </>
                );
              })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
