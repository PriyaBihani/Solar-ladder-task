import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';

const ImageUploader = () => {


    const [files, setFiles] = useState([])
    const [uploads, setUploads] = useState([])


    const handleAcceptedFiles = (files) => {
        files.map((file) =>
            Object.assign(file, {
                preview: file['type'].split('/')[0] === 'image' ? URL.createObjectURL(file) : null,
                formattedSize: (file.size),
            })
        );
        setUploads(files)
    };

    useEffect(() => {
        handleAcceptedFiles(files)
    }, [files])
    return (
        <div class="upload-container">
            <Dropzone
                accept="image/*"
                minSize={0}
                maxFiles={5}
                onDrop={(acceptedFiles) => {
                    setFiles(acceptedFiles)
                }}
            >
                {({ getRootProps, getInputProps }) => (
                    <div>
                        <div className="dropzone">
                            <div className="dz-message py-2 needsclick" {...getRootProps()}>
                                <input {...getInputProps()} />
                                <h3>Click to upload upto 5 images</h3>
                                <i class="far fa-cloud-upload-alt"></i>
                            </div>
                        </div>
                        <div className='upload-preview'>
                            {uploads.length > 0 && uploads.map(upload => {
                                return <img src={upload.preview} alt="" />
                            })}
                        </div>
                    </div>
                )}
            </Dropzone>
        </div>
    );
}

export default ImageUploader;

