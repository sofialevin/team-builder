import React, { useState } from "react";

const Form = props => {
    const [teamMember, setTeamMember] = useState({ name: "", email: "", role: "", id: "0" });

    const handleChange = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value});
      };

    const submitForm = event => {
        event.preventDefault();
        const newTeamMember = {
            ...teamMember,
            id: props.teamMembers.length + 1
        };
        props.addTeamMember(newTeamMember);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            name="name" 
            value={teamMember.name}
            onChange={event => handleChange(event)}
            />
            <label htmlFor="email">Email:</label>
            <input 
            type="text" 
            name="email" 
            value={teamMember.email} 
            onChange={event => handleChange(event)}
            />
            <label htmlFor="role">Role:</label>
            <input 
            type="text" 
            name="role" 
            value={teamMember.role}
            onChange={event => handleChange(event)}
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}

export default Form;