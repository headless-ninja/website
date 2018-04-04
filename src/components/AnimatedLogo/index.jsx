import React from 'react';
import * as animationData from './data.json';
import gradient from './gradient.png';

const img0 = animationData.assets.find(({ id }) => id === 'image_0');
img0.p = gradient;
img0.u = '';

export default function AnimatedLogo() {
  if (typeof window === 'undefined') return null;

  const Lottie = require('react-lottie').default; // eslint-disable-line global-require
  return (
    <div
      style={{
        maxWidth: 450,
        margin: '0 auto',
      }}
    >
      <Lottie
        options={{
          loop: false,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        ref={c => {
          if (c && c.el) {
            c.el.removeAttribute('tabindex');
          }
        }}
        isClickToPauseDisabled
      />
    </div>
  );
}
