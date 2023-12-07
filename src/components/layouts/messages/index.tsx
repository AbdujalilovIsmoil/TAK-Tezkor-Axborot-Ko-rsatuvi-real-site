import api from "services/axios";
import { lodash } from "services";
import { useQuery } from "@tanstack/react-query";

const index = () => {

  const { data }: any = useQuery({
    queryKey: ["getAllMessage"],
    queryFn: () =>
      api
        .get("https://taknews-backend.uz/api/getallnews/uz")
        .then((response) => {
          return response;
        }),
  });

  return (
    <>
      <section className="messages">
        <div className="container">
          <div className="messages__list">
            {typeof lodash.get(data, "data") !== "string" &&
              lodash.get(data, "data")?.length > 0 &&
              lodash
                .get(data, "data")
                ?.slice(0, 6)
                ?.map((el: any) => {
                  console.log(el);
                  return (
                    <li className="messages__item" key={el.id}>
                      <div
                        className="messages__item-img"
                        style={{ backgroundImage: `url(${el.full_image_url})` }}
                      >
                        <h2 className="messages__item-title">{el.title}</h2>
                      </div>
                    </li>
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
