import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';
import { Link } from "gatsby"

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
                    font-family = "Segoe UI"
                    cookieName="gatsby-gdpr-google-analytics"
                    style={{ background: "#394A74" }}
                    buttonStyle={{ background: "#FFFFFF", color:"#394A74", fontSize: "1em", borderRadius: '5px', padding: "0.625em 1.5em" }}>
                    We value your privacy. We use cookies to give you the best online experience and to better understand our visitors. To find out more, please read our <Link to="/terms/"> privacy policy</Link>.
                </CookieConsent>
            </React.Fragment>
        );
    }
}
