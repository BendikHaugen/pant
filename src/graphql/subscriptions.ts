/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreatePickup = /* GraphQL */ `subscription OnCreatePickup($filter: ModelSubscriptionPickupFilterInput) {
  onCreatePickup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePickupSubscriptionVariables,
  APITypes.OnCreatePickupSubscription
>;
export const onUpdatePickup = /* GraphQL */ `subscription OnUpdatePickup($filter: ModelSubscriptionPickupFilterInput) {
  onUpdatePickup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePickupSubscriptionVariables,
  APITypes.OnUpdatePickupSubscription
>;
export const onDeletePickup = /* GraphQL */ `subscription OnDeletePickup($filter: ModelSubscriptionPickupFilterInput) {
  onDeletePickup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePickupSubscriptionVariables,
  APITypes.OnDeletePickupSubscription
>;
export const onCreateChat = /* GraphQL */ `subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
  onCreateChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
  onUpdateChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
  onDeleteChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
