import { FC } from 'react';

import './style.css';
import { HeroVideo } from './HeroVideo';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
     <HeroVideo/>
    </div>
  );
};
