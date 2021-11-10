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
    <li>
      {/* Serve image from props */}
      <img src={'/' + image} alt={title} /> 
      
      <div>
        {/* Name */}
        <div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedLocation}</address>
          </div>
        </div>

        {/* Thing 2 */}
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem