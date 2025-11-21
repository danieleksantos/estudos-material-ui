import { AppBar, Button, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, TextField, ThemeProvider, Toolbar, Typography, type PaperProps } from "@mui/material";
import themes from './themes'
import { useState } from "react";
import { DarkMode, Sunny } from "@mui/icons-material";
import React from "react";
import Draggable from "react-draggable";

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

export function App2() {
  const [theme, setTheme] = useState(themes.light)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const toggleTheme = () => {
    const newTheme = theme.palette.mode === 'light' ? themes.dark : themes.light;
    setTheme(newTheme);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

    <AppBar position="static" sx={{marginBottom: "1rem"}}>
      <Toolbar>
        <Typography variant="h6" sx={{flexGrow: 1}}>
          GrowAvalia
        </Typography>

        <IconButton onClick={toggleTheme}>
          {theme.palette.mode === 'light' ? <DarkMode sx={{color: "#FFFFFF"}} /> : <Sunny sx={{color: "#FFFFFF"}} />}        
        </IconButton>
      </Toolbar>
    </AppBar>

    <Container>
      <form>
        <Typography variant="h6" gutterBottom>
          Fazer Login
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{xs: 12}}>
            <TextField fullWidth label="Email" />
          </Grid>

          <Grid size={{xs: 12}}>
            <TextField fullWidth label="Senha" />
          </Grid>

          <Grid>
            <React.Fragment>
              <Button variant="contained" onClick={handleClickOpen}>
                Login
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title">
              <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Bem vindo!
              </DialogTitle>
              
              <DialogContent>
                  <DialogContentText>
                    Login efetuado com sucesso!
                  </DialogContentText>
              </DialogContent>
            
              <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Fechar
                  </Button>
                  <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </Grid>

        </Grid>
      </form>


    </Container>

    </ThemeProvider>
  ) 
}
