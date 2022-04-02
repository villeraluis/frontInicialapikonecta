import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputDate from './InputDate';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function FormProducto() {
  const [nombreProducto, setnombreProducto] = React.useState('')
  const [referencia, setreferencia] = React.useState('')
  const [precio, setprecio] = React.useState('')
  const [peso, setpeso] = React.useState('')
  const [categoria, setcategoria] = React.useState('')
  const [stock, setstock] = React.useState('')




  const handleNuevoProducto = () => {

    if (nombreProducto != '' &&
      referencia != '' &&
      precio != '' &&
      peso != '' &&
      categoria != '' &&
      stock != '') {

     if((isNaN(precio)) ||
     (isNaN(peso)) ||
     (isNaN(stock)))  {

       return alert('Solo numeros en los campos de precio,peso,stok')

     }

    
      try {
        const newProducto = {
          nombreProducto: nombreProducto,
          referencia: referencia,
          precio: parseInt(precio),
          peso: parseInt(peso),
          categoria: categoria,
          stock: parseInt(stock),

        }

        const getProductos = () => {
          fetch("http://localhost:8080/productos", {
            method: 'POST',
            body: JSON.stringify(newProducto),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((res) => res.json())
            .then((res) => {

              setnombreProducto('')
              setreferencia('')
              setprecio('')
              setpeso('')
              setcategoria('')
              setstock('')

            });
        };
        getProductos();


      } catch (e) {
        return e
      }

    } else {
      alert('Faltan campos')
    }






  }


  return (
    <React.Fragment>


      <Grid container spacing={3} sx={{ mt: 2, mb: 2 }}>



        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="nombre"
            label="Nombre Producto"
            fullWidth
            variant="standard"
            value={nombreProducto}
            onChange={(e) => setnombreProducto(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="referencia"
            name="referencia"
            label="Referencia"
            fullWidth
            variant="standard"
            value={referencia}
            onChange={(e) => setreferencia(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="precio"
            name="precio"
            label="Precio"
            fullWidth
            variant="standard"
            value={precio}
            onChange={(e) => setprecio(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="peso"
            name="peso"
            label="Peso"
            fullWidth
            variant="standard"
            value={peso}
            onChange={(e) => setpeso(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="categoria"
            name="categoria"
            label="Categoria"
            fullWidth
            variant="standard"
            value={categoria}
            onChange={(e) => setcategoria(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="stock"
            name="stock"
            label="Stock"
            fullWidth
            variant="standard"
            value={stock}
            onChange={(e) => setstock(e.target.value)}
          />
        </Grid>


      </Grid>

      <Fab variant="extended" color="primary" onClick={handleNuevoProducto}>
        < AddIcon sx={{ mr: 1 }} />
        Guardar Producto
      </Fab>
    </React.Fragment>
  );
}

