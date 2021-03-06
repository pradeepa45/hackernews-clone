import axios from "axios";
import { useState, useEffect } from "react";

export default function useAxios(Linktype,startIndex,lastIndex) {
  const url = `https://hacker-news.firebaseio.com/v0/${Linktype}stories.json?print=pretty&orderBy="$key"&startAt="${startIndex}"&endAt="${lastIndex}"`;
  const [ids, setIds] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [final, setFinal] = useState([]);
  useEffect(() => {
    // console.log("Executing useEffect");
    (async () => {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        Promise.all(resJson.map(fetchNews))
        .then((result) => {
          setFinal(result);
          setIds(resJson);   
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  async function fetchNews(id) {
    try {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  }
  return { loading, final };
}