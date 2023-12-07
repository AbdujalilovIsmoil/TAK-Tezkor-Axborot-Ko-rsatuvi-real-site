import { footer, header, languages } from "data";
import { useSelector, useDispatch } from "react-redux";
import { isOpenNavbar, changeLanguage } from "store/navbar";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const store = {
  Link,
  footer,
  header,
  languages,
  useSelector,
  useNavigate,
  useDispatch,
  isOpenNavbar,
  changeLanguage,
  useSearchParams,
};

export default { store };
