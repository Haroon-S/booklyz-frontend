/* eslint-disable no-unused-vars */

'use client';

import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    IconButton,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
import moment from 'moment';
import { Edit } from '@mui/icons-material';
import withTable from '@/HOC/withTable';
import TableLoaders from '@/app/common/loaders/TableLoaders';
import EmptyRecordTable from '@/app/common/components/EmptyRecordTable';
import { useGetJournalsQuery } from '@/services/private/journals';
// import ModalHeader from '@/app/common/components/ModalHeader';
// import { formModalStyles } from '@/styles/mui/common/modal-styles';
// import AddEditJournalForm from './form/AddEditJournalForm';
import { patientsTableHeadCells } from '../../utilities/data';
import PatientsTableHead from './PatientsTableHead';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function PatientsTable({
    pagination,
    sorting,
    onPageChange,
    onRowsPerPageChange,
    onRequestSort,
    isSelected,
    onSelectAllRows,
    journalId,
}) {
    const router = useRouter();

    const [isModalOpen, setModalOpen] = useState(false);
    const [isAddModalOpen, setAddModalOpen] = useState(false);

    const [selected, setSelected] = useState({});
    const { order, orderBy } = sorting;
    const { rowsPerPage, page } = pagination;
    const { data, isLoading, isFetching } = useGetJournalsQuery({
        owner: journalId || undefined,
        offset: page * rowsPerPage,
        page: page + 1,
        limit: rowsPerPage,
    });

    const loading = isLoading || isFetching;

    const toggleAddModal = () => {
        setAddModalOpen(!isAddModalOpen);
    };

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            <TableContainer className='w-100'>
                <Table className='w-100'>
                    <PatientsTableHead
                        headings={patientsTableHeadCells}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={onRequestSort}
                        rowCount={data?.count || 0}
                        numSelected={selected?.length}
                        onSelectAllRows={e => onSelectAllRows(e, data?.results)}
                    />

                    {loading && <TableLoaders />}

                    {!loading && data?.results?.length > 0 && (
                        <TableBody>
                            {data?.results?.map(item => {
                                const isItemSelected = isSelected(item?.id);

                                return (
                                    <TableRow
                                        hover
                                        selected={isItemSelected}
                                        className="cursor-pointer"
                                        onClick={() => {
                                            toggleModal();
                                            setSelected(item);
                                            router.push(`/portal/owner/journals/patients/${item?.id}`)
                                        }}
                                        key={item?.id}
                                    >
                                        <TableCell>
                                            <Typography variant="body1">{item?.name}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1">{'Surname'}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1">{item?.email}</Typography>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    )}
                    {!loading && data?.results?.length === 0 && <EmptyRecordTable colSpan={7} />}
                </Table>

                <TablePagination
                    component={Box}
                    count={data?.results?.length || 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    rowsPerPageOptions={[10, 20, 30]}
                    onRowsPerPageChange={onRowsPerPageChange}
                    onPageChange={onPageChange}
                />
            </TableContainer>

            {/* <Modal open={isAddModalOpen} onClose={toggleAddModal}>
        <Box sx={{ ...formModalStyles, width: '900px' }}>
          <ModalHeader title="Journal instance" onClose={toggleAddModal} />
          <AddEditJournalForm journalData={selected} toggleAddModal={toggleAddModal} />
        </Box>
      </Modal> */}
            {/* <Modal open={isModalOpen} onClose={toggleModal}>
        <Box sx={formModalStyles}>
          <ModalHeader title="Journal Detail" onClose={toggleModal} />
          <JournalDetail journalData={selected} toggleModal={toggleModal} />
        </Box>
      </Modal> */}
        </>
    );
}

PatientsTable.propTypes = {
    pagination: PropTypes.object.isRequired,
    sorting: PropTypes.object.isRequired,
    journalId: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onRowsPerPageChange: PropTypes.func.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    isSelected: PropTypes.func.isRequired,
    onSelectAllRows: PropTypes.func.isRequired,
};

export default withTable(PatientsTable, { sortBy: 'id' });
