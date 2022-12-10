import React from "react";
import "../../styles/CenterCards.css";
import { Link } from "react-router-dom";

export default function CenterCards(props) {
  return (
    <>
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle"></div>

          <article className="postcard light blue">
            <Link className="postcard__img_link" to={props.center}>
              <img
                className="postcard__img"
                src={props.image}
                alt="Img Title"
              />
            </Link>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <Link to={props.center}>{props.name}</Link>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-clock px-1"></i>
                  {props.time}
                </time>
              </div>
              <div className="postcard__bar"></div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <Link to="/contact" target="noblank">
                    <i className="fa fa-envelope-o mx-1 my-1"></i>Email
                  </Link>
                </li>
                <li className="tag__item">
                  <a href={props.phone}>
                    <i className="fa fa-phone mx-1 my-1"></i>Phone
                  </a>
                </li>
                <li className="tag__item play blue">
                  <a href={props.location} target="noblank">
                    <i className="fa fa-location-arrow mx-1 my-1"></i>Location
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* DARK MODE */}
      {/* <section className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">
            My Cards Dark
          </h1>

          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#!">
              <img
                className="postcard__img"
                src="https://picsum.photos/1000/1000"
                alt="Img Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#!">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Podcast
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>55 mins.
                </li>
                <li className="tag__item play blue">
                  <a href="#!">
                    <i className="fas fa-play mr-2"></i>Play Episode
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section> */}
    </>
  );
}
