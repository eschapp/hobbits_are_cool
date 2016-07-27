import React from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher from './MediaFetcher.jsx'


class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hobbits are indeed cool!</h1>
        <img src="/images/bilbo2.jpeg" />
        <MediaFetcher />
      </div>
      )
  }
}

ReactDOM.render (
  <App />,
  document.getElementById('root')
)