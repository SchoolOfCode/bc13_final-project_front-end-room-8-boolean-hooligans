import Link from "next/link";

export default function ButtonLink(props) {
  return (
    <button className={props.buttonClass}>
      {" "}
      <Link href={props.src}>{props.text}</Link>
    </button>
  );
}
