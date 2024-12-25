'use client';

import { Box, Button, Grid, List, ListItem, Modal, Paper, Stack, Typography, useTheme } from '@mui/material';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import JournalsTable from './components/JournalsTable';
import { formModalStyles } from '@/styles/mui/common/modal-styles';
import ModalHeader from '@/app/common/components/ModalHeader';
import AddEditJournalForm from './components/form/AddEditJournalForm';
import Link from 'next/link';

function Journals({ searchParams }) {
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setAddModalOpen(!isAddModalOpen);
  };

  const { palette: { primary: { main } } } = useTheme();

  // List 

  const journalSidebarLinks = [
    {
      id: 1,
      title: 'Overview',
      active: true,
    },
    {
      id: 2,
      title: 'Patients'
    },
    {
      id: 3,
      title: 'Users'
    },
    {
      id: 4,
      title: 'Notices'
    },
    {
      id: 5,
      title: 'Templates'
    },
    {
      id: 6,
      title: 'Log History'
    },
  ]

  // common Stylings
  const commonPaperStyles = {
    borderRadius: '10px',
  }

  return (
    <>
      <Box className="flex gap-4">

        <Paper sx={{ ...commonPaperStyles, minHeight: 'calc(100vh - 160px)', minWidth: '350px', padding: '20px 30px' }}>

          <Typography variant='h4'>
            Journal
          </Typography>

          <List sx={{ marginTop: 3 }}>
            {
              journalSidebarLinks.map(item => (
                <ListItem key={item.id} sx={{ padding: '0px', marginTop: 1 }} >
                  <Link href={'/'} style={{ ...(item?.active ? { backgroundColor: main, color: 'white' } : {}), width: '100%', padding: '10px', borderRadius: '10px' }}>
                    <Typography variant='body1'>
                      {item.title}
                    </Typography>
                  </Link>
                </ListItem>
              ))
            }
          </List>

        </Paper>


        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12}>
            <Paper sx={{ borderRadius: '20px', padding: '20px 30px' }}>
              <Typography variant='h5'>
                Your latest journal drafts
              </Typography>

              <Stack spacing={1} mt={3}>
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
            </Paper>
          </Grid>

          <Grid item xl={6} lg={6} md={6} sm={12}>
            <Stack spacing={2}>

            <Paper sx={{ borderRadius: '20px', padding: '20px 30px' }}>
              <Typography variant='h5'>
                Notices
              </Typography>

            </Paper>

            <Paper sx={{ borderRadius: '20px', padding: '20px 30px' }}>
              <Typography variant='h5'>
                Bookings
              </Typography>

            </Paper>
            </Stack>
          </Grid>

        </Grid>


        {/* <Paper sx={{ ...commonPaperStyles }} className=" py-14 px-8">
          <JournalsTable journalId={searchParams?.journalId} />
          <Modal open={isAddModalOpen} onClose={toggleAddModal}>
            <Box sx={{ ...formModalStyles, width: '900px' }}>
              <ModalHeader title="Journal instance" onClose={toggleAddModal} />
              <AddEditJournalForm toggleAddModal={toggleAddModal} />
            </Box>
          </Modal>
        </Paper> */}



      </Box>
    </>
  );
}

Journals.propTypes = {
  searchParams: propTypes.object,
};

export default Journals;
