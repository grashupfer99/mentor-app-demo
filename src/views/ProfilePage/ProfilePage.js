import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
// import Header from "components/Header/Header.js";
import Header from "../Components/Header";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Chip from "@material-ui/core/Chip";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { mentors } from "../../data/mentors";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const params = useParams();
  const { mentorId } = params;
  const mentor = mentors.filter(m => m.id === parseInt(mentorId, 10));
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Header {...props} />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main)}>
        {mentor.length > 0 && (
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={mentor[0].imgSrc}
                        alt={mentor[0].name}
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{mentor[0].name}</h3>
                      <h6>{mentor[0].role}</h6>
                      <Box component="fieldset" borderColor="transparent">
                        <Rating
                          name="disabled"
                          value={mentor[0].rating}
                          disabled
                        />
                      </Box>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>{mentor[0].about}</p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  {mentor[0].service.length &&
                    mentor[0].service.map((item, key) => (
                      <Chip
                        key={key}
                        label={item}
                        color="primary"
                        className={classes.chips}
                      />
                    ))}
                </GridItem>
                <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                  <Chip label="Skill 1" /> <Chip label="Skill 2" />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
