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
                  <a href="https://youtu.be/EdDm9iURWlc" target="noblank">
                    <i className="fa fa-envelope-o mx-1 my-1"></i>Email
                  </a>
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
    </>
  );
}
