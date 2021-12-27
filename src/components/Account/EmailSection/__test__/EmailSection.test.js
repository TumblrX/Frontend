import mockAxios from "axios";

import { changeEmail, changeFindMeByEmail } from "../EmailSectionTotest";

describe("Test that the change Email services works correctly", () => {
  it("it return true when you send correct data ", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: "200",
      })
    );
    const respone = await changeEmail();
    expect(respone).toEqual(true);
  });
});
