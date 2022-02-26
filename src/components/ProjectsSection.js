import React from 'react';
import _ from 'lodash';
import {Space, Tag} from 'antd';

import {withPrefix} from '../utils';

export default class ProjectsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);

        return (
            <div className='container container--lg' style={{paddingBottom: '36px', maxWidth: '900px'}}>
                <Space direction='vertical' size='large'>
                    {_.map(_.get(section, 'projects', null), (project, projectIndex) => (
                        <article className="project__card" key={projectIndex}>
                            <div className="project__card__media">
                                <img src={withPrefix(_.get(project, 'image', null))} alt="Project" />
                            </div>

                            <div className="project__card__container">
                                <h3 className="project__card__header">
                                    <a href={_.get(project, 'redirect', null)}>{_.get(project, 'title', null)}</a>
                                </h3>
                                <p className="project__card__body">
                                    {_.get(project, 'description', null)}
                                </p>
                                <div>
                                    {_.map(_.get(project, 'tags', null), (tag, tagIndex) => (
                                        <Tag key={tagIndex}>{tag}</Tag>
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
