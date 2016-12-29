import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="app" id="app" >
        <Header />
        <aside>
          i am  aside
        </aside>
        <main>
          i am in body
        </main>
        <Footer>
          i am  Footer
        </Footer>
      </div>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string
};

App.defaultProps = {
  name: 'welcome to react'
};

ReactDOM.render(<App />, document.getElementById('root'));
