import React from 'react'
import '../Css/Post.css'
import { Avatar } from "@material-ui/core"
import { ChatBubble, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
const Post = ({
    displayName,
    username,
    verified,
    image,
    avatar,
    text,
}) => {
    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkms62ywj8noI96YorLX4kg6qHaHcq5lhoj_VYj9I0-A&s" />
            </div>
            <div className='post__body'>
                <div className='post__headerText'>

                    <h3>
                        Abhinav Rai {" "} <span className='post__headerSpecial'>
                            <VerifiedUser className="post__badge" /> {" "}@ABHI
                        </span>

                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>
                        I challenge you to build a Twitter Clone With ReactJS
                    </p>
                </div>
            
            <img src="https://media3.giphy.com/media/3o6ZtqQsY9qQQqQq2U/giphy.gif" alt=""/>

            <div className='post__footer'>
            <ChatBubble fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
            </div>
       </div>
        </div>
    )
}

export default Post
