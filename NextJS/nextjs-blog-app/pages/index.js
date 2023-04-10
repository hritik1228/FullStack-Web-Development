import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {

    console.log(props.posts)

    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export default HomePage;

export function getStaticProps(){
    const featuredPosts=getFeaturedPosts();
    
    return {
        props:{
            posts:featuredPosts
        }
    }
}

// 1. Hero=>Present Ourselves
// 2. Featured Posts