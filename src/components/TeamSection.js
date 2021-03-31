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
                            
                            <div class="icon" style={{flex:"1" , float: "center center" ,  display:"inline-flex"}}>
                             {person_data.linkedin && <div class="linkedin" >
                              <a href= {person_data.linkedin}  target="_blank" rel="noopener noreferrer">
                              <svg enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" ><g fill="#394A74"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"></path><path d="m.396 7.977h4.976v16.023h-4.976z"></path><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"></path></g></svg></a>
                              </div>
                            }

                            {person_data.github && <div class="github" >
                              <a href= {person_data.github}  target="_blank" rel="noopener noreferrer">
                              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" height="20" width="20" ><g fill="#394A74"><path d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"/></g></svg></a>
                              </div>
                            }

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
