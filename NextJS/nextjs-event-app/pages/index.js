import React from 'react'
import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/EventList';
import EventsSearch from '../components/events/EventsSearch';
import { useRouter } from 'next/router';

const HomePage = () => {


  const featuredEvents=getFeaturedEvents();
  const router=useRouter();

  function findEventHandler(year,month){
    
    const fullPath=`/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventHandler}/>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default HomePage
