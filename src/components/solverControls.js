// SolverControls.js
import React from 'react';

export default function SolverControls({
  onSolve,
  hasSolutions,
  onPrev,
  onNext,
  currentIndex,
  totalSolutions,
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={onSolve} style={{ marginRight: 10 }}>
        Solve
      </button>
      {hasSolutions && (
        <>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext} style={{ marginLeft: 10 }}>
            Next
          </button>
          <span style={{ marginLeft: 10 }}>
            Solution {currentIndex + 1} of {totalSolutions}
          </span>
        </>
      )}
    </div>
  );
}
