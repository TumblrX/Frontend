/* eslint-disable */
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TextEditor.scss';
import getYoutubeVideoId from '../../helpers/getYoutubeVideoId';
import { connect } from 'react-redux';
import { newTextPostActions } from '../../redux/newTextPost-slice';
class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    this.props.onChange(this.state);
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
        toolbarClassName='toolbar-class'
        onEditorStateChange={this.onEditorStateChange}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'list',
            'link',
            'embedded',
            'image',
          ],
          inline: {
            options: ['bold', 'italic', 'strikethrough'],
          },
          blockType: {
            inDropdown: false,
            options: ['Normal', 'H1', 'H2', 'Blockquote'],
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          list: {
            inDropdown: false,
            options: ['unordered', 'ordered'],
          },
          link: {
            inDropdown: false,
            showOpenOptionOnHover: true,
            defaultTargetOption: '_self',
            options: ['link', 'unlink'],
            linkCallback: undefined,
          },
          embedded: {
            embedCallback: (link) => {
              return `https://www.youtube.com/embed/${getYoutubeVideoId(link)}`
            },
            defaultSize: {
              height: 'auto',
              width: '100%',
            },
          },
          image: {
            alignmentEnabled: false,
            previewImage: true,
            urlEnabled: false,
            uploadEnabled: true,

            uploadCallback: (file) => {
              // every time we upload an image, we
              // need to save it to the state so we can get it's data
              // later when we decide what to do with it.
              this.props.addImage(file);

              // We need to return a promise with the image src
              // the img src we will use here will be what's needed
              // to preview it in the browser.
              return new Promise((resolve, reject) => {
                if (file) {
                  let reader = new FileReader();
                  reader.onload = (e) => {
                    resolve({ data: { link: e.target.result } });
                  };
                  reader.readAsDataURL(file);
                }
              });
            },
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: true, mandatory: false },
            defaultSize: {
              height: 'auto',
              width: '100%',
            },
          },
        }}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
            { text: 'APPLE', value: 'appleValue', url: 'appleURL' },
            { text: 'BANANA', value: 'banana', url: 'banana' },
            { text: 'CHERRY', value: 'cherry', url: 'cherry' },
            { text: 'DURIAN', value: 'durian', url: 'durian' },
            { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' }
          ],
        }}
        hashtag={{
          separator: ' ',
          trigger: '#',
        }}
      />
    );
  }
}
// To connet the text editor to the state directly
const mapStateToProps = (state) => {
  return ({
    uploadedImages: state.newTextPost.uploadedImages
  });
};
const mapDispatchToProps = { addImage: newTextPostActions.addImage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextEditor);
