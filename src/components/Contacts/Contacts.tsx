import React, {
    ChangeEvent,
    FormEvent, useEffect,
    useRef,
    useState
} from "react";
import classes from './Contact.module.css'
import {Alert, AlertTitle, Button, TextField} from "@mui/material";
import emailjs from '@emailjs/browser';

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
    const [opasity, setOpacity] = useState(0)

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
    let alertStyle = {
        opacity: opasity,
        top: '10%'
    }

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm('service_amfozvo', 'template_hfgm7br', form.current ? form.current : '', '3ptSRVgAiE4HCrxh7').then(res => {
            setName('')
            setEmail('')
            setText('')
            setOpacity(1)
            setTimeout(() => {
                setOpacity(0)
            }, 2000)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setError({...error, emailError: false})
    }, [])

    useEffect(() => {
        email.length > 0 && setError({
            ...error, emailError: !/\S+@\S+\.\S+/.test(email
            )
        })
    }, [email])


    return (
        <div className={classes.contactsContainer}>
            <Alert className={classes.alert} style={alertStyle} severity="success"> <AlertTitle>Thank You</AlertTitle>
                <strong>Your message has been sent </strong></Alert>
            <div className={classes.formContainer}>
                <h6> CONTACTS</h6>
                <p className={classes.contactText}>Everyone always can contact me through my <a
                    className={classes.contactLink} href="https://www.linkedin.com/in/romantroian/"
                    target={'_blank'}> LinkedIn </a>,or send me
                    email via this form : </p>

                <form className={classes.formContainer} ref={form} onSubmit={sendEmail}>
                    <TextField error={error.nameError}
                               value={name}
                               type="text"
                               name="name"
                               color={"secondary"}
                               fullWidth
                               id="outlined-basic"
                               label="Name"
                               variant="outlined"
                               onChange={nameChangeHandler}/>

                    <TextField error={error.emailError}
                               value={email}
                               name="email"
                               color={"secondary"}
                               fullWidth
                               id="outlined-basic"
                               label="Email"
                               variant="outlined"
                               type='email'
                               onChange={emailChangeHandler}/>
                    <TextField
                        type="text"
                        value={text}
                        name='text'
                        error={error.textError}
                        color={"secondary"}
                        fullWidth
                        id="outlined-multiline-flexible"
                        label="Your message"
                        multiline
                        rows={4}
                        onChange={textChangeHandler}
                    />
                    <Button size={"large"}
                            variant={"contained"}
                            sx={buttonStyle}
                            type={"submit"}
                            disabled={name === '' || email === '' || text === ''}
                    >Send</Button>
                </form>

            </div>
        </div>
    )
}