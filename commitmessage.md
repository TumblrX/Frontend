👌Done 

- ### Very Important Commit ⚠️⚠️⚠️⚠️

  1. ​	This commit is the most important commit in this branch implementing The interface Section in the Dashboard Section in the settings 
  2. what makes this commit very important is the functionality and the concept that is used to make this section work as it is expected 
  3. implementing this section by using hooks add some difficulties  in the concept not in the code 
  4. sending data to the server is responsive  immediately with the user action on the check box, the data will be send every time the user click on the check box so how it have been handled 
  5. first of all the nature of the useState function is asynchronous  , that means that the state does not changed immediately the function is called, all the code under it will be executed with previous data no the up-to-date one so sending data directly  after changing it will not cause error but will add wrong data to the server 
  6. solving this problem is simple in code but a little bit hard in concept 
  7. this is the steps that is followed to solve this issue
     1. firstly initialize the value of the state with null , but it will make react asserting an warning saying that props or state has been assigned a null value , to over come this problem is so simple by adding the null value as a value of a key in the state `const [checkBoxState, setState] = useState({ state: null });`  
     2. secondly you want to fetch the data from the server whenever the component is rendered so you will use `useEffect` hook with empty dependencies list  to mimic the `componentDidMount() `function, update the checkcheck box checked property with the value coming from the server then update the state with the value coming from the server .. here is the KEY of the problem 
     3. knowing that the setState function is asynchronous the value will not updated immediately so another `useEffect` hook should be used to sense the changes on the state of the box .. 
     4. the other `useEffect` will check if the state is null "the first time after mounting " it will do nothing , and if not it will send the state to the server 
  8. This is the follow of code (the component is mounted )=> (the data is fetched from the server )=>(the state will be updated with the value coming from the server )=>(the `useEffect` hook that senses the changes of the state will be fired )=>(if the data is null return )=> (the first `useEffect` hook will not called again )=>(the second one will be called when any change happens )

✔️To-do

1. adding validations on the User inputs  
2. adding unit testing  for the rest components 
3. adding more tests on password and email components  





