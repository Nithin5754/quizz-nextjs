"use client"

import Login from "@/components/Login"
import QuizzAddForm from "@/components/QuizzAddForm"
import { useEffect, useState } from "react"



const Master = () => {
   const [allQuestions,setAllQuestions]=useState<QuestionType[]|[]>([])


       const [loggedIn, setLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(true);

   useEffect(() => {

    // Check if the user was logged in before refreshing
    const storedLoginState = localStorage.getItem('loggedIn');
    if (storedLoginState === 'true') {
       setLoggedIn(true);
       setShowLoginModal(false);
   }

      const storedQuestions = localStorage.getItem('allQuestions');
      if (storedQuestions) {
          setAllQuestions(JSON.parse(storedQuestions));
      }
  }, []);



  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn.toString());
   }, [loggedIn]);




  return (
  <>
   
   <main className="min-h-screen flex items-center justify-center l">
  <div className="flex flex-col">


 {
  !loggedIn ?(
    <Login setLoggedIn={setLoggedIn} setShowLoginModal={setShowLoginModal}/>
  ):(
  <>
    <h1 className="mb-4 text-center text-4xl font-bold italic underline">ENTER NEW QUESTIONS ?    </h1>
    <QuizzAddForm allQuestions={allQuestions} setAllQuestions={setAllQuestions}/>
  </>
  )
 }

    
  </div>
   </main>
  </>
  )
}
export default Master