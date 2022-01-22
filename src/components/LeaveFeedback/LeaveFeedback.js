import Button from "../Button/Button";
import { Fragment } from "react/cjs/react.production.min";
import s from './LeaveFeedback.module.css'



const LeaveFeedback = ({ state, click }) => {
  const keys = Object.keys(state)
  console.log(keys);
  return (
    <Fragment>
      <h2 className={s.title}>Please leave feedback</h2>
      <div className={s.buttonBox}>
        {keys.map(key) => (
        <Button name={key} click={click} />
        )}
        {/* <Button name="good" click={click} />
        <Button name="neutral" click={click} />
        <Button name="bad" click={click} /> */}
      </div>
    </Fragment>
  )
}

export default LeaveFeedback;
