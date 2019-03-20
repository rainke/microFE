import * as React from 'react';
import './my-element';

interface MyElementAttributes<T> extends React.HTMLAttributes<T> {
  foo?: string;
  json?: object;
  arr?: any[];
  bool?: boolean
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-element': React.DetailedHTMLProps<MyElementAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

const withCustom = function<P extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>(Comp: React.ComponentType<P>) {
  return class extends React.Component<any> {
    static displayName = `withCustom(${Comp.displayName || Comp.name})`;
    render () {
      const props: any = {};
      for(let key in this.props) {
        const value = this.props[key];
        if(typeof value === 'object'){ //此处应该验证是否是一个纯对象
          props[key] = JSON.stringify(value);
        } else {
          props[key] = value;
        }
      }

      return <Comp {...props} />;
    }
  }
}

@withCustom
export default class MyElementComp extends React.Component<JSX.IntrinsicElements['my-element']> {
  static displayName = 'HeHe'
  render() {
    return <my-element {...this.props}></my-element>;
  }
}
