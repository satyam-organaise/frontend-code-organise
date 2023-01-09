import React from 'react';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import CircularProgressBar from '../components/DataPageComponent/CircularProgressBar/CircularProgressBar';
import LineBarsChart from '../components/DataPageComponent/LineBarsChart';
import { Box } from '@mui/system';

const Data = ({ theme }) => {
    //Index prop defiend by according to this array
    //['dashboard', 'message', 'folder', 'data', 'privacy-policy', 'settings'];

    return (
        <>
            <LeftSideBar data={{ pageName: "Data", index: 3 }}>
                <Grid container id="graph_session_in_data_part">
                    <Grid item  p={.5}  md={3}  lg={3} sx={{ height: "200px" }} >
                        <Box p={.5} bgcolor="#fff" borderRadius="10px">
                            <CircularProgressBar />
                            <Typography mt={.5} color="secondary.dark" variant="subtitle2" textAlign={'center'} > Total data - 1000</Typography>
                        </Box>
                    </Grid>
                    <Grid item  p={.5}  md={9} lg={9} sx={{ height: "200px" }} >
                        <Box  p={.5}  bgcolor="#fff" borderRadius="10px">
                            <LineBarsChart />
                        </Box>

                    </Grid>
                </Grid>
            </LeftSideBar>
        </>
    )
}

export default Data