'use client';

import { CloudDownloadOutlined, EditOutlined, FeaturedPlayListOutlined, MoreHoriz } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Checkbox, Grid, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

const JournalHistory = () => {

    const { id } = useParams();

    const data = [
        {
            id: 1,
            name: "Article 1",
            status: "Draft",
            date: "2024-12-30",
        },
        {
            id: 2,
            name: "Article 2",
            status: "Published",
            date: "2024-12-29",
        },
        {
            id: 3,
            name: "Article 3",
            status: "Draft",
            date: "2024-12-28",
        },
        {
            id: 4,
            name: "Article 4",
            status: "Published",
            date: "2024-12-27",
        },
        {
            id: 5,
            name: "Article 5",
            status: "Draft",
            date: "2024-12-26",
        },
    ];

    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} my={2} mt={4}>
                <Checkbox />

                <Box display={'flex'} gap={2}>

                    <Link href={`/portal/owner/journals/patients/${id}/journal?tab=tab1`}>
                        <Button variant='contained'>
                            New journal entry
                        </Button>
                    </Link>

                    <Button variant='contained' color='secondary' startIcon={<CloudDownloadOutlined />} >
                        Export
                    </Button>

                </Box>

            </Stack>
            <Grid container spacing={2}>
                {
                    data.map((item) => (
                        <Grid item xl={3} lg={3} md={4} sm={6}>
                            <JournalCard data={item} key={item?.id} />
                        </Grid>
                    ))
                }
            </Grid>

        </>
    )
}

export default JournalHistory;


const JournalCard = ({ data }) => {
    return (
        <Card sx={{ padding: 0 }}>

            <Checkbox />
            <Box minHeight={'120px'} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <FeaturedPlayListOutlined />
                <Typography variant='body2' fontSize={'12px'}>
                    Journal entry
                </Typography>
            </Box>

            <CardContent sx={{ minHeight: '120px', bgcolor: '#f5f6f8' }}>
                <Stack alignItems={'space-between'}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box bgcolor={'yellow'} py={.5} px={1} display={'flex'} alignItems={'center'} gap={.5}>
                            <Typography fontSize={'12px'} fontWeight={600}>
                                Draft
                            </Typography>

                            <EditOutlined sx={{ transformX: 'rotateY(180deg)', fontSize: '12px' }} />
                        </Box>

                        <MoreHoriz />
                    </Box>


                    <Stack mt={'2rem'}>
                        <Typography variant='span' fontSize={'12px'}>
                            Date
                        </Typography>

                        <Typography variant='span' fontSize={'12px'}>
                            Ghulam Ali
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>


    );
}
