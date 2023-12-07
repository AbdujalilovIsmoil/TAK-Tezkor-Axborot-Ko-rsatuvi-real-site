import axios from "axios";
import { get } from "lodash";
import { Card } from "components/UI";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const index = () => {
  const navigate = useNavigate();
  const { data }: any = useQuery({
    queryKey: ["News"],
    queryFn: () =>
      axios
        .get("https://taknews-backend.uz/api/getallnews/uz")
        .then((response) => {
          return response;
        }),
  });

  const clickNews = () => {
    navigate({
      pathname: "/news",
      search: `lang=ru`,
    });
  };

  return (
    <>
      <section className="owl-carousel">
        <div className="news__content">
          <div className="container">
            <h4 className="news__content-heading">Кўп ўқилганлар</h4>
          </div>
        </div>
        <div className="container">
          <Swiper
            loop={true}
            draggable={true}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            className="owl-carousel__list"
            modules={[Pagination, Autoplay]}
            breakpoints={{
              1920: {
                slidesPerView: 4,
              },
              1250: {
                slidesPerView: 4,
              },
              950: {
                slidesPerView: 3,
              },
              577: {
                slidesPerView: 2,
              },
              360: {
                slidesPerView: 1,
              },
            }}
          >
            {typeof get(data, "data") !== "string" &&
              get(data, "data")?.length > 0 &&
              get(data, "data").map((el: any) => {
                return (
                  <SwiperSlide>
                    <Card {...el} clickNews={clickNews} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default index;
