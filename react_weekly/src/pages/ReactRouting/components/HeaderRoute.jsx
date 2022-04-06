import React from 'react'

export default function Header({text}) {
    return (
        <div style={{textAlign : 'center', background : 'Orange', height : '80px', paddingTop : '10px', color : 'white'}}>
            <h1>{text}</h1>
        </div>

    );
}
