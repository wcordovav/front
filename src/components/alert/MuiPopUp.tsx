import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, useState } from 'react';
import './popup.scss';

interface Props{
    buttonText: string;
    Component:  JSX.Element
}
const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const MuiPopUp = ({buttonText, Component}:Props) => {
    const [open, setOpen] = useState(false);

  return (
    <div className='popup-button'>
      <button onClick={()=>setOpen(true)}>
        {buttonText}
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className='popup-header'>
          <div>
            
          </div>
          <div>
            <div className='close-popup-button' onClick={()=>setOpen(false)} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
          </div>
        </div>
         {Component}
      
      </Dialog>
    </div>
  );
}

export default MuiPopUp