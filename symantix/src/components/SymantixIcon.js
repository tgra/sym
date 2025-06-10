import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function SymantixIcon() {
  return (
    <SvgIcon sx={{ height: 50, width: 200, mr: 2 }}>
 
        <svg viewBox="0 0 86 19" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Symantix Logo"
        >



  <g transform="translate(7,9.5)">
    <defs>
      <circle id="dot" r="1.2"/>
    </defs>

  
    <use href="#dot" class="symbol-circle" x="0" y="0"/>


    <use href="#dot" class="symbol-circle" x="0" y="-5"/ >
    <use href="#dot" class="symbol-circle" x="4.3" y="-2.5"/>
    <use href="#dot" class="symbol-circle" x="4.3" y="2.5"/>
    <use href="#dot" class="symbol-circle" x="0" y="5"/>
    <use href="#dot" class="symbol-circle" x="-4.3" y="2.5"/>
    <use href="#dot" class="symbol-circle" x="-4.3" y="-2.5"/>

 
    <line class="symbol-line" x1="0" y1="-1.2" x2="0" y2="-3.8"/>
    <line class="symbol-line" x1="1.1" y1="-0.6" x2="3.1" y2="-1.8"/>
    <line class="symbol-line" x1="1.1" y1="0.6" x2="3.1" y2="1.8"/>
    <line class="symbol-line" x1="0" y1="1.2" x2="0" y2="3.8"/>
    <line class="symbol-line" x1="-1.1" y1="0.6" x2="-3.1" y2="1.8"/>
    <line class="symbol-line" x1="-1.1" y1="-0.6" x2="-3.1" y2="-1.8"/>
  </g>

  <text class="text" x="16" y="12.5">SYMANTIX</text>
</svg>

     
    </SvgIcon>
  );
}
