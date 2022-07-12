import * as React from "react";
import styles from "./SetsTable.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import words from "../../words.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, numberOfCards, date) {
  return { name, numberOfCards, date };
}

const sets = words.map((set) => {
  const container = {};

  container.rus_name = set.rus_name;
  container.date = set.date;
  container.numberOfCards = set.data.length;
  createData(container);
  return container;
});

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Название</StyledTableCell>
            <StyledTableCell align="right">Карточки</StyledTableCell>
            <StyledTableCell align="right">Дата</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sets.map((row) => (
            <StyledTableRow key={row.rus_name}>
              <StyledTableCell component="th" scope="row">
                {row.rus_name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.numberOfCards}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
