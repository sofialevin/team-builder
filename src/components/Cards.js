import React from "react";

const Cards = props => {

    return (
        <div>
            {props.teamMembers.map(teamMember => {
                return (
                    <div key={teamMember.id}>
                        <p>Name: {teamMember.name}</p>
                        <p>Email: {teamMember.email}</p>
                        <p>Role: {teamMember.role}</p>
                        <p>ID: {teamMember.id}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;