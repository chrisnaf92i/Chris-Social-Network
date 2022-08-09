import { MenuOutlined } from '@ant-design/icons';
import React, { Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  const logout = () => {
      localStorage.removeItem("User");
      window.location.reload();
  }

  const [onPhone, setOnPhone] = useState(false)

  useEffect(() => {
    console.log(window.innerWidth)

    if(window.innerWidth < 800){
      setOnPhone(true);
    }
  })
  return (
    <header className="Header">
        <Link to="acceuil"><h1 className="Header__Title">My Social Network</h1></Link>

        <nav className='Header__Nav'>
          {
            onPhone ? <h2 className='Header__Nav__Menu'> <MenuOutlined /> </h2>: <Fragment/>
          }
          <div className='Header__Nav__SubMenu'>
            {!onPhone ? <Link to="/acceuil"> <h2> Acceuil </h2> </Link> : <Fragment/>}
            {
              localStorage.getItem("User") ? <Fragment> <Link to="/utilsateur"> <h2> Utilisateur </h2> </Link> <button onClick={logout}> <h2 > Déconnexion </h2> </button> </Fragment> : 
                <Fragment>
                  <Link to="/inscription">  <h2> S'inscrire </h2> </Link>
                  <Link to="/connexion">   <h2> Se connecter </h2> </Link>
                </Fragment>
            }
          </div>
        </nav>

    </header>
  )
}
