⚠️ Last problems 

1. there was a misconception of the flow that will be given to the code. 
2. first of all the data that will be sent to the server was sent wrongly , each section of the form was sent the whole data again which is not the accurate way to be sent 
3. second problem was in the check boxes data how it will be sent . there was two approaches , the first one is to put an event handler to onbeforeunload which was not the best way to do it because it is not supported in mobile and some browsers and it will make the code much harder , the second one "which is applied to the site and ALSO TUMBLR USES IT " is to send the data every time the user change it the data is just a bool value which indicates if the user change this property or not .
4. the code was so messy with sending the data to the server 

👌Done 

- every section of the form will send the data that is associated to it , Email will send only the email  and later will send the email and password to do the validation on the back side of the server .. but at least not all the data will be sent only the password and email 
- the second approach was used to set the data of the check boxes .. send the data every time the user change it , it is not an overhead because it is not expected that the user will change it multiple of time and if so , it just a bool value which is not a big that to deal with 
- one function has been used to send the data and all the sections will use it , this function is in the account component and is sent to the components as props and when the children component need to send the data the parent component is responsible for sending it "which is the right way to do it "
- these previous techniques used in Email Section and password section  and check boxes 



 

 

