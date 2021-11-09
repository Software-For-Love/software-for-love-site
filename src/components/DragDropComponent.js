import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function DragDropComponent(){
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
      }, []);
      
    const {
        getRootProps,
        getInputProps,
        isDragReject,
        acceptedFiles
      } = useDropzone({
        onDrop,
        accept: 'application/docx, application/pdf, image/*'
      });
    
    const selectedFiles = acceptedFiles.map(file => 
        (<li key={file.path}>
            {file.name}
        </li>))

    return(
        <div className="container">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drop your resume here, or click to select it</p>
            </div>
            <aside>
                <ul>{selectedFiles}</ul>
            </aside>
        </div>
    )
}
