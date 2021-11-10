import { useRouter } from 'next/router';
import { getEventById} from '../../dummy-data'

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
      Event details go here
    </div>
  )
}

export default EventDetailPage