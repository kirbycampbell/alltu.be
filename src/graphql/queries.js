// eslint-disable
// this is an auto generated file. This will be overwritten

export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    title
    file
    info
    likes
    unlikes
    tags
    posts {
      items {
        id
        content
        likes
      }
      nextToken
    }
  }
}
`;
export const listVideos = `query ListVideos(
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      file
      info
      likes
      unlikes
      tags
      posts {
        items {
          id
          content
          likes
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    content
    likes
    video {
      id
      title
      file
      info
      likes
      unlikes
      tags
    }
    comments {
      items {
        id
        content
        likes
      }
      nextToken
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      likes
      video {
        id
        title
        file
        info
        likes
        unlikes
        tags
      }
      comments {
        items {
          id
          content
          likes
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    likes
    post {
      id
      content
      likes
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      likes
      post {
        id
        content
        likes
      }
    }
    nextToken
  }
}
`;
