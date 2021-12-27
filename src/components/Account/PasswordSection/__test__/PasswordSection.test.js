import mockAxios from "axios";

import sendPasswordData from "../PasswordSectionTotest";

describe("Test Changing the Password", () => {
  it("it returns true when the user enter valid password and ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
      })
    );
    const sentData = {
      oldPassword: "OldPassword",
      password: "NewPassowrd",
    };
    const response = await sendPasswordData(sentData);
    expect(response).toEqual(true);
  });
  //   it("it return Unuthorized when the user is unuthorized ", async () => {
  //     mockAxios.post.mockImplementationOnce(() =>
  //       Promise.resolve({
  //         status: "fail",
  //         err: {
  //           statusCode: 400,
  //           status: "fail",
  //         },
  //       })
  //     );
  //     const response = await changeEmail();
  //     expect(response).toEqual(false);
  //   });
});

describe("test changing let people find me through email button ", () => {
  it("returns true when the user is uthorized ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
      })
    );
    // const response = await changeFindMeByEmail();
    // expect(response).toEqual(true);
  });
  //   it("returns false when the user is unuthorized ", async () => {
  //     mockAxios.post.mockImplementationOnce(() =>
  //       Promise.resolve({
  //         status: "fail",
  //         err: {
  //           statusCode: 400,
  //           status: "fail",
  //         },
  //       })
  //     );
  //     const response = await changeFindMeByEmail();
  //     expect(response).toEqual(false);
  //   });
});
