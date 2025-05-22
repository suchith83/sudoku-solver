import React, { useState } from 'react';
import SudokuGrid from './components/sudokuGrid';
import UploadImage from './components/uploadimage';
import SolverControls from './components/solverControls';
import { createEmptyGrid, solveSudoku } from './utils/sudokuSolver';
import { extractDigits } from './utils/ocr';

function App() {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [solutions, setSolutions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (r, c, val) => {
    if (val === '' || /^[1-9]$/.test(val)) {
      const newGrid = grid.map(row => [...row]);
      newGrid[r][c] = val === '' ? 0 : parseInt(val, 10);
      setGrid(newGrid);
    }
  };

  const handleSolve = () => {
    const sols = solveSudoku(grid);
    setSolutions(sols);
    setCurrentIndex(0);
    if (sols.length === 0) alert('No solutions found!');
  };

  const showPrev = () => {
    setCurrentIndex(i => (i === 0 ? solutions.length - 1 : i - 1));
  };

  const showNext = () => {
    setCurrentIndex(i => (i === solutions.length - 1 ? 0 : i + 1));
  };

  // When image file is selected, extract grid and set
  const handleFileSelected = async file => {
    const extractedGrid = await extractDigits(file);
    if (extractedGrid) setGrid(extractedGrid);
    else alert('Failed to extract Sudoku grid from image.');
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Sudoku Solver</h1>
      <UploadImage onFileSelected={handleFileSelected} />
      <SudokuGrid grid={grid} onChange={handleChange} />
      <SolverControls
        onSolve={handleSolve}
        hasSolutions={solutions.length > 0}
        onPrev={showPrev}
        onNext={showNext}
        currentIndex={currentIndex}
        totalSolutions={solutions.length}
      />

      {solutions.length > 0 && (
        <div>
          <h2>Current Solution</h2>
          <SudokuGrid grid={solutions[currentIndex]} readOnly />
        </div>
      )}
    </div>
  );
}

export default App;
