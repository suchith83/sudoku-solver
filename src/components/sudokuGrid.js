function SudokuGrid({ grid, onChange }) {
  return (
    <div className="grid grid-cols-9 gap-1">
      {grid.map((row, i) =>
        row.map((val, j) => (
          <input
            key={`${i}-${j}`}
            type="text"
            maxLength="1"
            value={val === 0 ? '' : val}
            onChange={(e) => onChange(i, j, e.target.value)}
            className="w-10 h-10 text-center border"
          />
        ))
      )}
    </div>
  );
}
