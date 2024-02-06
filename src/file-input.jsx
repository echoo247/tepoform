import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const FileInput = ({files, setFiles}) => {
    console.log("files=-input", files)
    const onDrop = useCallback(acceptedFiles => {
        let filesInBase64 = acceptedFiles.map((file) => {
            const reader = new FileReader();
            const fileName = file.name;
            reader.readAsDataURL(file);
            reader.onload = e => {
                e.target && setFiles(prev => [...prev, {name: fileName, file: e.target.result}]);
            };
            reader.onerror = error => console.log(error);
        });
    }, [])


    const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
    onDrop,
    accept: '.jpg, .png, .zip, .pdf, .doc, .docx, .xls, .xlsx',
    });

    return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button type="button">
        Вибрати
      </button>
      <p>jpg, png, zip, pdf, doc, docx, xls, xlsx</p>
      <ul>
          {files.name}
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
    );
};

export default FileInput;
