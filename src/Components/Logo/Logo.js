import React from 'react';
import { withTheme } from 'styled-components';

const Logo = ({ theme, click }) => {

  const style = {
    height: '100%'
  }

  const cls1 = {
    fill: '#fff',
    opacity: 0
  }

  const cls2 = {
    opacity: 0.5
  }

  const cls3 = {
    fill: 'none',
    stroke: '#b2b2b2',
    strokeWidth: '5px',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }

  const cls4 = {
    fill: '#959595',
    stroke: '#959595'
  }

  const cls5 = {
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    stroke: '#959595',
    strokeWidth: '7px'
  }

  const cls6 = {
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    stroke: theme.accent.hsl,
    strokeWidth: '8px'
  }

  const cls7 = {
    stroke: 'none'
  }

  const cls8 = {
    fill: 'none'
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => click(Math.floor(Math.random() * 360))} style={style} viewBox="0 0 109 70">
      <g id="logo" transform="translate(-168 -21)">
        <rect id="binding_box" data-name="binding box" style={cls1} transform="translate(168 21)" />
        <g id="brackets" style={cls2} transform="translate(174.083 38)">
          <path id="Path_3" data-name="Path 3" style={cls3} d="M432.5,224.5,451.382,243,432.5,261.5" transform="translate(-351.715 -224.5)" />
          <path id="Path_4" data-name="Path 4" style={cls3} d="M0,0,18.882,18.5,0,37" transform="translate(16.048 37) rotate(180)" />
        </g>
        <g id="fabian" transform="translate(202 25.494)">
          <g id="n4" style={cls4} transform="translate(40 19.506)">
            <circle style={cls7} cx="3" cy="3" r="3" />
            <circle style={cls8} cx="3" cy="3" r="2.5" />
          </g>
          <path id="n3" style={cls5} d="M347.4,259.262v-29.28" transform="translate(-304.402 -198)" />
          <path id="n2" style={cls5} d="M318.667,222,347.4,259.262" transform="translate(-304.402 -198)" />
          <path id="bf1" style={cls6} d="M320,243.338s32.351-16.921,32.351,8.124" transform="translate(-320 -222.667)" />
          <path id="bf" style={cls6} d="M352.351,251.462C352.351,276.507,320,264.1,320,264.1V222.667h23.832" transform="translate(-320 -222.667)" />
          <path id="n1" style={cls5} d="M318.667,259.262V222" transform="translate(-304.402 -198)" />
        </g>
      </g>
    </svg>
  )
};

export default withTheme(Logo);