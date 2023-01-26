import styles from "../styles/timeline.module.css";

import NewNavBar from "../Components/NewNavBar";

export default function Timeline() {
  let data = [
    { date: 32, desc: "this happened, that happened, it was amazing" },
    { date: 45, desc: "then something else happened and it was scary" },
    { date: 66, desc: "some filler events happend for character growth" },
    { date: 69, desc: "everything turned out ok in the end!" }
  ];
  return (
    <div>
      <NewNavBar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}> Timeline </h1>
          <ul className={styles.timeline}>
            {data.map((event) => {
              return (
                <li className={styles.event}>
                  <div className={styles.date}>{event.date}</div>
                  <button className={styles.edit}>edit</button>
                  <p className={styles.desc}>{event.desc}</p>
                </li>
              );
            })}
          </ul>
          <button>add new event</button>
        </div>
      </div>
    </div>
  );
  b;
}
