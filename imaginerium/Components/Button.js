export default function Button(props) {
  return <button className={props.buttonClass} onClick={props.onClick}>{props.text}</button>;
}
