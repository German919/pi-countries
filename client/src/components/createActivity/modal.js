import React from 'react';
import styles from "./modal.module.css"

const Modal = ({setModal}) => {

    const handleClose = () => {
        setModal(false)
    }

    return(
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <h3 className={styles.modalTitle}>Activity</h3>
                <h3 className={styles.modalTitle}>successfully created</h3>
                <button 
                    onClick={handleClose}
                    className={styles.modalBtn}>Accept</button>
            </div>
            
        </div>
    )
}

export default Modal;