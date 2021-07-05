import React from 'react';
import _ from 'lodash';

import {getData, Link, withPrefix} from '../utils';

export default class BlogPostAuthors extends React.Component {
    render() {
        let author= _.get(this.props, 'author', null);
        let container_class = _.get(this.props, 'container_class', null);
        let author_len = _.size(author);
        return (
            <div className={container_class}>
              {/* <span>In </span>
              {
              _.map(author, (author, author_idx) => {
                  let author_data = getData(this.props.pageContext.site.data, author);
                  return (
                    author_data.link ? (<React.Fragment key={author_idx + '.1'}>
                      <Link key={author_idx} to={withPrefix(author_data.link)}>{author_data.title}</Link>{(!(author_idx === author_len - 1)) && (', ')}
                    </React.Fragment>) : <React.Fragment key={author_idx + '.3'}>
                      <span key={author_idx + '.2'}>{author_data.title}</span>{(!(author_idx === author_len - 1)) && (', ')}
                    </React.Fragment>
                  )
              })} */}
            </div>
        );
    }
}
