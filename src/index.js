import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Buttoms from './component/buttom'
import { Button } from '@mui/material';
import Sidebar from './component/sidebar/sidebar'
function Sisrsis() {
   var sis =36;
   
    return (

<div className='wapper-main'>
<div className='left'>

<div className='buttom-left'>
    <div className='sidebar-content-l'>
    <div className='slider-top'>
    <Sidebar/>
</div>
    <div className='slider-buttom'>
    <Sidebar/>
    </div>
        </div>
<div  className='buttom-content'>

<Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
</div>

</div>

<div className='buttom-right'>
<div className='sidebar-content'>
<div className='slider-top'>
    <Sidebar/>
</div>
    <div className='slider-buttom'>
    <Sidebar/>
    </div>
</div>
<div className='buttom-content'>
    
<Button variant="contained" color="success">
        Success
      </Button><Button variant="contained" color="success">
        Success
      </Button><Button variant="contained" color="success">
        Success
      </Button><Button variant="contained" color="success">
        Success
      </Button><Button variant="contained" color="success">
        Success
      </Button>
</div>
</div>
<div className='buttom-dow'>
<Button variant="contained">1</Button>
<Button variant="contained" className='buttom-swing'>2</Button>
<Button variant="contained">2</Button>
</div>
</div>


<div className='right'>
test 2
</div>


</div>
  
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< Sisrsis />);