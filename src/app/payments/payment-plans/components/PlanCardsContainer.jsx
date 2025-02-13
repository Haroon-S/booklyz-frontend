'use client';

import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useGetPaypalPlansListQuery } from '@/services/private/paypal';
import SectionLoader from '@/app/common/loaders/SectionLoader';
import PlanCard from '../../components/PlanCard';

function PlanCardsContainer() {
  const { data, isLoading, isFetching } = useGetPaypalPlansListQuery();
  const loading = isLoading || isFetching;
  return loading ? (
    <SectionLoader />
  ) : (
    <Box className=" flex justify-center">
      <Grid className="max-w-[1444px]" container height="100%" width="100%" alignItems="center" justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Stack textAlign="center" pt={2} pb={2}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white' }}>
              Simple And Affordable Pricing
            </Typography>
            <p style={{ color: 'white' }}>Choose a plan to suit your business</p>
          </Stack>
        </Grid>

        <Grid container spacing={{ xs: 0, md: 7 }} item xs={12} xl={9}>
          {data?.map(plan => (
            <PlanCard key={plan.planId} plan={plan} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlanCardsContainer;
