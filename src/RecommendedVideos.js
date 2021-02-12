import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard.js"
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2> Recommended</h2>

            <div className="recommendedVideos__videos">
            <VideoCard
                image="https://i.ytimg.com/vi/QK8Se8CvyHc/maxresdefault.jpg"
                title="Unboxing the New Iphones"
                channel="Marqueus Brownlee"
                views="500k"
                timestamp="40 min ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhoa6jtz7ccGj30Al2Ha8t4ImDVW2U98STxoLXp=s900-c-k-c0x00ffffff-no-rj"
                href1="https://www.youtube.com/watch?v=Yhze-aRR6o0"
                href2="https://www.youtube.com/user/marquesbrownlee"
            />
            <VideoCard
                image="https://1.bp.blogspot.com/-hMKWwwFeM0s/XUnEBM1BWmI/AAAAAAAAIEo/t20x9xhGozUK1W_TEd1sms2E0r1tc0RyQCLcBGAs/s1600/wf1000xm3unboxed.jpg"
                title="Sony WF-1000 Unboxing!!!"
                channel="Unbox Therapy"
                views="700k"
                timestamp="2 hr ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s900-c-k-c0x00ffffff-no-rj"
                href1="https://www.youtube.com/watch?v=jpG0j8T70dQ"
                href2="https://www.youtube.com/user/unboxtherapy"
            />
            <VideoCard
                image="https://miro.medium.com/max/6490/1*ci_z9iwBD-opNaXt5JTh0Q.jpeg"
                title="The Ultimate Challenge!"
                channel="Dude perfect"
                views="1M"
                timestamp="6 hr ago"
                channelImage="https://pbs.twimg.com/profile_images/1343631434318278659/bAOuV9MH_400x400.jpg"
                href1="https://www.youtube.com/watch?v=aCz-1tcdjN8"
                href2="https://www.youtube.com/channel/UCRijo3ddMTht_IHyNSNXpNQ"
            />
<VideoCard
                image="https://sharifdigitalpoint.com/wp-content/uploads/2019/05/OnePlus7-Unboxing-First-Look-True-Value-Package-800x445.jpg"
                title="One Plus 7 Unboxing!"
                channel="Technical Guruji"
                views="900k"
                timestamp="1 hr ago"
                channelImage="https://pbs.twimg.com/media/DNX5Zq4UEAMKAzU.jpg"
                href1="https://www.youtube.com/watch?v=7WHjlPuq9r0"
                href2="https://www.youtube.com/channel/UCOhHO2ICt0ti9KAh-QHvttQ"
            />
<VideoCard
                image="https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/79482/32bb78fa-5e8e-4fb1-976a-b0966724294b.png"
                title="Lets Talk Tech!!"
                channel="Marques Brownlee"
                views="2.2M"
                timestamp="2 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhoa6jtz7ccGj30Al2Ha8t4ImDVW2U98STxoLXp=s900-c-k-c0x00ffffff-no-rj"
                href1="https://www.youtube.com/watch?v=MevKTPN4ozw"
                href2="https://www.youtube.com/user/marquesbrownlee"
            />
<VideoCard
                image="https://i.ytimg.com/vi/zlxhSYGGrWk/maxresdefault.jpg"
                title="The Mysterious Watch!"
                channel="Unbox Therapy"
                views="3.3M"
                timestamp="2 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s900-c-k-c0x00ffffff-no-rj"
                href1="https://www.youtube.com/watch?v=zlxhSYGGrWk"
                href2="https://www.youtube.com/user/unboxtherapy"
            />
            <VideoCard
                image="https://i.ytimg.com/vi/Y15GPvzSolY/maxresdefault.jpg"
                title="Apple iPhone 12 Unboxing & First Look"
                channel="Technical Guruji"
                views="2M"
                timestamp="1 day ago"
                channelImage="https://pbs.twimg.com/media/DNX5Zq4UEAMKAzU.jpg"
                href1="https://www.youtube.com/watch?v=tCvnOZ1_XbI"
                href2="https://www.youtube.com/channel/UCOhHO2ICt0ti9KAh-QHvttQ"
            />
            <VideoCard
                image="https://i.ytimg.com/vi/_SoviSNZjso/maxresdefault.jpg"
                title="How Teslas Upgrade Over Time!"
                channel="Marques Brownlee"
                views="2.8M"
                timestamp="4 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhoa6jtz7ccGj30Al2Ha8t4ImDVW2U98STxoLXp=s900-c-k-c0x00ffffff-no-rj"
                href1="https://www.youtube.com/watch?v=_SoviSNZjso"
                href2="https://www.youtube.com/user/marquesbrownlee"
            />

            </div>


        </div>
    )
}

export default RecommendedVideos
