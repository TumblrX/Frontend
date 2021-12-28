// import mockAxios from "axios";

// import { changeEmail, changeFindMeByEmail } from "../EmailSectionTotest";

// describe("Test that the change Email services works correctly", () => {
//   it("it return true when you send correct data ", async () => {
//     mockAxios.post.mockImplementationOnce(() =>
//       Promise.resolve({
//         status: "200",
//       })
//     );
//     const response = await changeEmail();
//     expect(response).toEqual(true);
//   });
//   //   it("it return Unuthorized when the user is unuthorized ", async () => {
//   //     mockAxios.post.mockImplementationOnce(() =>
//   //       Promise.resolve({
//   //         status: "fail",
//   //         err: {
//   //           statusCode: 400,
//   //           status: "fail",
//   //         },
//   //       })
//   //     );
//   //     const response = await changeEmail();
//   //     expect(response).toEqual(false);
//   //   });
// });

// describe("test changing let people find me through email button ", () => {
//   it("returns true when the user is uthorized ", async () => {
//     mockAxios.post.mockImplementationOnce(() =>
//       Promise.resolve({
//         status: "200",
//       })
//     );
//     const response = await changeFindMeByEmail();
//     expect(response).toEqual(true);
//   });
//     it("returns false when the user is unuthorized ", async () => {
//       mockAxios.post.mockImplementationOnce(() =>
//         Promise.resolve({
//           status: "fail",
//           err: {
//             statusCode: 400,
//             status: "fail",
//           },
//         })
//       );
//       const response = await changeFindMeByEmail();
//       expect(response).toEqual(false);
//     });
// });
