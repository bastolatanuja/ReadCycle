import React, { useState, useEffect } from "react";
import {
  TextField,
  Container,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postFeedBackForm } from "../../../actions/user";
import { FEEDBACK } from "../../../constants/actions";
const Contact = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [feedData, setFeedData] = useState({
    name: "",
    message: "",
  });
  const history = useHistory();
  const [err, setErr] = useState(false);
  const [, setLoader] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const feedback = useSelector((state) => state.user);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };
  const handleChange = (e) => {
    setFeedData({ ...feedData, [e.target.name]: e.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErr(false);

    dispatch({ type: FEEDBACK, payload: {} });
  };

  useEffect(() => {
    if (feedback.msg) setErr(true);
    if (feedback.severity === "success") {
      setFeedData({ ...feedData, name: "", message: "" });
    }
  }, [feedback]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    dispatch(postFeedBackForm(feedData));
  };

  return (
    <>
      <div className={classes.main}>
        <div
          style={{
            background: "#FFFFCC",
            paddingBottom: "20px",
            alignItems: "centetr",
          }}
        >
          <Typography
            variant="h5"
            style={{
              textAlign: "center",
              background: "#FFFFCC",
              paddingTop: "10px",
            }}
          >
          <h4 style={{color:'#2f4858'}}>Give Your Feedback</h4>
          </Typography>
          <hr
            style={{
              textAlign: "center",
              border: "1.5px solid black",
              width: "300px",
              background: "green",
              margin: "0px auto",
            }}
          />
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <Container style={{ borderRadius: "5px", border: "purple" }}>
              <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
              >
                <Typography variant="h6" align="center">
                <h4 style={{color:'#2f4858'}}>Give us a Message</h4>
                </Typography>
                {err ? (
                  <Snackbar
                    style={{ top: "10%", left: "50%" }}
                    anchorOrigin={{ horizontal: "center", vertical: "top" }}
                    open={err}
                    autoHideDuration={5000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity={feedback.severity}>
                      <strong>{feedback?.msg}</strong>
                    </Alert>
                  </Snackbar>
                ) : null}
                <TextField
                  name="name"
                  variant="outlined"
                  label="Enter your name"
                  fullWidth
                  value={feedData.name}
                  onChange={handleChange}
                />
                <TextField
                  name="message"
                  variant="outlined"
                  label="Message"
                  fullWidth
                  multiline
                  rows={9}
                  value={feedData.message}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.button}
                  endIcon={<SendIcon />}
                >
                  <Typography><h6 style={{color:'#2f4858'}}>Send</h6></Typography>
                </Button>
              </form>
            </Container>
          </div>
          <div className={classes.right}>
            <Typography variant="h4" align="center">
              <h4 style={{color:'#2f4858'}}>How Can We Help?</h4>
            </Typography>
            <Typography variant="body1" align="center">
              Feel free to get in touch with us. We are always open to discuss
              new ideas and and suggestions.
            </Typography>
            <List className={classes.root}>
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemText
                  alignItems="center"
                  primary={
                    <React.Fragment>
                      <Typography
                        align="left"
                        component="span"
                        variant="h6"
                        color="textPrimary"
                      >
                        <h4 style={{color:'#2f4858'}}>Suggestions</h4>
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        align="center"
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        You can give us suggestion to improve user experience or
                        any service which we can improve. We are always open to
                        discuss new ideas.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                       <h4 style={{color:'#2f4858'}}>Facing Any Issues</h4>
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        If you are facing any issue during posting book or
                        buying a book. Feel free to reach out to us.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                      <h4 style={{color:'#2f4858'}}>Report an ad</h4>
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        If you find any Ad with Hate speech, Violence, Nudity or
                        any banned content. Report us immediately.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
