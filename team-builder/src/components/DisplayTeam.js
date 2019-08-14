import React from 'react';

function DisplayTeam(props){
    return(
    <div>
        {props.team.map(member => {
            return(
                <div key={member.id}>
                    <h1>{member.name}</h1>
                    <h2>{member.email}</h2>
                    <h2>{member.role}</h2>
                </div>
            )
        })}
    </div>
    );
}

export default DisplayTeam;