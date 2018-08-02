import React from "react"
import {Button, Header, Modal} from 'semantic-ui-react'

function HiraganaTestInstructionComponent(props){
    return(
        <div>
            <Modal trigger={<Button> Instructions </Button>}>
            <Modal.Header>How To Use</Modal.Header>
            <Modal.Content>
            <Modal.Description>
                <Header>Using the Japanese Quiz App</Header>
                <p>Use the dropdown list at the top of the page to select what you would like to review.</p>
                <p>Once selected, click any characters you would like to use, or click "all" to select all of that type.</p>
                <p> Once you are ready to begin, click start and the quiz will appear. Click the correct character listed below the question to answer! </p>
                <h5> (click outside the window to close) </h5>
            </Modal.Description>
            </Modal.Content>
            </Modal>
        </div>
    )
}

export default HiraganaTestInstructionComponent;