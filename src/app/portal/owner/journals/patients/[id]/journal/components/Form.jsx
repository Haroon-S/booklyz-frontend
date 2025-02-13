'use client';

import CommonModal from '@/app/common/components/CommonModal';
import CommonSelectBtn from '@/app/common/components/CommonSelectBtn';
import { useGetKvyCodesQuery } from '@/services/private/kvyCode';
import FormikDatePicker from '@/shared/components/form/FormikDatePicker'
import FormikDropZone from '@/shared/components/form/FormikDropZone';
import FormikField from '@/shared/components/form/FormikField';
import FormikMultiSelect from '@/shared/components/form/FormikMultiSelect'
import FormikSelect from '@/shared/components/form/FormikSelect';
// import FormikTextEditor from '@/shared/components/form/FormikTextEditor';
// import dynamic from 'next/dynamic';

import { Box, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { useEffect, useMemo, useState } from 'react'
import KvaCodeForm from './KvaCodeForm';
import { getCommonOptionsMaker } from '@/utilities/helpers';
import { useGetDaignosisQuery } from '@/services/private/daignosis';
import DaignosisForm from './DaignosisForm';
import ActionBtns from '@/app/common/components/ActionBtns';
import { initialValues } from './utilis/formUtilis';
import { useAddJournalMutation } from '@/services/private/journals';

// const FormikTextEditor = dynamic(
//     () => import('@/shared/components/form/FormikTextEditor'),
//     { ssr: false }
//   );

const JournalForm = () => {

    const [kvaCodeModal, setKvaCodeModal] = useState(false);
    const [daignosisModal, setDaignosisModal] = useState(false);
    const [formOptions, setFormOptions] = useState({
        kvyCodeFinalOptions: [],
        daignosisFinalOptions: []
    })

    const { data: kvyCodeData } = useGetKvyCodesQuery();
    const { data: daignosisData } = useGetDaignosisQuery();
    const [addJournal] = useAddJournalMutation();


    const kvaOptions = useMemo(() => getCommonOptionsMaker(kvyCodeData?.results, 'id', 'code'), [kvyCodeData]);
    const daignosisOptions = useMemo(() => getCommonOptionsMaker(daignosisData?.results, 'id', 'code'), [daignosisData]);


    const handleToggleKvaModal = () => setKvaCodeModal(prev => !prev);
    const handleToggleDaignosisModal = () => setDaignosisModal(prev => !prev);
    
    const handleSubmit = async (values) => {
        const formData = new FormData();

        // Append simple fields
        Object.entries(values).forEach(([key, value]) => {
            if (key !== 'journal_files') {
                formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
            }
        });

        // Append files
        if (values.journal_files) {
            values.journal_files.forEach((file) => {
                formData.append('journal_files', file);
            });
        }

        // Call API
        try {
            await addJournal(formData);
            console.log('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    useEffect(() => {
        setFormOptions(prevOptions => ({
            ...prevOptions,
            kvyCodeFinalOptions: [
                ...kvaOptions,
                {
                    value: '',
                    label: (
                        <CommonSelectBtn title="Manage KVA code" actionFunc={handleToggleKvaModal} />
                    ),
                },
            ],
            daignosisFinalOptions: [
                ...daignosisOptions,
                {
                    value: '',
                    label: (
                        <CommonSelectBtn title="Manage Daignosis" actionFunc={handleToggleDaignosisModal} />
                    ),
                },
            ],
        }));
    }, [kvaOptions, daignosisOptions]);


    const { kvyCodeFinalOptions, daignosisFinalOptions } = formOptions;

    return (
        <>
            <Formik enableReinitialize
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                {({ }) => (
                    <Form style={{ width: '100%' }}>
                        <Paper sx={{ borderRadius: '20px', padding: '20px 30px', minHeight: 'calc(100vh - 160px)', width: "100%" }}>
                            <Typography variant='h3' mb={2}>
                                Journal
                            </Typography>

                            <Divider />

                            <Grid container spacing={2} minWidth={"100%"} my={2}>
                                <Grid item xl={6} lg={6} md={6}>
                                    <Stack spacing={2}>
                                        <FormikDatePicker
                                            name='date'
                                            label='Date'
                                            isStack
                                        />

                                        <FormikSelect
                                            name='template'
                                            label='Template'
                                            options={[]}
                                            placeholder='Select'
                                            isStack
                                        />

                                        <FormikMultiSelect
                                            name='diagnosis'
                                            label='Daignose'
                                            options={daignosisFinalOptions}
                                            placeholder="Select"
                                            isStack
                                        />


                                        <FormikMultiSelect
                                            name='kvy_code'
                                            label='KVA Code'
                                            options={kvyCodeFinalOptions}
                                            placeholder='Select'
                                            isStack
                                        />


                                        <FormikField
                                            name='contact_name'
                                            label='Contact reason (used as title) '
                                            placeholder='Reason'
                                            isStack
                                        />


                                        <FormikField
                                            name='assessment'
                                            label='Assessment'
                                            isStack
                                        />

                                        <FormikField
                                            name='action'
                                            label='Measure'
                                            isStack
                                        />

                                        <FormikField
                                            name='description'
                                            label='Write'
                                            type='textarea'
                                            isStack
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xl={6} lg={6} md={6}>
                                    <Typography variant='body1' mb={2}>Filer</Typography>

                                    <FormikDropZone
                                        name='journal_files'
                                        multiple
                                    />
                                </Grid>
                            </Grid>


                            <ActionBtns initialValues={initialValues} />
                        </Paper>
                    </Form>
                )}
            </Formik>
            <CommonModal isOpen={kvaCodeModal} toggle={handleToggleKvaModal}>
                <Box minWidth={"600px"}>
                    <KvaCodeForm />
                </Box>
            </CommonModal>
            <CommonModal isOpen={daignosisModal} toggle={handleToggleDaignosisModal}>
                <Box minWidth={"600px"}>
                    <DaignosisForm />
                </Box>
            </CommonModal>
        </>
    )
}

export default JournalForm
