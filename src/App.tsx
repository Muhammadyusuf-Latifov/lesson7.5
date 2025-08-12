import { memo } from 'react';
import  Student from './components/student/Student';

const App = () => {
  return (
    <div className="App">
     
      <Student/>
    </div>
  );
};

export default memo(App);