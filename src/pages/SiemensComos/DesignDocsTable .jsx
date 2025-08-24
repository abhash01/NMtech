import React, { useState } from "react";
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
  IconButton,
  Box,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { designData } from "../../data";

const RenderBulletList = ({ items }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 1);

  return (
    <Box sx={{ position: "relative" }}>
      {items.length > 1 && (
        <IconButton
          size="small"
          onClick={() => setShowAll((prev) => !prev)}
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 1,
          }}
          aria-label={showAll ? "View less" : "View more"}
        >
          {showAll ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      )}
      <List dense disablePadding>
        {visibleItems.map((item, index) => (
          <ListItem key={index} sx={{ py: 0.25 }}>
            <ListItemText primary={`• ${item}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const DesignDocsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ border: "1px solid #ccc" }} aria-label="design docs table">
        <TableHead sx={{ backgroundColor: "var(--color-primary-light)" }}>
          <TableRow sx={{ backgroundColor: "var(--color-primary-light)" }}>
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
          <TableRow sx={{ backgroundColor: "var(--color-primary-light)" }}>
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
              <TableCell sx={{ borderLeft: "1px solid var(--color-primary-light)" }}>
                <RenderBulletList items={row.process} />
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid var(--color-primary-light)" }}>
                <RenderBulletList items={row.instrumentation} />
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid var(--color-primary-light)" }}>
                <RenderBulletList items={row.electrical} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DesignDocsTable;