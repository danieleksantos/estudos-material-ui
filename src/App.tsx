import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Grid, TextField, Typography, type PaperProps, IconButton, ThemeProvider } from "@mui/material"
import React, { useState } from "react"
import Draggable from "react-draggable"
import {Add, Delete, Favorite, FavoriteBorder, Home, Search, ShoppingCartOutlined} from "@mui/icons-material"
import { theme } from "./themes/theme";

function PaperComponent(props: PaperProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

export function App() {
  const [isFavorite, setIsFavorite] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  function handleToggleModal() {
    setIsOpen(prevState => !prevState)
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <CssBaseline />

      <Box component="section" sx={{backgroundColor: "#ffc4f2", p:3}}>
          <Typography variant="h6" sx={{ mb: 2 }} gutterBottom>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </Typography>

        <Button variant="contained" sx={{backgroundColor: "#31ad50", borderRadius:5 }}>
          Success
        </Button> 
      </Box>

      <Container sx={{p:4}}>
        <Box sx={{backgroundColor: "#cfe8fc", height: "50px"}}>
        <TextField label="Nome" variant="standard" fullWidth slotProps={{
          input: {
            sx:{backgroundColor: "grey.500", border: 2}
          }
        }}/>
        </Box>
      </Container>

      <Home fontSize="large"/>
      <Search color="primary"/>
      <ShoppingCartOutlined sx={{fontSize: 50, color: "#b92626"}}/>

      <Box sx={{display:"flex", flexDirection:"column", m:2, gap:3, alignItems:"center"}}>
        <Button variant="contained" startIcon={<Add />}>
          Adicionar
        </Button>

        <Button variant="contained" endIcon={<Delete />}>
          Remover
        </Button>

        <IconButton onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? <Favorite color="secondary" sx={{fontSize:80}}/> : <FavoriteBorder sx={{fontSize:80}}/>}
        </IconButton>
      </Box>

      <Card sx={{ maxWidth: 345, m:6 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1763142045649-9adea5c4805a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Outono
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Outono é sempre igual, as folhas caem no quintal. Só não cai o meu amor, pois não tem jeito não, é imortal...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
<hr />
     <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{m:3}}>
        Open draggable dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}
>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

    <Box>
      <Button variant="outlined" onClick={handleToggleModal} sx={{m:4}}>
        Abrir modal
      </Button>
    </Box>

    <Dialog open={isOpen} onClose={handleToggleModal}>
      <DialogTitle>Cadastrar contato</DialogTitle>

      <form>
        <DialogContent>
          <TextField fullWidth label="Nome" />
          <TextField fullWidth label="Email" />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleToggleModal}>Cancelar</Button>
          <Button type="submit">Enviar</Button>
        </DialogActions>
      </form>
    </Dialog>
    <hr/>
    

    <Grid container spacing={2}>
      <Grid 
        size={{ xs: 6, md: 8 }} 
        sx={{ 
          backgroundColor: "#ffc4f2",
          p: 2 
        }}
      >
        <p>grid 1 - xs:6 md:8 <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam explicabo culpa nam et, natus sint eos unde, ut, assumenda possimus quidem rem voluptate laborum qui aut voluptatum quas! Officiis, harum.</p>
      </Grid>

      <Grid 
        size={{ xs: 6, md: 4 }} 
        sx={{
          backgroundColor: "#9fc4f9",
          p: 2
        }}
      >
        <p>grid 2 - xs:6 md:4 <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam explicabo culpa nam et, natus sint eos unde, ut, assumenda possimus quidem rem voluptate laborum qui aut voluptatum quas! Officiis, harum.</p>
      </Grid>
    </Grid>
  <ThemeProvider theme={theme}>
    <Container maxWidth="sm" sx={{my:"50px", textAlign: "center"}}>
          <Typography variant="h1" color= "secondary">
            Teste de tema
          </Typography>
          
          <Typography variant="h6" color= "warning">
            Testando Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>

          <Paper sx={{padding: "20px", marginTop: "20px"}}>
          
            <Typography variant="body1" color="textPrimary">
              Paper com fundo personalizado.
            </Typography>

            <Button variant="contained" sx={{marginTop: "20px"}}>
              Botão Primário
            </Button>

            <Button 
              variant="contained" 
              color="secondary" 
              sx={{
                marginTop: "20px",
                marginLeft: "10px",
              }}
            >
              Botão Secundário
            </Button>
          </Paper>
      </Container>
    </ThemeProvider>
    </>
  ) 
}
