import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function AddItem() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [showText, setShowText] = useState(false);

  let navigate = useHistory();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //   } else {
  //     navigate.push("/notFound");
  //   }
  // }, []);

  const handleSubmit = (e) => {
    setShowText(false);
    setLoading(true);
    const formData = new FormData();
    var form = document.getElementById("form");


    formData.append("name", name);
          formData.append("price", price);
          formData.append("quentity", description);
          formData.append("file", image);


    console.log(formData);
    e.preventDefault();

    axios
      .post("http://localhost:8001/save/image", formData)
      .then((res) => {
        console.log(res);
        console.log("Item Added!!");

        setName("");
        setDescription("");
        setPrice("");
        setImage("");
        form.reset();
        setLoading(false);
        setShowText(true);

      })
      .catch((err) => {
        alert(err);
      });

      
      navigate.push("/viewItem");
  };

  return (
    <div>
  
      <Container>
        <Paper elevation={7} sx={{ mt: 20 }}>
          <Box sx={{ m: 5 }}>
            <br></br>
            <IconButton
              color="warning"
              aria-label="upload picture"
              component="span"
              size="large"
              onClick={() => {
                navigate.push("/farmer/items");
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <h2>Add Item for Store</h2>

            <Grid>
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                id="form"
              >
                <Grid item md={6}>
                  <br />
                </Grid>
                <TextField
                  id="outlined-basic"
                  label="Item Name"
                  variant="outlined"
                  value={name}
                  required
                  fullWidth
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="quentity"
                  value={description}
                  required
                  inputProps={{ maxLength: 100 }}
                  erortext="quentity"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <br />
                <br />

                <TextField
                  type="number"
                  variant="outlined"
                  label="Price"
                  value={price}
                  required
                  onChange={(e) => {
                    if (e.target.value < 0) {
                      setPrice(0);
                    } else {
                      setPrice(e.target.value);
                    }
                  }}
                />
                <br />
                <br />
                <Input
                  id="raised-button-file"
                  type="file"
                  color="primary"
                  required
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <br />
                <br />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  style={{
                    backgroundColor: "#22b14c",
                  }}
                >
                  Add Item
                </Button>
                {showText ? (
                  <Typography variant="subtitle1" color="#00e676">
                    Details Added
                  </Typography>
                ) : null}
                {loading ? <p> loading...</p>: null}
                <br />
                <br />
              </form>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default AddItem;
