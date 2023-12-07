const index = (props: any) => {
  return (
    <>
      <li className="news-page__cards-item">
        <img
          src={props.img}
          alt="news-page2"
          title="news-page2"
          className="news-page__cards-img"
        />
        <div className="news-page__cards-content">
          <h4 className="news-page__cards-heading">{props.title}</h4>
          <div className="news-page__cards">
            <div className="cards-box">
              <h5 className="cards-box__heading">{props.date}</h5>
              <h5 className="cards-box__heading">{props.category}</h5>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default index;
