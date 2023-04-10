import React from 'react'
import Link from 'next/link';
import classes from './post-item.module.css';
import Image from 'next/image';

const PostItem = (props) => {

    const { title,image,excerpt,date,slug }=props.post;

    // Format the date object in human readable format
    const formattedDate=new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long', // 1=> January
    });

    // Build the image path because we receive the file name from the props
    const imagePath=`/images/posts/${slug}/${image}`
    const linkPath=`/posts/${slug}`

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    {/* layout:responsive= To shrink and grow based on the ccontainer size */}
                    <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem
