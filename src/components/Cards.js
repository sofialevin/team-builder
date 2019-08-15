import React from "react";
import { Card } from 'semantic-ui-react';

const Cards = props => {

    return (
        <Card.Group>
            {props.teamMembers.map(teamMember => {
                return (
                    <Card key={teamMember.id}>
                        <Card.Content>
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