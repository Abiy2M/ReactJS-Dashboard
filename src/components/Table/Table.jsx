import React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableList = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://images-na.ssl-images-amazon.com/images/I/81bc8mA3nKL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2165656,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_SY450_.jpg",
      customer: "Mark Colbert",
      date: "7 March",
      amount: 929,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 8956335,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/816kIdKYVVL._AC_SL1500_.jpg",
      customer: "Carl Lockwood",
      date: "29 April",
      amount: 2785,
      method: "Online",
      status: "Pending",
    },
    {
      id: 4652356,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/61-ODJrgv6L._AC_SL1500_.jpg",
      customer: "Kay Marshal",
      date: "12 May",
      amount: 3245,
      method: "Online",
      status: "Pending",
    },
    {
      id: 6969696,
      product: "KZ ZS10 Pro",
      img: "https://m.media-amazon.com/images/I/512lYvU3wYL._AC_SL1500_.jpg",
      customer: "Abiy Menberu",
      date: "23 April",
      amount: 50,
      method: "Online",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table_cell">Tracking ID</TableCell>
            <TableCell className="table_cell">Product</TableCell>
            <TableCell className="table_cell">Customer</TableCell>
            <TableCell className="table_cell">Date</TableCell>
            <TableCell className="table_cell">Amount</TableCell>
            <TableCell className="table_cell">Payment Method</TableCell>
            <TableCell className="table_cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="table_cell">{row.id}</TableCell>
              <TableCell className="table_cell">
                <div className="cell_wrapper">
                  <img
                    src={row.img}
                    alt={`"img for " ${row.product}`}
                    className="image"
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="table_cell">{row.customer}</TableCell>
              <TableCell className="table_cell">{row.date}</TableCell>
              <TableCell className="table_cell">{row.amount}</TableCell>
              <TableCell className="table_cell">{row.method}</TableCell>
              <TableCell className="table_cell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
