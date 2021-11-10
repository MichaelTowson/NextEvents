import EventItem from './EventItem'

function EventList(props) {
  
  // Destructure props into items object for easy access.
  const { items } = props
  
  return ( 
    <ul>
      {items.map(event => 
        <EventItem />)
      }
    </ul>
  )
}

export default EventList;