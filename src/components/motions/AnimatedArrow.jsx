import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SouthIcon from "@mui/icons-material/South";

const MotionBox = motion(Box);

// Rotation degrees based on direction
const rotationMap = {
  down: 0,
  up: 180,
  left: -90,
  right: 90,
};

// Axis and bounce values
const axisMap = {
  down: "y",
  up: "y",
  left: "x",
  right: "x",
};

const AnimatedArrow = ({
  size = "3rem",
  direction = "down",
  color = "var(--color-primary-light)",
  distance = 20,
}) => {
  const axis = axisMap[direction];
  const values = [
    0,
    direction === "up" || direction === "left" ? -distance : distance,
    0,
  ];
  const rotate = rotationMap[direction];

  return (
    <MotionBox
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: size,
        color: color,
      }}
      animate={{
        [axis]: values,
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <SouthIcon
        fontSize="inherit"
        sx={{ transform: `rotate(${rotate}deg)` }}
      />
    </MotionBox>
  );
};

export default AnimatedArrow;
