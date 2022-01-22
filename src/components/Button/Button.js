import { Children } from "react"
import s from './Button.module.css'

const Button = ({ name, click }) => {
  return (
    <button className={s.button} name={name} onClick={click}> {name}</button >
  )
}

export default Button;
