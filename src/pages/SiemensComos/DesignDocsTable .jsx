import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { designData } from "../../data";

const renderBulletList = (items) => (
  <List dense disablePadding>
    {items.map((item, index) => (
      <ListItem key={index} sx={{ py: 0.25 }}>
        <ListItemText primary={`• ${item}`} />
      </ListItem>
    ))}
  </List>
);

const DesignDocsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#9b59b6" }}>
          <TableRow sx={{ backgroundColor: "#9b59b6" }}>
            <TableCell
              rowSpan={2}
              colSpan={1}
              sx={{
                color: "#fff",
                fontWeight: 600,
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Project Phase
            </TableCell>
            <TableCell
              colSpan={3}
              sx={{
                color: "#fff",
                fontWeight: 600,
                textAlign: "center",
                verticalAlign: "middle",
                borderLeft: "1px solid #ccc",
              }}
            >
              Design Documentation Deliverables
            </TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: "#9b59b6" }}>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                textAlign: "center",
                borderLeft: "1px solid #ccc",
              }}
            >
              Process Discipline
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                textAlign: "center",
                borderLeft: "1px solid #ccc",
              }}
            >
              Instrumentation Discipline
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                textAlign: "center",
                borderLeft: "1px solid #ccc",
              }}
            >
              Electrical Discipline
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {designData.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{
                backgroundColor: idx % 2 === 0 ? "#f9f6ff" : "#fff",
                verticalAlign: "top",
              }}
            >
              <TableCell>{row.phase}</TableCell>
              <TableCell sx={{ borderLeft: "1px solid #9b59b6" }}>
                {renderBulletList(row.process)}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid #9b59b6" }}>
                {renderBulletList(row.instrumentation)}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid #9b59b6" }}>
                {renderBulletList(row.electrical)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DesignDocsTable;
