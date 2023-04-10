import React from 'react';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const DUMMY_POSTS={
    slug:'getting-started-with-nextjs',
    title:'Getting Started with NextJS',
    image:'getting-started-nextjs.png',
    date:'2022-02-10',
    contnet:'# This is a first post'
}

const PostContent = () => {

    const imagePath=`/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
        <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POSTS.contnet}</ReactMarkdown>
    </article>
  )
}

export default PostContent
