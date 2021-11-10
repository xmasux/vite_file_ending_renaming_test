import React from "react";
import {Message} from "semantic-ui-react";

export function writeToConsole(): void {
    console.log('Write to console');
}

export function MessageWithText(): JSX.Element {
    return (
        <React.Fragment>
            <Message>Some Message</Message>
        </React.Fragment>)
}