import React from 'react'
import { useNavigate } from 'react-router-dom'
import { start_questions } from './Profile_Questions_List'

//welcome page, tutorial maybe, question to add details before continuing, etc
export const AfterRegistration =() =>{

    const navigate = useNavigate()

    const [edit, setEdit] = React.useState(false)
    const [next, setnext] = React.useState(0)

    function proceed_to_login(e){
        e.preventDefault()
        navigate('/user')
    }

    return(
        <div>
            Welcome!
            <div>
                Here are a few details you may want to add to build your profile
                <button onClick={()=>setEdit(true)}>Add details</button>
                <button onClick={(e)=>proceed_to_login(e)}>{edit? 'Submit':'Skip For now'}</button>
            </div>
            {edit && 
            <div>
                <RegQuestions pos={next} />
                {(next > 0) && <button onClick={(e)=>setnext(next-1)}>Back</button>}
                {(next < start_questions.length-1) &&<button onClick={(e)=>setnext(next+1)}>Next</button>}
            </div>
            }

        </div>
    )
}


export const RegQuestions = ({pos}) =>{

    return (
        <div>
            {pos+1}.  {start_questions[pos]}
            <div>
                <input onChange={(e)=>{}} />
            </div>
        </div>
    )
}

