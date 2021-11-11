import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Container, Paper, TextField } from "@material-ui/core";
import { useProducts } from "../../contexts/ProductContext";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    maxWidth: 1000,
    height: "700px",
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"})`,
    // backgroundColor: "rgba(255, 255, 255, .4)",
    // fontSize: "90px",
    fontFamily: '"Merienda"',
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "60px",
  },
  title: {
    textAlign: "center",
    color: "#EC87B2",
    marginTop: "3rem",
    marginLeft: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    color: "black",
    size: "5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "35rem",
    margin: "2rem",
  },
  textfield: {
    marginTop: "2rem",
    color: "white",
  },

  addProductParalax: {
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"})`,
    minHeight: "800px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  saveIcon: {
    width: "40px",
    height: "40px",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "10px auto",
    // alignSelf: "center",
  },
}));

const AddProductPage = () => {
  const classes = useStyles();
  const { addProduct, history } = useProducts();

  const handleClick = async (product) => {
    const data = await addProduct(product);
    history.push("/merch");
  };

  const [product, setProduct] = useState({
    title: "",
    type: "",
    img: "",
    price: 0,
    description: "",
    status: false,
  });

  const handleInp = (e) => {
    console.log(product);
    console.log(e.target.name);
    if (e.target.name == "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className={classes.addProductParalax}>
      <Paper elevation={3} className={classes.paper}>
        <h1 className={classes.title}>ADD NEW MERCH</h1>
        <Container className={classes.container}>
          {/* <img
            className={classes.addImage}
            src={
              product.image
                ? product.image
                : "https://i.pinimg.com/originals/2e/26/27/2e26273f9467493f1e5045f2856daeef.png"
            }
          /> */}

          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="type"
              variant="outlined"
              label="Type"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="img"
              variant="outlined"
              label="Image URL"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="price"
              variant="outlined"
              label="Price"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="description"
              variant="outlined"
              label="Description"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <Container className={classes.iconsContainer}>
              <Button onClick={() => handleClick(product)}>
                {/* <SaveAltIcon /> */}
                <img
                  className={classes.saveIcon}
                  src="https://image.flaticon.com/icons/png/512/4787/4787588.png"
                  alt=""
                />
              </Button>
              <Button onClick={() => history.push("/merch")}>
                {/* <CloseIcon /> */}
                <img
                  className={classes.saveIcon}
                  src="https://image.flaticon.com/icons/png/512/2570/2570147.png"
                  alt=""
                />
              </Button>
            </Container>
          </form>
        </Container>
      </Paper>
    </div>
  );
};

export default AddProductPage;
