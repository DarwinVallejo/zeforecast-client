import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function creatVariable(
  id: number,
  name: string,
  percent: number,
  initial: string,
  final: string,
  description: string,
) {
  return { id, name, percent, initial, final, description };
}

const rows = [
  creatVariable(1,'Conrso', 10, "01-01-2023", "01-02-2023", "Concurso proveedor LUUNA "),
  creatVariable(2,'Temporalidad', 5, "01-01-2023", "03-02-2023", "Temporada baja LUUNA "),
];

export default function ZeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className='thead'>ID</TableCell>
            <TableCell className='thead'>Nombre</TableCell>
            <TableCell className='thead'>Porcentaje</TableCell>
            <TableCell className='thead'>Fecha inicial</TableCell>
            <TableCell className='thead'>Fecha final</TableCell>
            <TableCell className='thead'>Descripción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.percent}%</TableCell>
              <TableCell>{row.initial}</TableCell>
              <TableCell>{row.final}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}