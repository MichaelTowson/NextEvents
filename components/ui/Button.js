import Link from 'next/link';
import classes from './Button.module.css'

function Button(props) {
  return (

    // Styling a button using Link requires combining it with an anchor tag. The href goes with the Link component, not with the anchor tag.
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  )
}

export default Button;