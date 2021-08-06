import React from "react";
import { Anchor } from "antd";
import "antd/dist/antd.css";
import _ from "lodash";

import { classNames } from "../utils";

const { Link } = Anchor;

export default class AnchorSection extends React.Component {
    render() {
        let section = _.get(this.props, "section", null);
        return (
            <section className={classNames("section", "hero")}>
                <div className="container container--lg">
                    <div
                        className={classNames(
                            "flex",
                            "flex--middle",
                            "flex--center",
                            "flex--col-2",
                            "bg-gray"
                        )}
                    >
                        <Anchor className="section__body cell" ghost>
                            {_.map(
                                _.get(section, "anchors", null),
                                (anchor) => (
                                    <Link
                                        href={_.get(anchor, "href", null)}
                                        title={_.get(
                                            anchor,
                                            "placeholder",
                                            null
                                        )}
                                    />
                                )
                            )}
                        </Anchor>
                    </div>
                </div>
            </section>
        );
    }
}
