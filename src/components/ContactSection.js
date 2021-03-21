import React from 'react';
import _ from 'lodash';
import { navigate } from 'gatsby';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class ContactSection extends React.Component {
    render() {
      let section = _.get(this.props, 'section', null);
      let background = _.get(section, 'background', null);
      let background_color = _.get(background, 'background_color', null) || 'white';
      let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
      let background_opacity = background_opacity_pct * 0.01;
      let background_size = _.get(background, 'background_image_size', null) || 'cover';
      let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';

      function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            "subject": "A new user wants to get in touch with SFL"
          })
        }).then(() => navigate(form.getAttribute('action'))).catch(error => alert(error))
      }

      return (
          <section className={classNames('section', 'hero', {'bg-image': _.get(section, 'has_background', null) && _.get(background, 'background_image', null), 'inverse bg-blue': _.get(section, 'has_background', null) && (background_color === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (background_color === 'gray'), 'section--padding': _.get(section, 'has_background', null) || _.get(section, 'image', null)})}>
            <div className="container container--lg">
              <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(section, 'align', null) === 'center', 'align-right': _.get(section, 'align', null) === 'right'})}>
                
                {(_.get(section, 'has_background', null) && _.get(background, 'background_image', null)) && (
                <div className="bg-image__image" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(background, 'background_image', null)) + '\'); opacity: ' + background_opacity + '; background-size: ' + background_size + '; background-repeat: ' + background_repeat)}/>
                )}

                {_.get(section, 'image', null) && (
                <div className={classNames('cell', 'section__media', {'section__media--right': _.get(section, 'image_position', null) === 'right'})}>
                  <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                </div>
                )}
                
                <div className="cell section__body">
                  {_.get(section, 'title', null) && (
                  <div>
                    <h1 className="section__title">{_.get(section, 'title', null)}</h1>
                  </div>
                )}

                {_.get(section, 'subtitle', null) && (
                <div className="section__copy">
                  <p>{_.get(section, 'subtitle', null)}</p>
                </div>
                )}

                {_.get(section, 'actions', null) && (
                <div className="section__actions btn-group">
                  <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
                )}

                    {_.get(section, 'has_form', null) && (
                      <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou" onSubmit={() => handleSubmit} subject="Someone reached out to SFL">
                        
                        <div className="sr-only">
                          <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                          <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                        </div>

                        <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />

                        <input aria-labelledby="honeypot-label" type="hidden" name="subject" value="Subject to be replaced..."/>

                        <div className="form-group">
                          <label id="first-name-label" htmlFor="name">First Name</label>
                          <input aria-labelledby="first-name-label" type="text" name="first-name" id="first-name" placeholder="Your first name" required />
                        </div>

                        <div className="form-group">
                          <label id="last-name-label" htmlFor="name">Last Name</label>
                          <input aria-labelledby="last-name-label" type="text" name="last-name" id="last-name" placeholder="Your last name" required />
                        </div>

                        {_.get(section, 'has_organization_field', null) &&
                          (<div className="form-group">
                            <label id="organization" htmlFor="name">Organization</label>
                            <input aria-labelledby="organization" type="text" name="organization" id="organization" placeholder="N/A if non-applicable" required />
                          </div>)
                        }

                        <div className="form-group">
                          <label id="email-label" htmlFor="email">Email</label>
                          <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Your email" />
                        </div>

                        <div className="form-group">
                          <label id="phone-label" htmlFor="phone">Phone Number</label>
                          <input aria-labelledby="phone-label" type="tel" name="tel" id="tel" placeholder="Your phone number" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="subject">Preferred method of contact</label>
                          <div className="form-select-wrap">
                            <select name="subject" id="subject">
                              <option value="">Please select</option>
                              <option value="Email">Email</option>
                              <option value="Phone">Phone</option>
                            </select>
                          </div>
                        </div>

                        {_.get(section, 'has_university_field', null) && (
                          <div className="form-group">
                            <label id="university" htmlFor="phone">University</label>
                            <input aria-labelledby="university" type="text" name="text" id="university" placeholder="Current Institution" />
                          </div>
                        )}

                        {_.get(section, 'has_technologies_field', null) && (
                          <div className="form-group">
                            <label id="technologies" htmlFor="phone">Technologies</label>
                            <input aria-labelledby="technologies" type="text" name="text" id="technologies" placeholder="List all technologies and programming languages you know" />
                          </div>
                        )}

                        {_.get(section, 'has_message_field', null) && (
                          <div className="form-group">
                          <label id="message-label" htmlFor="message">Message</label>
                          <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Your message" />
                        </div>
                        )}

                        <div className="form-group form-checkbox">
                          <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                          <label id="consent-label" htmlFor="consent">I understand that this form is storing my submitted information so I can be
                            contacted.</label>
                        </div>

                        <div className="form-submit">
                          <button type="submit" className="button">Submit</button>
                        </div>

                    </form>
                    
                    )}

                 </div>
               </div>
             </div>
           </section>
       );
   }
}
