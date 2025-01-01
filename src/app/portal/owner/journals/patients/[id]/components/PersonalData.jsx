import { BadgeOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const PersonalData = () => {
    return (
        <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={1} p={4}>
                    <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #e7ecf2'} alignItems={'center'}>
                        <Box display={'flex'} alignItems={'center'} gap={2} paddingY={2}>
                            <BadgeOutlined />  <Typography variant='h5' fontWeight={400} fontSize={'24px'}>Journal entries</Typography>
                        </Box>

                        <Button size='small' variant='contained'>
                            Change
                        </Button>
                    </Box>

                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />
                    <DataRow label={'Test'} value={'Test'} />

                </Stack>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} borderLeft={1} p={4}>

                <Box display={'flex'} alignItems={'center'} gap={2} paddingY={2}>
                    <BadgeOutlined />  <Typography variant='h5' fontWeight={400} fontSize={'24px'}>User</Typography>
                </Box>
                <Typography variant='body2'>Users who made the patient their own. (Has access to personal data and journal) </Typography>



                <Box display={'flex'} gap={2} mt={2} px={2} py={1} alignItems={'center'} bgcolor={'#f5f6f8'}>
                    <Avatar>H</Avatar> <Typography variant='body1' fontSize={'18px'}>Pamela Sanatgari </Typography>
                </Box>

                <Divider />

                <Box display={'flex'} alignItems={'center'} gap={2} paddingTop={2}>
                    <BadgeOutlined />  <Typography variant='h5' fontWeight={400} fontSize={'24px'}>Other information</Typography>
                </Box>

                <Box mt={2} px={2} py={1} alignItems={'center'} bgcolor={'#f5f6f8'}>
                    <LabelValue label={'test'} value={'test'} />
                    <LabelValue label={'test'} value={'test'} />
                    <LabelValue label={'test'} value={'test'} />
                    <LabelValue label={'test'} value={'test'} />
                    <LabelValue label={'test'} value={'test'} />
                </Box>

            </Grid>
        </Grid>
    )
}

export default PersonalData;


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

const LabelValue = ({ label, value }) => {
    return (
        <Box display={'flex'} gap={1} alignItems={'center'} paddingY={1}>
            <Typography variant='body1' fontWeight={600}>
                {label}:
            </Typography>
            <Typography variant='body1'>
                {value}
            </Typography>
        </Box>
    )
}