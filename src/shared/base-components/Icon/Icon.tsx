import React from 'react';
import styles from  './icon.css'
import {EIcons} from "../../components/Icons/AllIcons";
import {BlockIcon, WarningIcon, Comment, Share, Save} from "../../components/Icons";
import classNames from "classnames";

interface IIconProps {
  size?: number,
  name: EIcons,
  iconClass?: string,
}

const icons = {
  [EIcons.block]: <BlockIcon/>,
  [EIcons.warning]: <WarningIcon/>,
  [EIcons.comment]: <Comment/>,
  [EIcons.share]: <Share/>,
  [EIcons.save]: <Save/>,
}

export function Icon({ name, iconClass }: IIconProps) {

  const classes = classNames(
    {[styles[`${iconClass}`]]: iconClass},
  );

  return (<div className={classes}>
    {icons[name]}
  </div>)
}


