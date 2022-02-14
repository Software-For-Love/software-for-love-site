import React from 'react';
import _ from 'lodash';
import {Space, Tag} from 'antd';

import {withPrefix} from '../utils';

export default class ProjectsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);

        console.log(section)

        return (
            <div className='container container--lg' style={{paddingBottom: '36px'}}>
                <Space direction='vertical' size='large'>
                    {_.map(_.get(section, 'projects', null), (project) => (
                        <article className="project__card">
                            <div className="project__card__media">
                                <img src={withPrefix(_.get(project, 'image', null))} alt="Project" />
                            </div>

                            <div className="project__card__container">
                                <h3 className="project__card__header">
                                    {_.get(project, 'title', null)}
                                </h3>
                                <p className="project__card__body">
                                    {_.get(project, 'description', null)}{' '}
                                    {_.get(project, 'readMore', null) && 
                                        <a href={_.get(project, 'readMore', null)}>Read more</a>
                                    }
                                </p>
                                <div>
                                    {_.map(_.get(project, 'tags', null), (tag) => (
                                        <Tag>{tag}</Tag>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </Space>
            </div>
        );
    }
}
