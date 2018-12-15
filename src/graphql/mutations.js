// eslint-disable
// this is an auto generated file. This will be overwritten

export const createVideo = `mutation CreateVideo($input: CreateVideoInput!) {
  createVideo(input: $input) {
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
export const updateVideo = `mutation UpdateVideo($input: UpdateVideoInput!) {
  updateVideo(input: $input) {
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
export const deleteVideo = `mutation DeleteVideo($input: DeleteVideoInput!) {
  deleteVideo(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
