import { useSelector } from 'react-redux';
import React from 'react';
import List from './List';
import NewList from './NewList';

const Lists = ({boardId}) => {
  const lists = useSelector(state => {
    return state.lists
  }).filter(list => list.boardId === boardId)
    return (
        <main>
          <div id="list-container" className="list-container">
            <div id="existing-lists" className="existing-lists">
              {lists.map(list => <List {...list} key={list._id}/>)}
            </div>
            <NewList boardId={boardId} />
          </div>
        </main>
    )
}

export default Lists