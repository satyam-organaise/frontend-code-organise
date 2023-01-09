
import React from 'react'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import Typography from '@mui/material/Typography'

const Message = () => {
    //Index prop defiend by according to this array
    //['dashboard', 'message', 'folder', 'data', 'privacy-policy', 'settings'];

    return (
        <>
            <LeftSideBar data={{ pageName: "Message", index: 1 }}>
                <Typography variant="h1" color="secondary.dark">Message</Typography>
            </LeftSideBar>
        </>
    )
}

export default Message