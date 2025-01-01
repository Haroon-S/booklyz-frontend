import { AutoStoriesOutlined } from '@mui/icons-material'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Reservations = () => {
    return (
        <>
            <Grid container p={4} height={'100%'}>
                <Grid item xl={6} lg={6} md={6} pr={4}>
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

                    <Stack spacing={2} mt={2}>
                        <Box sx={{ borderRadius: '15px', backgroundColor: '#f5f6f8' }} padding={4} display={'flex'} justifyContent={'space-between'}>

                            <Stack>
                                <Typography variant='body2' style={{ color: '#66737f' }}><b style={{ color: '#50b8a7' }}>Esmail Abasian</b> #805509 </Typography>
                                <Typography variant='body2' style={{ color: '#66737f' }}>25 dec. 2024, 10:21 </Typography>
                            </Stack>

                            <Button variant='contained'>
                                View draft
                            </Button>

                        </Box>
                    </Stack>
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
