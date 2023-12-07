import axios from "axios";
import { get } from "lodash";
import { Card } from "components/UI";
import { store, lodash } from "services";
import { useQuery } from "@tanstack/react-query";

const index = () => {
  const { useNavigate } = lodash.get(store, "store");
  const navigate = useNavigate();
  const clickNews = () => {
    navigate({
      pathname: "/news",
      search: `lang=ru`,
    });
  };

  const { data }: any = useQuery({
    queryKey: ["News"],
    queryFn: () =>
      axios
        .get("https://taknews-backend.uz/api/getallnews/uz")
        .then((response) => {
          return response;
        }),
  });

  return (
    <>
      <section className="news">
        <div className="news__content">
          <div className="container">
            <h4 className="news__content-heading">Сўнгги янгиликлар</h4>
          </div>
        </div>
        <div className="container">
          <ul className="news-list">
            {typeof get(data, "data") !== "string" &&
              get(data, "data")?.length > 0 &&
              get(data, "data").map((el: any) => {
                return <Card key={el.id} {...el} clickNews={clickNews} />;
              })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
