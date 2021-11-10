import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById} from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  
  //Upon load, check to see if the id entered into the url matches an ID in our data. Store in variable.
  const event = getEventById(eventId);



  // --- RENDER ---

  //If an event is not found matching the url, render an error.
  if (!event) {
    return (
      <p>No event by that ID found. Please make a different selection</p>
    )
  }

  //...Otherwise, render the page with event details.
  return (
    <div>
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics 
          date={event.date} 
          address={event.location}
          image={event.image}
          imageAlt={event.title}
          />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    </div>
  )
}

export default EventDetailPage