import React from 'react';

export default function BrandQuestionCard({
  question,
  totalQuestions,
  currentIndex,
  selectedScore,
  onSelectOption,
  onNext,
  onBack
}) {
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <div className="quiz-question-card">
      <div className="quiz-step-header">
        <span className="quiz-step-indicator">
          QUESTION {question.number} OF {totalQuestions}
        </span>
      </div>

      <h3 className="quiz-question-title">{question.question}</h3>

      <div className="quiz-options-list">
        {question.options.map((opt, idx) => {
          const isSelected = selectedScore === opt.score;
          return (
            <button
              key={idx}
              className={`quiz-option-button ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectOption(opt.score)}
            >
              <span className="quiz-option-indicator"></span>
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>

      <div className="quiz-nav-row">
        <button
          className="brand-btn-secondary"
          onClick={onBack}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0.4 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
        >
          &larr; BACK
        </button>

        <button
          className="brand-btn-primary"
          style={{ width: 'auto', padding: '14px 28px' }}
          onClick={onNext}
          disabled={selectedScore === null}
        >
          {isLast ? 'SEE MY RESULT' : 'NEXT \u2192'}
        </button>
      </div>
    </div>
  );
}
