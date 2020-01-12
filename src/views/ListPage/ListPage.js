import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "components/Header/Header.js";
import Header from "../Components/Header";
import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
// import Chip from "@material-ui/core/Chip";
// import profile from "assets/img/faces/christian.jpg";
import Mentor from "./Mentor";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

// import Rating from "@material-ui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

import { mentors } from "../../data/mentors";

const useStyles = makeStyles(styles);

export default function ListPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Header {...props} />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main)}>
        <div>
          <div className={classes.container}>
            <GridContainer>
              {mentors.length &&
                mentors.map((mentor, key) => <Mentor key={key} {...mentor} />)}
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
