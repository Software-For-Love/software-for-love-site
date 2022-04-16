import React from 'react';
import _ from 'lodash';

import {getData, getPages} from '../utils';
import ProjectFeedItemFilter from './BlogFeedItemFilter';

export default class ProjectFeedSection extends React.Component {
    render() {
        let section1 = _.get(this.props, 'section', null);
        let section_author = false;
        let section_category = false;
        let posts_all = getPages(this.props.pageContext.pages, '/projects');
        let posts_sorted = _.orderBy(posts_all, 'frontmatter.date', 'desc');
        let show_recent = _.get(section1, 'show_recent', null);
        let recent_count = _.get(section1, 'recent_count', null);
        let post_count = 0;
        if (_.get(section1, 'author', null)) {section_author = getData(this.props.pageContext.site.data, _.get(section1, 'author', null));}
        if (_.get(section1, 'category', null)) {section_category = getData(this.props.pageContext.site.data, _.get(section1, 'category', null));}
        return (
            <section className="section section--posts">
              {_.get(section1, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section1, 'title', null)}</h2>
              </div>)}
              <div className="container container--lg">
                <div className="flex flex--col-3">
                  {_.map(posts_sorted, (post, post_idx) => {
                      let is_post = false;
                      if ((_.get(post, 'frontmatter.template', null) === 'post')) {
                           is_post = true;}
                      return (<React.Fragment key={post_idx + '.1'}>
                        {(is_post && ((show_recent === false) || (post_count < recent_count))) && ((() => {
                             post_count = post_count + 1;
                            return (<ProjectFeedItemFilter ProjectPostFeedItem key={post_idx} {...this.props} project_feed_section={section1} post_page={post} section_author={section_author} section_category={section_category} />);
                        })())}
                      </React.Fragment>)
                  })}
                </div> 
              </div>
            </section>
        );
    }
}