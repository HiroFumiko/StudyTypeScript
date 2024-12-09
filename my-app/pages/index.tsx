import { useState } from 'react';
import axios from 'axios';
import { DogApiResponse } from '../types/api';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

export default function Home() {
  const [data, setData] = useState<DogApiResponse | null>(null);

  const handleFetch = async () => {
    try {
      const res = await axios.get<DogApiResponse>('https://dog.ceo/api/breeds/image/random');
      setData(res.data);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Random Dog Image
      </Typography>
      <Button variant="contained" color="primary" onClick={handleFetch} sx={{ mb: 2 }}>
        データ取得
      </Button>
      {data && data.message ? (
        <Card sx={{ mb: 1 }}>
          <CardContent>
            <Typography variant="h6">Random Dog</Typography>
            <Box
              component="img"
              src={data.message}
              alt="Random Dog"
              sx={{ maxWidth: '100%' }}
            />
          </CardContent>
        </Card>
      ) : (
        <Typography>ボタンを押してください</Typography>
      )}
    </Box>
  );
}
