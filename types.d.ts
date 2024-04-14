


type QuestionType = {
  qus: string,
  options: [string, string, string, string],
  answer: string,
  date?: string
 }



 interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  onReset: () => void;
}


