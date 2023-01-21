import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'

const VideoSidebar = ({ likes, shares, messages }) => {

    const [liked, setLiked] = useState(false)

    const newLikes = parseInt(likes)

    return (
        <div className='videoSidebar'>
            <div className='videoSidebar__button'>
                {liked ? <FavoriteIcon fontSize='large' className='videoSidebar__icon' onClick={e => setLiked(false)} />
                    : <FavoriteBorderIcon fontSize='large' className='videoSidebar__icon' onClick={e => setLiked(true)} />
                }
                <p>{liked ? newLikes + 1 : newLikes}</p>
            </div>
            <div className='videoSidebar__button'>
                <MessageIcon className='videoSidebar__icon' fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='videoSidebar__button'>
                <ShareIcon className='videoSidebar__icon' fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar