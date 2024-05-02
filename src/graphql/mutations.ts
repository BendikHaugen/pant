/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createPickup = /* GraphQL */ `mutation CreatePickup(
  $input: CreatePickupInput!
  $condition: ModelPickupConditionInput
) {
  createPickup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePickupMutationVariables,
  APITypes.CreatePickupMutation
>;
export const updatePickup = /* GraphQL */ `mutation UpdatePickup(
  $input: UpdatePickupInput!
  $condition: ModelPickupConditionInput
) {
  updatePickup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePickupMutationVariables,
  APITypes.UpdatePickupMutation
>;
export const deletePickup = /* GraphQL */ `mutation DeletePickup(
  $input: DeletePickupInput!
  $condition: ModelPickupConditionInput
) {
  deletePickup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePickupMutationVariables,
  APITypes.DeletePickupMutation
>;
export const createChat = /* GraphQL */ `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChatMutationVariables,
  APITypes.CreateChatMutation
>;
export const updateChat = /* GraphQL */ `mutation UpdateChat(
  $input: UpdateChatInput!
  $condition: ModelChatConditionInput
) {
  updateChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChatMutationVariables,
  APITypes.UpdateChatMutation
>;
export const deleteChat = /* GraphQL */ `mutation DeleteChat(
  $input: DeleteChatInput!
  $condition: ModelChatConditionInput
) {
  deleteChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChatMutationVariables,
  APITypes.DeleteChatMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
