import React,{useEffect}from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ActionAreaCard=({imageSrc})=> {
  useEffect(() => {
    AOS.init({
      duration:2000
    });
    AOS.refresh();
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}
    className="py-0 my-3"
    data-aos="zoom-in">
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={imageSrc}
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;