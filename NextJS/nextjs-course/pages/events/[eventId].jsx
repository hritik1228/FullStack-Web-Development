import React from 'react'
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistic from '../../components/event-detail/EventLogistic';
import EventContent from '../../components/event-detail/EventContent';
import ErrorAlert from '../../components/UI/ErrorAlert';


const EventDetailPage = () => {

  const router=useRouter();
  const eventId=router.query.eventId
  
  const event=getEventById(eventId);

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

export default EventDetailPage
