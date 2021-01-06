import React, { useState } from 'react';
import { Input } from './lib';

const App = () => {

  const [value, setValue] = useState('');

  return (
    <div>
        <Input
          type='text'
          placeholder='Input a value' 
          value={value} 
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} 
        />
    </div>
  );
}

export default App;
