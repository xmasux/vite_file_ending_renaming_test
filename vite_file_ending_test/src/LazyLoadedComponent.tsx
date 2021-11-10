import React from "react";
import {Button, Message, Segment} from "semantic-ui-react";
import {MessageWithText, writeToConsole} from "./AppUtils";

export default function LazyLoadedComponent(): JSX.Element {
    return (
        <React.Fragment>
            <Segment>
                <Message>Some Text</Message>
                <Button onClick={() => writeToConsole()}>Click Me</Button>
                <MessageWithText />
            </Segment>
        </React.Fragment>
    )
}