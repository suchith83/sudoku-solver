// UploadImage.js
import React from 'react';

export default function UploadImage({ onFileSelected }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="file"
        accept="image/*"
        onChange={e => {
          if (e.target.files && e.target.files.length > 0) {
            onFileSelected(e.target.files[0]);
          }
        }}
      />
    </div>
  );
}
