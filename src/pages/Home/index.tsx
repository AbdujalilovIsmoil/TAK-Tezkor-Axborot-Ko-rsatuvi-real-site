import {
  News,
  Messages,
  NewsSecond,
  OwlCarousel,
  Advertisiment,
  AdvertisimentSecond,
} from "components/layouts";

const index = () => {
  return (
    <>
      <Advertisiment />
      <Messages />
      <News />
      <AdvertisimentSecond />
      <NewsSecond />
      <OwlCarousel />
    </>
  );
};

export default index;
