import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ResourceCard = ({resource}) => {
    return (
        <div className="ui card">
            <div className="ui image">
                <img src={resource.fileImage} alt="resource Cover" x="0" y="0" width="100%" height="100%"/>
            </div>
            <div className="content">
                <Link className="header" to={`/resource/${resource.id}`}>{resource.fileTitle}</Link>
                <span className="right floated">
                    <i className="heart outline like icon">10</i>
                </span>
                <div className="description">{resource.fileDescription}</div>
            </div>
            <div className="extra content">
                <span className="right floated">所有价：{resource.fileRightPrice}$</span>
                <span className="">阅读价：{resource.fileReadPrice}$</span>
            </div>
            <div className="extra content">
                <div className="ui positive basic button">
                    <Link to={`locationResource/${resource.id}`} className="">Check file</Link>
                </div>
            </div>
        </div>
    )
};

ResourceCard.propTypes = {
    resource: PropTypes.object.isRequired,
};

export default ResourceCard;