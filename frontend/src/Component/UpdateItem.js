import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useParams ,useHistory,Redirect} from "react-router-dom";

function UpdateItem(props) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [showText, setShowText] = useState(false);
  const paramID = useParams("");
  let navigate = useHistory();
  const [currentItem, setCurrentItem] = useState({});
  console.log('>>>',props)

  // const userID = "6270211872d0ce048dd73fb5";

  useEffect(() => {
    axios
      .get(`http://localhost:8001/cart/${paramID.id}` )
      .then((res) => {
          console.log(res)
        setCurrentItem(res.data.post);

        setName(res.data.post.name);
        setDescription(res.data.post.quentity);
        setPrice(res.data.post.price);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      .post("http://localhost:8001/update/" + paramID.id, formData)
      .then((res) => {
        console.log(res);
        console.log("Item Updated!!");

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

      navigate.push('/viewItem')
  };

  return (
    <div>

      <Container>
        <Paper elevation={7} sx={{ mt: 20 }}>
          <Box sx={{ m: 5 }}>
            <br></br>
            <h2>Update Details of an Item</h2>

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
                  multiline
                  inputProps={{ maxLength: 100 }}
                  erorText="Maximum number of characters enterted"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <br />
                <br />

                <Input
                  type="number"
                  variant="outlined"
                  placeholder="Price"
                  required
                  min={0}
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
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
                  onClick={()=>{
                    

                  }}
                >
                  Update Item
                </Button>
                {showText ? (
                  <Typography variant="subtitle1" color="#00e676">
                    Details Updated
                  </Typography>
                ) : null}
                {loading ? <p >loading...</p> : null}
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

export default UpdateItem;
