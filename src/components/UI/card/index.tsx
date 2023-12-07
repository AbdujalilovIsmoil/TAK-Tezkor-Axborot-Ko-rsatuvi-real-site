import { Image } from "components/UI";
import { store, lodash } from "services";
import { Cards1, Cards2 } from "assets/images/svg";

const index = (props: any, { clickNews = () => {} }: any) => {
  const { Link } = lodash.get(store, "store");

  return (
    <>
      <Link to={`/news/2023-09-08/${props?.title?.split(" ")?.join("-")}`}>
        <li className="news-list__item" onClick={() => clickNews()}>
          <Image
            alt="card1"
            title="card1"
            src={props.full_image_url}
            className="news-list__item-img"
          />
          <div className="news-list__content">
            <div className="news-list__titles">
              <h3 className="news-list__content-heading">{props.title}</h3>
            </div>
            <div className="news-list__footer">
              <div className="news-list__box">
                <Image
                  src={Cards1}
                  alt="cards1"
                  title="cards1"
                  className="news-list__box-img"
                />
                <h4 className="news-list__box-heading">
                  {props?.created_at?.slice(0, 10)}
                </h4>
              </div>
              <div className="news-list__box">
                <Image
                  src={Cards2}
                  alt="cards2"
                  title="cards2"
                  className="news-list__box-img"
                />
                <h4 className="news-list__box-heading">{props.eye}</h4>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
};

export default index;
