import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { comosData } from "../../data";

const FeatureTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#9b59b6" }}>
          <TableRow>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                borderRight: "1px solid #ccc",
              }}
            >
              Feature Description
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                borderRight: "1px solid #ccc",
              }}
            >
              COMOS
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
              Other Similar Solution
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comosData.map((feature, idx) => (
            <TableRow
              key={idx}
              sx={{
                backgroundColor: idx % 2 === 0 ? "#f9f6ff" : "#ffffff", // Light purple and white
              }}
            >
              <TableCell sx={{ borderRight: "1px solid #9b59b6" }}>
                <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                  {feature.title}
                </Typography>
                <List dense disablePadding>
                  {feature.items.map((item, index) =>
                    typeof item === "string" ? (
                      <ListItem key={index} sx={{ py: 0.25 }}>
                        <ListItemText primary={`• ${item}`} />
                      </ListItem>
                    ) : (
                      <Box key={index}>
                        <ListItem sx={{ py: 0.25 }}>
                          <ListItemText primary={`• ${item.parent}`} />
                        </ListItem>
                        {item.children.map((child, childIndex) => (
                          <ListItem key={childIndex} sx={{ pl: 4, py: 0.25 }}>
                            <ListItemText primary={`◦ ${child}`} />
                          </ListItem>
                        ))}
                      </Box>
                    )
                  )}
                </List>
                {feature.otherImage && (
                  <Box
                    component="img"
                    src={feature.otherImage}
                    alt={feature.title}
                    width="100%"
                    maxWidth="450px"
                    height="auto"
                  />
                )}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #9b59b6", textAlign: "center" }}
              >
                {feature.comos && (
                  <CheckCircleIcon fontSize="large" sx={{ color: "#8e44ad" }} />
                )}
              </TableCell>
              <TableCell
                sx={{
                  width: "250px",
                  textAlign: "center",
                  "@media (max-width: 600px)": {
                    width: "auto"
                  },
                }}
              >
                <Stack
                  direction="column"
                  spacing={1}
                  alignItems="center"
                  marginBottom={2}
                >
                  {feature.notAllowed ? (
                    <NotInterestedIcon
                      fontSize="large"
                      sx={{ color: "#8e44ad" }}
                    />
                  ) : (
                    <HelpOutlineIcon
                      fontSize="large"
                      sx={{ color: "#8e44ad" }}
                    />
                  )}
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {feature.other}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeatureTable;
