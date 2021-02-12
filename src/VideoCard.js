import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./VideoCard.css";

function VideoCard({image,title,channel,views,timestamp,channelImage,href1,href2}) {
    return (
        <div className="videoCard">
           <a href={href1}> <img className="videoCard__thumbnail" src={image} alt=""/> </a>
            <div className="videoCard__info">
              <a href={href2}> <Avatar className="videoCard__avatar" alt={channel}  src={channelImage}/> </a>
                <div className="videoCard__text">
                 <h4>{title}</h4>
                 <p className="channel__name">{channel}</p>
                 <p className="channel__views">{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
