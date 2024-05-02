/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    phone
    posts {
      nextToken
      __typename
    }
    postsIds
    pickups {
      nextToken
      __typename
    }
    pickupsIds
    createdAt
    Chats {
      nextToken
      __typename
    }
    ChatsIds
    messages {
      nextToken
      __typename
    }
    messagesIds
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      phone
      postsIds
      pickupsIds
      createdAt
      ChatsIds
      messagesIds
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    description
    estimatedValue
    createdBy {
      id
      username
      email
      phone
      postsIds
      pickupsIds
      createdAt
      ChatsIds
      messagesIds
      updatedAt
      __typename
    }
    createdById
    createdAt
    includesGlass
    glassBid
    longitude
    latitude
    address
    pickup {
      id
      postId
      pickedUpById
      pickedUpAt
      actualValue
      createdAt
      updatedAt
      __typename
    }
    pickupId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      estimatedValue
      createdById
      createdAt
      includesGlass
      glassBid
      longitude
      latitude
      address
      pickupId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getPickup = /* GraphQL */ `query GetPickup($id: ID!) {
  getPickup(id: $id) {
    id
    post {
      id
      description
      estimatedValue
      createdById
      createdAt
      includesGlass
      glassBid
      longitude
      latitude
      address
      pickupId
      updatedAt
      __typename
    }
    postId
    pickedUpBy {
      id
      username
      email
      phone
      postsIds
      pickupsIds
      createdAt
      ChatsIds
      messagesIds
      updatedAt
      __typename
    }
    pickedUpById
    pickedUpAt
    actualValue
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPickupQueryVariables, APITypes.GetPickupQuery>;
export const listPickups = /* GraphQL */ `query ListPickups(
  $filter: ModelPickupFilterInput
  $limit: Int
  $nextToken: String
) {
  listPickups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      pickedUpById
      pickedUpAt
      actualValue
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPickupsQueryVariables,
  APITypes.ListPickupsQuery
>;
export const getChat = /* GraphQL */ `query GetChat($id: ID!) {
  getChat(id: $id) {
    id
    messages {
      nextToken
      __typename
    }
    messagesIds
    users {
      nextToken
      __typename
    }
    usersIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetChatQueryVariables, APITypes.GetChatQuery>;
export const listChats = /* GraphQL */ `query ListChats(
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      messagesIds
      usersIds
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListChatsQueryVariables, APITypes.ListChatsQuery>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    content
    chat {
      id
      messagesIds
      usersIds
      createdAt
      updatedAt
      __typename
    }
    chatId
    sender {
      id
      username
      email
      phone
      postsIds
      pickupsIds
      createdAt
      ChatsIds
      messagesIds
      updatedAt
      __typename
    }
    senderId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      chatId
      senderId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
