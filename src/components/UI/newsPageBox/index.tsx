import axios from "axios";
import { useEffect } from "react";
import { Image } from "components/UI";
import { Cards1, Cards2 } from "assets/images/svg";

const index = (props: any) => {
  useEffect(() => {
    axios.get("http://taknews-backend.uz/api/getonenews/28");
  }, []);

  return (
    <>
      <div className="news-page__box">
        <div className="news-page__contents">
          <h2 className="news-page__contents-heading">{props.title}</h2>
          <Image
            src={props.img}
            alt="news-page4"
            title="news-page4"
            className="news-page__contents-img"
          />
          <ul className="news-page__contents-list">
            {props.content.length > 0 &&
              props.content.map((props: any) => {
                return (
                  <li className="news-page__contents-item">
                    <p className="news-page__contents-desc">{props.content}</p>
                  </li>
                );
              })}
          </ul>

          <div className="news-page__contents-dates">
            <div className="news-page__eye">
              <div className="news-page__eye-box">
                <Image
                  src={Cards1}
                  alt="cards1"
                  title="cards1"
                  className="news-page__eye-img"
                />
                <h4 className="news-page__eye-heading">{props.date}</h4>
              </div>
              <div className="news-page__eye-box">
                <Image
                  src={Cards2}
                  alt="cards2"
                  title="cards2"
                  className="news-page__eye-img"
                />
                <h4 className="news-page__eye-heading">{props.eye}</h4>
              </div>
            </div>
          </div>
          <h4 className="news-page__contents-question">
            Янгиликлар » Жамият» Янги ўқув йилининг биринчи куни қандай об-ҳаво
            бўлади?
          </h4>
        </div>
      </div>
    </>
  );
};

export default index;
