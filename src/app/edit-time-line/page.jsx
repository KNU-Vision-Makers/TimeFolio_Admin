'use client';
import { useState } from 'react';
import TimeLine from '@/components/TimeLine';
import styles from './page.module.css';

const TimeLineEditButton = ({ editMode, setEditMode }) => {
  return (
    <div>
      <button
        className={styles['time-line-edit-button']}
        onClick={() => setEditMode(prev => !prev)}
      >
        {editMode ? 'Done' : '+ edit'}
      </button>
    </div>
  );
};



const EditTimeLinePage = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="with-click">
      <TimeLine editMode={editMode} setEditMode={setEditMode} />
      <TimeLineEditButton editMode={editMode} setEditMode={setEditMode} />
    </div>
  );
};

export default EditTimeLinePage;
