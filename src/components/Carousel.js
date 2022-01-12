import React from "react";

import Flickity from "react-flickity-component";
import "../sass/components/_carousel.scss";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, flickityOptions, carouselTemplate } = this.props;
    return (
      <>
        <section class="carousel-box-container">
          <Flickity options={flickityOptions}>
            {items.map((item, index) => {
              return (
                <div key={index} className="carousel-cell">
                  {carouselTemplate(item)}
                </div>
              );
            })}
          </Flickity>
        </section>
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
      </>
    );
  }
}
