import React, { Component } from "react";
import "./App.css";
import Amplify, { Storage, API, graphqlOperation } from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator, S3Album } from "aws-amplify-react";
Amplify.configure(config);
Storage.configure({ level: "private" });

const query = `
  query {
    listVideos {
      items {
        id title
      }
    }
  }`;

//const listTodos = `query listTodos {
// listTodos{
//   items{
//     id
//      name
//      description
//    }
//  }
//}`;

//const addTodo = `mutation createTodo($name:String! $description: String!) {
// createTodo(input:{
//    name:$name
//    description:$description
//  }){
//   id
//   name
//   description
//  }
//}`;

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
  //uploadFile = evt => {
  //  const file = evt.target.files[0];
  //  const name = file.name;
  //
  //  Storage.put(name, file).then(() => {
  //    this.setState({ file: name });
  //  });
  //};
  //
  //todoMutation = async () => {
  //  const todoDetails = {
  //    name: "Party tonight!",
  //    description: "Amplify CLI rocks!"
  //  };
  //
  //  const newEvent = await API.graphql(graphqlOperation(addTodo, todoDetails));
  //  alert(JSON.stringify(newEvent));
  //};
  //
  //listQuery = async () => {
  //  console.log("listing todos");
  // const allTodos = await API.graphql(graphqlOperation(listTodos));
  //  alert(JSON.stringify(allTodos));
  //};
  //<button onClick={this.listQuery}>GraphQL Query</button>
  //<button onClick={this.todoMutation}>GraphQL Mutation</button>

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
