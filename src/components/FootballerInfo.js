import React from 'react';

const FootballerInfo = ({footballer}) => {

    return (
        <div>
            <img src=''></img>
            <p>nationality: {footballer.nationality}</p>
            <p>team: {footballer.team}</p>
            <p>position: {footballer.position}</p>
        </div>
    )
};
export default FootballerInfo;