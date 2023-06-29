import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container
} from "@material-ui/core/";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./style";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../../actions/books";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { VALID } from "../../../constants/actions";

const Book = ({book }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [fav, setFav] = useState(false);
  useEffect(() => {
    if (book){
      setFav(book?.wishListedBy?.find((id) => id === user?.profile?.id));
      
    }
  }, []);
  const addtofavourite = () => {
    if (user) {
      console.log("Adding To Favorites..");
      fav ? setFav(false) : setFav(true);
      dispatch(addToWishList(book._id));
    } else {
      dispatch({
        type: VALID,
        payload: { msg: "Please Sign In To Add To Wishlist" },
      });
      history.push("/auth");
    }
  };

  const getBook = () => {
    history.push(`/all/book/${book._id}`);
  };

  return (
      <Card raised className={classes.card}>
            <div className={classes.top}>
              <CardMedia
                className={classes.media}
                src="book"
                image={book.selectedFile}
              />

              <Typography className={classes.price}>
                {"₹"}
                {book.price}
                {" ("}
                {book.priceType}
                {")"}
              </Typography>

              <CardActions className={classes.favourite}>
                <Button size="medium" color="secondary" onClick={addtofavourite}>
                  {fav ? (
                    <FavoriteIcon
                      disableFocusRipple={true}
                      disableRipple={false}
                      style={{ color: "#e98074" }}
                    />
                  ) : (
                    <FavoriteBorderIcon style={{ color: "#e98074" }} />
                  )}
                </Button>
              </CardActions>
            </div>

            <div>
              <Typography variant="body2" className={classes.Branch}>
                {book.branch}
              </Typography>
            </div>

            <Typography variant="h6" className={classes.BookName}>
              {book.bookName}
            </Typography>

            <Typography variant="body2" className={classes.Description}>
              {book.description}
            </Typography>

            <CardActions disableSpacing>
              <PersonPinIcon
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  color: "#E8AA42",
                }}
              />
              {user ? (
                <Link to={`/user/${book.owner}`} style={{ textDecoration: "none" }}>
                  <Typography className={classes.owner}>
                    {book.ownerName}
                  </Typography>
                </Link>
              ) : (
                <Link to={`/auth`} style={{ textDecoration: "none" }}>
                  <Typography className={classes.owner}>
                    {book.ownerName}
                  </Typography>
                </Link>
              )}
            </CardActions>

            <CardActions disableSpacing>
              <ScheduleIcon
                fontSize="small"
                style={{ marginLeft: "5px", marginRight: "5px",color:"#E8AA42" }}
              />
              <Typography variant="body2">
                {moment(book.createdAt).format("DD MMM, YYYY")},
              
          
              </Typography>
            </CardActions>

            <Button variant="outlined" onClick={getBook} className={classes.button}>
              bookInfo
            </Button>
          </Card>

  );
};

export default Book;
