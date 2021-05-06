import React from 'react';
import styles from './text.scss';
import classNames from 'classnames';
/**
 * font-size: 28px;
 * line-height: 33px;
 *
 * font-size: 20px;
 * line-height: 23px;
 *
 * font-size: 16px;
 * line-height: 19px;
 *
 * font-size: 14px;
 * line-height: 16px;
 *
 * font-size: 12px;
 * line-height: 14px;
 *
 * font-size: 10px;
 * line-height: 12px;
 *
 * span, h1234, p, div
 */

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF3 = 'greyF3',
  greyF4 = 'greyF4',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}
type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const { As = 'span',
    color = EColor.black,
    bold = false,
    children, size,
    mobileSize,
    tabletSize,
    desktopSize
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles.bold]:  bold},
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color]

  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
