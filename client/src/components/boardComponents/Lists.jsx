import { useSelector } from 'react-redux';
import React from 'react';
import List from './List'

const Lists = ({boardId}) => {
  const lists = useSelector(state => state.lists).filter(list => list.boardId === boardId)
    return (
        <main>
          <div id="list-container" className="list-container">
            <div id="existing-lists" className="existing-lists">
              {lists.map(list => <List {...list} key={list._id}/>)}
            </div>
          </div>

          <div id="new-list" className="new-list">
            <span>Add a list...</span>
            <input type="text" placeholder="Add a list..." />
            <div>
              <input type="submit" className="button" value="Save" />
              <i className="x-icon icon"></i>
            </div>
          </div>
        </main>
    )
}

export default Lists