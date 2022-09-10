declare module "*.css" {
  const styles: { [key: string]: string };
  export = styles;
}

declare module "*.jpeg";

declare module "*.png";

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
