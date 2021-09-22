import React from 'react'
import { Modal, Button } from "react-bootstrap";

function Delete_Friend_Confirmation_Component({show, friendInfo, handleClose, handleDelete}) {
    return (
        <div>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Delete Friend</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove friend <strong>{friendInfo.name}</strong> from your list?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Delete_Friend_Confirmation_Component
