import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {withPrefix} from '../utils';
import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

import CookieConsent from 'react-cookie-consent';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title', null) && (_.get(this.props, 'pageContext.frontmatter.title', null) + ' | ')}{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.excerpt', null) || _.get(this.props, 'pageContext.site.siteMetadata.description', null)}/>
                    {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.favicon', null))}/>
                    )}
                </Helmet>
                <div id="site-wrap" className="site">
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
                <CookieConsent
                    location="bottom"
                    buttonText="Accept"
                    declineButtonText="Decline"
                    cookieName="gatsby-gdpr-google-analytics"
                    background="#394a74">
                This site uses cookies. 
                <div>
                    <a href="https://www.softwareforlove.com/terms" target="_blank" rel="noopener noreferrer">
                    Link to Terms and Conditions
                    </a>
                </div>
                </CookieConsent>
            </React.Fragment>
        );
    }
}
