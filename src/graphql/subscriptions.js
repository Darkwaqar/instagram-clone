/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      image
      posts {
        items {
          id
          caption
          image
          likes
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      stories {
        items {
          id
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      image
      posts {
        items {
          id
          caption
          image
          likes
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      stories {
        items {
          id
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      image
      posts {
        items {
          id
          caption
          image
          likes
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      stories {
        items {
          id
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      caption
      image
      likes
      userID
      user {
        id
        name
        image
        posts {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      caption
      image
      likes
      userID
      user {
        id
        name
        image
        posts {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      caption
      image
      likes
      userID
      user {
        id
        name
        image
        posts {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory($filter: ModelSubscriptionStoryFilterInput) {
    onCreateStory(filter: $filter) {
      id
      image
      userID
      user {
        id
        name
        image
        posts {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory($filter: ModelSubscriptionStoryFilterInput) {
    onUpdateStory(filter: $filter) {
      id
      image
      userID
      user {
        id
        name
        image
        posts {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory($filter: ModelSubscriptionStoryFilterInput) {
    onDeleteStory(filter: $filter) {
      id
      image
      userID
      user {
        id
        name
        image
        posts {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
