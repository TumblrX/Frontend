import { useDispatch , useSelector } from 'react-redux';
import * as customize from '../../redux/Customize';
import customzie from './CustomizeService';
import getSettings from './GetSettingsServce';

const CustomizePageController = function () {

  const dispatch = useDispatch();  

  const { dataToSend , settings  } = useSelector((state) => state.customize);

  const readData = async () =>{
    const response = await getSettings();
    console.log(response.response.data.data);
    dispatch(customize.setSettings(response.response.data.data));
    console.log(settings);
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
    objectToFormData(dataToSend, 'dataToSend' , formData)
    console.log(dataToSend);
    await customzie(dataToSend);
    await readData();
  }


    const changeAvatar = (link) => {
      dispatch(customize.setAvatar(link));
    };
    
    const changeHeaderImage = (link) => {
       dispatch(customize.setHeaderImage(link));
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
            dispatch(customize.setDataToSend({avatarUrl : e.target.files[0]})); 
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
            dispatch(customize.setDataToSend({headerImage : e.target.files[0]})); 
        }
    };
      
    const handler1 = (e) => {
        document.getElementById('customizeContainer').style.background =  e.target.value;
        dispatch(customize.setBgColor(e.target.value));
        let newdata =  JSON.parse(JSON.stringify(dataToSend));
        newdata['customApperance']['globalParameters']['backgroundColor'] = e.target.value; 
        dispatch(customize.setDataToSend(newdata)); 

    };
    
    const handler2 = (e) => {
      document.getElementById('title').style.color =  e.target.value; 
      document.getElementById('description').style.color =  e.target.value;
      dispatch(customize.setTitleColor(e.target.value));
      let newdata =  JSON.parse(JSON.stringify(dataToSend));
      newdata['customApperance']['globalParameters']['titleColor'] = e.target.value; 
      dispatch(customize.setDataToSend(newdata)); 
    };
    
    const handler3 = (e) => {
      document.getElementById('accent').style.color =  e.target.value; 
      document.getElementById('accent1').style.borderBottom =  `4px solid ${e.target.value}`; 
      dispatch(customize.setAccentColor(e.target.value));
      let newdata =  JSON.parse(JSON.stringify(dataToSend));
      newdata['customApperance']['globalParameters']['accentColor'] = e.target.value; 
      dispatch(customize.setDataToSend(newdata)); 
    };
    
    const changeTitleFunc = (title) =>{
      document.getElementById('title').innerHTML =  title;
    }
    
    const changeTitle = (e) =>{
      dispatch(customize.setTitle(e.target.value)); 
      changeTitleFunc(e.target.value);
      dispatch(customize.setDataToSend({title : e.target.value}));       
    }
    const changeDescriptionFunc = (description) =>{
      document.getElementById('description').innerHTML =  description; 
    }
    const changeDescription = (e) =>{
      dispatch(customize.setDescription(e.target.value)); 
      changeDescriptionFunc(e.target.value);
      dispatch(customize.setDataToSend({description : e.target.value})); 
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
    dispatch(customize.setAvatarShapeCircle(val));
  }
  
  const handleRadio =  (e) =>{

      if (e.target.value === 'circle'){
          makeCircle(true); 
          dispatch(customize.setDataToSend({isAvatarCircle : true})); 
      }else{
          makeCircle(false); 
          dispatch(customize.setDataToSend({isAvatarCircle : false})); 
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
          dispatch(customize.setShowHeaderImage(checked));
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['showHeaderImage'] = checked;  
          dispatch(customize.setDataToSend(newdata));   
        }
        else if(e.target.value === '2'){
          stretchHeaderImageFunc(checked); 
          dispatch(customize.setStretchHeaderImage(checked));  
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['stretchHeaderImage'] = checked; 
          dispatch(customize.setDataToSend(newdata)); 
        }
        else if(e.target.value === '3'){
          showAvatarFunc(checked);
          dispatch(customize.setShowAvatar(checked)); 
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['showAvatar'] = checked; 
          dispatch(customize.setDataToSend(newdata));  
        }
        else if(e.target.value === '4'){
          showTitleFunc(checked);
          dispatch(customize.setShowTitle(checked));  
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['showTitle'] = checked; 
          dispatch(customize.setDataToSend(newdata));  
        }
        else if(e.target.value === '5'){
          showDescriptionFunc(checked);   
          dispatch(customize.setShowDescription(checked)); 
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['globalParameters']['showDescription'] = checked; 
          dispatch(customize.setDataToSend(newdata));  
        }
        else if(e.target.value === '6'){
          showDescriptionFunc(checked);   
          dispatch(customize.setUseNewPostTypes(checked)); 
          // dispatch(customize.setDataToSend({useNewPostTypes : checked}));        
        } 
        else if(e.target.value === '7'){
          showDescriptionFunc(checked);  
          dispatch(customize.setSlidingHeader(checked)); 
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['slidingHeader'] = checked; 
          dispatch(customize.setDataToSend(newdata));  
        } 
        else if(e.target.value === '8'){
          showDescriptionFunc(checked);   
          dispatch(customize.setShowNavigation(checked));  
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['showNavigation'] = checked; 
          dispatch(customize.setDataToSend(newdata));  
        } 
        else if(e.target.value === '9'){
          showDescriptionFunc(checked);   
          dispatch(customize.setEndlessScrolling(checked));  
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['endlessScrolling'] = checked; 
          dispatch(customize.setDataToSend(newdata));  
        } 
        else if(e.target.value === '10'){
          showDescriptionFunc(checked);   
          dispatch(customize.setSyntaxHighlighting(checked)); 
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['syntaxHighlighting'] = checked; 
          dispatch(customize.setDataToSend(newdata));   
        }     
        else if(e.target.value === '11'){
          showDescriptionFunc(checked);   
          dispatch(customize.setRelatedPosts(checked));
          let newdata =  JSON.parse(JSON.stringify(dataToSend));
          newdata['customApperance']['customParameters']['relatedPosts'] = checked; 
          dispatch(customize.setDataToSend(newdata));   
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

export default CustomizePageController;
