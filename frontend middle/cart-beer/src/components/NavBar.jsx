import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cartIcon: {
    marginLeft: theme.spacing(130),
    color: "#fff",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <a href="http://localhost:3000/">BEER</a>
          </Typography>

          <Link to="/cart">
            <IconButton
              className={classes.cartIcon}
              color="inherit"
              aria-label="cart"
            >
              <ShoppingCartIcon />
              <span>{cart?.length}</span>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
