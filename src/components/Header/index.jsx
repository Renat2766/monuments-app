import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'



function Header() {
  const items = [
    {'id': 1, nameItem: 'What it is?'},
    {'id': 2, nameItem: 'Contributions'},
    {'id': 3, nameItem: 'Community'},
    {'id': 4, nameItem: 'For rightoholders'},
    {'id': 5, nameItem: 'Login'},
  ]
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          {items.map(item => (
            <li key={item.id}><a  href="/">{item.nameItem}</a></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
