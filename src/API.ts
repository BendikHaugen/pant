/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  phone?: string | null,
  postsIds?: Array< string | null > | null,
  pickupsIds?: Array< string | null > | null,
  createdAt?: string | null,
  ChatsIds?: Array< string | null > | null,
  messagesIds?: Array< string | null > | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  postsIds?: ModelIDInput | null,
  pickupsIds?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  ChatsIds?: ModelIDInput | null,
  messagesIds?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  phone?: string | null,
  posts?: ModelPostConnection | null,
  postsIds?: Array< string | null > | null,
  pickups?: ModelPickupConnection | null,
  pickupsIds?: Array< string | null > | null,
  createdAt: string,
  Chats?: ModelChatConnection | null,
  ChatsIds?: Array< string | null > | null,
  messages?: ModelMessageConnection | null,
  messagesIds?: Array< string | null > | null,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  description?: string | null,
  estimatedValue: number,
  createdBy?: User | null,
  createdById: string,
  createdAt?: string | null,
  includesGlass?: boolean | null,
  glassBid?: number | null,
  longitude: number,
  latitude: number,
  address: string,
  pickup?: Pickup | null,
  pickupId?: string | null,
  updatedAt: string,
};

export type Pickup = {
  __typename: "Pickup",
  id: string,
  post?: Post | null,
  postId: string,
  pickedUpBy?: User | null,
  pickedUpById: string,
  pickedUpAt?: string | null,
  actualValue?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPickupConnection = {
  __typename: "ModelPickupConnection",
  items:  Array<Pickup | null >,
  nextToken?: string | null,
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
};

export type Chat = {
  __typename: "Chat",
  id: string,
  messages?: ModelMessageConnection | null,
  messagesIds?: Array< string | null > | null,
  users?: ModelUserConnection | null,
  usersIds?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: string,
  chat?: Chat | null,
  chatId: string,
  sender?: User | null,
  senderId: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  phone?: string | null,
  postsIds?: Array< string | null > | null,
  pickupsIds?: Array< string | null > | null,
  createdAt?: string | null,
  ChatsIds?: Array< string | null > | null,
  messagesIds?: Array< string | null > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  description?: string | null,
  estimatedValue: number,
  createdById: string,
  createdAt?: string | null,
  includesGlass?: boolean | null,
  glassBid?: number | null,
  longitude: number,
  latitude: number,
  address: string,
  pickupId?: string | null,
};

export type ModelPostConditionInput = {
  description?: ModelStringInput | null,
  estimatedValue?: ModelFloatInput | null,
  createdById?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  includesGlass?: ModelBooleanInput | null,
  glassBid?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  pickupId?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePostInput = {
  id: string,
  description?: string | null,
  estimatedValue?: number | null,
  createdById?: string | null,
  createdAt?: string | null,
  includesGlass?: boolean | null,
  glassBid?: number | null,
  longitude?: number | null,
  latitude?: number | null,
  address?: string | null,
  pickupId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreatePickupInput = {
  id?: string | null,
  postId: string,
  pickedUpById: string,
  pickedUpAt?: string | null,
  actualValue?: number | null,
};

export type ModelPickupConditionInput = {
  postId?: ModelIDInput | null,
  pickedUpById?: ModelIDInput | null,
  pickedUpAt?: ModelStringInput | null,
  actualValue?: ModelFloatInput | null,
  and?: Array< ModelPickupConditionInput | null > | null,
  or?: Array< ModelPickupConditionInput | null > | null,
  not?: ModelPickupConditionInput | null,
};

export type UpdatePickupInput = {
  id: string,
  postId?: string | null,
  pickedUpById?: string | null,
  pickedUpAt?: string | null,
  actualValue?: number | null,
};

export type DeletePickupInput = {
  id: string,
};

export type CreateChatInput = {
  id?: string | null,
  messagesIds?: Array< string | null > | null,
  usersIds?: Array< string | null > | null,
  createdAt?: string | null,
};

export type ModelChatConditionInput = {
  messagesIds?: ModelIDInput | null,
  usersIds?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
};

export type UpdateChatInput = {
  id: string,
  messagesIds?: Array< string | null > | null,
  usersIds?: Array< string | null > | null,
  createdAt?: string | null,
};

export type DeleteChatInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  chatId: string,
  senderId: string,
  createdAt?: string | null,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  chatId?: ModelIDInput | null,
  senderId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  chatId?: string | null,
  senderId?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  postsIds?: ModelIDInput | null,
  pickupsIds?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  ChatsIds?: ModelIDInput | null,
  messagesIds?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  estimatedValue?: ModelFloatInput | null,
  createdById?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  includesGlass?: ModelBooleanInput | null,
  glassBid?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  pickupId?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPickupFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  pickedUpById?: ModelIDInput | null,
  pickedUpAt?: ModelStringInput | null,
  actualValue?: ModelFloatInput | null,
  and?: Array< ModelPickupFilterInput | null > | null,
  or?: Array< ModelPickupFilterInput | null > | null,
  not?: ModelPickupFilterInput | null,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  messagesIds?: ModelIDInput | null,
  usersIds?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  chatId?: ModelIDInput | null,
  senderId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  postsIds?: ModelSubscriptionIDInput | null,
  pickupsIds?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  ChatsIds?: ModelSubscriptionIDInput | null,
  messagesIds?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  estimatedValue?: ModelSubscriptionFloatInput | null,
  createdById?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  includesGlass?: ModelSubscriptionBooleanInput | null,
  glassBid?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  address?: ModelSubscriptionStringInput | null,
  pickupId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionPickupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  pickedUpById?: ModelSubscriptionIDInput | null,
  pickedUpAt?: ModelSubscriptionStringInput | null,
  actualValue?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionPickupFilterInput | null > | null,
  or?: Array< ModelSubscriptionPickupFilterInput | null > | null,
};

export type ModelSubscriptionChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  messagesIds?: ModelSubscriptionIDInput | null,
  usersIds?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  chatId?: ModelSubscriptionIDInput | null,
  senderId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    postsIds?: Array< string | null > | null,
    pickups?:  {
      __typename: "ModelPickupConnection",
      nextToken?: string | null,
    } | null,
    pickupsIds?: Array< string | null > | null,
    createdAt: string,
    Chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    ChatsIds?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    postsIds?: Array< string | null > | null,
    pickups?:  {
      __typename: "ModelPickupConnection",
      nextToken?: string | null,
    } | null,
    pickupsIds?: Array< string | null > | null,
    createdAt: string,
    Chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    ChatsIds?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    postsIds?: Array< string | null > | null,
    pickups?:  {
      __typename: "ModelPickupConnection",
      nextToken?: string | null,
    } | null,
    pickupsIds?: Array< string | null > | null,
    createdAt: string,
    Chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    ChatsIds?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    estimatedValue: number,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    createdById: string,
    createdAt?: string | null,
    includesGlass?: boolean | null,
    glassBid?: number | null,
    longitude: number,
    latitude: number,
    address: string,
    pickup?:  {
      __typename: "Pickup",
      id: string,
      postId: string,
      pickedUpById: string,
      pickedUpAt?: string | null,
      actualValue?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pickupId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    estimatedValue: number,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    createdById: string,
    createdAt?: string | null,
    includesGlass?: boolean | null,
    glassBid?: number | null,
    longitude: number,
    latitude: number,
    address: string,
    pickup?:  {
      __typename: "Pickup",
      id: string,
      postId: string,
      pickedUpById: string,
      pickedUpAt?: string | null,
      actualValue?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pickupId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    estimatedValue: number,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    createdById: string,
    createdAt?: string | null,
    includesGlass?: boolean | null,
    glassBid?: number | null,
    longitude: number,
    latitude: number,
    address: string,
    pickup?:  {
      __typename: "Pickup",
      id: string,
      postId: string,
      pickedUpById: string,
      pickedUpAt?: string | null,
      actualValue?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pickupId?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePickupMutationVariables = {
  input: CreatePickupInput,
  condition?: ModelPickupConditionInput | null,
};

export type CreatePickupMutation = {
  createPickup?:  {
    __typename: "Pickup",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      estimatedValue: number,
      createdById: string,
      createdAt?: string | null,
      includesGlass?: boolean | null,
      glassBid?: number | null,
      longitude: number,
      latitude: number,
      address: string,
      pickupId?: string | null,
      updatedAt: string,
    } | null,
    postId: string,
    pickedUpBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    pickedUpById: string,
    pickedUpAt?: string | null,
    actualValue?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePickupMutationVariables = {
  input: UpdatePickupInput,
  condition?: ModelPickupConditionInput | null,
};

export type UpdatePickupMutation = {
  updatePickup?:  {
    __typename: "Pickup",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      estimatedValue: number,
      createdById: string,
      createdAt?: string | null,
      includesGlass?: boolean | null,
      glassBid?: number | null,
      longitude: number,
      latitude: number,
      address: string,
      pickupId?: string | null,
      updatedAt: string,
    } | null,
    postId: string,
    pickedUpBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    pickedUpById: string,
    pickedUpAt?: string | null,
    actualValue?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePickupMutationVariables = {
  input: DeletePickupInput,
  condition?: ModelPickupConditionInput | null,
};

export type DeletePickupMutation = {
  deletePickup?:  {
    __typename: "Pickup",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      estimatedValue: number,
      createdById: string,
      createdAt?: string | null,
      includesGlass?: boolean | null,
      glassBid?: number | null,
      longitude: number,
      latitude: number,
      address: string,
      pickupId?: string | null,
      updatedAt: string,
    } | null,
    postId: string,
    pickedUpBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    pickedUpById: string,
    pickedUpAt?: string | null,
    actualValue?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat?:  {
    __typename: "Chat",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    usersIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat?:  {
    __typename: "Chat",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    usersIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat?:  {
    __typename: "Chat",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    usersIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      messagesIds?: Array< string | null > | null,
      usersIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatId: string,
    sender?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    senderId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      messagesIds?: Array< string | null > | null,
      usersIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatId: string,
    sender?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    senderId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      messagesIds?: Array< string | null > | null,
      usersIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatId: string,
    sender?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    senderId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    postsIds?: Array< string | null > | null,
    pickups?:  {
      __typename: "ModelPickupConnection",
      nextToken?: string | null,
    } | null,
    pickupsIds?: Array< string | null > | null,
    createdAt: string,
    Chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    ChatsIds?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    estimatedValue: number,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    createdById: string,
    createdAt?: string | null,
    includesGlass?: boolean | null,
    glassBid?: number | null,
    longitude: number,
    latitude: number,
    address: string,
    pickup?:  {
      __typename: "Pickup",
      id: string,
      postId: string,
      pickedUpById: string,
      pickedUpAt?: string | null,
      actualValue?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pickupId?: string | null,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description?: string | null,
      estimatedValue: number,
      createdById: string,
      createdAt?: string | null,
      includesGlass?: boolean | null,
      glassBid?: number | null,
      longitude: number,
      latitude: number,
      address: string,
      pickupId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPickupQueryVariables = {
  id: string,
};

export type GetPickupQuery = {
  getPickup?:  {
    __typename: "Pickup",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      estimatedValue: number,
      createdById: string,
      createdAt?: string | null,
      includesGlass?: boolean | null,
      glassBid?: number | null,
      longitude: number,
      latitude: number,
      address: string,
      pickupId?: string | null,
      updatedAt: string,
    } | null,
    postId: string,
    pickedUpBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    pickedUpById: string,
    pickedUpAt?: string | null,
    actualValue?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPickupsQueryVariables = {
  filter?: ModelPickupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPickupsQuery = {
  listPickups?:  {
    __typename: "ModelPickupConnection",
    items:  Array< {
      __typename: "Pickup",
      id: string,
      postId: string,
      pickedUpById: string,
      pickedUpAt?: string | null,
      actualValue?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat?:  {
    __typename: "Chat",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    usersIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      messagesIds?: Array< string | null > | null,
      usersIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      messagesIds?: Array< string | null > | null,
      usersIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatId: string,
    sender?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    senderId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      chatId: string,
      senderId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    postsIds?: Array< string | null > | null,
    pickups?:  {
      __typename: "ModelPickupConnection",
      nextToken?: string | null,
    } | null,
    pickupsIds?: Array< string | null > | null,
    createdAt: string,
    Chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    ChatsIds?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    postsIds?: Array< string | null > | null,
    pickups?:  {
      __typename: "ModelPickupConnection",
      nextToken?: string | null,
    } | null,
    pickupsIds?: Array< string | null > | null,
    createdAt: string,
    Chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    ChatsIds?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    postsIds?: Array< string | null > | null,
    pickups?:  {
      __typename: "ModelPickupConnection",
      nextToken?: string | null,
    } | null,
    pickupsIds?: Array< string | null > | null,
    createdAt: string,
    Chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    ChatsIds?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    estimatedValue: number,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    createdById: string,
    createdAt?: string | null,
    includesGlass?: boolean | null,
    glassBid?: number | null,
    longitude: number,
    latitude: number,
    address: string,
    pickup?:  {
      __typename: "Pickup",
      id: string,
      postId: string,
      pickedUpById: string,
      pickedUpAt?: string | null,
      actualValue?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pickupId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    estimatedValue: number,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    createdById: string,
    createdAt?: string | null,
    includesGlass?: boolean | null,
    glassBid?: number | null,
    longitude: number,
    latitude: number,
    address: string,
    pickup?:  {
      __typename: "Pickup",
      id: string,
      postId: string,
      pickedUpById: string,
      pickedUpAt?: string | null,
      actualValue?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pickupId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    estimatedValue: number,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    createdById: string,
    createdAt?: string | null,
    includesGlass?: boolean | null,
    glassBid?: number | null,
    longitude: number,
    latitude: number,
    address: string,
    pickup?:  {
      __typename: "Pickup",
      id: string,
      postId: string,
      pickedUpById: string,
      pickedUpAt?: string | null,
      actualValue?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pickupId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePickupSubscriptionVariables = {
  filter?: ModelSubscriptionPickupFilterInput | null,
};

export type OnCreatePickupSubscription = {
  onCreatePickup?:  {
    __typename: "Pickup",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      estimatedValue: number,
      createdById: string,
      createdAt?: string | null,
      includesGlass?: boolean | null,
      glassBid?: number | null,
      longitude: number,
      latitude: number,
      address: string,
      pickupId?: string | null,
      updatedAt: string,
    } | null,
    postId: string,
    pickedUpBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    pickedUpById: string,
    pickedUpAt?: string | null,
    actualValue?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePickupSubscriptionVariables = {
  filter?: ModelSubscriptionPickupFilterInput | null,
};

export type OnUpdatePickupSubscription = {
  onUpdatePickup?:  {
    __typename: "Pickup",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      estimatedValue: number,
      createdById: string,
      createdAt?: string | null,
      includesGlass?: boolean | null,
      glassBid?: number | null,
      longitude: number,
      latitude: number,
      address: string,
      pickupId?: string | null,
      updatedAt: string,
    } | null,
    postId: string,
    pickedUpBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    pickedUpById: string,
    pickedUpAt?: string | null,
    actualValue?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePickupSubscriptionVariables = {
  filter?: ModelSubscriptionPickupFilterInput | null,
};

export type OnDeletePickupSubscription = {
  onDeletePickup?:  {
    __typename: "Pickup",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      estimatedValue: number,
      createdById: string,
      createdAt?: string | null,
      includesGlass?: boolean | null,
      glassBid?: number | null,
      longitude: number,
      latitude: number,
      address: string,
      pickupId?: string | null,
      updatedAt: string,
    } | null,
    postId: string,
    pickedUpBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    pickedUpById: string,
    pickedUpAt?: string | null,
    actualValue?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnCreateChatSubscription = {
  onCreateChat?:  {
    __typename: "Chat",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    usersIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat?:  {
    __typename: "Chat",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    usersIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat?:  {
    __typename: "Chat",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    messagesIds?: Array< string | null > | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    usersIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      messagesIds?: Array< string | null > | null,
      usersIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatId: string,
    sender?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    senderId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      messagesIds?: Array< string | null > | null,
      usersIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatId: string,
    sender?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    senderId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      messagesIds?: Array< string | null > | null,
      usersIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatId: string,
    sender?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      postsIds?: Array< string | null > | null,
      pickupsIds?: Array< string | null > | null,
      createdAt: string,
      ChatsIds?: Array< string | null > | null,
      messagesIds?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    senderId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
