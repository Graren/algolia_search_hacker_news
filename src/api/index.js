import axios from "./setup";

const stdSearch = `http://hn.algolia.com/api/v1/search`;

export const search = async (query, { tags, page = 1 }) => {
  const q = `${stdSearch}?query=${query}&tags=${tags.map(
    (t, i) => `${i === 0 ? "" : ","}${t}`
  )}`;
  try {
    const data = await axios.get(q);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};
