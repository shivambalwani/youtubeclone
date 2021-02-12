import React from 'react'
import "./SearchPage.css";
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneSharpIcon/>
            <h2>FILTER</h2>
            </div>
            <hr/>
            

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s900-c-k-c0x00ffffff-no-rj"
                channel="Unbox Therapy"
                verified
                subs="18M"
             noOfVideos="1,902"
               description="Where products get naked. here you will find a variety of videos showcaing the coolest tech "
            />
            

            <hr/>
            <p className="latesttext">Latest from Unbox Therapy </p>
            <VideoRow
                image="https://1.bp.blogspot.com/-hMKWwwFeM0s/XUnEBM1BWmI/AAAAAAAAIEo/t20x9xhGozUK1W_TEd1sms2E0r1tc0RyQCLcBGAs/s1600/wf1000xm3unboxed.jpg"
                title="Sony WF-1000 Unboxing!!!"
                channel="Unbox Therapy"
                views="700k"
                timestamp="2 hr ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s900-c-k-c0x00ffffff-no-rj"
                description="These new earphones from sony are actually quite amazing!!! "
                href1="https://www.youtube.com/watch?v=jpG0j8T70dQ"
            />
        <VideoRow
                image="https://i.ytimg.com/vi/zlxhSYGGrWk/maxresdefault.jpg"
                title="The Mysterious Watch!"
                channel="Unbox Therapy"
                views="3.3M"
                timestamp="2 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s900-c-k-c0x00ffffff-no-rj"
                description="This watch has got some really cool stuff inside it , comes with WearOs.Will this be the new tech thing!!! "
                href1="https://www.youtube.com/watch?v=zlxhSYGGrWk"
            />
        </div>
    )
}

export default SearchPage
