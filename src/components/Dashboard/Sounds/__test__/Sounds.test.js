import { checkBoxClick } from "../SoundServicesToTest";
import mockAxios from "axios";
describe("testing the sound section ", () => {
  it("it returns true when the user is Authorized ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    let sendData = {
      sound: true,
    };

    const response = await checkBoxClick(sendData);
    expect(response).toEqual("200");
  });
  it("returns unAuthorized when the user is unAuthorized ", async () => {
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
      sound: true,
    };
    const response = await checkBoxClick(sendData);
    expect(response).toEqual(500);
  });
});
