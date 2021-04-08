import React from 'react';
import _ from 'lodash';
import { navigate } from 'gatsby';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

export default class VolunteersForm extends React.Component {

    handleOnChange = e => {
      this.setState({ [e.target.name]: e.target.value }, () => {
      });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      }).then(() => navigate(form.getAttribute('action'))).catch(error => alert(error))
    }

    render() {
      let section = _.get(this.props, 'section', null);
      let background = _.get(section, 'background', null);
      let background_color = _.get(background, 'background_color', null) || 'white';
      let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
      let background_opacity = background_opacity_pct * 0.01;
      let background_size = _.get(background, 'background_image_size', null) || 'cover';
      let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';
      let starStyle = {color: "red"};
      let required_star = <span style={starStyle}>*</span>
      let interests = [
        "Marketing",
        "Partnerships and Business Development",
        "Legal and Finance", 
        "HR and Culture", 
        "Front-end Engineering", 
        "Back-end Engineering",
        "Data Science",
        "Project Management",
        "UI/UX and Design"
      ]
     
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
                  <p><em>All fields marked with {required_star} are required</em></p>
                </div>
                )}

                {_.get(section, 'actions', null) && (
                <div className="section__actions btn-group">
                  <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
                )}
            
                      <form name="volunteer-form" id="volunteer-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou" onSubmit={this.handleSubmit} >
                        
                        <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="volunteer-form" />

                        <div className="sr-only">
                          <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                          <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                        </div>

                          <input aria-labelledby="honeypot-label" type="hidden" id="subject" name="subject" value="A potential volunteer wants to join SFL" />

                        <div className="form-group">
                          <label id="first-name-label" htmlFor="first-name">First Name {required_star}</label>
                          <input aria-labelledby="first-name-label" type="text" name="first-name" id="first-name" placeholder="Your first name" onChange={this.handleOnChange} required />
                        </div>

                        <div className="form-group">
                          <label id="last-name-label" htmlFor="last-name">Last Name {required_star}</label>
                          <input aria-labelledby="last-name-label" type="text" name="last-name" id="last-name" placeholder="Your last name" onChange={this.handleOnChange} required />
                        </div>


                        <div className="form-group">
                          <label id="email-label" htmlFor="email">Email {required_star} </label>
                          <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Your email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" onChange={this.handleOnChange} required/>
                        </div>


                        <div className="form-group">
                            <label id="university_label" htmlFor="university_id">University {required_star} </label>
                            <input aria-labelledby="university_label" type="text" name="university" id="university_id" placeholder="Current Institution" onChange={this.handleOnChange} required/>
                        </div>


                        <div className="form-group">
                            <label id="Interests" htmlFor="interests">Interests</label>
                            {interests.map(interest => {
                              return (
                                <div className="form-checkbox">
                                  <input aria-labelledby={interest+"_label"} type="checkbox" name={interest+"_name"} id={interest+"_id"} onChange={this.handleOnChange} />
                                  <label id={interest+"_label"} htmlFor={interest+"_id"}>{interest}</label>
                                </div>
                              )})}
                        </div>

                        {/* {_.get(section, 'has_resume_links', null) && ( */}
                          {/* <div className="form-group">
                            <label id="resume_label" htmlFor="resume">Resume {required_star} </label>
                            <input aria-labelledby="resume_label" type="file" name="resume" id="resume" placeholder="Please add your resume" onChange={this.handleOnChange} required/>
                          </div> */}
                        {/* // )} */}

                        
                          <div className="form-group">
                            <label id="linkedin_label" htmlFor="linkedin">LinkedIn </label>
                            <input aria-labelledby="linkedin_label" type="text" name="linkedin" id="linkedin" placeholder="Linkedln URL Here" onChange={this.handleOnChange} required/>
                          </div>
                        

                        
                          <div className="form-group">
                            <label id="github_label" htmlFor="github">Github </label>
                            <input aria-labelledby="github_label" type="text" name="github" id="github" placeholder="GitHub URL Here" onChange={this.handleOnChange} required/>
                          </div>


                        <div className="form-group form-checkbox">
                          <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" onChange={this.handleOnChange} required/>
                          <label id="consent-label" htmlFor="consent">I understand that this form is storing my submitted information so I can be
                            contacted. {required_star}</label>
                        </div>

                        <div className="form-submit">
                          <button type="submit" className="button">Submit</button>
                        </div>

                    </form>

                 </div>
               </div>
             </div>
           </section>
       );
   }
}
