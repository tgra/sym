import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const StyledBox = styled('div')(({ theme }) => ({
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape?.borderRadius || 8,
  outline: '6px solid hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      {/* App Bar */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Company</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
          py: { xs: 14, sm: 20 },
        }}
      >
        <Container
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Stack spacing={2} sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}>
            <Typography sx={{ textAlign: 'center', color: 'text.secondary', width: { sm: '100%', md: '80%' } }}>
              We create intelligent web solutions that turn complex data into actionable insights. From CompanyCompass.co.uk, a business intelligence platform helping companies make smarter decisions, to UnlockingThePast.com, which transforms archival PDFs into interactive, searchable resources, our expertise bridges data engineering, analysis, and usability.
            </Typography>

            <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
              Turning Complex Data into Actionable Insights
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}>
              Our projects leverage advanced data engineering to structure, index, and visualize information. Whether it’s market intelligence or historical archives, we make data accessible, interactive, and meaningful for your users.
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}>
              Explore our platforms online to see how we bring clarity to complex information, enabling better decisions, research, and discovery.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Divider />

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Interactive dashboards, comprehensive analytics, and intuitive user experiences to help businesses and researchers uncover insights quickly.
        </Typography>
      </Container>

      <Divider />

      {/* Highlights Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" gutterBottom>
          Highlights
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          From business intelligence to historical archives, our projects showcase advanced data engineering, seamless usability, and actionable insights.
        </Typography>
      </Container>

      <Divider />

      {/* Insights Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" gutterBottom>
          Insights
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Delivering clarity from complexity. Our platforms allow you to explore, analyze, and understand data like never before.
        </Typography>
      </Container>

      <Divider />

      {/* Footer */}
      <Box sx={{ py: 6, textAlign: 'center', backgroundColor: 'grey.100' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Company. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
