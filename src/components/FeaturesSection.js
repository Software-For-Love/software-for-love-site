import React from "react";
import { useState, useEffect } from 'react';
import _ from "lodash";
import { Card, Space } from 'antd';

import { classNames, withPrefix, markdownify, Link } from "../utils";
import SectionActions from "./SectionActions";
import { Carousel, ImageGroup } from "./index";
import "../sass/components/_feature_carousel.scss";
export default class FeaturesSection extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  
  updateWidth = () => {
     this.setState({width: window.innerWidth});
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  render() {
    let section = _.get(this.props, "section", null);
	const largeScreenWidth = 820;
    const carouselTemplate = (item) => {
      return (
	    <div class="content-wrapper">
            <div class="quote-icon" style={{position: "absolute", left: "-15px", top: "-15px"}}>
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 21"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
				style={{marginLeft: "11px", marginTop: "14px"}}
              >
                <path
                  d="M11.3217 15.9788C11.3217 14.6955 10.9862 13.6192 10.3154 12.7457C9.83998 12.1448 9.1954 11.7496 8.38019 11.5615C7.57811 11.3748 6.81978 11.3617 6.13436 11.5207C5.90103 10.1353 6.28019 8.66817 7.24269 7.11359C8.20519 5.56046 9.45207 4.39088 10.9731 3.60921L8.66894 0.291504C7.50228 0.869004 6.39394 1.60109 5.37311 2.4863C4.33769 3.3715 3.41894 4.38942 2.60228 5.54005C1.78561 6.69067 1.17311 7.99005 0.779362 9.46296C0.385612 10.9359 0.274778 12.438 0.462903 13.9838C0.707903 16.0255 1.36707 17.6588 2.4404 18.8692C3.51228 20.0942 4.84957 20.7067 6.4479 20.7067C7.85519 20.7067 9.02332 20.2838 9.9479 19.4263C10.8637 18.5863 11.3187 17.4357 11.3187 15.973L11.3217 15.9773V15.9788ZM24.6275 15.9788C24.6275 14.6955 24.2921 13.6192 23.6212 12.7457C23.1458 12.1332 22.4983 11.7365 21.686 11.5542C20.8694 11.3734 20.1198 11.3646 19.4402 11.5221C19.2069 10.1513 19.5714 8.67838 20.5339 7.11796C21.4964 5.57213 22.7419 4.40546 24.2629 3.61796L21.9646 0.291504C20.7979 0.869004 19.6969 1.60109 18.6687 2.4863C17.6239 3.38462 16.6959 4.41056 15.9067 5.54005C15.0958 6.69213 14.4921 7.99005 14.0983 9.46296C13.6998 10.935 13.5923 12.4706 13.7819 13.9838C14.0225 16.0255 14.6787 17.6588 15.7506 18.8692C16.8181 20.084 18.151 20.6921 19.7494 20.6921C21.1596 20.6921 22.3277 20.2692 23.2523 19.4146C24.1666 18.5746 24.626 17.424 24.626 15.9613V15.9759L24.6275 15.9788Z"
                  fill="#3B4B71"
                />
              </svg>
            </div>
            <div class="overflow-container">
              <p class="testimonial">{item["testimonial"]}</p>
              <div class="seperator"></div>
              <p class="author">
                {item["author"]}
                <span> {item["relation"]} of </span> {item["company"]}
              </p>
            </div>
        <div class="carousel-content">
          {_.get(section, "image", null) && (
            <div
              className={classNames("cell", "section__media", {
                "section__media--right":
                  _.get(section, "image_position", null) === "right",
              })}
            >
              <img
                src={withPrefix(_.get(section, "image", null))}
                alt={_.get(section, "image_alt", null)}
              />
            </div>
          )}
		  
          
          </div>
        </div>
      );
    };
    return (
      <section className="section section--features">
        {_.get(section, "title", null) && (
          <div className="container container--md align-center">
            <h2 className="section__title">{_.get(section, "title", null)}</h2>
          </div>
        )}
        <div>
          {_.map(_.get(section, "features", null), (feature, feature_idx) => (
            <div style={{ backgroundColor: _.get(feature, "bgcolor", undefined) ? `#${_.get(feature, "bgcolor", undefined)}` : undefined, }}>
              <div
                key={feature_idx}
                className={classNames(
                  "flex",
                  "flex--middle",
                  "flex--center",
                  "flex--col-2",
                  "container",
                  "container--lg",
                  {
                    "align-center": _.get(feature, "align", null) === "center",
                    "align-right": _.get(feature, "align", null) === "right",
                  }
                )}
                style={{
                  margin: 'auto',
                  justifyContent: _.get(feature, "justify-content", null) || undefined,
                }}
              >
                {_.get(feature, "image", null) && (
                  <div
                    className={classNames("cell", "section__media", {
                      "section__media--right":
                        _.get(feature, "image_position", null) === "right",
                    })}
					style={{margin: this.state.width >= largeScreenWidth  ? _.get(feature, "image_margins", null) || "auto" : "auto"}}
                  >
                    {
                      <img
                        src={withPrefix(_.get(feature, "image", null))}
                        alt={_.get(feature, "image_alt", null)}
							style={{
								position:_.get(feature, "image_position_type", null),
								zIndex: _.get(feature, "image_zindex", null),
								width: _.get(feature, "image_width", null),
								height: _.get(feature, "image_height", null),
								float: _.get(feature, "image_float", null)
							}}
                      />
                    }
                  </div>
                )}
                {_.get(feature, "image_group", null) && (
                  <div
                    className={classNames("cell", "section__media", {
                      "section__media--right":
                        _.get(feature, "image_position", null) === "right",
                    })}
                  >
                    <ImageGroup images={_.get(feature, "image_group", null)} />
                  </div>
                )}
                {_.get(feature, "carousels", null) && (
                  <div
                    style={{ order: 2 }}
                    className={classNames("cell", "section__media", {
                      "section__media--right":
                        _.get(feature, "image_position", null) === "right",
                    })}
                  >
                    <h2 className="carousel__title">
                        {_.get(feature, "carousel_title", null)}
                    </h2>
                    <div className="carousel-wrapper">
                      <Carousel
                        items={feature["carousels"]["items"]}
                        flickityOptions={{
                          wrapAround: true,
						  groupCells: true,
                          draggable: false,
                          pageDots: false,
                        }}
                        carouselTemplate={carouselTemplate}
                      ></Carousel>
                    </div>
                  </div>
                )}
                {_.get(feature, "title", null) || _.get(feature, "content", null) || _.get(feature, "actions", null) ? ( <div className="flex-2 section__body cell"
				style={{
				  boxShadow:_.get(feature, "content_box_shadow", null),
				  backgroundColor: _.get(feature, "content_background", null),
				  paddingBlock: _.get(feature, "content_padding", null)
			    }}>
                  {_.get(feature, "title", null) &&
                    (_.get(section, "title", null) ? (
                      <h3 className="section__title">
                        {_.get(feature, "title", null)}
                      </h3>
                    ) : (
                      <h2 className="section__title">
                        {_.get(feature, "title", null)}
                      </h2>
                    ))}
                  {_.get(feature, "content", null) && (
                    <div className="section__copy"
					  style={{
					    margin: this.state.width >= largeScreenWidth ? _.get(feature, "content_margins", null) : null,
					    color:_.get(feature, "content_color", null),
					    fontSize:_.get(feature, "content_size", null),
					    fontFamily: _.get(feature, "content_font", null)
					}}>
                      {markdownify(_.get(feature, "content", null))}
                    </div>
                  )}
                  {_.get(feature, "actions", null) && (
                    <div className="section__actions btn-group"style={{
					  margin:_.get(feature, "button_margins", null)
					  }}>
                      <SectionActions
                        {...this.props}
                        actions={_.get(feature, "actions", null)}
                      />
                    </div>
                  )}
                </div>) : ""}
                {_.get(feature, "cards", null) && (
                  <Space size={50} style={{ flexBasis: '100%', justifyContent: 'space-between' }}>
                    {_.map(_.get(feature, "cards", null), (card, card_idx) => (
                      <Link to={_.get(card, "redirect")} style={{ textDecoration: 'none' }}>
                        <Card key={card_idx} hoverable cover={<img alt={card.alt} src={card.image} />}>
                          <Card.Meta title={card.label} description={card.caption} />
                        </Card>
                      </Link>
                    ))}
                  </Space>
                )}
                {_.get(feature, "link", null) && (
                  <div className="cell" style={{ marginTop: '25px' }}>
                    <Link to={_.get(feature, "link")["url"]}>
                      {_.get(feature, "link")["title"]}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}