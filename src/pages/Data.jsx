import React from 'react';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import CircularProgressBar from '../components/DataPageComponent/CircularProgressBar/CircularProgressBar';

const Data = ({ theme }) => {
    //Index prop defiend by according to this array
    //['dashboard', 'message', 'folder', 'data', 'privacy-policy', 'settings'];

    return (
        <>
            <LeftSideBar data={{ pageName: "Data", index: 3 }}>
                <Grid container spacing={1}  >
                    <Grid item lg={3} sx={{height:"200px"}} bgcolor="#fff" p={1} borderRadius="10px">
                        <CircularProgressBar />
                        <Typography mt={.5} color="secondary.dark" variant="subtitle2" textAlign={'center'} > Total data - 1000</Typography>
                    </Grid>
                    <Grid item lg={9}>

                    </Grid>

                </Grid>
            </LeftSideBar>
        </>
    )
}

export default Data