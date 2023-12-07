import { Image } from "components/UI";
import { Advertisiment } from "assets/images/jpg";

const index = () => {
  return (
    <>
      <section className="advertisiment">
        <div className="container">
          <Image
            src={Advertisiment}
            alt="advertisiment"
            title="advertisiment"
            className="advertisiment__img"
          />
        </div>
      </section>
    </>
  );
};

export default index;
