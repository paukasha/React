import React from 'react';

interface IIconProps {
  size?: number,
  name: any,
}

export function Icon(props: IIconProps) {
  const Name = props.name,
    size = props.size + 'px';

  return (<div style={{width: size}}>
      <Name />
    </div>
  )
}

