import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPosts {
  [N: string]: any
}

export function usePostsData() {
  const [ posts, setPosts ] = useState<IPosts>({});
  const token = useContext(tokenContext)

  useEffect(() => {
    axios.get('https://oauth.reddit.com/best.json', {
      headers: {Authorization: `bearer ${token}`}
    })
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(console.log);
  }, [token])
  return [posts];
}
