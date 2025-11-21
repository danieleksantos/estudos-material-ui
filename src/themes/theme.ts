import { createTheme } from "@mui/material";

export const theme = createTheme ({
    palette: {
        mode:'light',
        primary: {
        main: '#943fb5',
        contrastText: "#FFFFFF",
        },
        secondary: {
            main: '#28ef45',
        },
        background: {
            default: '#bdbdbd',
            paper: "#e1f3cfff",
        },
        text: {
            primary: "#020202",
            secondary: "#757575"
        }
    },

    typography: {
        fontFamily: 'Science+Gothic, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        button: {
            textTransform: 'none',
            fontWeight: 'bold',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '10px 20px',
                    boxShadow: 'none',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    padding: '16px',
                },
            },
        },
    }
})
