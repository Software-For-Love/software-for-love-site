import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

export default function DragDropComponent({onDrop}){

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles,
      } = useDropzone({
        onDrop,
        accept: '.doc,.docx,application/msword, application/pdf, image/*',
        maxFiles: 1,
        minSize: 0,
        //maxSize: 
      });

   
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);
    
    const selectedFiles = acceptedFiles.map(file => 
        (<li key={file.path}>
            {file.name}
        </li>))


    return(
        <div className="container"  >
            <div {...getRootProps({style})} >
                <input {...getInputProps()} />
                <p>Drop your resume here, or click to select it</p>
            </div>
            <aside>
                <ul>{selectedFiles}</ul>
            </aside>
        </div>
    )
}
