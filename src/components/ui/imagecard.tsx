import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function HomeImageList() {
  return (
    <ImageList sx={{ width: 600, height: 450 }} variant="woven" cols={3} gap={8}>
      {images.map((item) => (
        <ImageListItem key={item.src}>
          <img
            srcSet={`${item.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.src}?w=161&fit=crop&auto=format`}
            
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
interface images{
    src:string,

  }
  const images:images[]=[
    {
      src:"/i7.jpg"
    },
    {
      src:"/cro.jpg"
    },
    {
      src:"/c.jpg"
     
    },
    {
      
      src:"/i.jpg"
    },
    {
      src:"/img1.svg"
    },
    {
      src:"/IMG_5543.avif"
    },

  ]
