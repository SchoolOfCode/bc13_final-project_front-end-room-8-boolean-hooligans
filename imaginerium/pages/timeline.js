import styles from "../styles/timeline.module.css";

export default function Timeline (){
    return(
    <div className={styles.timeline">
  <div class="container left">
    <div className={styles.date">15 Dec</div>
    <i className={styles.icon fa fa-home"></i>
    <div className={styles.content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className={styles.container right">
    <div className={styles.date">22 Oct</div>
    <i className={styles.icon fa fa-gift"></i>
    <div className={styles.content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className={styles.container left">
    <div class="date">10 Jul</div>
    <i class="icon fa fa-user"></i>
    <div class="content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div class="container right">
    <div class="date">18 May</div>
    <i class="icon fa fa-running"></i>
    <div class="content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div class="container left">
    <div class="date">10 Feb</div>
    <i class="icon fa fa-cog"></i>
    <div class="content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div class="container right">
    <div class="date">01 Jan</div>
    <i class="icon fa fa-certificate"></i>
    <div class="content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
</div>)
}