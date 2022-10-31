import React, {ChangeEvent, useEffect, useState} from "react";
import classes from './Contact.module.css'
import {Button, TextField} from "@mui/material";

const buttonStyle = {
    width: 'min-content',
    fontFamily: 'Montserrat',
    color: '#fff',
    backgroundColor: '#767676',
    borderRadius: '50px',
    ':hover': {
        backgroundColor: '#767676',
        color: '#fff'
    }
}

export const Contacts = () => {
    const [error, setError] = useState<{ nameError: boolean, emailError: boolean, textError: boolean }>({
        nameError: false,
        emailError: false,
        textError: false
    })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const onBtnClickHandler = () => {
        if (name === '') {
            return setError({...error, nameError: true})
        }
        else if (email === '') {
            return setError({...error, emailError: true})
        }
        else if (text === '') {
            return setError({...error, textError: true})
        }
        else {
            return setError({...error, nameError: false, emailError: false, textError: false})
        }
    }

    const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError({...error, nameError: false})
        setName(e.currentTarget.value)
    }
    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError({...error, emailError: false})
        setEmail(e.currentTarget.value)
    }
    const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setError({...error, textError: false})
        setText(e.currentTarget.value)
    }


    return (
        <div className={classes.contactsContainer}>

            <div className={classes.formContainer}>
                <h6> CONTACTS</h6>
                <p className={classes.contactText}>Everyone always can contact me through my <a
                    className={classes.contactLink} href="https://www.linkedin.com/in/romantroian/"
                    target={'_blank'}> LinkedIn </a>,or send me
                    email via this form : </p>

                <TextField error={error.nameError} color={"secondary"} fullWidth
                           id="outlined-basic"
                           label="Name"
                           variant="outlined" onChange={nameChangeHandler}/>
                <TextField error={error.emailError} color={"secondary"} fullWidth
                           id="outlined-basic" label="Email"
                           variant="outlined"
                           type='email' onChange={emailChangeHandler}/>
                <TextField
                    error={error.textError}
                    color={"secondary"}
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Your message"
                    multiline
                    rows={4}
                    onChange={textChangeHandler}
                />
                <Button size={"large"} variant={"contained"}
                        sx={buttonStyle} onClick={onBtnClickHandler}>Send</Button>
            </div>
        </div>
    )
}