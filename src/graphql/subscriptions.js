// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateVideo = `subscription OnCreateVideo {
  onCreateVideo {
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
export const onUpdateVideo = `subscription OnUpdateVideo {
  onUpdateVideo {
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
export const onDeleteVideo = `subscription OnDeleteVideo {
  onDeleteVideo {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
