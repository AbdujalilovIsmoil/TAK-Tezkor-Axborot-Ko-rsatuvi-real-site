import { lodash, store } from "services";
import { NewsPageIcon1 } from "assets/images/svg";
import { card, newsCard, newsContent } from "data";
import { NewsPage1, NewsPage3 } from "assets/images/jpg";
import { Card, Image, NewsCard, NewsPageBox } from "components/UI";

const index = () => {
  const { useNavigate } = lodash.get(store, "store");
  const navigate = useNavigate();
  const clickNews = () => {
    navigate({
      pathname: "/news",
      search: `lang=ru`,
    });
  };
  return (
    <>
      <section className="news-page">
        <div className="container">
          <div className="news-page__container">
            <div className="news-page__box">
              <Image
                src={NewsPage1}
                alt="news-page"
                title="news-page"
                className="news-page__box-img"
              />
              <ul className="news-page__list">
                <li className="news-page__item">
                  <h2 className="news-page__item-heading">Сўнгги янгиликлар</h2>
                </li>
                <ul className="news-page__cards">
                  {newsCard.length > 0 &&
                    newsCard.map((el: any) => {
                      return el.hidden && <NewsCard {...el} />;
                    })}
                </ul>
              </ul>
              <Image
                src={NewsPage3}
                alt="news-page3"
                title="news-page3"
                className="news-page__box-img"
              />
              <ul className="news-page__list">
                <li className="news-page__item">
                  <h2 className="news-page__item-heading">Сўнгги янгиликлар</h2>
                </li>
                <ul className="news-page__cards">
                  {newsCard.length > 0 &&
                    newsCard.map((el: any) => {
                      return el.hidden && <NewsCard {...el} />;
                    })}
                </ul>
              </ul>
            </div>
            {newsContent.length > 0 &&
              newsContent.map((el: any) => {
                return <NewsPageBox {...el} />;
              })}
          </div>
        </div>
        <div className="news-page__messages">
          <div className="container">
            <div className="news-page__top">
              <h2 className="news-page__top-heading">Жамият янгиликлари</h2>
              <div className="news-page__top-box" onClick={() => navigate("/")}>
                <h4 className="news-page__top-box-heading">Барчаси</h4>
                <img
                  src={NewsPageIcon1}
                  alt="news-page-icon"
                  className="news-page__top-box-img"
                />
              </div>
            </div>
            <ul className="news-list">
              {card.length > 0 &&
                card.slice(0, 8).map((el) => {
                  return (
                    el.hidden && (
                      <Card key={el.id} {...el} clickNews={clickNews} />
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
