import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link, useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, responsiveFontSizes } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";

function ViewItem() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [itemID, setItemID] = useState("");
  const [userID, setUserID] = useState("");
  const [badge, setBadge] = useState(0);

  let navigate = useHistory();

  console.log(navigate)

  const handleClickOpen = (id) => {
    setItemID(id)
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const deleteTemplate = (id) => {
    setOpen(false);
    console.log(id)
    axios.delete(`http://localhost:8001/deleteitem/${id}`).then((res) => {
        console.log("res",res)
      window.location.reload(false);
    });
  };
  

  useEffect(() => {
   
      function getItems() {
        axios
          .get(
            "http://localhost:8001/getcarts" 
          )
          .then((res) => {
              console.log(res)
            setItems(res.data.existingPosts);
            
          
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getItems();
    
  }, []);

  const filterItems = items && items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* <Container> */}
      <center>
        <Typography
          variant="h4"
          component="h3"
          sx={{ mt: 13 }}
          style={{ fontWeight: 600, color: "#686965" }}
        >
          Farmer's Home Page
        </Typography>
      </center>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={10}
        sx={{ mt: 2, ml: 3 }}
      ></Grid>
      {/* </Container> */}
      <center>
        <TextField
          id="outlined-basic"
          label="Search Your Items Here"
          size="small"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <SearchIcon sx={{ mt: 1 }} />
      </center>
      

     
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={10}
        sx={{ mt: 3, p: 2, ml: 3 }}
      >
        {filterItems && filterItems.length && filterItems.map((item, key) => (
            <div
            style={{
              border: "2px solid #00b300",
              borderRadius:"40px",
              margin: "20px",
              padding: "20px",
            }}
          >
          <Card
            sx={{ width: 300, height: 430, mx: 2, my: 3 }}
            key={key}
            style={{ backgroundColor: "#ffff" }}
            elevation={3}
          >
            <br />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              spacing={2}
              sx={{ mx: 2 }}
            >
              <a href={`/updateitem/${item._id}`}>
                <IconButton aria-label="edit" color="warning" onClick={()=>{ navigate.goForward(`/updateitem/${item._id}`)}}>
                  <EditIcon />
                </IconButton>
              </a>

              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  handleClickOpen(item._id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>

            <CardActionArea>
              <center>
                <Avatar
                  alt="Item Image"
                  src={process.env.PUBLIC_URL + `/uploads/${item.image}`}
                  sx={{ width: 130, height: 110 }}
                />
              </center>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#A3A3A3" }}
                >
                  {item.name}   
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  quantity : {item.quentity}
                </Typography>
                <br />
            
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ fontWeight: 700, color: "#686965" }}
                >
                  Price : Rs. {parseInt(item.price).toLocaleString("en-US")}
                </Typography>
              </CardContent>
            </CardActionArea>
         
          </Card>
          </div>
        ))}
      </Grid>

      {/* Delete Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete this Item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={() => {
              deleteTemplate(itemID);
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ViewItem;
