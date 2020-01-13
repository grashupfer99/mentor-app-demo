import React from "react";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

import { Link, useLocation } from "react-router-dom";

// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const CustomLink = ({ classes, location, path, name }) => {
  return (
    <ListItem className={classes.listItem}>
      <Button
        component={Link}
        to={path}
        className={classnames(
          classes.navLink,
          location === path ? classes.navLinkActive : ""
        )}
        color="primary"
      >
        {name}
      </Button>
    </ListItem>
  );
};

const routes = [
  { path: "/", name: "Home" },
  // { path: "/components", name: "Components" },
  { path: "/mentors", name: "Mentors" },
  { path: "/login-page", name: "Login" }
];

const useStyles = makeStyles(styles);

export default function CustomHeader(props) {
  const classes = useStyles();
  const location = useLocation();
  const { ...rest } = props;

  return (
    <>
      <Header
        brand="Mentor App"
        color="primary"
        rightLinks={
          <List className={classes.list}>
            {routes.map((route, key) => (
              <CustomLink
                key={key}
                location={location.pathname}
                classes={classes}
                path={route.path}
                name={route.name}
              />
            ))}
          </List>
        }
        fixed
        {...rest}
      />
    </>
  );
}
