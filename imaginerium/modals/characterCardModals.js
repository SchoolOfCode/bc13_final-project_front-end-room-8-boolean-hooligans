import '../styles/characterCard.module.css';
import { state, useState } from 'react';

function MyPopup() {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    return (
      <>
        <button onClick={handleShow}>Open Popup</button>
        { showModal && (
          <div className={styles["pop-up-background"]}>
          <div className={styles["pop-up"]}>
          <p>Does This Work??</p>
          <button onClick={handleClose}>Close</button>
          </div>
          </div>
        )}
      </> 
      )
  }
  export default MyPopup;