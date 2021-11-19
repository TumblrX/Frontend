/**
 * This is the /new/quote page
 * @module Quote
 * @author Yousef Elshabrawy
 */
import React, { useEffect, useState } from 'react';
import classes from './Quote.module.scss';
import api from '../../../api/api';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
const Quote = (props) => {
  const [quote, setQuote] = useState('');
  const [source, setSource] = useState('');
  const [tags, setTags] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if (quote.trim() === '' && source.trim() === '') setFormIsValid(false);
    else setFormIsValid(true);
  }, [quote, source]);
  const quoteChangeHandler = (e) => {
    setQuote(e.target.value);
  };
  const sourceChangeHandler = (e) => {
    setSource(e.target.value);
  };
  const tagsChangeHandler = (e) => {
    setTags(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    try {
      await api.post('/quote', { id: quote.length, quote, source, tags });
    } catch (err) {
      if (err.response) {
        console.log('NOT in the 200 range');
      } else {
        console.log('error');
      }
    }
    setQuote('');
    setSource('');
    setTags('');
  };
  return (
    <FormCard>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          type='text'
          placeholder='Quote'
          onChange={quoteChangeHandler}
          value={quote}
        />
        <input
          type='text'
          placeholder='-- Source'
          onChange={sourceChangeHandler}
          value={source}
        />
        <input
          type='text'
          placeholder='#tags'
          onChange={tagsChangeHandler}
          value={tags}
        />
        <div className={classes.actions}>
          <CloseButton />
          <PostButton formIsValid={formIsValid} />
        </div>
      </form>
    </FormCard>
  );
};
export default Quote;
