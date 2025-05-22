// function SudokuGrid({ grid, onChange }) {
//   return (
//     <div className="grid grid-cols-9 gap-1">
//       {grid.map((row, i) =>
//         row.map((val, j) => (
//           <input
//             key={`${i}-${j}`}
//             type="text"
//             maxLength="1"
//             value={val === 0 ? '' : val}
//             onChange={(e) => onChange(i, j, e.target.value)}
//             className="w-10 h-10 text-center border"
//           />
//         ))
//       )}
//     </div>
//   );
// }


// SudokuGrid.js
import React from 'react';

export default function SudokuGrid({ grid, onChange, readOnly = false }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 40px)',
        gridGap: '4px',
        marginBottom: 20,
      }}
    >
      {grid.map((row, r) =>
        row.map((val, c) => (
          <input
            key={`${r}-${c}`}
            type="text"
            maxLength={1}
            value={val === 0 ? '' : val}
            onChange={e => {
              if (!readOnly) onChange(r, c, e.target.value);
            }}
            style={{
              width: 40,
              height: 40,
              textAlign: 'center',
              fontSize: 20,
              border: '1px solid #999',
              boxSizing: 'border-box',
              backgroundColor:
                (Math.floor(r / 3) + Math.floor(c / 3)) % 2 === 0 ? '#ddd' : '#fff',
              cursor: readOnly ? 'default' : 'text',
            }}
            readOnly={readOnly}
          />
        ))
      )}
    </div>
  );
}
