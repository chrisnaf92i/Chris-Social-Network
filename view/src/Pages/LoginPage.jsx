import React, { Fragment, useState } from 'react'

export default function LoginPage() {
    const [newUser, setNewUser] = useState()
    const [inputError, setInputError] =  useState(false)

    const handleChangeEmail = (e) => {
        setNewUser({...newUser, email:e.target.value});

    }
    
    const handleChangePassword = (e) => {
        setNewUser({...newUser, password:e.target.value});

    }

    const handleClickSubmit = (e) => {
        e.preventDefault();

        if( newUser.email != undefined && newUser.password != undefined ){
            fetch("/api/login", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(newUser)})
                .then(response => {
                    if(response.status == 200){
                        return response.json()
                    }
                    else{
                        return undefined
                    }
                    
                })
                .then(user => {
                    console.log(user)
                    if(user != undefined){
                        localStorage.setItem("User", JSON.stringify(user))
                        return window.open("/acceuil", "_self");
                    }
                    setInputError(true)
                })
                .catch(err => {
                    console.log(err)
                } )
        }
    }
    

    return (
        <section>
            <form >
                <fieldset className='FormSignIn'>
                    <legend>
                        <h1>S'inscrire</h1>
                    </legend>

                    {inputError ? <h3>L'email ou mot de passe est incorrect</h3> : <Fragment/>}
                    
                    <label>
                        <h2>Email :</h2>
                        <br/>
                        <input onChange={handleChangeEmail} type="email" className='FormSignIn__Input'/>
                    </label>
                    <label>
                        <h2>Mot de passe :</h2>
                        <br/>
                        <input onChange={handleChangePassword} type="password" className='FormSignIn__Input'/>
                    </label>

                    <br/>

                    <button onClick={handleClickSubmit} className='FormSignIn__Submit'>Se connecter</button>
                </fieldset>
            </form>
        </section>
    )
}
