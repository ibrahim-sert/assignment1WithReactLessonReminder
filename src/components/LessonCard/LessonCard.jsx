import lessonCardStyle from './lesson.module.css'

const LessonCard = ({id,image,name,age}) => {
  return (
    <div className={lessonCardStyle["lessoncard-container"]} >
     
      <div key={id} className={lessonCardStyle["card"]} >
          <div><img src={image} alt="img" /></div>
          
          <div className={lessonCardStyle["item"]}>
            <p >Lesson Name :<span className={lessonCardStyle.span}>{name}</span></p>
            <p >Lesson Hour :<span className={lessonCardStyle.span}>{age}</span></p>
        </div>
      </div>
     
    </div>
  )
}

export default LessonCard