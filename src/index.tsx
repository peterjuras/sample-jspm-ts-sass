import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'style.scss!';

class Main extends React.Component<{ name: string }, {}> {
  render() {
    return <div>
      <h1>{this.props.name}</h1>
      <p>Hello {this.props.name}</p>
    </div>;
  }
}

ReactDOM.render(<Main name="TypeScript" />, document.getElementById('container'));
