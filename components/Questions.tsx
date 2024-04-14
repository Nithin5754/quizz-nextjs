import React from 'react';
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Button } from './ui/button';


interface QuestionsProps {
  allQuestions: QuestionType[];
  setAllQuestions:React.Dispatch<React.SetStateAction<QuestionType[]>>
}

const Questions: React.FC<QuestionsProps> = ({ allQuestions,setAllQuestions }) => {

  const handleDeleteClick = (index: number) => {
    const updatedQuestions = allQuestions.filter((_, i) => i !== index);
    setAllQuestions(updatedQuestions);
    localStorage.setItem('allQuestions', JSON.stringify(updatedQuestions));
};
 return (
<div className='grid grid-cols-3 gap-4 m-6'>
 {allQuestions.map((question, index) => (
    <div key={question.qus} className="bg-white dark:bg-slate-700 shadow-md rounded-lg p-4">
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{question.qus}</h2>
      </div>
      <div className="mb-4">
      
        {question.options.map((option, optionIndex) => (
          <p key={optionIndex} className="text-gray-600 dark:text-gray-300">{optionIndex+1}: {option}</p>
        ))}
      </div>
      <div className="mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">Correct Answer:</span>
        <span className="ml-2 font-bold text-gray-800 dark:text-white">{question.answer}</span>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDeleteClick(index)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

 );
};

export default Questions;
