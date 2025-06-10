import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';

const items = [
  {
    icon: <ManageSearchRoundedIcon />,
    title: 'Verified Data Provenance',
    description:
      'Every dataset includes clear lineage documentation, detailing source origins, collection methods, and processing steps—ensuring transparency and trust.',
  },
  {
    icon: <CheckCircleOutlineRoundedIcon />,
    title: 'Quality Assured & Standards-Aligned',
    description:
      'Structured with comprehensive metadata, data dictionaries, and usage notes that support usability and compliance.',
  },
  {
    icon: <ArticleRoundedIcon />,
    title: 'Fully Documented & Metadata-Rich',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AddShoppingCartRoundedIcon />,
    title: 'Seamless Access via AWS Data Exchange',
    description:
      'Available on AWS Marketplace for secure, scalable, and subscription-based delivery—enabling frictionless integration into cloud-native analytics pipelines.',
  },
  {
    icon: <DataUsageRoundedIcon />,
    title: 'Designed for Compliance & Reuse',
    description:
      'Usage rights, licensing terms, and retention policies are clearly defined—supporting Data Security and Data Lifecycle Management best practices.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Analysis-Ready Structure',
    description:
      'Data is pre-processed and formatted for immediate use in BI tools, data science platforms, or machine learning workflows—maximizing value while minimizing transformation effort.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    ><a name="highlights"/>
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Our data products are high-quality, well-documented, and analytics-ready. <br/>Available via AWS Marketplace and GitHub for easy integration, scalability, and collaboration.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
