// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateVideo = `subscription OnCreateVideo {
  onCreateVideo {
    id
    title
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onUpdateVideo = `subscription OnUpdateVideo {
  onUpdateVideo {
    id
    title
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onDeleteVideo = `subscription OnDeleteVideo {
  onDeleteVideo {
    id
    title
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    title
    video {
      id
      title
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    title
    video {
      id
      title
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    title
    video {
      id
      title
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    post {
      id
      title
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    post {
      id
      title
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    post {
      id
      title
    }
  }
}
`;
