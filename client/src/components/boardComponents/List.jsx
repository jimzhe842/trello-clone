import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateList } from '../../actions/ListActions';
import Cards from './Cards';

const List = ({title, _id}) => {
  const [ listTitle, setListTitle ] = useState(title);
  const dispatch = useDispatch();
  // const handleListTitleChanged = (e) => {
  //   setListTitle(e.target.value);
  // }

  const handleListTitleSubmit = (callback) => {
    if (listTitle === title) { return }
    dispatch(updateList({_id, listTitle}, callback));
  }

  const handleListTitleBlur = (e) => {
    e.preventDefault();
    handleListTitleSubmit();
  }

  const handleListTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      const currentTarget = e.currentTarget;
      handleListTitleSubmit(() => {
        currentTarget.blur();
      });
    } else {
      setListTitle(e.target.value);
    }
  }
  
    return (
        <div className="list-wrapper">
              <div className="list-background">
                <div className="list">
                  <a className="more-icon sm-icon" href=""></a>
                  <div>
                      <input value={listTitle} className="list-title" type="text" onChange={handleListTitleKeyDown} onKeyDown={handleListTitleKeyDown} onBlur={handleListTitleBlur}/>
                  </div>
                  <div className="add-dropdown add-top">

                    <div className="card"></div>
                    <a className="button">Add</a>
                    <i className="x-icon icon"></i>
                    <div className="add-options">
                      <span>...</span>
                    </div>
                  </div>

                    <Cards listId={_id}/>

                  <div className="add-dropdown add-bottom">
                    <div className="card">
                      <div className="card-info"></div>
                      <textarea name="add-card"></textarea>
                      <div className="members"></div>
                    </div>
                    <a className="button">Add</a>
                    <i className="x-icon icon"></i>
                    <div className="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div className="add-card-toggle" data-position="bottom">
                    Add a card...
                  </div>
                </div>
              </div>
            </div>
    )
}

export default List