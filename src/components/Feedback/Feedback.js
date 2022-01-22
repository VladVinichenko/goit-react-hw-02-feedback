import { Fragment } from "react/cjs/react.production.min"

import LeaveFeedback from "../LeaveFeedback/LeaveFeedback"


const Feedback = ({ state, click }) => {
  return (
    <Fragment>
      <LeaveFeedback state={state} click={click} />
    </Fragment>
  )
}

export default Feedback