import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Papa from "papaparse";
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';


const FileUploadModal = ({ handleClose, open ,setJsonData }) => {
    const [fileGet, setFile] = useState();
    

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            { setFile(file) }
            { console.log(file) }
           
        })

    }, [])

    const {
        getRootProps,
        getInputProps
    } = useDropzone({onDrop});

   
    const convertToJson = () => {
        Papa.parse(fileGet, {
            complete: (results) => {
                console.log(results);
                setJsonData(results.data);
                handleClose();
            },
        });
    };


    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">

                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Upload file here
                    </DialogContentText>
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                        <em>(Only *.jpeg and *.png images will be accepted)</em>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={convertToJson} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default FileUploadModal