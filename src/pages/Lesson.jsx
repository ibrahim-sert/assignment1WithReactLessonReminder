import LessonCard from '../components/LessonCard/LessonCard'
import './Lesson.css'
import {data} from "../helper/data"


const Lesson = () => {
  return (
   <div className='lesson-ctn'>
    <h2>Lesson Reminder</h2>
    <div className='lesson-container'>
      {data.map(({age,id,image,name})=>
        <LessonCard key={id} image={image} name={name} age={age} /> 
      )}
    </div>
   </div>
      

    
  )
}

export default Lesson