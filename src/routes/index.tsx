import { Outlet } from "react-router-dom";
import { Categories, Footer, Header, OpenNavbar } from "components/layouts";

const index = () => {
  return (
    <>
      <Header />
      <OpenNavbar />
      <Categories />
      <Outlet />
      <Footer />
    </>
  );
};

export default index;
