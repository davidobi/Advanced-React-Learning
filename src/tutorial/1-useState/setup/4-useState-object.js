import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'David', 
    age: 27, 
    message: 'is a react programmer',
  });
  const changeMessage = () => {
    setPerson({...person, age:12});
  }
  return ( 
  <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' type='button' onClick={changeMessage}>change mesage</button>
 </> 
 );
};
export default UseStateObject;
