import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const collageNameRef = useRef()

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    const enteredCollageName = collageNameRef.current.value
    if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollageName.trim().length === 0)
    {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return 
    }

    if(+enteredUserAge < 1)
    {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0)'
      })
      return
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollageName);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
    collageNameRef.current.value = ''
    // setEnteredAge("");
    // setEnteredUsername("");
  };

 

  

  const errorHandler = () => {
    setError(null)
  }
  return (
    <Wrapper>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
        />
         <label htmlFor="username">Collage name</label>
        <input
          id="Cname"
          type="text"
          ref={collageNameRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;
