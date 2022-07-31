import  React,{useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}



export default function VerticalSlider() {
    const [valuesidebar,setvaluesidebar] = React.useState(40)
    return (
<>
<Stack sx={{ height: 300 }} spacing={1} direction="row">
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        defaultValue={valuesidebar}
      />
    </Stack>
</>
  );
}
