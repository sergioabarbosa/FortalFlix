export default async function getSeries(search) {
  const API = `https://api.tvmaze.com/search/shows?q=${search}`;
  try {
    // const results = await fetch(API).then((resp) => resp.json());
    const results = await fetch(API);
    // console.log(results);
    const data = await results.json();
    return data;
  } catch (error) {
    return error.message;
  }
}




