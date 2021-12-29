import mockAxios from "axios";

import { changeEmail, changeFindMeByEmail } from "../EmailSectionTotest";

describe("Test that the change Email services works correctly", () => {
  it("it return true when you send correct data ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    let sendData = {
      email: "user@example.com",
      password: "1234567",
    };
    const response = await changeEmail(sendData);
    console.log(response);
    expect(response).toEqual("200");
  });

  it("it return Unuthorized when the user is unuthorized ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "fail",
        err: {
          statusCode: 400,
          status: "fail",
        },
      })
    );
    let sendData = {
      email: "user@example.com",
      password: "1234567",
    };
    const response = await changeEmail(sendData);
    expect(response).toEqual(500);
  });
});

describe("test changing let people find me through email button ", () => {
  it("returns true when the user is uthorized ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    let sentData = {
      findMeByEmail: true,
    };
    const response = await changeFindMeByEmail(sentData);
    expect(response).toEqual("200");
  });
  it("returns false when the user is unuthorized ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "fail",
        err: {
          statusCode: 400,
          status: "fail",
        },
      })
    );
    let sentData = {
      findMeByEmail: false,
    };
    const response = await changeFindMeByEmail(sentData);
    expect(response).toEqual(500);
  });
});
