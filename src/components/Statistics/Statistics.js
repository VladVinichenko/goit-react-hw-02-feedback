import propTypes from "prop-types";
import s from './Statistics.module.css'
function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}
const Statistics = ({ title, stats }) => {
  return (
    <div className={s.statistics}>

      {title && <h2 className={s.title}>{title}</h2>}



      <ul className={s.statList}>
        {stats.map(el => (
          <li className={s.item} style={{ backgroundColor: `rgb(${getRandom(0, 150)}, ${getRandom(0, 150)}, ${getRandom(0, 150)})` }} key={el.id}>
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>

        ))}


      </ul>
    </div >
  )
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired
}

export default Statistics