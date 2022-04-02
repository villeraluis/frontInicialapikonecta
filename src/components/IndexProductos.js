import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import RemoveIcon from "@mui/icons-material/Remove";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import BtnAdd from "./BtnAdd";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FormProducto from "./FormProducto";
import IconButton from "@mui/material/IconButton";

const IndexCotizaciones = () => {

  const [productos, setProductos] = React.useState([]);
  const [productoSearch, setProductoSearch] = React.useState('');

  React.useEffect(() => {
    const getProductos = () => {
      fetch("http://localhost:8080/productos")
        .then((res) => res.json())
        .then((res) => {
          setProductos(res);
        });
    };
    getProductos();
  }, [productos]);




  const handlerDeletePro = (id) => {

    const getProductos = () => {
      fetch("http://localhost:8080/productos/" + id, {
        method: 'Delete',
      })
        .then((res) => { console.log(res) })

    };

    getProductos();

    setProductos([])

  }

  const handlerEdit = (producto) => {

    const newVenta = {
      cantidadVenta: 1,
      producto: {
        id: producto.id,
      }
    }

    const getProductos = () => {
      fetch("http://localhost:8080/ventas", {
        method: 'POST',
        body: JSON.stringify(newVenta),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) =>{console.log(res)})
        
    };
    getProductos();
  
  }





    return (

      <React.Fragment>

        <List>
          {productos.map((producto) => {
            if (!producto.id) {
              return (
                <Paper
                  key="noHay"
                  sx={{ p: "4px 4px", display: "flex", alignItems: "center" }}
                >
                  No se encontro Producto
                </Paper>
              );
            }

            return (
              <React.Fragment key={producto.id}>
                <Paper sx={{mb:2}}>

                <ListItem
                  alignItems="flex-start"
                  secondaryAction={
                    <React.Fragment>
                      {<Fab
                        variant="extended"
                        size="small"
                        style={{ borderRadius: 15 }}
                        color="primary"
                        onClick={() => handlerEdit(producto)}

                      >
                        Vender 1

                      </Fab>}


                    </React.Fragment>
                  }
                >
                  <ListItemAvatar>
                    {producto.id}
                  </ListItemAvatar>

                  <ListItemText
                    primary={producto.nombreProducto}
                    sx={{ maxWidth: "60%" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Precio : {producto.precio}
                        </Typography>

                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Stock : {producto.stock}
                        </Typography>



                      </React.Fragment>
                    }

                  />
                </ListItem>

                </Paper>
                
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
        </List>







        <BtnAdd link="formProducto" label="Agregar producto" />





      </React.Fragment>

    );
  }


  export default function IndexP() {

    return (

      <React.Fragment>
        <Routes>

          <Route path="/" element={<IndexCotizaciones />} />
          <Route path="/formProducto" element={<FormProducto />} />

        </Routes>
      </React.Fragment>
    )

  }
