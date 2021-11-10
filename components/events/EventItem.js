import classes from './EventItem.module.css'
import Link from 'next/link';

function EventItem(props) {
  //Destructure props
  const { title, image, date, location, id } = props;

  //--- FUNCTIONS ---
  
  //Function for making date data more readable. Pass in "date" from props
  const humanReadableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //Function for making address location more readable.
  //Replaces any comma and space with a line break ('\n'). Location comes from props.
  const formattedLocation = location.replace(", ", "\n");

  //Function for putting props id into a functioning url link
  const exploreLink = `/events/${id}`;




  //--- COMPONENT RENDER ---
  return (
    <li className={classes.item}>
      {/* Event Image - Serve image from props */}
      <img src={'/' + image} alt={title} /> 
      
      {/* Event Description */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedLocation}</address>
          </div>
        </div>

        {/* Event Link */}
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem