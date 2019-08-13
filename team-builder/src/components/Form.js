import React, { useState } from 'react';

function Form(props){
    const [member, setMember] = useState({name: '', email: '', role: ''});

    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMember(member);
        setMember({name: '', email: '', role: ''})
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Name:
                <input type='text' name='name' onChange={handleChange} value={member.name}/>
            </label>
            <label htmlFor='email'>
                email:
                <input type='text' name='email' onChange={handleChange} value={member.email}/>
            </label>
            <label htmlFor='role'>
                role:
                <input type='text' name='role' onChange={handleChange} value={member.role}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Form;