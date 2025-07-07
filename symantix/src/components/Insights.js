import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


import Grid from '@mui/material/Grid';
  


export default function Insights() {
  
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const mediumRssUrl = "https://medium.com/feed/@symantix";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumRssUrl}`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setPosts(data.items.slice(0, 10)); // Limit to 3 posts
      })
      .catch(err => {
        console.error("Failed to fetch posts:", err);
      });
  }, []);

  return (
    <Container
      id="insights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Engineering Insights
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Exploring semantic models, pipelines, and product-driven data design.
        </Typography>
      </Box>

      
   

    <Grid container spacing={2}>
    {posts.map(post => (
          <Grid size={{ xs: 12, sm: 6, md: 12 }} key={post.guid} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
                 <CardHeader
                  
                  title={post.title}
                 
                />
              <CardContent >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                 
                >

                </Typography>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
               
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                 
               
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
  
    
    
    </Container>
  );
}


