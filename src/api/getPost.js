import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3500'
});


// test to make mock server
// {for (let index = 0; index < 50; index++) {
//     console.log(`
//     {
//       "id": ${index},
//       "title": "Testing a ${index} th post",
//       "datetime": "August 02, 2021 11:46:27 AM",
//       "body": "Some more testing paragraphs!"
//     },
//     `);
    
//   }}
  