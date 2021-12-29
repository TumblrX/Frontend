import React , { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaArrowLeft } from 'react-icons/fa';
import classes from './Notes.module.scss';
import notesController from './NotesController';
import getNotes from './GetNotesService';
import NoteItem from './NoteItem/NoteItem';
const Notes = ({increamentNotesCount,closeHandler, postId}) => {
  const {submitComment} = notesController();
  const [comment, setComment] = useState('');
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async()=>{
     const response = await getNotes(postId);
     if(response){
       setNotes(response.data.data);
     }
    }
    fetchNotes()
  }, []);
  const submitCommentHandler =async (e) =>{
    e.preventDefault(); 
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if(await submitComment(postId,comment)){
      setComment('');
      increamentNotesCount();
      const response = await getNotes(postId);
      if(response){
        setNotes(response.data.data);
      }
    }
  }
  return (
    <div className={classes.notes}>
      <header className={classes.header}>
        <IconContext.Provider value={{ size: '1.3rem'}}>
          <div onClick={closeHandler} className={classes.back}>
            <FaArrowLeft/>
          </div>
        </IconContext.Provider>
        <div>
          {notes.length} notes
        </div>
      </header>
      <div className={classes.content}>
        <ul>
          {notes.map((note)=><NoteItem key={note._id} note={note}/>)}
        </ul>
      </div>
      <footer className={classes.footer}>
        <form onSubmit={submitCommentHandler}>
          <input type='text' value={comment} placeholder='Say your thing'onChange={(e)=>setComment(e.target.value)}/>
          <button disabled={!comment.length}>Reply</button>
        </form>
      </footer>
    </div>
  );
};

export default Notes;