import { fetchBlogsTest } from "../CheckBlogServicesToTest";
import mockAxios from "axios";

describe("it return true ", () => {
  it("it reutrn true ture ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    const response = await fetchBlogsTest();
    expect(response).toEqual("200");
  });
  it("it return UnAuthorized when the user is unAuthorized ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "fail",
        err: {
          statusCode: 400,
          status: "fail",
        },
      })
    );

    const response = await fetchBlogsTest();
    expect(response).toEqual(500);
  });
});
