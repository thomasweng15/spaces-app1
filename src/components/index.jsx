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
      "id": "0",
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
      <h2>{title}</h2>
      <div>{numUsers} members</div>
    </div> 
  }
}

class Submit extends React.Component {
  onSubmit() {
    console.log("hello");
  }

  render() {
    return <div id="submit">
      <button onClick={this.onSubmit}>Contribute</button>
    </div>
  }
}

class Link extends React.Component {
  render() {
    const { linkProps } = this.props;
    const { title, url } = linkProps;

    return <a className="link_tag" target="_blank" href={ url }>
      <div className="link">
        <div className="title">{ title }</div>
        <div className="subtitle">{ url }</div>
      </div>
    </a>
  }
}

class Discussion extends React.Component {
  render() {
    const { discussProps } = this.props;
    return <div className="discuss-ctnr">Discussion</div>
  }
}

class Post extends React.Component {
  render() {
    const { postProps } = this.props;
    const { title, url, comments} = postProps;

    var linkProps = {
      title: title,
      url: url
    }

    var discussProps = {
      comments: comments
    }

    return <div className="post">
      <Link linkProps={linkProps}/>
      <Discussion discussProps={discussProps}/>
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
      <div id="posts">
        { data.posts.map((post) => <Post key={post.id} postProps={post} />) }
      </div>
      <Submit />
    </div>
  }
};

ReactDOM.render(<App data={ data }/>, document.getElementById('app'));
