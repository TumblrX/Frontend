/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-empty */
/* eslint-disable max-len */
import React from 'react';
import classes from './Post.module.scss';
import { Link } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { IoGitCompareSharp } from 'react-icons/io5';
import { RiDeleteBinLine, RiShareForwardLine, RiEdit2Line } from 'react-icons/ri';
import getYoutubeVideoId from '../../helpers/getYoutubeVideoId';

const Post = function ({ data }) {
  const { content } = data;
  const postContent = content.map((contentBlock) => {
    if (contentBlock.type === 'text') {
      let { subtype, text, formatting } = contentBlock;
      // if(formatting){
      //   // If the formatting array is not empty, we need to format the text first
      //   let boldCount=0;
      //   formatting.forEach(format=>{
      //     if(format.type==='bold'){
      //       text=text.replace(text.slice(format.start+boldCount*7,format.end+boldCount*7), `<b>${text.slice(format.start,format.end)}</b>`);
      //       // 7 = <b></b> length
      //       boldCount++;
      //     }
      //     else if(format.type==='italic'){
      //       text=text.replace(text.slice(format.start,format.end), `<i>${text.slice(format.start,format.end)}</i>`);
      //     }
      //     else if(format.type==='strikethrough'){
      //       text=text.replace(text.slice(format.start,format.end), `<strike>${text.slice(format.start,format.end)}</strike>`);
      //     }
      //     else if(format.type==='small'){
      //       text=text.replace(text.slice(format.start,format.end), `<small>${text.slice(format.start,format.end)}</small>`);
      //     }
      //   })
      //   console.log(text);
      // }
      if (!subtype) {
        // return <p dangerouslySetInnerHTML={{__html: text}}></p>;
        return <p className={classes.text}>{text}</p>;
      }
      if (subtype === 'heading1') {
        return <h1>{text}</h1>;
      }
      if (subtype === 'heading2') {
        return <h2>{text}</h2>;
      }
      if (subtype === 'quirky') {

      } else if (subtype === 'quote') {
        return (
          <q cite="">{text}</q>
        );
      } else if (subtype === 'indented') {
        return (
          <blockquote cite="">
            {text}
          </blockquote>
        );
      } else if (subtype === 'chat') {
        text = text.replace(text.slice(formatting[0].start, formatting[0].end), `<b>${text.slice(formatting[0].start, formatting[0].end)}</b>`);
        return (
          <p className={classes.chat} dangerouslySetInnerHTML={{ __html: text }} />
        );
      } else if (subtype === 'ordered-list-item') {
        const items = ['item1', 'itemq2', 'item3'];
        return (
          <ol>
            {items.map((item) => <li>{item}</li>)}
          </ol>
        );
      } else if (subtype === 'unordered-list-item') {
        return (
          <ul>
            <li />
          </ul>
        );
      }
    } else if (contentBlock.type === 'image') {
      return (
        <figure className={classes.image}>
          <img
            src={contentBlock.url}
            alt={contentBlock.altText}
            width={contentBlock.width}
            height={contentBlock.height}
          />
          <figcaption>{contentBlock.caption}</figcaption>
        </figure>
      );
    } else if (contentBlock.type === 'link') {
      return (
        <div className={classes.link}>
          <a href={contentBlock.url}>
            <h3>{contentBlock.title}</h3>
            <p>{contentBlock.author}</p>
          </a>
          <p>{contentBlock.description}</p>
          { contentBlock.poster && <img src={contentBlock.poster.url} width={contentBlock.poster.width} height={contentBlock.poster.height} />}
        </div>
      );
    } else if (contentBlock.type === 'audio') {
      let audio;
      if (contentBlock.provider === 'soundcloud') {
        audio = <iframe width="100%" height="166" src={contentBlock.url} frameBorder="no" />;
      } else {
        // Here provider is tumblrx
      }
      return (
        <div className={classes.audio}>
          {audio}
        </div>

      );
    } else if (contentBlock.type === 'video') {
      let video;
      if (contentBlock.provider === 'youtube') {
        video = <iframe width="100%" height="315" src={`//www.youtube.com/embed/${getYoutubeVideoId(contentBlock.url)}`} frameBorder="0" allowFullScreen />;
      } else {
        // Here provider is tumblrx
      }
      return (
        <div className={classes.video}>
          {video}
        </div>
      );
    }
  });
  return (
    <div className={classes.post}>
      <header className={classes.header}>
        <div className={classes.blogName}>
          <Link to="/blog/view/yousefelshabrawy">yousefelshabrawy</Link>
        </div>
        <div className={classes.icon}>
          <BsThreeDots />
        </div>
      </header>
      <div className={classes.content}>
        {postContent}
      </div>
      <footer className={classes.footer}>
        <div className={classes.notes}>
          0 notes
        </div>
        <div className={classes.icons}>
          <div>
            <RiShareForwardLine />
          </div>
          <div>
            <FaRegComment />
          </div>
          <div>
            <IoGitCompareSharp />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <div>
            <RiDeleteBinLine />
          </div>
          <div>
            <RiEdit2Line />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Post;
