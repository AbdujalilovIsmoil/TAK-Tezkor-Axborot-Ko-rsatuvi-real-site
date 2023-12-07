import { Image } from "components/UI";
import { Advertisiment } from "assets/images/jpg";

const index = () => {
  return (
    <>
      <section className="advertisiment-second">
        <div className="container">
          <Image
            src={Advertisiment}
            alt="advertisiment"
            title="advertisiment"
            className="advertisiment-second__img"
          />
        </div>
      </section>
    </>
  );
};

export default index;
