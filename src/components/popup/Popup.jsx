import { useEffect, useState } from "react";
import  "./popup.css";
import PropTypes from "prop-types";
const Popup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className='overlay'>
      <div className='popup'>
        {/* <h2>{props.title}</h2> */}
        <div className='content'>
            {props.children}
        </div>
        <button className='btn btn-primary popup-btn' onClick={closeHandler}>
          close
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Popup;
