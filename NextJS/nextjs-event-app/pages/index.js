import React from 'react'
// import {getFeaturedEvents} from '../dummy-data';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/EventList';
import EventsSearch from '../components/events/EventsSearch';
import { useRouter } from 'next/router';

const HomePage = (props) => {

  // const featuredEvents=getFeaturedEvents();
  const router=useRouter();

  function findEventHandler(year,month){
    
    const fullPath=`/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventHandler}/>
      <EventList items={props.featuredEvents}/>
    </div>
  )
}

export async function getStaticProps(){

  const featuredEvents=await getFeaturedEvents();
  return {
    props:{
      featuredEvents:featuredEvents
    },
    revalidate:1800
  }
}

export default HomePage
