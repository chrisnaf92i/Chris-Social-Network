import React, { useState } from 'react'

export default function SignInPage() {
    const [newUser, setNewUser] = useState()
    const handleChangeUserName = (e) => {
        setNewUser({...newUser, userName:e.target.value});
    }
    
    const handleChangeEmail = (e) => {
        setNewUser({...newUser, email:e.target.value});

    }
    
    const handleChangePassword = (e) => {
        setNewUser({...newUser, password:e.target.value});

    }

    const handleClickSubmit = (e) => {
        e.preventDefault();

        if( newUser.userName !== undefined && newUser.email !== undefined && newUser.password !== undefined ){
            fetch("/api/signin", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(newUser)})
                .then(() => {
                    console.log("Création réussie")
                    window.open("/connexion", "_self")
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
                    
                    <label>
                        <h2>Nom d'utilisateur :</h2>
                        <br/>
                        <input onChange={handleChangeUserName} type="text" className='FormSignIn__Input'/>
                    </label>

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

                    <button onClick={handleClickSubmit} className='FormSignIn__Submit'>Créer son compte</button>
                </fieldset>
            </form>
        </section>
    )
}
