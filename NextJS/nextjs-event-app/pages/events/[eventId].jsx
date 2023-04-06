import React from 'react'
import { useRouter } from 'next/router';
// import { getEventById } from '../../dummy-data';
import { getEventById } from '../../helpers/api-util';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistic from '../../components/event-detail/EventLogistic';
import EventContent from '../../components/event-detail/EventContent';
import ErrorAlert from '../../components/UI/ErrorAlert';
// import { getAllEvents } from '../../dummy-data';
import { getAllEvents,getFeaturedEvents } from '../../helpers/api-util';


const EventDetailPage = (props) => {

  // const router=useRouter();
  // const eventId=router.query.eventId
  
  // const event=getEventById(eventId);
  const event =props.selectedEvent;

  if(!event){
    return <ErrorAlert>No event found</ErrorAlert>
  }

  return (
    <Fragment>
        <EventSummary title={event.title}/>
        <EventLogistic date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
    </Fragment>
  )
}


export async function getStaticProps(context){
  const eventId=context.params.eventId;

  const event=await getEventById(eventId);
  return {
    props:{ selectedEvent:event },
    revalidate:30
  }
}

export async function getStaticPaths(){
  
  const events=await getFeaturedEvents();
  const paths=events.map(event=>({ params:{ eventId:event.id } }))
  console.log(paths)

  return { 
    paths:paths,
    fallback:true
   }
}

export default EventDetailPage
