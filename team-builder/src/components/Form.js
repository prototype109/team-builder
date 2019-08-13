import React, { useState } from 'react';

function Form(){
    const [member, setMember] = useState({name: '', email: '', role: ''});

    const handleChange = event => {
        event.preventDefault();
        setMember({...member, [event.target.name]: event.target.value});
    };
    
    return(
        <form>
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
        </form>
    );
}

export default Form;