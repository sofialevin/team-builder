import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';

const Cards = props => {

    return (
        <Card.Group>
            {props.teamMembers.map(teamMember => {
                return (
                    <Card>
                        <Card.Content key={teamMember.id}>
                            <Card.Header>{teamMember.name}</Card.Header>
                            <Card.Meta>{teamMember.email}</Card.Meta>
                            <Card.Description>{teamMember.role}</Card.Description>
                        </Card.Content>
                    </Card>
                )
            })}
        </Card.Group>
    )
}

export default Cards;