import React, { useRef, useState } from 'react';

const FileChooser = ({ handleSelect, img }) => {
  const selectImage = (e) => {
    handleSelect(e);
  };

  return (
    <div>
      <label
        style={{ border: 'none', backgroundColor: 'unset' }}
        for="upload-image"
      >
        <img style={{ height: '110px', width: '120px' }} src={img} />{' '}
      </label>

      <input
        type="file"
        id="upload-image"
        onChange={selectImage}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FileChooser;
