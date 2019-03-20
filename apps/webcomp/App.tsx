import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyElement from './MyElement';
import './puzzle-game';

const App = function() {
  return <MyElement foo="hehe" json={{ a: 'b' }} arr={['a', 'b']} bool />;
};

interface PuzzleBoard<T> extends React.HTMLAttributes<T> {
  foo?: string;
  json?: object;
  arr?: any[];
  bool?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'puzzle-board': React.DetailedHTMLProps<PuzzleBoard<HTMLElement>, HTMLElement>;
    }
  }
}

const theme = {
    ['--bg-color' as any]: '#ccc'
}


const PuzzleGame = () => <puzzle-board style={theme}/>;

ReactDOM.render(<PuzzleGame />, document.querySelector('#app'));
