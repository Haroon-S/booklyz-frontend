'use client';

import { Box, Modal, Paper } from '@mui/material'
import React, { useState } from 'react'
import JournalsTable from '../components/JournalsTable'
import ModalHeader from '@/app/common/components/ModalHeader'
import AddEditJournalForm from '../components/form/AddEditJournalForm'
import { formModalStyles } from '@/styles/mui/common/modal-styles'

const PatientsPage = ({ searchParams }) => {
    const [isAddModalOpen, setAddModalOpen] = useState(false);

    const toggleAddModal = () => {
        setAddModalOpen(!isAddModalOpen);
    };


    // common Stylings
    const commonPaperStyles = {
        borderRadius: '10px',
    }

    return (
        <div>
            <Paper sx={{ ...commonPaperStyles }} className=" py-14 px-8">
                <JournalsTable journalId={searchParams?.journalId} />
                <Modal open={isAddModalOpen} onClose={toggleAddModal}>
                    <Box sx={{ ...formModalStyles, width: '900px' }}>
                        <ModalHeader title="Journal instance" onClose={toggleAddModal} />
                        <AddEditJournalForm toggleAddModal={toggleAddModal} />
                    </Box>
                </Modal>
            </Paper>
        </div>
    )
}

export default PatientsPage
