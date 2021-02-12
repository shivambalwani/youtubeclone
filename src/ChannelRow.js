import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import "./ChannelRow.css";
import Button from '@material-ui/core/Button';

function ChannelRow({image,channel,subs, noOfVideos,verified,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
            <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
            <p>
                {subs} subscribers • {noOfVideos} videos
            </p>
            <p>{description}</p>

            
            </div>
            <Button className="subscribe" variant="contained" color="secondary">
        Subscribe
      </Button>
        </div>
    )
}

export default ChannelRow
