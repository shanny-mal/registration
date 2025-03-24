import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useTable } from "react-table"; // react-table hook
import { jsPDF } from "jspdf"; // jsPDF for PDF generation
import autoTable from "jspdf-autotable"; // Import autoTable function
import "./AdminPanel.css";

const AdminPanel = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/register/")
      .then((response) => {
        setRegistrations(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching registrations:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "First Name", accessor: "first_name" },
      { Header: "Surname", accessor: "surname" },
      { Header: "Email", accessor: "email" },
      { Header: "Sex", accessor: "sex" },
      { Header: "DOB", accessor: "dob" },
      { Header: "Church", accessor: "church" },
      { Header: "District", accessor: "district" },
      { Header: "Federation", accessor: "federation" },
      { Header: "Status", accessor: "status" },
    ],
    []
  );

  const data = React.useMemo(() => registrations, [registrations]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Registered Users List", 20, 20);

    const tableData = registrations.map((reg) => [
      reg.id,
      reg.first_name,
      reg.surname,
      reg.email,
      reg.sex,
      reg.dob,
      reg.church,
      reg.district,
      reg.federation,
      reg.status,
    ]);

    // Use autoTable function to generate the table
    autoTable(doc, {
      head: [
        [
          "ID",
          "First Name",
          "Surname",
          "Email",
          "Sex",
          "DOB",
          "Church",
          "District",
          "Federation",
          "Status",
        ],
      ],
      body: tableData,
      startY: 30,
    });

    doc.save("registrations_list.pdf");
  };

  return (
    <div className="admin-panel-container">
      <Navbar />
      <div className="admin-content">
        <h2>Admin Panel</h2>
        <button onClick={downloadPDF} className="btn-download">
          Download PDF
        </button>
        <table {...getTableProps()} className="registration-table">
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={`header-${i}`}>
                {headerGroup.headers.map((column, j) => (
                  <th {...column.getHeaderProps()} key={`column-${j}`}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={`row-${i}`}>
                  {row.cells.map((cell, j) => (
                    <td {...cell.getCellProps()} key={`cell-${i}-${j}`}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
