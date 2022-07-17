import React from 'react'
import '../Css/Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
const Feed = () => {
  return (
    <div className='feed'>
    <div className="feed__header">
    <h1>Home</h1>
    </div>
      <TweetBox/>

      <Post/>
    </div>
  )
}

export default Feed
