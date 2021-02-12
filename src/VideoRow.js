import React from 'react'
import "./VideoRow.css";
import Avatar from '@material-ui/core/Avatar';

function VideoRow({views,channelImage ,description,timestamp,channel,title,image,href1}) {
    return (
        <div className="videoRow">
            <a href={href1}> <img className="videoRow__img" src={image} alt=""/> </a>
            <div className="videoRow__text">
            <h3>{title}</h3>
            <p className="videoRow__headline">
                 {views} views • {timestamp}
            </p>
            <Avatar className="videoRow__avatar" alt={channel}  src={channelImage}/>
            <p className="videoRow__channelname">{channel}</p>
            <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow