import { getUserInfo } from "../AccountSectionToTest";

import mockAxios from "axios";

describe("Testing security section  ", () => {
  it("it retrieves all the user data when the user visit the settings page  ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );

    const response = await getUserInfo();
    expect(response).toEqual("200");
  });
  it("return false it anything wrong happens ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "fail",
        err: {
          statusCode: 400,
          status: "fail",
        },
      })
    );

    const response = await getUserInfo();
    expect(response).toEqual(500);
  });
});
