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
 
  return (
    <>
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12}>
            <Paper sx={{ borderRadius: '20px', padding: '20px 30px', minHeight: 'calc(100vh - 160px)'  }}>
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

            <Paper sx={{ borderRadius: '20px', padding: '20px 30px' , minHeight: 'calc(50vh - 95px)' }}>
              <Typography variant='h5'>
                Notices
              </Typography>

            </Paper>

            <Paper sx={{ borderRadius: '20px', padding: '20px 30px', minHeight: 'calc(50vh - 80px)' }}>
              <Typography variant='h5'>
                Bookings
              </Typography>

            </Paper>
            </Stack>
          </Grid>

        </Grid>
    </>
  );
}

Journals.propTypes = {
  searchParams: propTypes.object,
};

export default Journals;
