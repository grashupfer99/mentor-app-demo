import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
// import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import { useHistory } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import FaQSection from "./Sections/FaQSection.js";
import WorkSection from "./Sections/WorkSection.js";
import AdvantagesSection from "./Sections/AdvantagesSection.js";
import MembershipSection from "./Sections/MembershipSection.js";
import Header from "../Components/Header";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Header {...props} />

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
                onClick={() => history.push("/mentors")}
              >
                View All Mentors
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <FaQSection />
          <MembershipSection />
          <AdvantagesSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
