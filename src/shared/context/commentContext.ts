import React from 'react';

type CommentContextType = {
  value: string;
  onChange: (value: string) => void;
}
export const commentContext = React.createContext({
  value: '',
  onChange: (value: string) => {},
});
