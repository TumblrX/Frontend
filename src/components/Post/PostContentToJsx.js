/* eslint-disable */
import getYoutubeVideoId from '../../helpers/getYoutubeVideoId';
import classes from './Post.module.scss';
const PostContentToJsx = function (content){
  return content.map((contentBlock) => {
    // Text Content Block
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
        return (
          <ol className={classes.ol}>
            <li>{ text }</li>
          </ol>
        );
      } else if (subtype === 'unordered-list-item') {
        return (
          <ul className={classes.ul}>
            <li>{ text }</li>
          </ul>
        );
      }
      // Image Content Block
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
      // Link Content Block
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
      // Audio Content Block
    } else if (contentBlock.type === 'audio') {
      let audio;
      if (contentBlock.provider === 'soundcloud') {
        audio = <iframe width="100%" height="166" src={contentBlock.url} frameBorder="no" />;
      } else {
        // Here provider is tumblrx
        audio = (
          <audio
          controls
          src={contentBlock.url}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        )
      }
      return (
        <div className={classes.audio}>
          {audio}
        </div>
      );
      // Video Content Block
    } else if (contentBlock.type === 'video') {
      let video;
      if (contentBlock.provider === 'youtube') {
        video = <iframe width="100%" height="315" src={`//www.youtube.com/embed/${getYoutubeVideoId(contentBlock.url)}`} frameBorder="0" allowFullScreen />;
      } else {
        // Here provider is tumblrx
        video = (
          <video controls width="250">
            <source src={contentBlock.url}
            type="video/webm"/>
              Sorry, your browser doesn't support embedded videos.
          </video>
        )
      }
      return (
        <div className={classes.video}>
          {video}
        </div>
      );
    }
  });
}
export default PostContentToJsx; 