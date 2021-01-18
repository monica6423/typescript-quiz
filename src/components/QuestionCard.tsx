import React from 'react'

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question, 
    questionNr, 
    answer, 
    callback, 
    userAnswer, 
    totalQuestions
}) => {
    return (
        <div>
            <p className="number">
                Question: {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{}}></p>
        </div>
    )
}

export default QuestionCard
