"use client"

import { FormEvent, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Questions from "./Questions"

interface QuestionsProps {
  allQuestions: QuestionType[];
  setAllQuestions:React.Dispatch<React.SetStateAction<QuestionType[]>>
}



const QuizzAddForm:React.FC<QuestionsProps> = ({ allQuestions,setAllQuestions }) => {



  const[option1,setOption1]=useState('')
  const[option2,setOption2]=useState('')
  const[option3,setOption3]=useState('')
  const[option4,setOption4]=useState('')
  const[answer,setAnswer]=useState('')
  const [question,setQuestion]=useState('')
  // const [allQuestions,setAllQuestions]=useState<QuestionType[]|[]>([])




  const isFillAll=[question,option1,option2,option3,option4,answer].every(Boolean)

  


  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()


      const newQuestion:QuestionType={
        qus:question,
        options:[option1,option2,option3,option4],
        answer:answer,
        date:new Date().toUTCString()
      }

      setAllQuestions([...allQuestions,newQuestion]);
      localStorage.setItem('allQuestions', JSON.stringify([...allQuestions, newQuestion]));

      setAnswer('')
      setOption1('')
      setOption2('')
      setOption3('')
      setOption4('')
      setQuestion('')
 
  }


  function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    localStorage.setItem('loggedIn', 'false');
    window.location.href = "/";
}


  return (
<div className="min-h-screen flex flex-col  items-center ">
   { allQuestions&&<Questions allQuestions={allQuestions} setAllQuestions={setAllQuestions}/>}
   <h1 className="mb-4 text-center text-4xl font-bold italic underline">ENTER NEW QUESTIONS ?    </h1>
<form className="w-[500px] dark:text-gray-200 dark:font-bold dark:bg-slate-500 p-4 rounded-md" onSubmit={handleSubmit}>

<div className="flex flex-col gap-3">
<label>Enter a Question :</label>
 <Input placeholder="enter new question" value={question} onChange={(e)=>setQuestion(e.target.value)}/>
</div>

<div className="flex flex-col gap-3 mt-4">
<label>Add Multiple options:</label>
<div className="flex flex-row gap-3">
<Input placeholder="option 1" value={option1} onChange={(e)=>setOption1(e.target.value)}/>
<Input placeholder="option 2" value={option2} onChange={(e)=>setOption2(e.target.value)}/>
</div>
<div className="flex flex-row gap-3">
<Input placeholder="option 3" value={option3} onChange={(e)=>setOption3(e.target.value)}/>
<Input placeholder="option 4" value={option4} onChange={(e)=>setOption4(e.target.value)}/>
</div>
</div>

<div className="flex flex-col gap-3">
{
option1&&option2&&option3&&option4&&(
 <>
  <label>Answer :</label>
  <select required name="answer" className=" text-black  rounded-md p-4" onChange={(e) => setAnswer(e.target.value)} >
                                  <option value='' selected disabled>Choose Your Answer</option>
                                  {option1 && <option defaultValue={option1}>{option1}</option>}
                                  {option2 && <option defaultValue={option2}>{option2}</option>}
                                  {option3 && <option defaultValue={option3}>{option3}</option>}
                                  {option4 && <option defaultValue={option4}>{option4}</option>}
                      </select>
 </>
)
}

</div>
<div className="mt-4 flex justify-end">
   <Button disabled={!isFillAll} className="dark:bg-slate-950  dark:text-white">submit</Button>
</div>

<Button onClick={handleLogout}>Log-out</Button>
   
</form>
</div>
  )
}
export default QuizzAddForm