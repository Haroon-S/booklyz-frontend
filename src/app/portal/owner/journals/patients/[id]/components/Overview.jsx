import { BadgeOutlined } from '@mui/icons-material'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Overview = () => {
    return (
        <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={1} p={4}>
                    <Box display={'flex'} alignItems={'center'} gap={2} borderBottom={'1px solid #e7ecf2'} paddingY={2}>
                        <BadgeOutlined />  <Typography variant='h5' fontWeight={400} fontSize={'24px'}>Ghulam Ali</Typography>
                    </Box>
                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />

                </Stack>
                <Button variant='contained' color='secondary' sx={{ marginLeft: 4 }}>
                    Download from booking system
                </Button>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} borderLeft={1} p={4}>

                <Typography variant='h4'>
                    Journals Buttons
                </Typography>

                <Box display={'flex'} gap={2} mt={2}>
                    <Button variant='contained' color='secondary'>
                        Show latest
                    </Button>
                    <Button variant='contained' color='secondary'>
                       Create new
                    </Button>
                </Box>


                <Typography variant='h4' mt={4}>
                    Form
                </Typography>

                <Box display={'flex'} gap={2} mt={2}>
                    <Button variant='contained' color='secondary'>
                        Show 
                    </Button>
                    <Button variant='contained' color='secondary'>
                       Fill in
                    </Button>
                </Box>

            </Grid>
        </Grid>
    )
}

export default Overview;


const DataRow = ({ label, value }) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #e7ecf2'} paddingY={1}>
            <Typography variant='body1' fontWeight={600}>
                {label}
            </Typography>
            <Typography variant='body1'>
                {value}
            </Typography>
        </Box>
    )
}