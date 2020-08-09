import React, {useState} from 'react';
import './App.css';
import Demo from "../../components/Demo/Demo";

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [showAlertWithoutButton, setShowAlertWithoutButton] = useState(false);

    const showModalHandler = () => setShowModal(true);

    const closeModalHandler = () => setShowModal(false);

    const continueModalHandler = () => window.alert('You click on continue button.');

    const showAlertWithCloseButtonHandler = () => setShowAlert(true);

    const showAlertWithoutCloseButtonHandler = () => setShowAlertWithoutButton(true);

    const closeAlertHandler = () => setShowAlert(false);

    const closeAlertWithoutBtnHandler = () => setShowAlertWithoutButton(false);

    const modalButtons = [
        {type: 'primary', label: 'Continue', clicked: continueModalHandler},
        {type: 'danger', label: 'Close', clicked: closeModalHandler}
    ];

  return (
    <div className="App">
        <Demo
            show={showModal}
            showAlert={showAlert}
            showAlertWithoutButton={showAlertWithoutButton}
            showModalHandler={showModalHandler}
            closeModalHandler={closeModalHandler}
            showAlertWithCloseButtonHandler={showAlertWithCloseButtonHandler}
            showAlertWithoutCloseButtonHandler={showAlertWithoutCloseButtonHandler}
            closeAlertHandler={closeAlertHandler}
            closeAlertWithoutBtnHandler={closeAlertWithoutBtnHandler}
            buttons={modalButtons}
        />
    </div>
  );
}

export default App;
