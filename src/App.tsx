import { useCallback, useEffect, useState } from '@lynx-js/react';

import './App.css';
import arrow from './assets/arrow.png';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';
import { useNavigate } from 'react-router';

export function App() {
  const nav = useNavigate();
  const [alterLogo, setAlterLogo] = useState(false);

  const onTap = useCallback(() => {
    'background only';
    console.log('vaoooo');
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={reactLynxLogo} className="Logo--react" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <view>
            <text className="Title" bindtap={() => nav('/home')}>
              Home
            </text>
            <text className="Title" bindtap={() => nav('/product')}>
              Product
            </text>
          </view>
        </view>
      </view>
    </view>
  );
}
