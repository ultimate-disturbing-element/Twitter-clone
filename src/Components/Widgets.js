import React from 'react'
import '../Css/Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import { Search } from '@material-ui/icons';
const Widgets = () => {
  return (
    <div className="widgets">
     <div className="widgets__input">
     <Search className="widgets__searchIcon" />
      <input placeholder="Search Twitter" type="text" />
     </div>
      <div className="widgets__widgetContainer">
      <h2>What's Happening</h2>
      <TwitterTweetEmbed tweetId={'TWITTER_ID'} />
      <TwitterTimelineEmbed
      sourceType='profile'
      screenName='LyghtJr'
      options={{height: 400}}
      />
      <TwitterShareButton
      url={"https://github.com/Lyghtjr"}
      options={{text: "Twitter Share Button", via: "LyghtJr"}}
      />
      </div>
    </div>

  )
}

export default Widgets
