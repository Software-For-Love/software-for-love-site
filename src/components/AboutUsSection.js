import React from "react";
import _ from "lodash";

import { classNames, withPrefix, markdownify } from "../utils";
import SectionActions from "./SectionActions";
import "../sass/components/_image_group.scss";
export default class FeaturesSection extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section className="section section--features" style={{backgroundColor: '#F0F3F8', maxWidth: '1140px', marginRight: 'auto', marginLeft: 'auto'}}>
        {_.get(section, "title", null) && (
          <div className="container container--md align-center" style={{paddingTop: "2em", marginBottom: "-2em"}}>
            <h2 className="section__title" style={{color:'#263455'}}>{_.get(section, "title", null)}</h2>
          </div>
        )}
        <div>
          {_.map(_.get(section, "features", null), (feature, feature_idx) => (
            <div
              key={feature_idx}
              className={classNames(
                "flex",
                "flex--middle",
                "flex--center",
                "flex--col-2",
                {
                  "align-center": _.get(feature, "align", null) === "center",
                  "align-right": _.get(feature, "align", null) === "right",
                }
              )}
            >

              <div className="flex-2 section__body cell" >
                {_.get(feature, "title", null) && (
                    <div className="section__title" style={{fontSize: "1.4em", fontWeight: "bold", color:"#000"}}>
                      {_.get(feature, "title", null)}
                    </div>
                  )}
                {_.get(feature, "content", null) && (
                  <div className="section__copy" style={{fontSize: "1.4em", color:"#000"}}>
                    {markdownify(_.get(feature, "content", null))}
                  </div>
                )}
				
				<div className="image-group-container">
					{_.map(_.get(feature, "image_group", null), (image_info, image_idx) => (
				<div
				  className="image-group-media"
				  key={image_idx}
				>
					<img
					  src={withPrefix(_.get(image_info, "image", null))}
					  alt={_.get(image_info, "image_alt", null)}
					/>
					<div style={{color:"#263455"}}>
						{_.get(image_info, "image_caption", null)}
					</div>
				</div>
				)
        )
      }
    </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
