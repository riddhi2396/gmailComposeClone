import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MinimizeIcon from "@material-ui/icons/Minimize";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  bar: {
    minHeight: 20,
  },
  container: {
    height: 55,
    backgroundColor: "#404040",
  },
  icons: {
    padding: 10,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="popup">
      <div className={classes.root}>
        <AppBar position="static" className={classes.container}>
          <Toolbar className={classes.bar}>
            <Typography variant="h6" className={classes.title}>
              <h4 className="text">New Message</h4>
            </Typography>
            <MinimizeIcon className={classes.icons} />
            <FullscreenIcon className={classes.icons} />
            <CloseIcon className={classes.icons} />
          </Toolbar>
        </AppBar>
        <TextField id="standard-basic" label="Recipients" className="input" />
        <TextField id="standard-basic" label="Subject" className="input" />
        <div className="content"></div>
        <div className="bottom">
          <div className="send">
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="split button"
            >
              <Button>send</Button>
              <Button color="primary" size="small">
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
          </div>
          <div className="bottom-icons">
            <FormatColorTextIcon size="small" className={classes.icons} />
            <AttachFileIcon size="small" className={classes.icons} />
            <InsertLinkIcon className={classes.icons} />
            <InsertEmoticonIcon className={classes.icons} />
            <InsertPhotoIcon className={classes.icons} />
          </div>
          <div className="right-icons">
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
