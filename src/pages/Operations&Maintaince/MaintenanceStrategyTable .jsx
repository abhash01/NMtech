import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const maintenanceData = [
  {
    strategy: "Reactive",
    program: [
      "Maintenance is done only when failure occurs",
      "Maintenance has very little to no strategic value",
    ],
    technology: [
      "Maintenance operates on a single, basic system or no system",
      "Systems are not integrated",
    ],
  },
  {
    strategy: "Preventive",
    program: [
      "Maintenance is planned on time or asset usage (i.e. every two weeks)",
      "Maintenance is a service for production",
    ],
    technology: [
      "Maintenance operates on a Single comprehensive system (i.e. a CMMS)",
      "The system is used for work management and scheduling",
      "Systems are not integrated",
    ],
  },
  {
    strategy: "Condition Based",
    program: [
      "Maintenance is planned on asset condition (i.e. vibration)",
      "Maintenance is a strategic pillar to boost asset performance",
    ],
    technology: [
      "Maintenance operates on a single system",
      "The system is used to trigger and optimize workflows and purchasing, and track basic data",
      "Maintenance system may be integrated with production systems (like MES software)",
    ],
  },
  {
    strategy: "Predictive",
    program: [
      "Maintenance is planned on data-based forecasts",
      "Maintenance is a strategic pillar to improve productivity and reduce operational risk",
    ],
    technology: [
      "Maintenance operates on a single system with AI and/or machine learning capabilities",
      "The system is used to optimize resource management using models, trends, and reports",
      "Maintenance is fully integrated with production and business systems (like: ERP software)",
    ],
  },
  {
    strategy: "Prescriptive",
    program: [
      "Maintenance is prescribed based on advanced forecasting models",
      "Maintenance is a strategic pillar to improve operational reliability and inform long term initiatives",
    ],
    technology: [
      "Maintenance operates on a single system with AI and/or machine learning capabilities",
      "The system is used to automate workflows, purchasing, and decision-making through advanced data analytics",
      "Maintenance is fully integrated with the company-wide digital Ecosystem",
    ],
  },
];

const MaintenanceStrategyTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "80%", my: 4, mx: "auto" }}
    >
      <Table aria-label="maintenance strategies table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                bgcolor: "#f8d9e0",
                fontWeight: "bold",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Strategy
            </TableCell>
            {maintenanceData.map((item, index) => (
              <TableCell
                key={index}
                sx={{
                  bgcolor: "#a10c57",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {item.strategy}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                bgcolor: "#f8d9e0",
                fontWeight: "bold",
                borderTop: "1px solid #ccc",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              What the program looks like
            </TableCell>
            {maintenanceData.map((item, index) => (
              <TableCell
                key={index}
                sx={{
                  borderLeft: "1px solid #ccc",
                  textAlign: "center",
                  verticalAlign: "baseline",
                }}
              >
                <ul>
                  {item.program.map((point, idx) => (
                    <li key={idx} style={{ paddingBottom: "10px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                bgcolor: "#f8d9e0",
                fontWeight: "bold",
                borderTop: "1px solid #ccc",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              What the technology looks like
            </TableCell>
            {maintenanceData.map((item, index) => (
              <TableCell
                key={index}
                sx={{
                  borderLeft: "1px solid #ccc",
                  textAlign: "center",
                  verticalAlign: "baseline",
                }}
              >
                <ul>
                  {item.technology.map((point, idx) => (
                    <li key={idx} style={{ paddingBottom: "10px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaintenanceStrategyTable;
