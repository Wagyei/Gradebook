import * as React from 'react';
import EnhancedTable from './table';
import './people.css';
import MiniDrawer from '../navbar';


const PeoplePage = () => {
  return (
    <div className='PeoplePage'>
      <MiniDrawer></MiniDrawer>
      <EnhancedTable ></EnhancedTable>
    </div>
  );
};

export default PeoplePage;