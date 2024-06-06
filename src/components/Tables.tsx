import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import TablePagination from '@mui/material/TablePagination';
import { Post, Album, Todo } from '../types/types';

interface TablesProps {
    tabs: (Post | Todo | Album)[];
    name: string;
}

const Tables: React.FC<TablesProps> = ({ tabs, name }) => {
    const [page, setPage] = useState(0);  // Mevcut sayfa numarası
    const [rowsPerPage, setRowsPerPage] = useState(5); // Her sayfada gösterilecek satır sayısı Her sayfada gösterilecek satır sayısı

    //  sayfa  değiştirme fonk.
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

 // bir sayfada kaç  satır olacağını ayarladığımız fonk.
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedTabs = tabs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <React.Fragment>
            {tabs && tabs.length> 0 ? (
                <React.Fragment>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ fontWeight: "900" }}>
                                    <TableCell sx={{ fontWeight: "700" }}>{name} Id</TableCell>
                                    <TableCell sx={{ fontWeight: "700" }}>Title</TableCell>
                                    <TableCell sx={{ fontWeight: "700" }}>{("body" in tabs[0]) ? 'Description' : ('completed' in tabs[0] ? "Completed" : null)}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedTabs.map((tab) => (
                                    <TableRow key={tab.id}>
                                        <TableCell component="th" scope="row">
                                            {tab.id}
                                        </TableCell>
                                        <TableCell>{tab.title}</TableCell>
                                        <TableCell>
                                            {('body' in tab) ? tab.body : ('completed' in tab ? tab.completed.toString() : null)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={tabs.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </React.Fragment>
            ) : (
                <Alert severity="error">No Value.</Alert>
            )}
        </React.Fragment>
    );
};


export default Tables;
