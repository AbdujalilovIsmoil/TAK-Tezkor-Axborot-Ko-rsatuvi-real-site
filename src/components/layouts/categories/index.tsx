import axios from "axios";
import { get } from "lodash";
import { categories } from "data";
import { storage } from "services";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const index = () => {
  const { language }: any = useSelector((state) => get(state, "navbar"));
  const [categoryData, setCategoryData] = useState<string[]>([]);

  const clickHandler = (title: string) => {
    axios
      .post(
        "http://taknews-backend.uz/api/categorynews/",
        {
          category: title,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };

  useEffect(() => {
    setCategoryData([
      ...categories[0][(storage.get("lang") as string) || language],
    ]);
  }, [language, storage.get("lang") as string]);

  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="categories__bg">
            <ul className="categories__list">
              {categoryData.length > 0 &&
                categoryData.map((el: any) => {
                  return (
                    el.hidden && (
                      <li
                        className="categories__item"
                        key={el.id}
                        onClick={() => clickHandler(el.title)}
                      >
                        <h4 className="categories__heading">{el.title}</h4>
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
