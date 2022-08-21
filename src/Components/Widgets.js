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
      screenName=''
      options={{height: 400}}
      />
      <TwitterShareButton
      url={""}
      options={{text: "Twitter Share Button", via: ""}}
      />
      </div>
    </div>

  )
}

export default Widgets
