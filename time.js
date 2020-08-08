import React from 'react';

const getCurrentDate=()=>{
    const date= new Date();
    return date.toDateString();
}

const period= <h3>{getCurrentDate}</h3>;

export default getCurrentDate;