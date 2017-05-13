import React from 'react';
import ReactDOM from 'react-dom'

let data = {
  "group_name": "Comic Book Club",
  "users": 
  {
    "0": "Chihiro Isozaki",
    "1": "Thomas Weng"
  },
  "posts": [
    {
      "title": "Hello World",
      "url": "https://www.google.com",
      "comments": [
        {
          "user": "0",
          "body": "this is cool"
        }
      ]
    }
  ]
};

class Header extends React.Component {
  render() {
    const { headerProps } = this.props;
    const { title, numUsers } = headerProps;

    return <div id="header">
      <div>{title}</div>
      <div>{numUsers} members</div>
    </div> 
  }
}

class App extends React.Component {
  render() {
    const { data } = this.props;

    const headerProps = {
      title: data.group_name,
      numUsers: Object.keys(data.users).length
    }

    return <div>
      <Header headerProps={headerProps} />
    </div>
  }
};

ReactDOM.render(<App data={ data }/>, document.getElementById('app'));
