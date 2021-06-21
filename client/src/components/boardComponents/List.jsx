import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateList } from '../../actions/ListActions';
import Cards from './Cards';
import useInput from '../../hooks/useInput';
import { addCard } from '../../actions/CardActions';

const List = ({title, _id, boardId}) => {
  const [ listTitle, setListTitle ] = useState(title);
  const [newCardForm, setNewCardForm] = useState(false);
  const dispatch = useDispatch();
  // const handleListTitleChanged = (e) => {
  //   setListTitle(e.target.value);
  // }

  const textAreaRef = useRef(null)

useEffect(() => {
if (newCardForm) {
  textAreaRef.current.focus();
}
}, [newCardForm] 
)

  const handleAddCard = (e) => {
    e.preventDefault();
    setNewCardForm(true);
  }

  // const cardDescriptionInputs = useInput("");
  const {value: cardTitle, bind: bindCardTitle, reset: resetCardTitle } = useInput("")

  
 const resetNewCardInputs = () => {
  setNewCardForm(false)
  resetCardTitle();
 } 
  const handleSubmitNewCard = () => {
    if (cardTitle === "") {return}
    dispatch(addCard({_id, title: cardTitle, boardId}, resetNewCardInputs))
  }

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
        <div className={newCardForm ? "list-wrapper add-dropdown-active" : "list-wrapper"}>
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

                  <div className={newCardForm ? "add-dropdown add-bottom active-card" : "add-dropdown add-bottom"}>
                    <div className="card">
                      <div className="card-info"></div>
                      <textarea name="add-card" {...bindCardTitle} ref={textAreaRef}></textarea>
                      <div className="members"></div>
                    </div>
                    <a className="button" onClick={handleSubmitNewCard}>Add</a>
                    <i className="x-icon icon" onClick={() => {setNewCardForm(false)}}></i>
                    <div className="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div className="add-card-toggle" data-position="bottom" onClick={handleAddCard}>
                    Add a card...
                  </div>
                </div>
              </div>
            </div>
    )
}

export default List