import { sendPasswordData } from "../PasswordSectionServicesToTest";
import mockAxios from "axios";

describe("Testing password section ", () => {
  it("return true when the user is uthorized ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    let sendData = {
      password: "12345%",
    };
    const response = await sendPasswordData(sendData);
    expect(response).toEqual("200");
  });

  it("return unuthorized when the user enters wrong password", async () => {
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
      password: "1234567",
    };
    const response = await sendPasswordData(sendData);
    expect(response).toEqual(500);
  });
});
