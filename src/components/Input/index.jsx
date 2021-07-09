import React from 'react'
import { VscSearch, VscEye } from "react-icons/vsc"
import styles from './Input.module.scss'


function Input() {
  return (
    <div className={styles.searchBlock}>
      <div className={styles.searchCountry}>
        <input type="text" placeholder="Object state" />
        <VscEye className={styles.icons}/>
      </div>
      <div className={styles.searchObject}>
        <input type="text" placeholder="Search object"/>
        <VscSearch className={styles.icons} />
      </div>
    </div>
  )
}

export default Input
