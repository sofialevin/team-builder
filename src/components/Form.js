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
        <form onSubmit={submitForm} className="ui form">
            <div className="field">
                <label htmlFor="name">Name:</label>
                <input required
                type="text" 
                name="name" 
                value={teamMember.name}
                onChange={event => handleChange(event)}
                />
            </div>
            <div className="field">
                <label htmlFor="email">Email:</label>
                <input required
                type="text" 
                name="email" 
                value={teamMember.email} 
                onChange={event => handleChange(event)}
                />
            </div>
            <div className="field">
                <label htmlFor="role">Role:</label>
                <input required
                type="text" 
                name="role" 
                value={teamMember.role}
                onChange={event => handleChange(event)}
                />
            </div>
            <button className="ui button" type="submit">Add Team Member</button>
        </form>
    )
}

export default Form;