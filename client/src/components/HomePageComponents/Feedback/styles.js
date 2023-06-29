import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  parent: {
    width: "100%",
    paddingTop: "20px",
    height: "auto",
    paddingBottom: "20px",
    background:
      "#FFFFE0",
  },

  content: {
    width: "500px",
    margin: "auto",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  title: {
    fontSize: 14,
  },

  name: {},

  description: {},
}));

export default styles;
