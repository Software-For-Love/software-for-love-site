import React from 'react';
import _ from 'lodash';

import {getData, withPrefix, markdownify} from '../utils';

export default class TeamSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--team" style= {{height:"50px;"}}>
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg">
                <div className="flex flex--col-3">
                  {_.map(_.get(section, 'team', null), (person, person_idx) => {
                      let person_data = getData(this.props.pageContext.site.data, person);
                      return (
                      <div key={person_idx} className="cell" style= {{paddingRight:"0.25rem", paddingLeft:"0.25rem", flex:"0 0 25%"}}>
                        <div className="card team-member" style={{width: "75%" ,height:"75%"}}>
                          {person_data.photo && (
                          <figure className="card__media card__media--bottom" >
                            <img src={withPrefix(person_data.photo)} alt={person_data.photo_alt} />
                          </figure>
                          )}
                          <div className="card__body" style={{padding:"0.5rem" , textAlign:"center"}}>
                            <header className="card__header">
                            <h4 className="h4 card__title" style={{marginBottom:"0px"}} >{person_data.first_name}</h4>
                            <h4 className="h4 card__title" style={{marginBottom:"0px"}} >{person_data.last_name}</h4>
                            </header>
                            {person_data.bio && (
                            <div className="card__copy">
                              {markdownify(person_data.bio)}
                            </div>
                            )}
                            
                            <div class="icon">
                              <div class="linkedin" >
                              <a href= {person_data.linkedin}  target="_blank">
                              <svg enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" ><g fill="#394A74"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"></path><path d="m.396 7.977h4.976v16.023h-4.976z"></path><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"></path></g></svg></a>
                              </div>

                            </div>

                          </div>

                          
                        </div>
                      </div>
                      )
                  })}
                </div>
              </div>
            </section>
        );
    }
}
