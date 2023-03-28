import _ from "lodash";
import React from 'react';
import { withPrefix } from "../utils";
import "../sass/components/_image_group.scss";

export default class ImageGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      hovered_image: null
    };
  }

  render () {
    return <div className="image-group-container">
        {_.map(this.props.images, (image_info, image_idx) => (
			<div
              className="image-group-media"
              style={{ 
                opacity: 
                  (this.state.hovered_image !== null && this.state.hovered_image !== image_idx) 
                    ? '0.4' 
                    : '1'
                }}
              onMouseOver={() => {this.setState({ hovered_image: image_idx })}}
              onMouseLeave={() => {this.setState({ hovered_image: null })}}
              key={image_idx}
            >
				<a href={_.get(image_info, "image_url", null)}>
				  <img
					src={withPrefix(_.get(image_info, "image", null))}
					alt={_.get(image_info, "image_alt", null)}
				  />
				</a>
            </div>
          )
        )
      }
    </div>
  }
}