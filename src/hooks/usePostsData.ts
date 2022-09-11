import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPosts {
  name?: string;
  iconImg?: string;
}

export function usePostsData() {
  const [ posts, setPosts ] = useState<IPosts>({});
  const token = useContext(tokenContext)

  useEffect(() => {
    axios.get(' https://oauth.reddit.com/comments/best?limit=10', {
      headers: { Authorization: `bearer ${token}`}
    })
      .then((resp) => {
        const userData = resp.data;


      })
      .catch(console.log);
  }, [token])

  return [posts];
}
