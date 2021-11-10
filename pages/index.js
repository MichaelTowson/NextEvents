import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList'

function HomePage() {

  //Import dummy event data
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  );
}

export default HomePage