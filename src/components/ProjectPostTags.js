import React from 'react';
import _ from 'lodash';

export default class ProjectPostTags extends React.Component {
    render() {
        let tags = _.get(this.props, 'projectTags', null);
        return (
            _.map(tags, (projectTags, tag_idx) => (
              <span key={tag_idx}>{projectTags}</span>
            ))
        );
    }
}
