import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

import { Link, useLocation } from "react-router-dom";

// core components
// import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import navbarStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import Header from "../Components/Header";
// const dashboardRoutes = [];

const useStyles = makeStyles(styles);
// const useNavbarStyles = makeStyles(navbarStyles);

export default function LandingPage(props) {
  const classes = useStyles();
  // const location = useLocation();
  // const navbarClasses = useNavbarStyles();
  // const { ...rest } = props;

  // console.log("location ", location);
  return (
    <div>
      <Header {...props} />
      {/* <Header
        brand="Mentor App"
  
        rightLinks={
          <List className={navbarClasses.list}>
            <ListItem className={navbarClasses.listItem}>
              <Button
                component={Link}
                to="/components"
                className={
                  navbarClasses.navLink +
                  " " +
                  navbarClasses.link +
                  " " +
                  navbarClasses.active
                }
           
                color="transparent"
              >
                Discover
              </Button>
            </ListItem>
            <ListItem className={navbarClasses.listItem}>
              <Button
                href="#pablo"
                className={navbarClasses.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Profile
              </Button>
            </ListItem>
            <ListItem className={navbarClasses.listItem}>
              <Button
                href="#pablo"
                className={navbarClasses.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Settings
              </Button>
            </ListItem>
          </List>
        }
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      /> */}
      {/* <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      /> */}
      <Parallax filter image={require("assets/img/landing-bg-main.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
