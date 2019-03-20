import * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    '--bg-color'?: string;
    '--box-color'?: string;
  }
}