import './styles.sass'

const ExamCard = ({ details }) => {
  return (
    <article className='personal-content-card'>
      <img className='personal-content-card__image' src={details.cardImage} alt="" />
      <div className='personal-content-card__bar'></div>
      <div className='personal-content-card__description'>
        <h3 className='personal-content-card__description--title'>{details.title}</h3>
        <ul>
          {
            details.shortDescription.map((item, index) => (
              <li 
                key={index} 
                className='personal-content-card__description--text'  
              >
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}

export default ExamCard