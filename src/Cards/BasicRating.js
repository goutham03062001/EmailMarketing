import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import CustomizedSnackbars from './Snackbar';
import { Button } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
const  BasicRating=()=> {
useEffect(()=>{

    AOS.init({
      duration:2000,
      offset:120
    });
    AOS.refresh();
  },[])
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
      data-aos="zoom-in"
    >
      <Typography component="legend">Rate Our Website</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }
      }

      style={{
        fontSize:"40px"
      }}
      />
      
      
      <CustomizedSnackbars/>
    </Box>

   
  );
}

export default BasicRating