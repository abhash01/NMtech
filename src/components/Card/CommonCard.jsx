<<<<<<< HEAD
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styles from "./CommonCard.module.scss";

const CommonCard = ({ image, title, description }) => {
  return (
    <Card className={styles.integrationCard} elevation={0}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={styles.cardImage}
      />
      <CardContent>
        <Typography component="h5" color="var(--color-primary-light)!important">
          {title}
        </Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommonCard;
=======
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styles from "./CommonCard.module.scss";

const CommonCard = ({ image, title, description }) => {
  return (
    <Card className={styles.integrationCard} elevation={0}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={styles.cardImage}
      />
      <CardContent>
        <Typography component="h5" color="var(--color-primary-light)!important">
          {title}
        </Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommonCard;
>>>>>>> 98775794b4e168460bd499539e6bc7da4a721d74
