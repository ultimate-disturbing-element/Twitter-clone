import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import '../Css/TweetBox.css'
const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
      <div className='tweetBox__input'>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkms62ywj8noI96YorLX4kg6qHaHcq5lhoj_VYj9I0-A&s"/>
      <input placeholder="What's happening?" type="text"/>
      
      </div>
      <input
      className = "tweetBox__imageInput"
      placeholder="Optional: Enter image URL" type="text"/>
      <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
