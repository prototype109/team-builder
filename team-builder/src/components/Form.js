import React from 'react';

function Form(){
    return(
        <form>
            <label>
                Name:
                <input type='text'/>
            </label>
            <label>
                email:
                <input type='text'/>
            </label>
            <label>
                role:
                <input type='text'/>
            </label>
        </form>
    );
}

export default Form;