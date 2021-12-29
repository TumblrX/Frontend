import axios from "axios";

const fetchBlogsTest = async () => {
  let status = 500;
  try {
    const response = await axios.get("api/blog/explore/0/for-you");
    return response.data.status;
  } catch (err) {
    return status;
  }
};

export { fetchBlogsTest };
