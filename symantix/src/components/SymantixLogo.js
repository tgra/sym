import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function SymantixLogo() {
  return (
    <SvgIcon sx={{ height: 21, width: 100, mr: 2 }}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Symantix Logo" style="max-width: 100%; height: auto;">
  <style>
    .bg { fill: #5a6d83; }
    .line { stroke: #57d1e8; stroke-width: 3; }
    .circle { fill: none; stroke: #57d1e8; stroke-width: 3; }
    .text-main {
      fill: white;
      font-size: 36px;
      font-family: Arial, sans-serif;
      font-weight: bold;
      letter-spacing: 6px;
    }
    .text-sub {
      fill: #57d1e8;
      font-size: 12px;
      font-family: Arial, sans-serif;
      letter-spacing: 1px;
    }
  </style>

  <rect class="bg" width="100%" height="100%" />

  <g transform="translate(200,115)">
    <defs>
      <circle id="dot" r="8"/>
    </defs>
    <use href="#dot" class="circle" x="0" y="0"/>
    <use href="#dot" class="circle" x="0" y="-40"/>
    <use href="#dot" class="circle" x="35" y="-20"/>
    <use href="#dot" class="circle" x="35" y="20"/>
    <use href="#dot" class="circle" x="0" y="40"/>
    <use href="#dot" class="circle" x="-35" y="20"/>
    <use href="#dot" class="circle" x="-35" y="-20"/>
    <line class="line" x1="0" y1="-8" x2="0" y2="-32"/>
    <line class="line" x1="7" y1="-4" x2="27" y2="-15.5"/>
    <line class="line" x1="7" y1="4" x2="27" y2="15.5"/>
    <line class="line" x1="0" y1="8" x2="0" y2="32"/>
    <line class="line" x1="-7" y1="4" x2="-27" y2="15.5"/>
    <line class="line" x1="-7" y1="-4" x2="-27" y2="-15.5"/>
  </g>

  <text class="text-main" x="200" y="210" text-anchor="middle">SYMANTIX</text>
  <text class="text-sub" x="200" y="228" text-anchor="middle">HIGH-QUALITY ACTIONABLE DATA</text>

      </svg>
    </SvgIcon>
  );
}
