import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  AppBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: "30px 0",
  },
  heading: {
    color: "rgba(0 183 255 / 1)",
  },
  image: {
    marginLeft: "15px",
  },
}));
