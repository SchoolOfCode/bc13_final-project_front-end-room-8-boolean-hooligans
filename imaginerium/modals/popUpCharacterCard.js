
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../styles/characterCard.module.css"


const PopUpCharacterCard = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
  <div className="pop-up">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        <p>Hello world</p>
        </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};



export default PopUpCharacterCard;