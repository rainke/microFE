import * as React from 'react';

const withCustom = function(Comp: React.ComponentType<any>) {
  return class extends React.Component<any, any> {
    static displayName = Comp.displayName || Comp.name;
    render() {
      const props: any = {};
      for (let key in this.props) {
        const value = this.props[key];
        if (typeof value === 'object') {
          //此处应该验证是否是一个纯对象
          props[key] = JSON.stringify(value);
        } else {
          props[key] = value;
        }
      }

      return <Comp {...props} />;
    }
  };
};

export default withCustom;
