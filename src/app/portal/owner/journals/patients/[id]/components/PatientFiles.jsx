'use client';

import ActionBtns from '@/app/common/components/ActionBtns'
import FormikDropZone from '@/shared/components/form/FormikDropZone'
import { Divider, Stack, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { useParams } from 'next/navigation';
import React from 'react'

const PatientFiles = () => {
    const { id } = useParams();

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    file_type: "",
                    user: id
                }}
                onSubmit={(values) => {
                    console.log('values ==> ', values);
                }}>
                {({ }) => (
                    <Form style={{ width: '100%' }}>


                        <Stack spacing={2} minWidth={"100%"} my={2}>
                            <Typography variant='body1' mb={2}>Files</Typography>

                            <FormikDropZone
                                name='journal_files'
                                multiple
                            />

                            <ActionBtns initialValues={{
                                file_type: "",
                                user: id
                            }} submitText='Upload' />

                            <Divider />
                        </Stack>




                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default PatientFiles
