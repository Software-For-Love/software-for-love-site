import React from "react";
import _ from "lodash";

import { classNames, markdownify } from "../utils";
import SectionActions from "./SectionActions";

export default class TimelineSection extends React.Component {
    render() {
        let section = _.get(this.props, "section", null);
        return (
            <section className={classNames("section", "hero")}>
                <div className="container container--md">
                    {_.get(section, "title", null) && (
                        <h1 className="section__title align-center">
                            {_.get(section, "title", null)}
                        </h1>
                    )}
                </div>
                <div className="container container--lg">
                    {_.map(_.get(section, "items", null), (item, item_idx) => (
                        <div
                            key={item_idx}
                            className={classNames(
                                "flex",
                                "flex--middle",
                                "flex--center",
                                "flex--col-2",
                                {
                                    "align-center":
                                        _.get(item, "align", null) === "center",
                                    "align-right":
                                        _.get(item, "align", null) === "right",
                                }
                            )}
                        >
                            <div className="section__body cell">
                                {_.get(item, "title", null) &&
                                    (_.get(section, "title", null) ? (
                                        <h4 className="section__title">
                                            {_.get(item, "title", null)}
                                        </h4>
                                    ) : (
                                        <h3 className="section__title">
                                            {_.get(item, "title", null)}
                                        </h3>
                                    ))}
                                {_.get(item, "content", null) && (
                                    <div className="section__copy">
                                        <div>
                                            {markdownify(
                                                _.get(item, "content", null)
                                            )}
                                        </div>
                                    </div>
                                )}
                                {_.get(item, "actions", null) && (
                                    <div className="section__actions btn-group">
                                        <SectionActions
                                            {...this.props}
                                            actions={_.get(
                                                item,
                                                "actions",
                                                null
                                            )}
                                        />
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
