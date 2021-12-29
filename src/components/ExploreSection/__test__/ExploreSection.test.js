import { retrivePosts } from "../ExploreSectionServicesToTest";
import mockAxios from "axios";

describe("Test Retrieving data from backend in Explore Section", () => {
  it("should return true when request recommend for you if the use is Authorized ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    const respone = await retrivePosts(
      "/api/user/explore/0",
      "recommended-for-you"
    );
    expect(respone).toEqual("200 " + "Return data For you");
  });
  it("should return true when request trending  if the use is Authorized ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    const respone = await retrivePosts("/api/user/trending/0", "trending");
    expect(respone).toEqual("200 " + "Return data For trending");
  });
  it("should return true when request audios  if the use is Authorized ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    const respone = await retrivePosts("/api/user/trending/0", "audios");
    expect(respone).toEqual("200 " + "Return audio data ");
  });
  it("should return true when request text  if the use is Authorized ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    const respone = await retrivePosts("/api/user/trending/0", "text");
    expect(respone).toEqual("200 " + "Return text data ");
  });
  it("should return true when request Photos  if the use is Authorized ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    const respone = await retrivePosts("/api/user/trending/0", "photos");
    expect(respone).toEqual("200 " + "Return photos data ");
  });

  it("should return true when request videos  if the use is Authorized ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
        data: {
          status: "200",
        },
      })
    );
    const respone = await retrivePosts("/api/user/trending/0", "videos");
    expect(respone).toEqual("200 " + "Return videos data ");
  });

  it("should return false when the user is  unAuthorized ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: "fail",
        err: {
          statusCode: 400,
          status: "fail",
        },
      })
    );
    const respone = await retrivePosts("/api/user/trending/0", "vides");
    expect(respone).toEqual(500);
  });
});
