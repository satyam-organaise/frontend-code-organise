import React from 'react'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import Typography from '@mui/material/Typography'

const Folder = () => {
      //Index prop defiend by according to this array
    //['dashboard', 'message', 'folder', 'data', 'privacy-policy', 'settings'];

    return (
        <>
            <LeftSideBar data={{pageName:"Folder",index: 2 }}>
                <Typography variant="h1" color="secondary.dark">Folder</Typography>
            </LeftSideBar>
        </>
    )
}

export default Folder