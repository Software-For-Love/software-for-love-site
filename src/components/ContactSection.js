import React from 'react';

export default class ContactSection extends React.Component {
    render() {
        return (
            <section className="section">
              <div className="container container--md">
                <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="sr-only">
                    <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                    <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                  </div>
                  <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                  <div className="form-group">
                    <label id="name-label" htmlFor="First Name">First Name</label>
                    <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="First Name" required />
                  </div>
                  <div className="form-group">
                          <label id="last-name-label" htmlFor="name">Last Name</label>
                          <input aria-labelledby="last-name-label" type="text" name="name" id="last-name" placeholder="Last name" required />
                  </div>
                  <div className="form-group">
                    <label id="email-label" htmlFor="email">Email</label>
                    <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Your email" required />
                  </div>

                  <div className="form-group">
                    <label id="university-label" htmlFor="University">Which university do you attend?</label>
                    <input aria-labelledby="university-label" type="university" name="university" id="university" placeholder="University name" required />
                  </div>
                  
                  <div className="form-group">
                    <label id="Languages-label" htmlFor="Programming Languages">List some of the programming languages you're proficient with</label>
                    <input aria-labelledby="Programming languages-" type="Programming Languages" name="Programming Languages" id="Programming Languages" placeholder="Programming Languages" required />
                  </div>
                  
  {/*                 {_.get(section, 'has_university_field', null) && (
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
 */}
                    <div className="form-group">
                    <label id="message-label" htmlFor="message">Message</label>
                    <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Your message" />
                  </div>
                  <div className="form-group form-checkbox">
                    <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                    <label id="consent-label" htmlFor="consent">I understand that this form is storing my submitted information so I can be
                      contacted.</label>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="button">Get In Touch</button>
                  </div>
                </form>
              </div>
            </section>
        );
    }
}
