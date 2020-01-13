import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import PropTypes from "prop-types";
import styles from "assets/jss/material-kit-react/views/componentsSections/mentorStyle";
import { useHistory } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(styles);

export default function Mentor({
  id,
  name,
  imgSrc,
  role,
  service,
  about,
  price
}) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img src={imgSrc} className={classes.img} alt="complex" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {role}
                </Typography>
                <div>
                  {service.length &&
                    service.map((item, key) => (
                      <Chip label={item} key={key} size="small" />
                    ))}
                </div>
                <Typography variant="body2" color="textSecondary">
                  {about}
                </Typography>
              </Grid>
              <Grid item>
                <Chip label="#tag 1" color="secondary" />{" "}
                <Chip label="#tag 2" color="secondary" />{" "}
                <Chip label="#tag 3" color="secondary" />{" "}
                <Chip label="#tag 4" color="secondary" />{" "}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{price}</Typography>
              <Chip label="Korea" variant="outlined" />{" "}
              <Chip label="7 Day Trial" variant="outlined" /> <br />
              <br />
              <div className={classes.buttonGroup}>
                <Button variant="contained" color="primary">
                  Apply
                </Button>{" "}
              </div>
              <div className={classes.buttonGroup}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => history.push(`/profile-page/${id}`)}
                >
                  View Profile
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Mentor.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imgSrc: PropTypes.string,
  role: PropTypes.string,
  service: PropTypes.array,
  about: PropTypes.string,
  price: PropTypes.string
};
