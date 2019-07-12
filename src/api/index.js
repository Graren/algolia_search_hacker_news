import axios from "./setup";

const stdSearch = `https://hn.algolia.com/api/v1/search`;

export const search = async (query, { tags, page = 1 }) => {
  let q = `${stdSearch}?query=${query}`;
  if (tags && tags.length > 0) q = `${q}&tags=${tags.map((t, i) => `${i === 0 ? "" : ","}${t}`)}`;
  try {
    const data = await axios.get(q);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};