import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
// import Rating from "@material-ui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
// import { categories } from "../../data/categories";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import categories from "../../data/categories";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3)
  }
}));

export default function ListPage({ setQuery }) {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  const [cat, setCat] = React.useState("");
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  React.useEffect(() => {
    if (search === "") {
      setQuery("");
    }
  }, [search]);

  const handleChange = event => {
    setCat(event.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    if (search.trim() !== "") setQuery(search);
    if (cat !== "") setQuery(cat);
  }

  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <TextField
            value={search}
            onChange={e => setSearch(e.target.value)}
            label="Search field"
            type="search"
            variant="outlined"
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Categories
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={cat}
            onChange={handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.length &&
              categories.map((c, key) => (
                <MenuItem key={key} value={c}>
                  {c}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <Fab color="primary" onClick={onSubmit}>
            <SearchIcon />
          </Fab>
        </FormControl>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              onClick={() => setQuery("")}
            >
              Reset
            </Button>
          </FormControl>
        </div>
      </form>
    </div>
  );
}
