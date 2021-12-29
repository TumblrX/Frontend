import { dispatch , useSelector } from 'react-redux';
import * as customize from '../../redux/Customize';
import customzie from './CustomizeService';
import getSettings from './GetSettingsServce';
import configureStore from '../../redux/store';

const CustomizeController = function () {

  const { dataToSend , settings  } = useSelector((state) => state.customize);

  const readData = async () =>{
    const response = await getSettings();
    console.log(response.response.data.data);
    if (!(response.response.data.data.avatar[0] == 'h') ){
      response.response.data.data.avatar = `http://tumblrx.me:3000/${response.response.data.data.avatar}`;
      // response.response.data.data.avatar = `${process.env.REACT_APP_API_URL}/${response.response.data.data.avatar}`;
    }
    if(!(response.response.data.data.headerImage[0] == 'h')){    
      response.response.data.data.headerImage = `http://tumblrx.me:3000/${response.response.data.data.headerImage}`;
      // response.response.data.data.headerImage = `${response.response.data.data.headerImage}`;
      // response.response.data.data.headerImage = `${process.env.REACT_APP_API_URL}/${response.response.data.data.headerImage}`;
    }
    console.log(response.response.data.data);
    configureStore.dispatch(customize.setSettings(response.response.data.data));
  }
   const  objectToFormData = (object,objectName,formData) =>{
    if(Array.isArray(object)){
        for(let i=0; i<object.length; i++){
            objectToFormData(object[i],`${objectName}[${i}]`,formData);
        }
    }    
    else if(object instanceof Object ){
        for (let key in object) {
            objectToFormData(object[key], `${objectName}[${key}]`, formData);
        }
    }
    else{
        formData.append(objectName,object);
    }
  }

  const saveHandler =async () =>{
    let formData = new FormData();
    for(const key of Object.keys(dataToSend))
      {
        objectToFormData(dataToSend[key], key , formData)
      }
    console.log(dataToSend);
    console.log(Array.from(formData));
    await customzie(formData); 
    await readData();
  }

    const changeAvatar = (link) => {
      configureStore.dispatch(customize.setAvatar(link));
    };
    
    const changeHeaderImage = (link) => {
       configureStore.dispatch(customize.setHeaderImage(link));
    };
    
    const changeAvatarHandler = (e) => {
        if(e.target){

            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    changeAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
            configureStore.dispatch(customize.setDataToSend({avatarUrl : e.target.files[0]})); 
        }
    };
      
    const changeHeaderImageHandler = (e) => {
        if(e.target){

            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    changeHeaderImage(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
            configureStore.dispatch(customize.setDataToSend({headerImage : e.target.files[0]})); 
        }
    };
      
    const handler1 = (e) => {
        document.getElementById('customizeContainer').style.background =  e.target.value;
        configureStore.dispatch(customize.setBgColor(e.target.value));
        let newdata =  JSON.parse(JSON.stringify(dataToSend));
        newdata['customApperance']['globalParameters']['backgroundColor'] = e.target.value; 
        configureStore.dispatch(customize.setDataToSend(newdata)); 

    };
    
    const handler2 = (e) => {
      document.getElementById('title').style.color =  e.target.value; 
      document.getElementById('description').style.color =  e.target.value;
      configureStore.dispatch(customize.setTitleColor(e.target.value));
      let newdata =  JSON.parse(JSON.stringify(dataToSend));
      newdata['customApperance']['globalParameters']['titleColor'] = e.target.value; 
      configureStore.dispatch(customize.setDataToSend(newdata)); 
    };
    
    const handler3 = (e) => {
      document.getElementById('accent').style.color =  e.target.value; 
      document.getElementById('accent1').style.borderBottom =  `4px solid ${e.target.value}`; 
      configureStore.dispatch(customize.setAccentColor(e.target.value));
      let newdata =  JSON.parse(JSON.stringify(dataToSend));
      newdata['customApperance']['globalParameters']['accentColor'] = e.target.value; 
      configureStore.dispatch(customize.setDataToSend(newdata)); 
    };
    
    const changeTitleFunc = (title) =>{
      document.getElementById('title').innerHTML =  title;
      configureStore.dispatch(customize.setTitle(title)); 
    }
    
    const changeTitle = (e) =>{
      changeTitleFunc(e.target.value);
      configureStore.dispatch(customize.setDataToSend({title : e.target.value}));       
    }
    const changeDescriptionFunc = (description) =>{
      document.getElementById('description').innerHTML =  description; 
      configureStore.dispatch(customize.setDescription(description)); 
    }
    const changeDescription = (e) =>{
      changeDescriptionFunc(e.target.value);
      configureStore.dispatch(customize.setDataToSend({description : e.target.value})); 
    }


  const makeCircle =  (val) =>{ 
       
    if (val === true){
        document.getElementById('avatar').style.borderRadius  =  '100%'; 
        document.getElementById('avatar').style.MozBorderRadius  =  '100%'; 
        document.getElementById('avatar').style.WebkitBorderRadius  =  '100%'; 
    }else{
        document.getElementById('avatar').style.borderRadius  =  '0'; 
        document.getElementById('avatar').style.MozBorderRadius  =  '0'; 
        document.getElementById('avatar').style.WebkitBorderRadius  =  '0'; 
    }
    configureStore.dispatch(customize.setAvatarShapeCircle(val));
  }
  
  const handleRadio =  (e) =>{

      if (e.target.value === 'circle'){
          makeCircle(true); 
          configureStore.dispatch(customize.setDataToSend({isAvatarCircle : true})); 
      }else{
          makeCircle(false); 
          configureStore.dispatch(customize.setDataToSend({isAvatarCircle : false})); 
      }
    }
    const showHeaderImageFunc = (val) =>{
      if(val){
          document.getElementById('headerImage').style.display  = 'block'; 
          document.getElementById('avatar').style.marginTop  = '0px'; 
      }else{
          document.getElementById('headerImage').style.display  = 'none'; 
          document.getElementById('avatar').style.marginTop  = '100px'; 
      }
    }

    const stretchHeaderImageFunc = (checked) =>{
      if(checked){
        document.getElementById('headerImage').style.width  = '100%'; 
        document.getElementById('headerImage').style.marginTop  = '0px'; 
        document.getElementById('headerImage').style.marginBottom  = '0px'; 
        document.getElementById('headerImage').style.height  = '300px'; 
      }else{
        document.getElementById('headerImage').style.width  = '60%'; 
        document.getElementById('headerImage').style.marginTop  = '50px'; 
        document.getElementById('headerImage').style.marginBottom  = '65px'; 
        document.getElementById('headerImage').style.height  = '200px'; 
      }
    }

    const showAvatarFunc = (checked) =>{
      if(checked){
        document.getElementById('avatar').style.display  = 'block'; 
        document.getElementById('avatar').style.transform = 'translate(0, -70px)';
        document.getElementById('headerText').style.transform = 'translate(0, -70px)';        
      }else{
        document.getElementById('avatar').style.transform = 'translate(0,0)';
        document.getElementById('headerText').style.transform = 'translate(0, 0)';
        document.getElementById('avatar').style.display  = 'none'; 
      }
    }
      const showTitleFunc = (checked) =>{
        if(checked){
          document.getElementById('title').style.display  = 'block';         
        }else{
          document.getElementById('title').style.display  = 'none'; 
        }
      }
      const showDescriptionFunc = (checked) =>{
        if(checked){
          document.getElementById('description').style.display  = 'block';         
        }else{
          document.getElementById('description').style.display  = 'none'; 
        }
      }

     /**
      ********************************** SLiders *****************************
      */
      const handleCheckBoxes = (e) =>{
        const checked = e.target.checked;
        if(e.target.value === '1'){
          showHeaderImageFunc(checked);
          configureStore.dispatch(customize.setShowHeaderImage(checked));
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['showHeaderImage'] = checked;  
          configureStore.dispatch(customize.setDataToSend(newdata));   
        }
        else if(e.target.value === '2'){
          stretchHeaderImageFunc(checked); 
          configureStore.dispatch(customize.setStretchHeaderImage(checked));  
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['stretchHeaderImage'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata)); 
        }
        else if(e.target.value === '3'){
          showAvatarFunc(checked);
          configureStore.dispatch(customize.setShowAvatar(checked)); 
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['showAvatar'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata));  
        }
        else if(e.target.value === '4'){
          showTitleFunc(checked);
          configureStore.dispatch(customize.setShowTitle(checked));  
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['showTitle'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata));  
        }
        else if(e.target.value === '5'){
          showDescriptionFunc(checked);   
          configureStore.dispatch(customize.setShowDescription(checked)); 
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['showDescription'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata));  
        }
        else if(e.target.value === '6'){
          showDescriptionFunc(checked);   
          configureStore.dispatch(customize.setUseNewPostTypes(checked)); 
          // configureStore.dispatch(customize.setDataToSend({useNewPostTypes : checked}));        
        } 
        else if(e.target.value === '7'){
          showDescriptionFunc(checked);  
          configureStore.dispatch(customize.setSlidingHeader(checked)); 
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['slidingHeader'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata));  
        } 
        else if(e.target.value === '8'){
          showDescriptionFunc(checked);   
          configureStore.dispatch(customize.setShowNavigation(checked));  
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['showNavigation'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata));  
        } 
        else if(e.target.value === '9'){
          showDescriptionFunc(checked);   
          configureStore.dispatch(customize.setEndlessScrolling(checked));  
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['endlessScrolling'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata));  
        } 
        else if(e.target.value === '10'){
          showDescriptionFunc(checked);   
          configureStore.dispatch(customize.setSyntaxHighlighting(checked)); 
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['syntaxHighlighting'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata));   
        }     
        else if(e.target.value === '11'){
          showDescriptionFunc(checked);   
          configureStore.dispatch(customize.setRelatedPosts(checked));
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['relatedPosts'] = checked; 
          configureStore.dispatch(customize.setDataToSend(newdata));   
        } 
      }
      return {
        handler1,
        handler2,
        handler3,
        changeTitleFunc,
        changeTitle,
        changeDescriptionFunc,
        changeDescription,
        makeCircle,
        handleRadio,
        showHeaderImageFunc,
        stretchHeaderImageFunc,
        showAvatarFunc,
        showTitleFunc,
        showDescriptionFunc,
        handleCheckBoxes,  
        changeAvatar,
        changeHeaderImage,
        changeAvatarHandler,
        changeHeaderImageHandler,
        saveHandler,
        readData,
      };        
};

export default CustomizeController;
