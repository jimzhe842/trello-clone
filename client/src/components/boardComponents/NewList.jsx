import React, { useState } from 'react';
import { createList } from '../../actions/BoardActions';
import { useDispatch } from 'react-redux';

const NewList = ({boardId}) => {
  const [toggleState, setToggleState] = useState(false)
  const [inputState, setInputState] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputState(e.target.value);
  };

  const handleToggleNew = (e) => {
    e.preventDefault;
    setToggleState(!toggleState);
  };

  const handleSaveNew = (e) => {
    dispatch(createList({boardId, inputState}, () => { handleToggleNew(e) }));
  };

  return(
    <div id="new-list" className={`new-list ${toggleState ? 'selected' : ''}`}>
      <span onClick={handleToggleNew}>Add a list...</span>
      <input type="text" placeholder="Add a list..." onChange={handleInputChange}/>
      <div >
        <input type="submit" className="button" value="Save" onClick={handleSaveNew} />
        <i className="x-icon icon" onClick={handleToggleNew}></i>
      </div>
    </div>
  );
};

export default NewList;