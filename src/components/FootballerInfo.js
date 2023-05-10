import React from 'react';

const FoootballerInfo = ({footballer}) => {

    return (
        <div>
            <p>nationality: {footballer.nationality}</p>
            <p>team: {footballer.team}</p>
            <p>position: {footballer.position}</p>
        </div>
    )
};
export default FoootballerInfo;