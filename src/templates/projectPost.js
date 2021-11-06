import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import {graphql} from 'gatsby';


import components, {Layout} from '../components/index';
import {withPrefix, getData, Link, htmlToReact} from '../utils';
import BlogPostCategories from '../components/BlogPostCategories';
import BlogPostTags from '../components/BlogPostTags';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class ProjectPost extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="projectpost">
                {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                <div className="post__image">
                  <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} />
                </div>
                )}
                <div className="container container--lg">
                <header className="post__header">
                  <div id="block1">
                  <h1 className="post__title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  <div className="post__meta">
                    <span>On <time dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%B %d, %Y')}</time></span>
                    {_.get(this.props, 'pageContext.frontmatter.author', null) && ((() => {
                        let author = getData(this.props.pageContext.site.data, _.get(this.props, 'pageContext.frontmatter.author', null));
                        return (
                          author.link ? (
                            <span> by <Link to={withPrefix(author.link)}>{author.first_name} {author.last_name}</Link></span>
                          ) : 
                            <span> by {author.first_name} {author.last_name}</span>
                        );
                    })())}
                  </div>
                  </div>
                  <div id="block2">
                  <h5 className="post__intro">{_.get(this.props, 'pageContext.frontmatter.intro', null)}</h5>
                  <Link to={_.get(this.props, 'pageContext.frontmatter.link', null)}>
                    <button>{_.get(this.props, 'pageContext.frontmatter.buttontxt', null)}</button>
                  </Link>
                  </div>
                  <div className = "block3">

                  <h5 className="post__header1">{_.get(this.props, 'pageContext.frontmatter.header1', null)}</h5>
                  <h5 className="post__header2">{_.get(this.props, 'pageContext.frontmatter.header2', null)}</h5>
                  <h5 className="post__header3">{_.get(this.props, 'pageContext.frontmatter.header3', null)}</h5>
                  <h5 className="post__header4">{_.get(this.props, 'pageContext.frontmatter.header4', null)}</h5>

                  </div>
                </header>
                <h5 className="post__divider">{_.get(this.props, 'pageContext.frontmatter.divider', null)}</h5>
                <div className="post__copy">
                  {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                </div>
                {_.get(this.props, 'pageContext.frontmatter.tags', null) && (
                <footer className="post__footer">
                  <BlogPostTags {...this.props} tags={_.get(this.props, 'pageContext.frontmatter.tags', null)} />
                </footer>
                )}
              </div>
            </article>

            {_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })} 
            </Layout>
        );
    }
}
