import { changeNotifyAbout } from "../SecuritySectionToTest";
import mockAxios from "axios";

describe("Testing security section  ", () => {
  it("it return true after changing the value and the user is Authorized ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    let sendData = {
      notifyMeAbout: true,
    };
    const response = await changeNotifyAbout(sendData);
    expect(response).toEqual("200");
  });
  it("return false it anything wrong happens ", async () => {
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
      notifyMeAbout: true,
    };
    const response = await changeNotifyAbout(sendData);
    expect(response).toEqual(500);
  });
});
