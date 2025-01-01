import CommonTabs from '@/components/ui/CommonTabs';
import { Paper } from '@mui/material'
import React from 'react'
import Overview from './components/Overview';
import JournalHistory from './components/JournalHistory';
import Reservations from './components/Reservations';
import PersonalData from './components/PersonalData';

const PatientDetail = () => {

    const tabs = [
        { label: "Patient Overview", value: "tab1", content: <Overview /> },
        { label: "Journal History", value: "tab2", content: <JournalHistory /> },
        { label: "Reservations", value: "tab3", content: <Reservations /> },
        { label: "Personal data", value: "tab4", content: <PersonalData /> },
        { label: "Patient files", value: "tab5", content: <div>Content for Tab 5</div> },
        { label: "Form", value: "tab6", content: <div>Content for Tab 6</div> },
    ];

    return (
        <Paper sx={{ borderRadius: '10px' }} className='w-full p-4'>
            <CommonTabs tabs={tabs} />
        </Paper>
    )
}

export default PatientDetail
