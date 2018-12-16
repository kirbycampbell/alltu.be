import React, { Component } from "react";
import "./App.css";
import Amplify, { Storage, API, graphqlOperation } from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator, S3Album } from "aws-amplify-react";
Amplify.configure(config);
Storage.configure({ level: "private" });

// This query is currently Working baby!!!!!
const query = `
  query {
    listVideos {
      items {
        id title
      }
    }
  }`;

class App extends Component {
  state = {
    videos: []
  };

  async componentDidMount() {
    const data = await API.graphql(graphqlOperation(query));
    this.setState({
      videos: data.data.listVideos.items
    });
  }

  render() {
    return (
      <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        {this.state.videos.map((video, index) => (
          <p key={index}>{video.title}</p>
        ))}
        <S3Album level="private" path="" />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
