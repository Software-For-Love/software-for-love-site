import React from 'react';
import _ from 'lodash';
import {classNames, withPrefix, markdownify,toStyleObj} from '../utils';
import SectionActions from './SectionActions';

export default class FeaturesSection extends React.Component {
    render() {
        
        let section = _.get(this.props, "section", null);
        let feature = _.get(section,'features',null);
        let background = _.get(section, "background", null);
        let background_color =
            _.get(background, "background_color", null) || "white";
        let background_opacity_pct =
            _.get(background, "background_image_opacity", null) || 100;
        let background_opacity = background_opacity_pct * 0.01;
        let background_size =
            _.get(background, "background_image_size", null) || "cover";
        let background_repeat =
            _.get(background, "background_image_repeat", null) || "no-repeat";

        return (


          <section
                className={classNames("section", "hero", {
                    "bg-image":
                        _.get(section, "has_background", null) &&
                        _.get(background, "background_image", null),
                    "inverse bg-blue":
                        _.get(section, "has_background", null) &&
                        background_color === "blue",
                    "inverse bg-light":
                        _.get(section, "has_background", null) &&
                        background_color === "light",
                    "bg-gray":
                        _.get(section, "has_background", null) &&
                        background_color === "gray",
                    "bg-mintgreen":
                        _.get(section, "has_background", null) &&
                        background_color === "mintgreen",
                    "section--padding":
                        _.get(section, "has_background", null) ||
                        _.get(section, "image", null),
                })}
            >
                {_.get(section, "has_background", null) &&
                    _.get(background, "background_image", null) && (
                        <div
                            className="bg-image__image"
                            style={toStyleObj(
                                "background-image: url('" +
                                    withPrefix(
                                        _.get(
                                            background,
                                            "background_image",
                                            null
                                        )
                                    ) +
                                    "'); opacity: " +
                                    background_opacity +
                                    "; background-size: " +
                                    background_size +
                                    "; background-repeat: " +
                                    background_repeat
                            )}
                        />
                    )}
            <section className="section section--features">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
 
              <div className="container container--lg">
                {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
                <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                  {_.get(feature, 'image', null) && (
                  <div className={classNames('cell', 'section__media', {'section__media--right': _.get(feature, 'image_position', null) === 'right'})}>
                    <img src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} />
                  </div>
                  )}
                  <div className="section__body cell">
                    {_.get(feature, 'title', null) && (
                      _.get(section, 'title', null) ? (
                      <h3 className="section__title">{_.get(feature, 'title', null)}</h3>
                      ) : 
                      <h3 className="section__title">{_.get(feature, 'title', null)}</h3>
                    )}

                    {_.get(feature, 'content', null) && (
                    <div className="section__copy">
                      {markdownify(_.get(feature, 'content', null))}
                    </div>
                    )}
                    {_.get(feature, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(feature, 'actions', null)} />
                    </div>
                    )}
                  </div>
                </div>
                ))}
              </div>
            </section>
          </section>
        );
    }
}
