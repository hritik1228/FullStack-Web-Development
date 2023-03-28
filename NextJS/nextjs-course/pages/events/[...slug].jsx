import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/UI/ErrorAlert';

const FilteredEventPage = () => {

  const router=useRouter();

  const filterData=router.query.slug;
  console.log(filterData)

  if(!filterData){
    return <p className='center'>Loading...</p>
  }

  const filteredYear=filterData[0];
  const filteredMonth=filterData[1];

  const numYear=+filteredYear;
  const numMonth=+filteredMonth;

  if(isNaN(numYear) || isNaN(numMonth) || numYear>2030 || numYear<2021 || numMonth<1 || numMonth>12){
    return (
    <Fragment>
      <ErrorAlert>Invalid Filter. Please adjust your value</ErrorAlert>
      <div className='center'>
            <Button link='/events'>Show All Events</Button>
      </div>
    </Fragment>)
  }

  const filteredEvents=getFilteredEvents({
    year:numYear,
    month:numMonth
  })

  if(!filteredEvents || filteredEvents.length===0){
      return (
        <Fragment>
          <ErrorAlert>No Events found for the chosen filter!</ErrorAlert>
          <div className='center'>
            <Button link='/events'>Show All Events</Button>
          </div>
        </Fragment>
      )
  }

  const date=new Date(numYear,numMonth-1)

  return (
    <Fragment>
        <ResultsTitle date={date} />
        <EventList items={filteredEvents}/>
    </Fragment>
  )
}

export default FilteredEventPage
