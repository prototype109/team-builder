import React, { useState } from 'react';

function Form(){
    const [member, setMember] = useState({name: '', email: '', role: ''});

    return(
        <form>
            <label htmlFor='name'>
                Name:
                <input type='text' name='name' value={member.name}/>
            </label>
            <label htmlFor='email'>
                email:
                <input type='text' name='email' value={member.email}/>
            </label>
            <label htmlFor='role'>
                role:
                <input type='text' name='role' value={member.role}/>
            </label>
        </form>
    );
}

export default Form;