import React from 'react'
import showPosts from './PostsControllers'
import { Fragment } from 'react'

const PostsArea = ({posts, pageNum, isInfinte}) => {
    return (
        <Fragment>
            {showPosts(posts, pageNum, isInfinte,'blog')}
        </Fragment>
    )
}

export default PostsArea
