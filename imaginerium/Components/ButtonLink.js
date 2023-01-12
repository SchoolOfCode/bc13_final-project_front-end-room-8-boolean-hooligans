import Link from "next/link";

export default function ButtonLink(props) {
  return (
    <button className={props.buttonClass}>
      {" "}
      <Link href={props.src}>{props.icon}{props.text}</Link>
    </button>
  );
}
