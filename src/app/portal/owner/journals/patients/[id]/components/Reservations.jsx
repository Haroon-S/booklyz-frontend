import { AutoStoriesOutlined } from '@mui/icons-material'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Reservations = () => {
    return (
        <>
            <Grid container p={4} height={'100%'}>
                <Grid item xl={6} lg={6} md={6}>
                    <Box display={'flex'} gap={2}>

                        <AutoStoriesOutlined />

                        <Stack spacing={1}>
                            <Typography fontSize={'24px'} variant='h4'>
                                Previous bookings
                            </Typography>

                            <Typography variant='body1' fontSize={'14px'}>
                                30 days back • <span style={{ color: '#50b8a7' }}> View all bookings </span>
                            </Typography>
                        </Stack>

                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={6} borderLeft={1} paddingLeft={4}>
                    <Box display={'flex'} gap={2}>

                        <AutoStoriesOutlined />

                        <Stack spacing={1}>
                            <Typography fontSize={'24px'} variant='h4'>
                                Upcoming bookings
                            </Typography>

                            <Typography variant='body1' fontSize={'14px'}>
                                30 ahead • <span style={{ color: '#50b8a7' }}> View all bookings </span>
                            </Typography>
                        </Stack>

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Reservations
