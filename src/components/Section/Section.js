import s from './Section.module.css'
const Section = ({ children }) => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        {children}
      </div>

    </section>
  )

}

export default Section