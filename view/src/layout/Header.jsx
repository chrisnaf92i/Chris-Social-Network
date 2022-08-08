import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
    const logout = () => {
        localStorage.removeItem("User");
        window.location.reload();
    }
  return (
    <header className="Header">
        <h1 className="Header__Title">My Social Network</h1>

        <nav className='Header__Nav'>
          <Link to="/acceuil"> <h2> Acceuil </h2> </Link>

          {
            localStorage.getItem("User") ? <Fragment> <Link to="/utilsateur"> <h2> Utilisateur </h2> </Link> <button onClick={logout}> <h2 > Déconnexion </h2> </button> </Fragment> : 
              <Fragment>
                <Link to="/inscription"> <h2> S'inscrire </h2> </Link>
                <Link to="/connexion"> <h2> Se connecter </h2> </Link>
              </Fragment>
          }
        </nav>

    </header>
  )
}
