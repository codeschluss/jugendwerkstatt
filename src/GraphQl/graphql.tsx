import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: any;
  /** Built-in scalar for map-like structures */
  Map_String_StringScalar: any;
  /** Built-in scalar for dynamic values */
  ObjectScalar: any;
  /** Built-in scalar representing a date-time with a UTC offset */
  OffsetDateTime: any;
  /** Use SPQR's SchemaPrinter to remove this from SDL */
  UNREPRESENTABLE: any;
};

export type ActualEnd = {
  __typename?: 'ActualEnd';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  type?: Maybe<Scalars['String']>;
};

export type ActualStart = {
  __typename?: 'ActualStart';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  type?: Maybe<Scalars['String']>;
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  houseNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  place?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type AddressEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  houseNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  place?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type AnswerEntity = {
  __typename?: 'AnswerEntity';
  assignment?: Maybe<AssignmentEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  question?: Maybe<QuestionEntity>;
  rating?: Maybe<Scalars['Int']>;
};

export type AnswerEntityInput = {
  assignment?: InputMaybe<AssignmentEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  question?: InputMaybe<QuestionEntityInput>;
  rating?: InputMaybe<Scalars['Int']>;
};

export type AssignmentEntity = {
  __typename?: 'AssignmentEntity';
  answers?: Maybe<Array<Maybe<AnswerEntity>>>;
  assignmentState?: Maybe<AssignmentStateEntity>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  questionnaire?: Maybe<QuestionnaireEntity>;
  user?: Maybe<UserEntity>;
};

export type AssignmentEntityInput = {
  answers?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
  assignmentState?: InputMaybe<AssignmentStateEntityInput>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  questionnaire?: InputMaybe<QuestionnaireEntityInput>;
  user?: InputMaybe<UserEntityInput>;
};

export type AssignmentStateEntity = {
  __typename?: 'AssignmentStateEntity';
  assignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type AssignmentStateEntityInput = {
  assignments?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ChatEntity = {
  __typename?: 'ChatEntity';
  admin?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  group?: Maybe<GroupEntity>;
  id?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<MessageEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  participants?: Maybe<Array<Maybe<ParticipantEntity>>>;
};

export type ChatEntityInput = {
  admin?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  group?: InputMaybe<GroupEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Array<InputMaybe<MessageEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<Array<InputMaybe<ParticipantEntityInput>>>;
};

export type CompanyEntity = {
  __typename?: 'CompanyEntity';
  address?: Maybe<AddressEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  jobAd?: Maybe<Array<Maybe<JobAdEntity>>>;
  mail?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type CompanyEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  jobAd?: InputMaybe<Array<InputMaybe<JobAdEntityInput>>>;
  mail?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export enum ConjunctionOperator {
  And = 'AND',
  AndNot = 'AND_NOT',
  Or = 'OR',
  OrNot = 'OR_NOT'
}

export type CoordinateInput = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  active?: Maybe<Scalars['Boolean']>;
  activeOrder?: Maybe<Scalars['Int']>;
  averageRating?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  feedbacks?: Maybe<Array<Maybe<FeedbackEntity>>>;
  group?: Maybe<GroupEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};


export type CourseEntityAverageRatingArgs = {
  year?: InputMaybe<Scalars['Int']>;
};

export type CourseEntityInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activeOrder?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  feedbacks?: InputMaybe<Array<InputMaybe<FeedbackEntityInput>>>;
  group?: InputMaybe<GroupEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Detail = {
  __typename?: 'Detail';
  compassDegrees?: Maybe<Scalars['Int']>;
  endPathIndices?: Maybe<Array<Maybe<Scalars['Int']>>>;
  locationCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  maneuverType?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  roadType?: Maybe<Scalars['String']>;
  startPathIndices?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type EndWaypoint = {
  __typename?: 'EndWaypoint';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  description?: Maybe<Scalars['String']>;
  isVia?: Maybe<Scalars['Boolean']>;
  locationIdentifier?: Maybe<Scalars['String']>;
  routePathIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ErrorMessageEntity = {
  __typename?: 'ErrorMessageEntity';
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  message?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type ErrorMessageEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  message?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type EventCategoryEntity = {
  __typename?: 'EventCategoryEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type EventCategoryEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  address?: Maybe<AddressEntity>;
  category?: Maybe<EventCategoryEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<MediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  nextSchedule?: Maybe<ScheduleEntity>;
  organizer?: Maybe<OrganizerEntity>;
  schedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  titleImage?: Maybe<MediaEntity>;
};

export type EventEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  category?: InputMaybe<EventCategoryEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  organizer?: InputMaybe<OrganizerEntityInput>;
  schedules?: InputMaybe<Array<InputMaybe<ScheduleEntityInput>>>;
  titleImage?: InputMaybe<MediaEntityInput>;
};

export type FeedbackEntity = {
  __typename?: 'FeedbackEntity';
  course?: Maybe<CourseEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  rating?: Maybe<Scalars['Int']>;
  user?: Maybe<UserEntity>;
};

export type FeedbackEntityInput = {
  course?: InputMaybe<CourseEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  rating?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UserEntityInput>;
};

export type FilterSortPaginateInput = {
  dir?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<QueryExpressionInput>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type GroupEntity = {
  __typename?: 'GroupEntity';
  chat?: Maybe<ChatEntity>;
  courses?: Maybe<Array<Maybe<CourseEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type GroupEntityInput = {
  chat?: InputMaybe<ChatEntityInput>;
  courses?: InputMaybe<Array<InputMaybe<CourseEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type Hint = {
  __typename?: 'Hint';
  hintType?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Instruction = {
  __typename?: 'Instruction';
  formattedText?: Maybe<Scalars['ObjectScalar']>;
  maneuverType?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ItineraryItem = {
  __typename?: 'ItineraryItem';
  compassDirection?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<Detail>>>;
  exit?: Maybe<Scalars['String']>;
  hints?: Maybe<Array<Maybe<Hint>>>;
  iconType?: Maybe<Scalars['String']>;
  instruction?: Maybe<Instruction>;
  isRealTimeTransit?: Maybe<Scalars['Boolean']>;
  maneuverPoint?: Maybe<ManeuverPoint>;
  realTimeTransitDelay?: Maybe<Scalars['Int']>;
  sideOfStreet?: Maybe<Scalars['String']>;
  tollZone?: Maybe<Scalars['String']>;
  towardsRoadName?: Maybe<Scalars['String']>;
  transitTerminus?: Maybe<Scalars['String']>;
  travelDistance?: Maybe<Scalars['Int']>;
  travelDuration?: Maybe<Scalars['Int']>;
  travelMode?: Maybe<Scalars['String']>;
};

export type JobAdEntity = {
  __typename?: 'JobAdEntity';
  company?: Maybe<CompanyEntity>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  dueDate?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  startDate?: Maybe<Scalars['OffsetDateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeEntity>;
};

export type JobAdEntityInput = {
  company?: InputMaybe<CompanyEntityInput>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  dueDate?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<JobTypeEntityInput>;
};

export type JobTypeEntity = {
  __typename?: 'JobTypeEntity';
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  jobAds?: Maybe<Array<Maybe<JobAdEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type JobTypeEntityInput = {
  color?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  jobAds?: InputMaybe<Array<InputMaybe<JobAdEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LanguageEntity = {
  __typename?: 'LanguageEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type LanguageEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Line = {
  __typename?: 'Line';
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
  type?: Maybe<Scalars['String']>;
};

export type LinkCategoryEntity = {
  __typename?: 'LinkCategoryEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Array<Maybe<LinkEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type LinkCategoryEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Array<InputMaybe<LinkEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LinkEntity = {
  __typename?: 'LinkEntity';
  category?: Maybe<LinkCategoryEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LinkEntityInput = {
  category?: InputMaybe<LinkCategoryEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LocationParamInput = {
  startPoint?: InputMaybe<CoordinateInput>;
  targetPoint?: InputMaybe<CoordinateInput>;
  travelMode?: InputMaybe<TravelMode>;
  via?: InputMaybe<Array<InputMaybe<CoordinateInput>>>;
};

export type ManeuverPoint = {
  __typename?: 'ManeuverPoint';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  type?: Maybe<Scalars['String']>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  base64?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type MediaEntityInput = {
  base64?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MessageDto = {
  __typename?: 'MessageDto';
  content?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['Map_String_StringScalar']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<NotificationType>;
};

export type MessageDtoInput = {
  content?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['Map_String_StringScalar']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NotificationType>;
};

export type MessageEntity = {
  __typename?: 'MessageEntity';
  chat?: Maybe<ChatEntity>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<MessageEntity>;
  readReceipts?: Maybe<Array<Maybe<ReadReceiptEntity>>>;
  user?: Maybe<UserEntity>;
};

export type MessageEntityInput = {
  chat?: InputMaybe<ChatEntityInput>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<MessageEntityInput>;
  readReceipts?: InputMaybe<Array<InputMaybe<ReadReceiptEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  addEventFavorite?: Maybe<UserEntity>;
  addJobAdFavorite?: Maybe<UserEntity>;
  addMember: Scalars['Boolean'];
  addUploads?: Maybe<UserEntity>;
  createToken?: Maybe<TokenDto>;
  deleteAddress?: Maybe<Scalars['Boolean']>;
  deleteAddresses?: Maybe<Scalars['Boolean']>;
  deleteAnswer?: Maybe<Scalars['Boolean']>;
  deleteAnswers?: Maybe<Scalars['Boolean']>;
  deleteAssignment?: Maybe<Scalars['Boolean']>;
  deleteAssignmentState?: Maybe<Scalars['Boolean']>;
  deleteAssignmentStates?: Maybe<Scalars['Boolean']>;
  deleteAssignments?: Maybe<Scalars['Boolean']>;
  deleteChat?: Maybe<Scalars['Boolean']>;
  deleteChats?: Maybe<Scalars['Boolean']>;
  deleteCompanies?: Maybe<Scalars['Boolean']>;
  deleteCompany?: Maybe<Scalars['Boolean']>;
  deleteCourse?: Maybe<Scalars['Boolean']>;
  deleteCourses?: Maybe<Scalars['Boolean']>;
  deleteErrorMessage?: Maybe<Scalars['Boolean']>;
  deleteErrorMessages?: Maybe<Scalars['Boolean']>;
  deleteEvent?: Maybe<Scalars['Boolean']>;
  deleteEventCategories?: Maybe<Scalars['Boolean']>;
  deleteEventCategory?: Maybe<Scalars['Boolean']>;
  deleteEventFavorite?: Maybe<UserEntity>;
  deleteEvents?: Maybe<Scalars['Boolean']>;
  deleteFeedback?: Maybe<Scalars['Boolean']>;
  deleteFeedbacks?: Maybe<Scalars['Boolean']>;
  deleteGroup?: Maybe<Scalars['Boolean']>;
  deleteGroups?: Maybe<Scalars['Boolean']>;
  deleteJobAd?: Maybe<Scalars['Boolean']>;
  deleteJobAdFavorite?: Maybe<UserEntity>;
  deleteJobAds?: Maybe<Scalars['Boolean']>;
  deleteJobType?: Maybe<Scalars['Boolean']>;
  deleteJobTypes?: Maybe<Scalars['Boolean']>;
  deleteLink?: Maybe<Scalars['Boolean']>;
  deleteLinkCategory?: Maybe<Scalars['Boolean']>;
  deleteLinks?: Maybe<Scalars['Boolean']>;
  deleteMe?: Maybe<Scalars['Boolean']>;
  deleteMember: Scalars['Boolean'];
  deleteMessage?: Maybe<Scalars['Boolean']>;
  deleteMessages?: Maybe<Scalars['Boolean']>;
  deleteNotification?: Maybe<Scalars['Boolean']>;
  deleteOrganizer?: Maybe<Scalars['Boolean']>;
  deleteOrganizers?: Maybe<Scalars['Boolean']>;
  deletePage?: Maybe<Scalars['Boolean']>;
  deletePages?: Maybe<Scalars['Boolean']>;
  deleteParticipant?: Maybe<Scalars['Boolean']>;
  deleteParticipants?: Maybe<Scalars['Boolean']>;
  deleteQuestion?: Maybe<Scalars['Boolean']>;
  deleteQuestionnaire?: Maybe<Scalars['Boolean']>;
  deleteQuestionnaires?: Maybe<Scalars['Boolean']>;
  deleteQuestions?: Maybe<Scalars['Boolean']>;
  deleteReadReceipt?: Maybe<Scalars['Boolean']>;
  deleteReadReceipts?: Maybe<Scalars['Boolean']>;
  deleteRole?: Maybe<Scalars['Boolean']>;
  deleteRoles?: Maybe<Scalars['Boolean']>;
  deleteSchedule?: Maybe<Scalars['Boolean']>;
  deleteSchedules?: Maybe<Scalars['Boolean']>;
  deleteSubscription?: Maybe<Scalars['Boolean']>;
  deleteSubscriptionType?: Maybe<Scalars['Boolean']>;
  deleteSubscriptionTypes?: Maybe<Scalars['Boolean']>;
  deleteSubscriptions?: Maybe<Scalars['Boolean']>;
  deleteTemplate?: Maybe<Scalars['Boolean']>;
  deleteTemplateType?: Maybe<Scalars['Boolean']>;
  deleteTemplateTypes?: Maybe<Scalars['Boolean']>;
  deleteTemplates?: Maybe<Scalars['Boolean']>;
  deleteUploads?: Maybe<UserEntity>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  deleteUserTemplate?: Maybe<Scalars['Boolean']>;
  deleteUserTemplates?: Maybe<Scalars['Boolean']>;
  deleteUsers?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<TokenDto>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  saveAddress?: Maybe<AddressEntity>;
  saveAddresses?: Maybe<Array<Maybe<AddressEntity>>>;
  saveAnswer?: Maybe<AnswerEntity>;
  saveAnswers?: Maybe<Array<Maybe<AnswerEntity>>>;
  saveAssignment?: Maybe<AssignmentEntity>;
  saveAssignmentState?: Maybe<AssignmentStateEntity>;
  saveAssignmentStates?: Maybe<Array<Maybe<AssignmentStateEntity>>>;
  saveAssignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  saveChat?: Maybe<ChatEntity>;
  saveChats?: Maybe<Array<Maybe<ChatEntity>>>;
  saveCompanies?: Maybe<Array<Maybe<CompanyEntity>>>;
  saveCompany?: Maybe<CompanyEntity>;
  saveCourse?: Maybe<CourseEntity>;
  saveCourses?: Maybe<Array<Maybe<CourseEntity>>>;
  saveErrorMessage?: Maybe<ErrorMessageEntity>;
  saveErrorMessages?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  saveEvent?: Maybe<EventEntity>;
  saveEventCategories?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  saveEventCategory?: Maybe<EventCategoryEntity>;
  saveEvents?: Maybe<Array<Maybe<EventEntity>>>;
  saveFeedback?: Maybe<FeedbackEntity>;
  saveFeedbacks?: Maybe<Array<Maybe<FeedbackEntity>>>;
  saveGroup?: Maybe<GroupEntity>;
  saveGroups?: Maybe<Array<Maybe<GroupEntity>>>;
  saveJobAd?: Maybe<JobAdEntity>;
  saveJobAds?: Maybe<Array<Maybe<JobAdEntity>>>;
  saveJobType?: Maybe<JobTypeEntity>;
  saveJobTypes?: Maybe<Array<Maybe<JobTypeEntity>>>;
  saveLink?: Maybe<LinkEntity>;
  saveLinkCategories?: Maybe<Array<Maybe<LinkCategoryEntity>>>;
  saveLinkCategory?: Maybe<LinkCategoryEntity>;
  saveLinks?: Maybe<Array<Maybe<LinkEntity>>>;
  saveMe?: Maybe<UserEntity>;
  saveMessage?: Maybe<MessageEntity>;
  saveMessages?: Maybe<Array<Maybe<MessageEntity>>>;
  saveNotification?: Maybe<NotificationEntity>;
  saveNotifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  saveOrganizer?: Maybe<OrganizerEntity>;
  saveOrganizers?: Maybe<Array<Maybe<OrganizerEntity>>>;
  savePage?: Maybe<PageEntity>;
  savePages?: Maybe<Array<Maybe<PageEntity>>>;
  saveParticipant?: Maybe<ParticipantEntity>;
  saveParticipants?: Maybe<Array<Maybe<ParticipantEntity>>>;
  saveQuestion?: Maybe<QuestionEntity>;
  saveQuestionnaire?: Maybe<QuestionnaireEntity>;
  saveQuestionnaires?: Maybe<Array<Maybe<QuestionnaireEntity>>>;
  saveQuestions?: Maybe<Array<Maybe<QuestionEntity>>>;
  saveReadReceipt?: Maybe<ReadReceiptEntity>;
  saveReadReceipts?: Maybe<Array<Maybe<ReadReceiptEntity>>>;
  saveRole?: Maybe<RoleEntity>;
  saveRoles?: Maybe<Array<Maybe<RoleEntity>>>;
  saveSchedule?: Maybe<ScheduleEntity>;
  saveSchedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  saveSettings?: Maybe<SettingsEntity>;
  saveSubscription?: Maybe<SubscriptionEntity>;
  saveSubscriptionType?: Maybe<SubscriptionTypeEntity>;
  saveSubscriptionTypes?: Maybe<Array<Maybe<SubscriptionTypeEntity>>>;
  saveSubscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  saveTemplate?: Maybe<TemplateEntity>;
  saveTemplateType?: Maybe<TemplateTypeEntity>;
  saveTemplateTypes?: Maybe<Array<Maybe<TemplateTypeEntity>>>;
  saveTemplates?: Maybe<Array<Maybe<TemplateEntity>>>;
  saveUser?: Maybe<UserEntity>;
  saveUserTemplate?: Maybe<UserTemplateEntity>;
  saveUserTemplates?: Maybe<Array<Maybe<UserTemplateEntity>>>;
  saveUsers?: Maybe<Array<Maybe<UserEntity>>>;
  sendError?: Maybe<Scalars['Boolean']>;
  sendGlobalPush?: Maybe<Scalars['Boolean']>;
  sendPasswordReset?: Maybe<Scalars['Boolean']>;
  sendVerification?: Maybe<Scalars['Boolean']>;
  verify?: Maybe<UserEntity>;
};


/** Mutation root */
export type MutationAddEventFavoriteArgs = {
  eventId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddJobAdFavoriteArgs = {
  jobAdId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddMemberArgs = {
  groupId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddUploadsArgs = {
  uploads?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
};


/** Mutation root */
export type MutationCreateTokenArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAddressArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAddressesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAnswerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAnswersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAssignmentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAssignmentStateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAssignmentStatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAssignmentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteChatArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteChatsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteCompaniesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteCompanyArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteCourseArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteCoursesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteErrorMessageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteErrorMessagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventFavoriteArgs = {
  eventId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteFeedbackArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteFeedbacksArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteGroupArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteGroupsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteJobAdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteJobAdFavoriteArgs = {
  jobAdId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteJobAdsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteJobTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteJobTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteLinkArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteLinkCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteLinksArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMeArgs = {
  password?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMemberArgs = {
  groupId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMessageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMessagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteNotificationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganizerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganizersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeletePageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeletePagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteParticipantArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteParticipantsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteQuestionnaireArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteQuestionnairesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteReadReceiptArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteReadReceiptsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteRoleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteRolesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteScheduleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSchedulesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSubscriptionTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSubscriptionTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSubscriptionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteTemplateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteTemplateTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteTemplateTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUploadsArgs = {
  uploadIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteUserTemplateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteUserTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationResetPasswordArgs = {
  key?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSaveAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};


/** Mutation root */
export type MutationSaveAddressesArgs = {
  entities?: InputMaybe<Array<InputMaybe<AddressEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAnswerArgs = {
  entity?: InputMaybe<AnswerEntityInput>;
};


/** Mutation root */
export type MutationSaveAnswersArgs = {
  entities?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAssignmentArgs = {
  entity?: InputMaybe<AssignmentEntityInput>;
};


/** Mutation root */
export type MutationSaveAssignmentStateArgs = {
  entity?: InputMaybe<AssignmentStateEntityInput>;
};


/** Mutation root */
export type MutationSaveAssignmentStatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<AssignmentStateEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAssignmentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveChatArgs = {
  entity?: InputMaybe<ChatEntityInput>;
};


/** Mutation root */
export type MutationSaveChatsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ChatEntityInput>>>;
};


/** Mutation root */
export type MutationSaveCompaniesArgs = {
  entities?: InputMaybe<Array<InputMaybe<CompanyEntityInput>>>;
};


/** Mutation root */
export type MutationSaveCompanyArgs = {
  entity?: InputMaybe<CompanyEntityInput>;
};


/** Mutation root */
export type MutationSaveCourseArgs = {
  entity?: InputMaybe<CourseEntityInput>;
};


/** Mutation root */
export type MutationSaveCoursesArgs = {
  entities?: InputMaybe<Array<InputMaybe<CourseEntityInput>>>;
};


/** Mutation root */
export type MutationSaveErrorMessageArgs = {
  entity?: InputMaybe<ErrorMessageEntityInput>;
};


/** Mutation root */
export type MutationSaveErrorMessagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ErrorMessageEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};


/** Mutation root */
export type MutationSaveEventCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveEventsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
};


/** Mutation root */
export type MutationSaveFeedbackArgs = {
  entity?: InputMaybe<FeedbackEntityInput>;
};


/** Mutation root */
export type MutationSaveFeedbacksArgs = {
  entities?: InputMaybe<Array<InputMaybe<FeedbackEntityInput>>>;
};


/** Mutation root */
export type MutationSaveGroupArgs = {
  entity?: InputMaybe<GroupEntityInput>;
};


/** Mutation root */
export type MutationSaveGroupsArgs = {
  entities?: InputMaybe<Array<InputMaybe<GroupEntityInput>>>;
};


/** Mutation root */
export type MutationSaveJobAdArgs = {
  entity?: InputMaybe<JobAdEntityInput>;
};


/** Mutation root */
export type MutationSaveJobAdsArgs = {
  entities?: InputMaybe<Array<InputMaybe<JobAdEntityInput>>>;
};


/** Mutation root */
export type MutationSaveJobTypeArgs = {
  entity?: InputMaybe<JobTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveJobTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<JobTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveLinkArgs = {
  entity?: InputMaybe<LinkEntityInput>;
};


/** Mutation root */
export type MutationSaveLinkCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<LinkCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveLinkCategoryArgs = {
  entity?: InputMaybe<LinkCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveLinksArgs = {
  entities?: InputMaybe<Array<InputMaybe<LinkEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMeArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Mutation root */
export type MutationSaveMessageArgs = {
  entity?: InputMaybe<MessageEntityInput>;
};


/** Mutation root */
export type MutationSaveMessagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<MessageEntityInput>>>;
};


/** Mutation root */
export type MutationSaveNotificationArgs = {
  entity?: InputMaybe<NotificationEntityInput>;
};


/** Mutation root */
export type MutationSaveNotificationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<NotificationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganizerArgs = {
  entity?: InputMaybe<OrganizerEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganizersArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganizerEntityInput>>>;
};


/** Mutation root */
export type MutationSavePageArgs = {
  entity?: InputMaybe<PageEntityInput>;
};


/** Mutation root */
export type MutationSavePagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<PageEntityInput>>>;
};


/** Mutation root */
export type MutationSaveParticipantArgs = {
  entity?: InputMaybe<ParticipantEntityInput>;
};


/** Mutation root */
export type MutationSaveParticipantsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ParticipantEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionArgs = {
  entity?: InputMaybe<QuestionEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionnaireArgs = {
  entity?: InputMaybe<QuestionnaireEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionnairesArgs = {
  entities?: InputMaybe<Array<InputMaybe<QuestionnaireEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<QuestionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveReadReceiptArgs = {
  entity?: InputMaybe<ReadReceiptEntityInput>;
};


/** Mutation root */
export type MutationSaveReadReceiptsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ReadReceiptEntityInput>>>;
};


/** Mutation root */
export type MutationSaveRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Mutation root */
export type MutationSaveRolesArgs = {
  entities?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveScheduleArgs = {
  entity?: InputMaybe<ScheduleEntityInput>;
};


/** Mutation root */
export type MutationSaveSchedulesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ScheduleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSettingsArgs = {
  entity?: InputMaybe<SettingsEntityInput>;
};


/** Mutation root */
export type MutationSaveSubscriptionArgs = {
  entity?: InputMaybe<SubscriptionEntityInput>;
};


/** Mutation root */
export type MutationSaveSubscriptionTypeArgs = {
  entity?: InputMaybe<SubscriptionTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveSubscriptionTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<SubscriptionTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSubscriptionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SubscriptionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveTemplateArgs = {
  entity?: InputMaybe<TemplateEntityInput>;
};


/** Mutation root */
export type MutationSaveTemplateTypeArgs = {
  entity?: InputMaybe<TemplateTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveTemplateTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<TemplateTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveTemplatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<TemplateEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Mutation root */
export type MutationSaveUserTemplateArgs = {
  entity?: InputMaybe<UserTemplateEntityInput>;
};


/** Mutation root */
export type MutationSaveUserTemplatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserTemplateEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUsersArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};


/** Mutation root */
export type MutationSendErrorArgs = {
  stackTrace?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSendGlobalPushArgs = {
  message?: InputMaybe<MessageDtoInput>;
};


/** Mutation root */
export type MutationSendPasswordResetArgs = {
  mailAddress?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSendVerificationArgs = {
  mailAddress?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationVerifyArgs = {
  key?: InputMaybe<Scalars['String']>;
};

export type NotificationEntity = {
  __typename?: 'NotificationEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  read?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<UserEntity>;
};

export type NotificationEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  read?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserEntityInput>;
};

export enum NotificationType {
  Chat = 'chat',
  DeletedUser = 'deletedUser',
  Evaluation = 'evaluation',
  Event = 'event',
  Global = 'global',
  JobAd = 'jobAd',
  ReadReceipt = 'readReceipt'
}

export type OrganizerEntity = {
  __typename?: 'OrganizerEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type OrganizerEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  mail?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<MediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titleImage?: Maybe<MediaEntity>;
  video?: Maybe<MediaEntity>;
};

export type PageEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titleImage?: InputMaybe<MediaEntityInput>;
  video?: InputMaybe<MediaEntityInput>;
};

export type PageableList_AddressEntity = {
  __typename?: 'PageableList_AddressEntity';
  result?: Maybe<Array<Maybe<AddressEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AnswerEntity = {
  __typename?: 'PageableList_AnswerEntity';
  result?: Maybe<Array<Maybe<AnswerEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AssignmentEntity = {
  __typename?: 'PageableList_AssignmentEntity';
  result?: Maybe<Array<Maybe<AssignmentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AssignmentStateEntity = {
  __typename?: 'PageableList_AssignmentStateEntity';
  result?: Maybe<Array<Maybe<AssignmentStateEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ChatEntity = {
  __typename?: 'PageableList_ChatEntity';
  result?: Maybe<Array<Maybe<ChatEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_CompanyEntity = {
  __typename?: 'PageableList_CompanyEntity';
  result?: Maybe<Array<Maybe<CompanyEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_CourseEntity = {
  __typename?: 'PageableList_CourseEntity';
  result?: Maybe<Array<Maybe<CourseEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ErrorMessageEntity = {
  __typename?: 'PageableList_ErrorMessageEntity';
  result?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventCategoryEntity = {
  __typename?: 'PageableList_EventCategoryEntity';
  result?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventEntity = {
  __typename?: 'PageableList_EventEntity';
  result?: Maybe<Array<Maybe<EventEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_FeedbackEntity = {
  __typename?: 'PageableList_FeedbackEntity';
  result?: Maybe<Array<Maybe<FeedbackEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_GroupEntity = {
  __typename?: 'PageableList_GroupEntity';
  result?: Maybe<Array<Maybe<GroupEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_JobAdEntity = {
  __typename?: 'PageableList_JobAdEntity';
  result?: Maybe<Array<Maybe<JobAdEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_JobTypeEntity = {
  __typename?: 'PageableList_JobTypeEntity';
  result?: Maybe<Array<Maybe<JobTypeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_LinkCategoryEntity = {
  __typename?: 'PageableList_LinkCategoryEntity';
  result?: Maybe<Array<Maybe<LinkCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_LinkEntity = {
  __typename?: 'PageableList_LinkEntity';
  result?: Maybe<Array<Maybe<LinkEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MessageEntity = {
  __typename?: 'PageableList_MessageEntity';
  result?: Maybe<Array<Maybe<MessageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_NotificationEntity = {
  __typename?: 'PageableList_NotificationEntity';
  result?: Maybe<Array<Maybe<NotificationEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_OrganizerEntity = {
  __typename?: 'PageableList_OrganizerEntity';
  result?: Maybe<Array<Maybe<OrganizerEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_PageEntity = {
  __typename?: 'PageableList_PageEntity';
  result?: Maybe<Array<Maybe<PageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ParticipantEntity = {
  __typename?: 'PageableList_ParticipantEntity';
  result?: Maybe<Array<Maybe<ParticipantEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_QuestionEntity = {
  __typename?: 'PageableList_QuestionEntity';
  result?: Maybe<Array<Maybe<QuestionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_QuestionnaireEntity = {
  __typename?: 'PageableList_QuestionnaireEntity';
  result?: Maybe<Array<Maybe<QuestionnaireEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ReadReceiptEntity = {
  __typename?: 'PageableList_ReadReceiptEntity';
  result?: Maybe<Array<Maybe<ReadReceiptEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_RoleEntity = {
  __typename?: 'PageableList_RoleEntity';
  result?: Maybe<Array<Maybe<RoleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ScheduleEntity = {
  __typename?: 'PageableList_ScheduleEntity';
  result?: Maybe<Array<Maybe<ScheduleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SubscriptionEntity = {
  __typename?: 'PageableList_SubscriptionEntity';
  result?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SubscriptionTypeEntity = {
  __typename?: 'PageableList_SubscriptionTypeEntity';
  result?: Maybe<Array<Maybe<SubscriptionTypeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_TemplateEntity = {
  __typename?: 'PageableList_TemplateEntity';
  result?: Maybe<Array<Maybe<TemplateEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_TemplateTypeEntity = {
  __typename?: 'PageableList_TemplateTypeEntity';
  result?: Maybe<Array<Maybe<TemplateTypeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_UserEntity = {
  __typename?: 'PageableList_UserEntity';
  result?: Maybe<Array<Maybe<UserEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_UserTemplateEntity = {
  __typename?: 'PageableList_UserTemplateEntity';
  result?: Maybe<Array<Maybe<UserTemplateEntity>>>;
  total: Scalars['Long'];
};

export type ParticipantEntity = {
  __typename?: 'ParticipantEntity';
  chat?: Maybe<ChatEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  readReceipts?: Maybe<Array<Maybe<ReadReceiptEntity>>>;
  user?: Maybe<UserEntity>;
};

export type ParticipantEntityInput = {
  chat?: InputMaybe<ChatEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  readReceipts?: InputMaybe<Array<InputMaybe<ReadReceiptEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
};

export type PasswordResetEntity = {
  __typename?: 'PasswordResetEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  user?: Maybe<UserEntity>;
};

export type PasswordResetEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  user?: InputMaybe<UserEntityInput>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  calculateRoute?: Maybe<RouteResource>;
  getAddress?: Maybe<AddressEntity>;
  getAddresses?: Maybe<PageableList_AddressEntity>;
  getAnswer?: Maybe<AnswerEntity>;
  getAnswers?: Maybe<PageableList_AnswerEntity>;
  getAssignment?: Maybe<AssignmentEntity>;
  getAssignmentState?: Maybe<AssignmentStateEntity>;
  getAssignmentStates?: Maybe<PageableList_AssignmentStateEntity>;
  getAssignments?: Maybe<PageableList_AssignmentEntity>;
  getChat?: Maybe<ChatEntity>;
  getChats?: Maybe<PageableList_ChatEntity>;
  getCompanies?: Maybe<PageableList_CompanyEntity>;
  getCompany?: Maybe<CompanyEntity>;
  getCourse?: Maybe<CourseEntity>;
  getCourses?: Maybe<PageableList_CourseEntity>;
  getErrorMessage?: Maybe<ErrorMessageEntity>;
  getErrorMessages?: Maybe<PageableList_ErrorMessageEntity>;
  getEvent?: Maybe<EventEntity>;
  getEventCategories?: Maybe<PageableList_EventCategoryEntity>;
  getEventCategory?: Maybe<EventCategoryEntity>;
  getEvents?: Maybe<PageableList_EventEntity>;
  getFeedback?: Maybe<FeedbackEntity>;
  getFeedbacks?: Maybe<PageableList_FeedbackEntity>;
  getGroup?: Maybe<GroupEntity>;
  getGroups?: Maybe<PageableList_GroupEntity>;
  getJobAd?: Maybe<JobAdEntity>;
  getJobAds?: Maybe<PageableList_JobAdEntity>;
  getJobType?: Maybe<JobTypeEntity>;
  getJobTypes?: Maybe<PageableList_JobTypeEntity>;
  getLink?: Maybe<LinkEntity>;
  getLinkCategories?: Maybe<PageableList_LinkCategoryEntity>;
  getLinkCategory?: Maybe<LinkCategoryEntity>;
  getLinks?: Maybe<PageableList_LinkEntity>;
  getMessage?: Maybe<MessageEntity>;
  getMessages?: Maybe<PageableList_MessageEntity>;
  getNotification?: Maybe<NotificationEntity>;
  getNotifications?: Maybe<PageableList_NotificationEntity>;
  getOrganizer?: Maybe<OrganizerEntity>;
  getOrganizers?: Maybe<PageableList_OrganizerEntity>;
  getPage?: Maybe<PageEntity>;
  getPages?: Maybe<PageableList_PageEntity>;
  getParticipant?: Maybe<ParticipantEntity>;
  getParticipants?: Maybe<PageableList_ParticipantEntity>;
  getQuestion?: Maybe<QuestionEntity>;
  getQuestionnaire?: Maybe<QuestionnaireEntity>;
  getQuestionnaires?: Maybe<PageableList_QuestionnaireEntity>;
  getQuestions?: Maybe<PageableList_QuestionEntity>;
  getReadReceipt?: Maybe<ReadReceiptEntity>;
  getReadReceipts?: Maybe<PageableList_ReadReceiptEntity>;
  getRole?: Maybe<RoleEntity>;
  getRoles?: Maybe<PageableList_RoleEntity>;
  getSchedule?: Maybe<ScheduleEntity>;
  getSchedules?: Maybe<PageableList_ScheduleEntity>;
  getSettings?: Maybe<SettingsEntity>;
  getSubscription?: Maybe<SubscriptionEntity>;
  getSubscriptionType?: Maybe<SubscriptionTypeEntity>;
  getSubscriptionTypes?: Maybe<PageableList_SubscriptionTypeEntity>;
  getSubscriptions?: Maybe<PageableList_SubscriptionEntity>;
  getTemplate?: Maybe<TemplateEntity>;
  getTemplateType?: Maybe<TemplateTypeEntity>;
  getTemplateTypes?: Maybe<PageableList_TemplateTypeEntity>;
  getTemplates?: Maybe<PageableList_TemplateEntity>;
  getUser?: Maybe<UserEntity>;
  getUserTemplate?: Maybe<UserTemplateEntity>;
  getUserTemplates?: Maybe<PageableList_UserTemplateEntity>;
  getUsers?: Maybe<PageableList_UserEntity>;
  lookupAddress?: Maybe<AddressEntity>;
  me?: Maybe<UserEntity>;
  search?: Maybe<Array<Maybe<SearchDto>>>;
};


/** Query root */
export type QueryCalculateRouteArgs = {
  params?: InputMaybe<LocationParamInput>;
};


/** Query root */
export type QueryGetAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};


/** Query root */
export type QueryGetAddressesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAnswerArgs = {
  entity?: InputMaybe<AnswerEntityInput>;
};


/** Query root */
export type QueryGetAnswersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAssignmentArgs = {
  entity?: InputMaybe<AssignmentEntityInput>;
};


/** Query root */
export type QueryGetAssignmentStateArgs = {
  entity?: InputMaybe<AssignmentStateEntityInput>;
};


/** Query root */
export type QueryGetAssignmentStatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAssignmentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetChatArgs = {
  entity?: InputMaybe<ChatEntityInput>;
};


/** Query root */
export type QueryGetChatsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetCompaniesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetCompanyArgs = {
  entity?: InputMaybe<CompanyEntityInput>;
};


/** Query root */
export type QueryGetCourseArgs = {
  entity?: InputMaybe<CourseEntityInput>;
};


/** Query root */
export type QueryGetCoursesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetErrorMessageArgs = {
  entity?: InputMaybe<ErrorMessageEntityInput>;
};


/** Query root */
export type QueryGetErrorMessagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};


/** Query root */
export type QueryGetEventCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};


/** Query root */
export type QueryGetEventsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetFeedbackArgs = {
  entity?: InputMaybe<FeedbackEntityInput>;
};


/** Query root */
export type QueryGetFeedbacksArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetGroupArgs = {
  entity?: InputMaybe<GroupEntityInput>;
};


/** Query root */
export type QueryGetGroupsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetJobAdArgs = {
  entity?: InputMaybe<JobAdEntityInput>;
};


/** Query root */
export type QueryGetJobAdsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetJobTypeArgs = {
  entity?: InputMaybe<JobTypeEntityInput>;
};


/** Query root */
export type QueryGetJobTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetLinkArgs = {
  entity?: InputMaybe<LinkEntityInput>;
};


/** Query root */
export type QueryGetLinkCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetLinkCategoryArgs = {
  entity?: InputMaybe<LinkCategoryEntityInput>;
};


/** Query root */
export type QueryGetLinksArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMessageArgs = {
  entity?: InputMaybe<MessageEntityInput>;
};


/** Query root */
export type QueryGetMessagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetNotificationArgs = {
  entity?: InputMaybe<NotificationEntityInput>;
};


/** Query root */
export type QueryGetNotificationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganizerArgs = {
  entity?: InputMaybe<OrganizerEntityInput>;
};


/** Query root */
export type QueryGetOrganizersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPageArgs = {
  entity?: InputMaybe<PageEntityInput>;
};


/** Query root */
export type QueryGetPagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetParticipantArgs = {
  entity?: InputMaybe<ParticipantEntityInput>;
};


/** Query root */
export type QueryGetParticipantsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionArgs = {
  entity?: InputMaybe<QuestionEntityInput>;
};


/** Query root */
export type QueryGetQuestionnaireArgs = {
  entity?: InputMaybe<QuestionnaireEntityInput>;
};


/** Query root */
export type QueryGetQuestionnairesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetReadReceiptArgs = {
  entity?: InputMaybe<ReadReceiptEntityInput>;
};


/** Query root */
export type QueryGetReadReceiptsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Query root */
export type QueryGetRolesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetScheduleArgs = {
  entity?: InputMaybe<ScheduleEntityInput>;
};


/** Query root */
export type QueryGetSchedulesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSubscriptionArgs = {
  entity?: InputMaybe<SubscriptionEntityInput>;
};


/** Query root */
export type QueryGetSubscriptionTypeArgs = {
  entity?: InputMaybe<SubscriptionTypeEntityInput>;
};


/** Query root */
export type QueryGetSubscriptionTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSubscriptionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetTemplateArgs = {
  entity?: InputMaybe<TemplateEntityInput>;
};


/** Query root */
export type QueryGetTemplateTypeArgs = {
  entity?: InputMaybe<TemplateTypeEntityInput>;
};


/** Query root */
export type QueryGetTemplateTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetTemplatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Query root */
export type QueryGetUserTemplateArgs = {
  entity?: InputMaybe<UserTemplateEntityInput>;
};


/** Query root */
export type QueryGetUserTemplatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUsersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryLookupAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};


/** Query root */
export type QuerySearchArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryConjunctionInput = {
  operands?: InputMaybe<Array<InputMaybe<QueryExpressionInput>>>;
  operator?: InputMaybe<ConjunctionOperator>;
};

export type QueryEntityInput = {
  operator?: InputMaybe<QueryOperator>;
  path?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type QueryExpressionInput = {
  conjunction?: InputMaybe<QueryConjunctionInput>;
  entity?: InputMaybe<QueryEntityInput>;
};

export enum QueryOperator {
  Equal = 'EQUAL',
  GreaterOrEqual = 'GREATER_OR_EQUAL',
  GreaterThan = 'GREATER_THAN',
  LessOrEqual = 'LESS_OR_EQUAL',
  LessThan = 'LESS_THAN',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL'
}

export type QuestionEntity = {
  __typename?: 'QuestionEntity';
  answers?: Maybe<Array<Maybe<AnswerEntity>>>;
  averageRating?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  questionnaire?: Maybe<QuestionnaireEntity>;
  sequenceOrder?: Maybe<Scalars['Int']>;
};


export type QuestionEntityAverageRatingArgs = {
  year?: InputMaybe<Scalars['Int']>;
};

export type QuestionEntityInput = {
  answers?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  item?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  questionnaire?: InputMaybe<QuestionnaireEntityInput>;
  sequenceOrder?: InputMaybe<Scalars['Int']>;
};

export type QuestionnaireEntity = {
  __typename?: 'QuestionnaireEntity';
  assignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Maybe<QuestionEntity>>>;
};

export type QuestionnaireEntityInput = {
  assignments?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionEntityInput>>>;
};

export type ReadReceiptEntity = {
  __typename?: 'ReadReceiptEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<MessageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  participant?: Maybe<ParticipantEntity>;
};

export type ReadReceiptEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<MessageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  participant?: InputMaybe<ParticipantEntityInput>;
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type RoleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type RouteLeg = {
  __typename?: 'RouteLeg';
  actualEnd?: Maybe<ActualEnd>;
  actualStart?: Maybe<ActualStart>;
  alternateVias?: Maybe<Array<Maybe<Scalars['ObjectScalar']>>>;
  cost?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  itineraryItems?: Maybe<Array<Maybe<ItineraryItem>>>;
  routeRegion?: Maybe<Scalars['String']>;
  routeSubLegs?: Maybe<Array<Maybe<RouteSubLeg>>>;
  travelDistance?: Maybe<Scalars['Float']>;
  travelDuration?: Maybe<Scalars['Int']>;
};

export type RoutePath = {
  __typename?: 'RoutePath';
  generalizations?: Maybe<Array<Maybe<Scalars['ObjectScalar']>>>;
  line?: Maybe<Line>;
};

export type RouteResource = {
  __typename?: 'RouteResource';
  bbox?: Maybe<Array<Maybe<Scalars['Float']>>>;
  distanceUnit?: Maybe<Scalars['String']>;
  durationUnit?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  routeLegs?: Maybe<Array<Maybe<RouteLeg>>>;
  routePath?: Maybe<RoutePath>;
  trafficCongestion?: Maybe<Scalars['String']>;
  trafficDataUsed?: Maybe<Scalars['String']>;
  travelDistance?: Maybe<Scalars['Float']>;
  travelDuration?: Maybe<Scalars['Int']>;
  travelDurationTraffic?: Maybe<Scalars['Int']>;
  travelMode?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type RouteSubLeg = {
  __typename?: 'RouteSubLeg';
  endWaypoint?: Maybe<EndWaypoint>;
  startWaypoint?: Maybe<StartWaypoint>;
  travelDistance?: Maybe<Scalars['Float']>;
  travelDuration?: Maybe<Scalars['Int']>;
};

export type ScheduleEntity = {
  __typename?: 'ScheduleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  endDate?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  startDate?: Maybe<Scalars['OffsetDateTime']>;
};

export type ScheduleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  endDate?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type SearchDto = {
  __typename?: 'SearchDto';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<SearchResultType>;
};

export enum SearchResultType {
  Event = 'event',
  JobAd = 'jobAd',
  Template = 'template'
}

export type SettingsEntity = {
  __typename?: 'SettingsEntity';
  chatActive?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type SettingsEntityInput = {
  chatActive?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type StartWaypoint = {
  __typename?: 'StartWaypoint';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  description?: Maybe<Scalars['String']>;
  isVia?: Maybe<Scalars['Boolean']>;
  locationIdentifier?: Maybe<Scalars['String']>;
  routePathIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** Subscription root */
export type Subscription = {
  __typename?: 'Subscription';
  addChatListener?: Maybe<MessageDto>;
  addListener?: Maybe<MessageDto>;
};


/** Subscription root */
export type SubscriptionAddChatListenerArgs = {
  token?: InputMaybe<Scalars['String']>;
};


/** Subscription root */
export type SubscriptionAddListenerArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type SubscriptionEntity = {
  __typename?: 'SubscriptionEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  deviceToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  user?: Maybe<UserEntity>;
};

export type SubscriptionEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  user?: InputMaybe<UserEntityInput>;
};

export type SubscriptionTypeEntity = {
  __typename?: 'SubscriptionTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type SubscriptionTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TemplateEntity = {
  __typename?: 'TemplateEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  templateType?: Maybe<TemplateTypeEntity>;
};

export type TemplateEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  templateType?: InputMaybe<TemplateTypeEntityInput>;
};

export type TemplateTypeEntity = {
  __typename?: 'TemplateTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<TemplateEntity>>>;
  userTemplates?: Maybe<Array<Maybe<UserTemplateEntity>>>;
};

export type TemplateTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  templates?: InputMaybe<Array<InputMaybe<TemplateEntityInput>>>;
  userTemplates?: InputMaybe<Array<InputMaybe<UserTemplateEntityInput>>>;
};

export type TokenDto = {
  __typename?: 'TokenDto';
  access?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['String']>;
};

export enum TravelMode {
  Driving = 'DRIVING',
  Transit = 'TRANSIT',
  Walking = 'WALKING'
}

export type UserEntity = {
  __typename?: 'UserEntity';
  approved?: Maybe<Scalars['Boolean']>;
  assignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  favoriteEvents?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteJobAds?: Maybe<Array<Maybe<JobAdEntity>>>;
  feedbacks?: Maybe<Array<Maybe<FeedbackEntity>>>;
  fullname?: Maybe<Scalars['String']>;
  group?: Maybe<GroupEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  notifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  participants?: Maybe<Array<Maybe<ParticipantEntity>>>;
  password?: Maybe<Scalars['String']>;
  passwordReset?: Maybe<PasswordResetEntity>;
  phone?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<MediaEntity>;
  roles?: Maybe<Array<Maybe<RoleEntity>>>;
  subscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  uploads?: Maybe<Array<Maybe<MediaEntity>>>;
  userTemplates?: Maybe<Array<Maybe<UserTemplateEntity>>>;
  verification?: Maybe<VerificationEntity>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  assignments?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  favoriteEvents?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteJobAds?: InputMaybe<Array<InputMaybe<JobAdEntityInput>>>;
  feedbacks?: InputMaybe<Array<InputMaybe<FeedbackEntityInput>>>;
  fullname?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<GroupEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  notifications?: InputMaybe<Array<InputMaybe<NotificationEntityInput>>>;
  participants?: InputMaybe<Array<InputMaybe<ParticipantEntityInput>>>;
  password?: InputMaybe<Scalars['String']>;
  passwordReset?: InputMaybe<PasswordResetEntityInput>;
  phone?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<MediaEntityInput>;
  roles?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
  subscriptions?: InputMaybe<Array<InputMaybe<SubscriptionEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  userTemplates?: InputMaybe<Array<InputMaybe<UserTemplateEntityInput>>>;
  verification?: InputMaybe<VerificationEntityInput>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserTemplateEntity = {
  __typename?: 'UserTemplateEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  templateType?: Maybe<TemplateTypeEntity>;
  user?: Maybe<UserEntity>;
};

export type UserTemplateEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  templateType?: InputMaybe<TemplateTypeEntityInput>;
  user?: InputMaybe<UserEntityInput>;
};

export type VerificationEntity = {
  __typename?: 'VerificationEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  user?: Maybe<UserEntity>;
};

export type VerificationEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  user?: InputMaybe<UserEntityInput>;
};

export type AddEventFavoriteMutationVariables = Exact<{
  jobAdId?: InputMaybe<Scalars['String']>;
}>;


export type AddEventFavoriteMutation = { __typename?: 'Mutation', addEventFavorite?: { __typename?: 'UserEntity', id?: string | null } | null };

export type AddJobAdFavoriteMutationVariables = Exact<{
  jobAdId?: InputMaybe<Scalars['String']>;
}>;


export type AddJobAdFavoriteMutation = { __typename?: 'Mutation', addJobAdFavorite?: { __typename?: 'UserEntity', id?: string | null } | null };

export type AddListenerSubscriptionVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type AddListenerSubscription = { __typename?: 'Subscription', addListener?: { __typename?: 'MessageDto', type?: NotificationType | null, title?: string | null, data?: any | null, content?: string | null } | null };

export type AddressFieldFragment = { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, longitude?: number | null, latitude?: number | null };

export type CompanyFieldFragment = { __typename?: 'CompanyEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null };

export type CompanyFragment = { __typename?: 'CompanyEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, longitude?: number | null, latitude?: number | null } | null };

export type EventFieldFragment = { __typename?: 'EventEntity', id?: string | null, name?: string | null };

export type CategoryFieldFragment = { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null };

export type EventFragment = { __typename?: 'EventEntity', id?: string | null, name?: string | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null, schedules?: Array<{ __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null> | null };

export type GroupFieldFragment = { __typename?: 'GroupEntity', id?: string | null, name?: string | null };

export type JobAdFieldFragment = { __typename?: 'JobAdEntity', id?: string | null, title?: string | null, startDate?: any | null, dueDate?: any | null };

export type JobTypeFieldFragment = { __typename?: 'JobTypeEntity', id?: string | null, color?: string | null, name?: string | null };

export type JobAdFragment = { __typename?: 'JobAdEntity', id?: string | null, title?: string | null, startDate?: any | null, dueDate?: any | null, type?: { __typename?: 'JobTypeEntity', id?: string | null, color?: string | null, name?: string | null } | null, company?: { __typename?: 'CompanyEntity', id?: string | null, name?: string | null } | null };

export type LinkFieldFragment = { __typename?: 'LinkEntity', id?: string | null, title?: string | null, url?: string | null };

export type LinkCategoryFieldFragment = { __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null };

export type LinkFragment = { __typename?: 'LinkEntity', id?: string | null, title?: string | null, url?: string | null, category?: { __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null } | null };

export type OrganizerFieldFragment = { __typename?: 'OrganizerEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null };

export type QuestionFieldFragment = { __typename?: 'QuestionEntity', id?: string | null, item?: string | null };

export type RoleFieldFragment = { __typename?: 'RoleEntity', id?: string | null, name?: string | null };

export type ScheduleFieldFragment = { __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null };

export type TemplateFieldFragment = { __typename?: 'TemplateEntity', id?: string | null, name?: string | null, content?: string | null };

export type TemplateTypeFieldFragment = { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null };

export type UserTemplateFieldFragment = { __typename?: 'UserTemplateEntity', id?: string | null, name?: string | null, content?: string | null };

export type TemplateFragment = { __typename?: 'TemplateEntity', id?: string | null, name?: string | null, content?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null };

export type UserTemplateFragment = { __typename?: 'UserTemplateEntity', id?: string | null, name?: string | null, content?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null, user?: { __typename?: 'UserEntity', id?: string | null, fullname?: string | null } | null };

export type UserFieldFragment = { __typename?: 'UserEntity', id?: string | null, fullname?: string | null, email?: string | null, phone?: string | null, created?: any | null, roles?: Array<{ __typename?: 'RoleEntity', id?: string | null, name?: string | null } | null> | null };

export type SaveCompanyMutationVariables = Exact<{
  entity?: InputMaybe<CompanyEntityInput>;
}>;


export type SaveCompanyMutation = { __typename?: 'Mutation', saveCompany?: { __typename?: 'CompanyEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, longitude?: number | null, latitude?: number | null } | null } | null };

export type DeleteCompanyMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteCompanyMutation = { __typename?: 'Mutation', deleteCompany?: boolean | null };

export type SaveEventMutationVariables = Exact<{
  entity?: InputMaybe<EventEntityInput>;
}>;


export type SaveEventMutation = { __typename?: 'Mutation', saveEvent?: { __typename?: 'EventEntity', id?: string | null, name?: string | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null, schedules?: Array<{ __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null> | null } | null };

export type DeleteEventMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: boolean | null };

export type SaveEventCategoryMutationVariables = Exact<{
  entity?: InputMaybe<EventCategoryEntityInput>;
}>;


export type SaveEventCategoryMutation = { __typename?: 'Mutation', saveEventCategory?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null };

export type DeleteEventCategoryMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteEventCategoryMutation = { __typename?: 'Mutation', deleteEventCategory?: boolean | null };

export type SaveGroupMutationVariables = Exact<{
  groupEntity?: InputMaybe<GroupEntityInput>;
}>;


export type SaveGroupMutation = { __typename?: 'Mutation', saveGroup?: { __typename?: 'GroupEntity', id?: string | null } | null };

export type DeleteGroupMutationVariables = Exact<{
  deleteGroupId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup?: boolean | null };

export type SaveJobAdMutationVariables = Exact<{
  entity?: InputMaybe<JobAdEntityInput>;
}>;


export type SaveJobAdMutation = { __typename?: 'Mutation', saveJobAd?: { __typename?: 'JobAdEntity', id?: string | null, title?: string | null, startDate?: any | null, dueDate?: any | null, type?: { __typename?: 'JobTypeEntity', id?: string | null, color?: string | null, name?: string | null } | null, company?: { __typename?: 'CompanyEntity', id?: string | null, name?: string | null } | null } | null };

export type DeleteJobAdMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteJobAdMutation = { __typename?: 'Mutation', deleteJobAd?: boolean | null };

export type SaveJobTypeMutationVariables = Exact<{
  entity?: InputMaybe<JobTypeEntityInput>;
}>;


export type SaveJobTypeMutation = { __typename?: 'Mutation', saveJobType?: { __typename?: 'JobTypeEntity', id?: string | null, color?: string | null, name?: string | null } | null };

export type DeleteJobTypeMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteJobTypeMutation = { __typename?: 'Mutation', deleteJobType?: boolean | null };

export type SaveLinkMutationVariables = Exact<{
  entity?: InputMaybe<LinkEntityInput>;
}>;


export type SaveLinkMutation = { __typename?: 'Mutation', link?: { __typename?: 'LinkEntity', id?: string | null, title?: string | null, url?: string | null, category?: { __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null } | null } | null };

export type DeleteLinkMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteLinkMutation = { __typename?: 'Mutation', deleteLink?: boolean | null };

export type SaveLinkCategoryMutationVariables = Exact<{
  entity?: InputMaybe<LinkCategoryEntityInput>;
}>;


export type SaveLinkCategoryMutation = { __typename?: 'Mutation', linkCategory?: { __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null } | null };

export type DeleteLinkCategoryMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteLinkCategoryMutation = { __typename?: 'Mutation', deleteLinkCategory?: boolean | null };

export type SaveOrganizerMutationVariables = Exact<{
  entity?: InputMaybe<OrganizerEntityInput>;
}>;


export type SaveOrganizerMutation = { __typename?: 'Mutation', organizer?: { __typename?: 'OrganizerEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null } | null };

export type DeleteOrganizerMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteOrganizerMutation = { __typename?: 'Mutation', deleteOrganizer?: boolean | null };

export type AddRolesMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type AddRolesMutation = { __typename?: 'Mutation', saveUser?: { __typename?: 'UserEntity', id?: string | null } | null };

export type SaveTemplateAdminMutationVariables = Exact<{
  entity?: InputMaybe<TemplateEntityInput>;
}>;


export type SaveTemplateAdminMutation = { __typename?: 'Mutation', saveTemplate?: { __typename?: 'TemplateEntity', id?: string | null, name?: string | null, content?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null } | null };

export type DeleteTemplateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteTemplateMutation = { __typename?: 'Mutation', deleteTemplate?: boolean | null };

export type SaveTemplateTypeAdminMutationVariables = Exact<{
  entity?: InputMaybe<TemplateTypeEntityInput>;
}>;


export type SaveTemplateTypeAdminMutation = { __typename?: 'Mutation', saveTemplateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null };

export type DeleteTemplateTypeMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteTemplateTypeMutation = { __typename?: 'Mutation', deleteTemplateType?: boolean | null };

export type SaveUserTemplateAdminMutationVariables = Exact<{
  entity?: InputMaybe<UserTemplateEntityInput>;
}>;


export type SaveUserTemplateAdminMutation = { __typename?: 'Mutation', saveUserTemplate?: { __typename?: 'UserTemplateEntity', id?: string | null, name?: string | null, content?: string | null } | null };

export type DeleteUserTemplateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteUserTemplateMutation = { __typename?: 'Mutation', deleteUserTemplate?: boolean | null };

export type SaveUserAdminMutationVariables = Exact<{
  user?: InputMaybe<UserEntityInput>;
}>;


export type SaveUserAdminMutation = { __typename?: 'Mutation', saveUser?: { __typename?: 'UserEntity', id?: string | null } | null };

export type ApproveUserMutationVariables = Exact<{
  entity?: InputMaybe<UserEntityInput>;
}>;


export type ApproveUserMutation = { __typename?: 'Mutation', saveUser?: { __typename?: 'UserEntity', id?: string | null } | null };

export type DeleteUserMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: boolean | null };

export type GetCompaniesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetCompaniesQuery = { __typename?: 'Query', getCompanies?: { __typename?: 'PageableList_CompanyEntity', total: any, result?: Array<{ __typename?: 'CompanyEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, longitude?: number | null, latitude?: number | null } | null } | null> | null } | null };

export type GetCompanyQueryVariables = Exact<{
  entity?: InputMaybe<CompanyEntityInput>;
}>;


export type GetCompanyQuery = { __typename?: 'Query', getCompany?: { __typename?: 'CompanyEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, longitude?: number | null, latitude?: number | null } | null } | null };

export type GetEventsAdminQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetEventsAdminQuery = { __typename?: 'Query', getEvents?: { __typename?: 'PageableList_EventEntity', total: any, result?: Array<{ __typename?: 'EventEntity', id?: string | null, name?: string | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null, schedules?: Array<{ __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null> | null } | null> | null } | null };

export type GetEventAdminQueryVariables = Exact<{
  entity?: InputMaybe<EventEntityInput>;
}>;


export type GetEventAdminQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, name?: string | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null, schedules?: Array<{ __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null> | null } | null };

export type GetEventCategoriesAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventCategoriesAdminQuery = { __typename?: 'Query', categories?: { __typename?: 'PageableList_EventCategoryEntity', total: any, result?: Array<{ __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetEventCategoryQueryVariables = Exact<{
  entity?: InputMaybe<EventCategoryEntityInput>;
}>;


export type GetEventCategoryQuery = { __typename?: 'Query', category?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null };

export type GetGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGroupsQuery = { __typename?: 'Query', groups?: { __typename?: 'PageableList_GroupEntity', result?: Array<{ __typename?: 'GroupEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetGroupQueryVariables = Exact<{
  groupId?: InputMaybe<Scalars['String']>;
}>;


export type GetGroupQuery = { __typename?: 'Query', group?: { __typename?: 'GroupEntity', id?: string | null, name?: string | null } | null };

export type GetJobAdsAdminQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetJobAdsAdminQuery = { __typename?: 'Query', getJobAds?: { __typename?: 'PageableList_JobAdEntity', total: any, result?: Array<{ __typename?: 'JobAdEntity', id?: string | null, title?: string | null, startDate?: any | null, dueDate?: any | null, type?: { __typename?: 'JobTypeEntity', id?: string | null, color?: string | null, name?: string | null } | null, company?: { __typename?: 'CompanyEntity', id?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetJobAdAdminQueryVariables = Exact<{
  entity?: InputMaybe<JobAdEntityInput>;
}>;


export type GetJobAdAdminQuery = { __typename?: 'Query', getJobAd?: { __typename?: 'JobAdEntity', id?: string | null, title?: string | null, startDate?: any | null, dueDate?: any | null, type?: { __typename?: 'JobTypeEntity', id?: string | null, color?: string | null, name?: string | null } | null, company?: { __typename?: 'CompanyEntity', id?: string | null, name?: string | null } | null } | null };

export type GetJobTypesAdminQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetJobTypesAdminQuery = { __typename?: 'Query', getJobTypes?: { __typename?: 'PageableList_JobTypeEntity', total: any, result?: Array<{ __typename?: 'JobTypeEntity', id?: string | null, color?: string | null, name?: string | null } | null> | null } | null };

export type GetJobTypeQueryVariables = Exact<{
  entity?: InputMaybe<JobTypeEntityInput>;
}>;


export type GetJobTypeQuery = { __typename?: 'Query', getJobType?: { __typename?: 'JobTypeEntity', id?: string | null, color?: string | null, name?: string | null } | null };

export type GetLinksQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetLinksQuery = { __typename?: 'Query', getLinks?: { __typename?: 'PageableList_LinkEntity', total: any, result?: Array<{ __typename?: 'LinkEntity', id?: string | null, title?: string | null, url?: string | null, category?: { __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetLinkQueryVariables = Exact<{
  entity?: InputMaybe<LinkEntityInput>;
}>;


export type GetLinkQuery = { __typename?: 'Query', getLink?: { __typename?: 'LinkEntity', id?: string | null, title?: string | null, url?: string | null, category?: { __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null } | null } | null };

export type GetLinkCategoriesAdminQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetLinkCategoriesAdminQuery = { __typename?: 'Query', getLinkCategories?: { __typename?: 'PageableList_LinkCategoryEntity', result?: Array<{ __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetLinkCategoryQueryVariables = Exact<{
  entity?: InputMaybe<LinkCategoryEntityInput>;
}>;


export type GetLinkCategoryQuery = { __typename?: 'Query', getLinkCategory?: { __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null } | null };

export type GetOrganizersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrganizersQuery = { __typename?: 'Query', organizers?: { __typename?: 'PageableList_OrganizerEntity', total: any, result?: Array<{ __typename?: 'OrganizerEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null } | null> | null } | null };

export type GetOrganizerQueryVariables = Exact<{
  entity?: InputMaybe<OrganizerEntityInput>;
}>;


export type GetOrganizerQuery = { __typename?: 'Query', organizer?: { __typename?: 'OrganizerEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null } | null };

export type GetQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuestionsQuery = { __typename?: 'Query', questions?: { __typename?: 'PageableList_QuestionEntity', result?: Array<{ __typename?: 'QuestionEntity', id?: string | null, item?: string | null } | null> | null } | null };

export type DeleteQuestionMutationVariables = Exact<{
  questionId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteQuestionMutation = { __typename?: 'Mutation', deleteQuestion?: boolean | null };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', roles?: { __typename?: 'PageableList_RoleEntity', result?: Array<{ __typename?: 'RoleEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetTemplatesAdminQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetTemplatesAdminQuery = { __typename?: 'Query', getTemplates?: { __typename?: 'PageableList_TemplateEntity', total: any, result?: Array<{ __typename?: 'TemplateEntity', id?: string | null, name?: string | null, content?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetTemplateAdminQueryVariables = Exact<{
  entity?: InputMaybe<TemplateEntityInput>;
}>;


export type GetTemplateAdminQuery = { __typename?: 'Query', getTemplate?: { __typename?: 'TemplateEntity', id?: string | null, name?: string | null, content?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null } | null };

export type GetTemplateTypesAdminQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetTemplateTypesAdminQuery = { __typename?: 'Query', getTemplateTypes?: { __typename?: 'PageableList_TemplateTypeEntity', total: any, result?: Array<{ __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetTemplateTypeAdminQueryVariables = Exact<{
  entity?: InputMaybe<TemplateTypeEntityInput>;
}>;


export type GetTemplateTypeAdminQuery = { __typename?: 'Query', getTemplateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null };

export type GetUserTemplatesAdminQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetUserTemplatesAdminQuery = { __typename?: 'Query', getUserTemplates?: { __typename?: 'PageableList_UserTemplateEntity', total: any, result?: Array<{ __typename?: 'UserTemplateEntity', id?: string | null, name?: string | null, content?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null, user?: { __typename?: 'UserEntity', id?: string | null, fullname?: string | null } | null } | null> | null } | null };

export type GetUserTemplateAdminQueryVariables = Exact<{
  entity?: InputMaybe<UserTemplateEntityInput>;
}>;


export type GetUserTemplateAdminQuery = { __typename?: 'Query', getUserTemplate?: { __typename?: 'UserTemplateEntity', id?: string | null, name?: string | null, content?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null, user?: { __typename?: 'UserEntity', id?: string | null, fullname?: string | null } | null } | null };

export type GetApprovedUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApprovedUsersQuery = { __typename?: 'Query', approvedUsers?: { __typename?: 'PageableList_UserEntity', result?: Array<{ __typename?: 'UserEntity', id?: string | null, fullname?: string | null, email?: string | null, phone?: string | null, created?: any | null, roles?: Array<{ __typename?: 'RoleEntity', id?: string | null, name?: string | null } | null> | null } | null> | null } | null };

export type GetRequestedUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRequestedUsersQuery = { __typename?: 'Query', requestedUsers?: { __typename?: 'PageableList_UserEntity', result?: Array<{ __typename?: 'UserEntity', id?: string | null, fullname?: string | null, email?: string | null, phone?: string | null, created?: any | null, roles?: Array<{ __typename?: 'RoleEntity', id?: string | null, name?: string | null } | null> | null } | null> | null } | null };

export type ChatlistenerSubscriptionVariables = Exact<{
  token: Scalars['String'];
}>;


export type ChatlistenerSubscription = { __typename?: 'Subscription', addChatListener?: { __typename?: 'MessageDto', content?: string | null, data?: any | null, title?: string | null, type?: NotificationType | null } | null };

export type CreateTokenMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type CreateTokenMutation = { __typename?: 'Mutation', createToken?: { __typename?: 'TokenDto', access?: string | null, refresh?: string | null } | null };

export type DeleteEventFavoriteMutationVariables = Exact<{
  eventId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteEventFavoriteMutation = { __typename?: 'Mutation', deleteEventFavorite?: { __typename?: 'UserEntity', id?: string | null } | null };

export type DeleteJobAdFavoriteMutationVariables = Exact<{
  jobAdId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteJobAdFavoriteMutation = { __typename?: 'Mutation', deleteJobAdFavorite?: { __typename?: 'UserEntity', id?: string | null } | null };

export type GetChatQueryVariables = Exact<{
  entity?: InputMaybe<ChatEntityInput>;
}>;


export type GetChatQuery = { __typename?: 'Query', getChat?: { __typename?: 'ChatEntity', id?: string | null, name?: string | null, participants?: Array<{ __typename?: 'ParticipantEntity', user?: { __typename?: 'UserEntity', id?: string | null } | null } | null> | null } | null };

export type GetChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChatsQuery = { __typename?: 'Query', getChats?: { __typename?: 'PageableList_ChatEntity', result?: Array<{ __typename?: 'ChatEntity', name?: string | null, id?: string | null, modified?: any | null } | null> | null } | null };

export type GetEventQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetEventQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', name?: string | null, id?: string | null, description?: string | null, nextSchedule?: { __typename?: 'ScheduleEntity', startDate?: any | null, endDate?: any | null } | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null } | null, address?: { __typename?: 'AddressEntity', street?: string | null, place?: string | null, postalCode?: string | null, latitude?: number | null, longitude?: number | null, id?: string | null, houseNumber?: string | null, created?: any | null } | null, schedules?: Array<{ __typename?: 'ScheduleEntity', id?: string | null, endDate?: any | null, startDate?: any | null } | null> | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null, organizer?: { __typename?: 'OrganizerEntity', id?: string | null, name?: string | null, phone?: string | null, website?: string | null, mail?: string | null } | null } | null };

export type GetEventCategorieNamesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetEventCategorieNamesQuery = { __typename?: 'Query', getEventCategories?: { __typename?: 'PageableList_EventCategoryEntity', result?: Array<{ __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetEventCategoriesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetEventCategoriesQuery = { __typename?: 'Query', getEventCategories?: { __typename?: 'PageableList_EventCategoryEntity', result?: Array<{ __typename?: 'EventCategoryEntity', name?: string | null, id?: string | null, events?: Array<{ __typename?: 'EventEntity', name?: string | null, id?: string | null, description?: string | null, nextSchedule?: { __typename?: 'ScheduleEntity', startDate?: any | null, endDate?: any | null } | null, titleImage?: { __typename?: 'MediaEntity', name?: string | null, id?: string | null } | null, schedules?: Array<{ __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null> | null, organizer?: { __typename?: 'OrganizerEntity', website?: string | null, phone?: string | null, name?: string | null, mail?: string | null, id?: string | null } | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, id?: string | null, latitude?: number | null, longitude?: number | null, modified?: any | null, place?: string | null, postalCode?: string | null, street?: string | null } | null } | null> | null } | null> | null } | null };

export type GetEventImagesQueryVariables = Exact<{
  entity?: InputMaybe<EventEntityInput>;
}>;


export type GetEventImagesQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', images?: Array<{ __typename?: 'MediaEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetEventsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetEventsQuery = { __typename?: 'Query', getEvents?: { __typename?: 'PageableList_EventEntity', result?: Array<{ __typename?: 'EventEntity', name?: string | null, id?: string | null, description?: string | null, nextSchedule?: { __typename?: 'ScheduleEntity', startDate?: any | null, endDate?: any | null } | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null } | null, address?: { __typename?: 'AddressEntity', street?: string | null, place?: string | null, postalCode?: string | null, latitude?: number | null, longitude?: number | null, id?: string | null, houseNumber?: string | null, created?: any | null } | null, schedules?: Array<{ __typename?: 'ScheduleEntity', id?: string | null, endDate?: any | null, startDate?: any | null } | null> | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null } | null, organizer?: { __typename?: 'OrganizerEntity', id?: string | null, name?: string | null, phone?: string | null, website?: string | null, mail?: string | null } | null } | null> | null } | null };

export type GetJobAdQueryVariables = Exact<{
  entity?: InputMaybe<JobAdEntityInput>;
}>;


export type GetJobAdQuery = { __typename?: 'Query', getJobAd?: { __typename?: 'JobAdEntity', dueDate?: any | null, content?: string | null, id?: string | null, title?: string | null, startDate?: any | null, company?: { __typename?: 'CompanyEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, id?: string | null, latitude?: number | null, longitude?: number | null, place?: string | null, postalCode?: string | null, street?: string | null } | null } | null, type?: { __typename?: 'JobTypeEntity', color?: string | null, id?: string | null, name?: string | null } | null } | null };

export type GetJobAdsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetJobAdsQuery = { __typename?: 'Query', getJobAds?: { __typename?: 'PageableList_JobAdEntity', result?: Array<{ __typename?: 'JobAdEntity', dueDate?: any | null, id?: string | null, title?: string | null, startDate?: any | null, company?: { __typename?: 'CompanyEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, id?: string | null, latitude?: number | null, longitude?: number | null, place?: string | null, postalCode?: string | null, street?: string | null } | null } | null, type?: { __typename?: 'JobTypeEntity', color?: string | null, id?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetJobTypesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetJobTypesQuery = { __typename?: 'Query', getJobTypes?: { __typename?: 'PageableList_JobTypeEntity', result?: Array<{ __typename?: 'JobTypeEntity', color?: string | null, created?: any | null, id?: string | null, name?: string | null, modified?: any | null, jobAds?: Array<{ __typename?: 'JobAdEntity', created?: any | null, dueDate?: any | null, id?: string | null, modified?: any | null, startDate?: any | null, title?: string | null, company?: { __typename?: 'CompanyEntity', id?: string | null, mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, modified?: any | null, created?: any | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, id?: string | null, place?: string | null, postalCode?: string | null, street?: string | null } | null } | null, type?: { __typename?: 'JobTypeEntity', color?: string | null } | null } | null> | null } | null> | null } | null };

export type GetLinkCategoriesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetLinkCategoriesQuery = { __typename?: 'Query', getLinkCategories?: { __typename?: 'PageableList_LinkCategoryEntity', result?: Array<{ __typename?: 'LinkCategoryEntity', id?: string | null, name?: string | null, link?: Array<{ __typename?: 'LinkEntity', id?: string | null, title?: string | null, url?: string | null } | null> | null } | null> | null } | null };

export type GetMeAssignmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeAssignmentsQuery = { __typename?: 'Query', me?: { __typename?: 'UserEntity', assignments?: Array<{ __typename?: 'AssignmentEntity', id?: string | null, assignmentState?: { __typename?: 'AssignmentStateEntity', name?: string | null } | null, questionnaire?: { __typename?: 'QuestionnaireEntity', questions?: Array<{ __typename?: 'QuestionEntity', id?: string | null, item?: string | null } | null> | null } | null } | null> | null } | null };

export type GetMeBasicQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeBasicQuery = { __typename?: 'Query', me?: { __typename?: 'UserEntity', id?: string | null, fullname?: string | null, phone?: string | null, email?: string | null, profilePicture?: { __typename?: 'MediaEntity', id?: string | null } | null } | null };

export type GetMeFavoritesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeFavoritesQuery = { __typename?: 'Query', me?: { __typename?: 'UserEntity', id?: string | null, favoriteEvents?: Array<{ __typename?: 'EventEntity', id?: string | null, name?: string | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null, base64?: string | null, mimeType?: string | null } | null, schedules?: Array<{ __typename?: 'ScheduleEntity', endDate?: any | null, startDate?: any | null } | null> | null, nextSchedule?: { __typename?: 'ScheduleEntity', endDate?: any | null, startDate?: any | null } | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null } | null } | null> | null, favoriteJobAds?: Array<{ __typename?: 'JobAdEntity', id?: string | null, title?: string | null, startDate?: any | null, dueDate?: any | null, company?: { __typename?: 'CompanyEntity', mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null } | null } | null, type?: { __typename?: 'JobTypeEntity', color?: string | null } | null } | null> | null } | null };

export type FeedbacksQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedbacksQuery = { __typename?: 'Query', me?: { __typename?: 'UserEntity', feedbacks?: Array<{ __typename?: 'FeedbackEntity', id?: string | null, rating?: number | null, course?: { __typename?: 'CourseEntity', name?: string | null } | null } | null> | null } | null };

export type GetMeUploadsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeUploadsQuery = { __typename?: 'Query', me?: { __typename?: 'UserEntity', id?: string | null, uploads?: Array<{ __typename?: 'MediaEntity', id?: string | null, mimeType?: string | null, base64?: string | null, name?: string | null } | null> | null } | null };

export type GetMeUserTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeUserTemplatesQuery = { __typename?: 'Query', me?: { __typename?: 'UserEntity', id?: string | null, userTemplates?: Array<{ __typename?: 'UserTemplateEntity', id?: string | null, content?: string | null, name?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', name?: string | null, id?: string | null } | null } | null> | null } | null };

export type GetMessagesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetMessagesQuery = { __typename?: 'Query', getMessages?: { __typename?: 'PageableList_MessageEntity', result?: Array<{ __typename?: 'MessageEntity', id?: string | null, content?: string | null, parent?: { __typename?: 'MessageEntity', id?: string | null, content?: string | null, user?: { __typename?: 'UserEntity', fullname?: string | null } | null } | null, media?: { __typename?: 'MediaEntity', id?: string | null } | null, user?: { __typename?: 'UserEntity', id?: string | null, fullname?: string | null } | null } | null> | null } | null };

export type GetNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationsQuery = { __typename?: 'Query', me?: { __typename?: 'UserEntity', notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, title?: string | null, content?: string | null, created?: any | null } | null> | null } | null };

export type GetTemplateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTemplateQuery = { __typename?: 'Query', getTemplate?: { __typename?: 'TemplateEntity', id?: string | null, name?: string | null, content?: string | null } | null };

export type GetTemplateTypesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetTemplateTypesQuery = { __typename?: 'Query', getTemplateTypes?: { __typename?: 'PageableList_TemplateTypeEntity', result?: Array<{ __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetTemplatesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTemplatesQuery = { __typename?: 'Query', getTemplates?: { __typename?: 'PageableList_TemplateEntity', result?: Array<{ __typename?: 'TemplateEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetUserTemplateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserTemplateQuery = { __typename?: 'Query', getUserTemplate?: { __typename?: 'UserTemplateEntity', id?: string | null, name?: string | null, content?: string | null } | null };

export type GetUserTemplatesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserTemplatesQuery = { __typename?: 'Query', getUserTemplates?: { __typename?: 'PageableList_UserTemplateEntity', result?: Array<{ __typename?: 'UserTemplateEntity', id?: string | null, name?: string | null, content?: string | null } | null> | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: { __typename?: 'PageableList_UserEntity', result?: Array<{ __typename?: 'UserEntity', fullname?: string | null, id?: string | null } | null> | null } | null };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'TokenDto', access?: string | null, refresh?: string | null } | null };

export type RegisterUserMutationVariables = Exact<{
  entity?: InputMaybe<UserEntityInput>;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', saveUser?: { __typename?: 'UserEntity', email?: string | null, id?: string | null, fullname?: string | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: boolean | null };

export type SaveAssignmentMutationVariables = Exact<{
  entity?: InputMaybe<AssignmentEntityInput>;
}>;


export type SaveAssignmentMutation = { __typename?: 'Mutation', saveAssignment?: { __typename?: 'AssignmentEntity', id?: string | null } | null };

export type SaveChatMutationVariables = Exact<{
  entity?: InputMaybe<ChatEntityInput>;
}>;


export type SaveChatMutation = { __typename?: 'Mutation', saveChat?: { __typename?: 'ChatEntity', id?: string | null } | null };

export type SaveFeedbackMutationVariables = Exact<{
  entity?: InputMaybe<FeedbackEntityInput>;
}>;


export type SaveFeedbackMutation = { __typename?: 'Mutation', saveFeedback?: { __typename?: 'FeedbackEntity', id?: string | null } | null };

export type SaveMessageMutationVariables = Exact<{
  entity?: InputMaybe<MessageEntityInput>;
}>;


export type SaveMessageMutation = { __typename?: 'Mutation', saveMessage?: { __typename?: 'MessageEntity', id?: string | null } | null };

export type SaveNotificationMutationVariables = Exact<{
  entity?: InputMaybe<NotificationEntityInput>;
}>;


export type SaveNotificationMutation = { __typename?: 'Mutation', saveNotification?: { __typename?: 'NotificationEntity', id?: string | null } | null };

export type SaveSubscriptionMutationVariables = Exact<{
  entity?: InputMaybe<SubscriptionEntityInput>;
}>;


export type SaveSubscriptionMutation = { __typename?: 'Mutation', saveSubscription?: { __typename?: 'SubscriptionEntity', id?: string | null } | null };

export type SaveUploadsMutationVariables = Exact<{
  uploads?: InputMaybe<Array<InputMaybe<MediaEntityInput>> | InputMaybe<MediaEntityInput>>;
}>;


export type SaveUploadsMutation = { __typename?: 'Mutation', addUploads?: { __typename?: 'UserEntity', id?: string | null } | null };

export type SaveUserMutationVariables = Exact<{
  entity?: InputMaybe<UserEntityInput>;
}>;


export type SaveUserMutation = { __typename?: 'Mutation', saveUser?: { __typename?: 'UserEntity', email?: string | null, fullname?: string | null, id?: string | null, phone?: string | null, assignments?: Array<{ __typename?: 'AssignmentEntity', id?: string | null, questionnaire?: { __typename?: 'QuestionnaireEntity', name?: string | null, id?: string | null, questions?: Array<{ __typename?: 'QuestionEntity', id?: string | null, item?: string | null, answers?: Array<{ __typename?: 'AnswerEntity', rating?: number | null, id?: string | null } | null> | null } | null> | null } | null } | null> | null, favoriteEvents?: Array<{ __typename?: 'EventEntity', id?: string | null, name?: string | null, titleImage?: { __typename?: 'MediaEntity', base64?: string | null, id?: string | null, modified?: any | null, name?: string | null } | null, images?: Array<{ __typename?: 'MediaEntity', base64?: string | null, id?: string | null, mimeType?: string | null, name?: string | null } | null> | null, nextSchedule?: { __typename?: 'ScheduleEntity', endDate?: any | null, id?: string | null, startDate?: any | null } | null } | null> | null, favoriteJobAds?: Array<{ __typename?: 'JobAdEntity', startDate?: any | null, dueDate?: any | null, title?: string | null, type?: { __typename?: 'JobTypeEntity', color?: string | null } | null, company?: { __typename?: 'CompanyEntity', mail?: string | null, name?: string | null, phone?: string | null, website?: string | null, id?: string | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, id?: string | null, street?: string | null, postalCode?: string | null } | null } | null } | null> | null, profilePicture?: { __typename?: 'MediaEntity', base64?: string | null, id?: string | null, mimeType?: string | null, name?: string | null } | null, uploads?: Array<{ __typename?: 'MediaEntity', base64?: string | null, id?: string | null, mimeType?: string | null, name?: string | null } | null> | null, userTemplates?: Array<{ __typename?: 'UserTemplateEntity', name?: string | null, id?: string | null, content?: string | null, templateType?: { __typename?: 'TemplateTypeEntity', id?: string | null, name?: string | null } | null } | null> | null, verification?: { __typename?: 'VerificationEntity', id?: string | null, key?: string | null } | null } | null };

export type SaveUserTemplateMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  templateTypeId: Scalars['String'];
  templateId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
}>;


export type SaveUserTemplateMutation = { __typename?: 'Mutation', saveUserTemplate?: { __typename?: 'UserTemplateEntity', id?: string | null, name?: string | null } | null };

export type SendPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendPasswordResetMutation = { __typename?: 'Mutation', sendPasswordReset?: boolean | null };

export type SendVerificationMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendVerificationMutation = { __typename?: 'Mutation', sendVerification?: boolean | null };

export type VerifyMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type VerifyMutation = { __typename?: 'Mutation', verify?: { __typename?: 'UserEntity', id?: string | null } | null };

export const CompanyFieldFragmentDoc = gql`
    fragment CompanyField on CompanyEntity {
  id
  mail
  name
  phone
  website
}
    `;
export const AddressFieldFragmentDoc = gql`
    fragment AddressField on AddressEntity {
  id
  houseNumber
  place
  postalCode
  street
  longitude
  latitude
}
    `;
export const CompanyFragmentDoc = gql`
    fragment Company on CompanyEntity {
  ...CompanyField
  address {
    ...AddressField
  }
}
    ${CompanyFieldFragmentDoc}
${AddressFieldFragmentDoc}`;
export const EventFieldFragmentDoc = gql`
    fragment EventField on EventEntity {
  id
  name
}
    `;
export const CategoryFieldFragmentDoc = gql`
    fragment CategoryField on EventCategoryEntity {
  id
  name
}
    `;
export const ScheduleFieldFragmentDoc = gql`
    fragment ScheduleField on ScheduleEntity {
  id
  startDate
  endDate
}
    `;
export const EventFragmentDoc = gql`
    fragment Event on EventEntity {
  ...EventField
  category {
    ...CategoryField
  }
  schedules {
    ...ScheduleField
  }
}
    ${EventFieldFragmentDoc}
${CategoryFieldFragmentDoc}
${ScheduleFieldFragmentDoc}`;
export const GroupFieldFragmentDoc = gql`
    fragment GroupField on GroupEntity {
  id
  name
}
    `;
export const JobAdFieldFragmentDoc = gql`
    fragment JobAdField on JobAdEntity {
  id
  title
  startDate
  dueDate
}
    `;
export const JobTypeFieldFragmentDoc = gql`
    fragment JobTypeField on JobTypeEntity {
  id
  color
  name
}
    `;
export const JobAdFragmentDoc = gql`
    fragment JobAd on JobAdEntity {
  ...JobAdField
  type {
    ...JobTypeField
  }
  company {
    id
    name
  }
}
    ${JobAdFieldFragmentDoc}
${JobTypeFieldFragmentDoc}`;
export const LinkFieldFragmentDoc = gql`
    fragment LinkField on LinkEntity {
  id
  title
  url
}
    `;
export const LinkCategoryFieldFragmentDoc = gql`
    fragment LinkCategoryField on LinkCategoryEntity {
  id
  name
}
    `;
export const LinkFragmentDoc = gql`
    fragment Link on LinkEntity {
  ...LinkField
  category {
    ...LinkCategoryField
  }
}
    ${LinkFieldFragmentDoc}
${LinkCategoryFieldFragmentDoc}`;
export const OrganizerFieldFragmentDoc = gql`
    fragment OrganizerField on OrganizerEntity {
  id
  mail
  name
  phone
  website
}
    `;
export const QuestionFieldFragmentDoc = gql`
    fragment QuestionField on QuestionEntity {
  id
  item
}
    `;
export const TemplateFieldFragmentDoc = gql`
    fragment TemplateField on TemplateEntity {
  id
  name
  content
}
    `;
export const TemplateTypeFieldFragmentDoc = gql`
    fragment TemplateTypeField on TemplateTypeEntity {
  id
  name
}
    `;
export const TemplateFragmentDoc = gql`
    fragment Template on TemplateEntity {
  ...TemplateField
  templateType {
    ...TemplateTypeField
  }
}
    ${TemplateFieldFragmentDoc}
${TemplateTypeFieldFragmentDoc}`;
export const UserTemplateFieldFragmentDoc = gql`
    fragment UserTemplateField on UserTemplateEntity {
  id
  name
  content
}
    `;
export const UserTemplateFragmentDoc = gql`
    fragment UserTemplate on UserTemplateEntity {
  ...UserTemplateField
  templateType {
    ...TemplateTypeField
  }
  user {
    id
    fullname
  }
}
    ${UserTemplateFieldFragmentDoc}
${TemplateTypeFieldFragmentDoc}`;
export const RoleFieldFragmentDoc = gql`
    fragment RoleField on RoleEntity {
  id
  name
}
    `;
export const UserFieldFragmentDoc = gql`
    fragment UserField on UserEntity {
  id
  fullname
  roles {
    ...RoleField
  }
  email
  phone
  created
}
    ${RoleFieldFragmentDoc}`;
export const AddEventFavoriteDocument = gql`
    mutation AddEventFavorite($jobAdId: String) {
  addEventFavorite(eventId: $jobAdId) {
    id
  }
}
    `;
export type AddEventFavoriteMutationFn = Apollo.MutationFunction<AddEventFavoriteMutation, AddEventFavoriteMutationVariables>;

/**
 * __useAddEventFavoriteMutation__
 *
 * To run a mutation, you first call `useAddEventFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEventFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEventFavoriteMutation, { data, loading, error }] = useAddEventFavoriteMutation({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *   },
 * });
 */
export function useAddEventFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<AddEventFavoriteMutation, AddEventFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddEventFavoriteMutation, AddEventFavoriteMutationVariables>(AddEventFavoriteDocument, options);
      }
export type AddEventFavoriteMutationHookResult = ReturnType<typeof useAddEventFavoriteMutation>;
export type AddEventFavoriteMutationResult = Apollo.MutationResult<AddEventFavoriteMutation>;
export type AddEventFavoriteMutationOptions = Apollo.BaseMutationOptions<AddEventFavoriteMutation, AddEventFavoriteMutationVariables>;
export const AddJobAdFavoriteDocument = gql`
    mutation AddJobAdFavorite($jobAdId: String) {
  addJobAdFavorite(jobAdId: $jobAdId) {
    id
  }
}
    `;
export type AddJobAdFavoriteMutationFn = Apollo.MutationFunction<AddJobAdFavoriteMutation, AddJobAdFavoriteMutationVariables>;

/**
 * __useAddJobAdFavoriteMutation__
 *
 * To run a mutation, you first call `useAddJobAdFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddJobAdFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addJobAdFavoriteMutation, { data, loading, error }] = useAddJobAdFavoriteMutation({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *   },
 * });
 */
export function useAddJobAdFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<AddJobAdFavoriteMutation, AddJobAdFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddJobAdFavoriteMutation, AddJobAdFavoriteMutationVariables>(AddJobAdFavoriteDocument, options);
      }
export type AddJobAdFavoriteMutationHookResult = ReturnType<typeof useAddJobAdFavoriteMutation>;
export type AddJobAdFavoriteMutationResult = Apollo.MutationResult<AddJobAdFavoriteMutation>;
export type AddJobAdFavoriteMutationOptions = Apollo.BaseMutationOptions<AddJobAdFavoriteMutation, AddJobAdFavoriteMutationVariables>;
export const AddListenerDocument = gql`
    subscription AddListener($token: String) {
  addListener(token: $token) {
    type
    title
    data
    content
  }
}
    `;

/**
 * __useAddListenerSubscription__
 *
 * To run a query within a React component, call `useAddListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAddListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddListenerSubscription({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAddListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<AddListenerSubscription, AddListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AddListenerSubscription, AddListenerSubscriptionVariables>(AddListenerDocument, options);
      }
export type AddListenerSubscriptionHookResult = ReturnType<typeof useAddListenerSubscription>;
export type AddListenerSubscriptionResult = Apollo.SubscriptionResult<AddListenerSubscription>;
export const SaveCompanyDocument = gql`
    mutation SaveCompany($entity: CompanyEntityInput) {
  saveCompany(entity: $entity) {
    ...Company
  }
}
    ${CompanyFragmentDoc}`;
export type SaveCompanyMutationFn = Apollo.MutationFunction<SaveCompanyMutation, SaveCompanyMutationVariables>;

/**
 * __useSaveCompanyMutation__
 *
 * To run a mutation, you first call `useSaveCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveCompanyMutation, { data, loading, error }] = useSaveCompanyMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveCompanyMutation(baseOptions?: Apollo.MutationHookOptions<SaveCompanyMutation, SaveCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveCompanyMutation, SaveCompanyMutationVariables>(SaveCompanyDocument, options);
      }
export type SaveCompanyMutationHookResult = ReturnType<typeof useSaveCompanyMutation>;
export type SaveCompanyMutationResult = Apollo.MutationResult<SaveCompanyMutation>;
export type SaveCompanyMutationOptions = Apollo.BaseMutationOptions<SaveCompanyMutation, SaveCompanyMutationVariables>;
export const DeleteCompanyDocument = gql`
    mutation DeleteCompany($id: String) {
  deleteCompany(id: $id)
}
    `;
export type DeleteCompanyMutationFn = Apollo.MutationFunction<DeleteCompanyMutation, DeleteCompanyMutationVariables>;

/**
 * __useDeleteCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyMutation, { data, loading, error }] = useDeleteCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCompanyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCompanyMutation, DeleteCompanyMutationVariables>(DeleteCompanyDocument, options);
      }
export type DeleteCompanyMutationHookResult = ReturnType<typeof useDeleteCompanyMutation>;
export type DeleteCompanyMutationResult = Apollo.MutationResult<DeleteCompanyMutation>;
export type DeleteCompanyMutationOptions = Apollo.BaseMutationOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export const SaveEventDocument = gql`
    mutation SaveEvent($entity: EventEntityInput) {
  saveEvent(entity: $entity) {
    ...Event
  }
}
    ${EventFragmentDoc}`;
export type SaveEventMutationFn = Apollo.MutationFunction<SaveEventMutation, SaveEventMutationVariables>;

/**
 * __useSaveEventMutation__
 *
 * To run a mutation, you first call `useSaveEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveEventMutation, { data, loading, error }] = useSaveEventMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveEventMutation(baseOptions?: Apollo.MutationHookOptions<SaveEventMutation, SaveEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveEventMutation, SaveEventMutationVariables>(SaveEventDocument, options);
      }
export type SaveEventMutationHookResult = ReturnType<typeof useSaveEventMutation>;
export type SaveEventMutationResult = Apollo.MutationResult<SaveEventMutation>;
export type SaveEventMutationOptions = Apollo.BaseMutationOptions<SaveEventMutation, SaveEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation DeleteEvent($id: String) {
  deleteEvent(id: $id)
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const SaveEventCategoryDocument = gql`
    mutation SaveEventCategory($entity: EventCategoryEntityInput) {
  saveEventCategory(entity: $entity) {
    ...CategoryField
  }
}
    ${CategoryFieldFragmentDoc}`;
export type SaveEventCategoryMutationFn = Apollo.MutationFunction<SaveEventCategoryMutation, SaveEventCategoryMutationVariables>;

/**
 * __useSaveEventCategoryMutation__
 *
 * To run a mutation, you first call `useSaveEventCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveEventCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveEventCategoryMutation, { data, loading, error }] = useSaveEventCategoryMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveEventCategoryMutation(baseOptions?: Apollo.MutationHookOptions<SaveEventCategoryMutation, SaveEventCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveEventCategoryMutation, SaveEventCategoryMutationVariables>(SaveEventCategoryDocument, options);
      }
export type SaveEventCategoryMutationHookResult = ReturnType<typeof useSaveEventCategoryMutation>;
export type SaveEventCategoryMutationResult = Apollo.MutationResult<SaveEventCategoryMutation>;
export type SaveEventCategoryMutationOptions = Apollo.BaseMutationOptions<SaveEventCategoryMutation, SaveEventCategoryMutationVariables>;
export const DeleteEventCategoryDocument = gql`
    mutation DeleteEventCategory($id: String) {
  deleteEventCategory(id: $id)
}
    `;
export type DeleteEventCategoryMutationFn = Apollo.MutationFunction<DeleteEventCategoryMutation, DeleteEventCategoryMutationVariables>;

/**
 * __useDeleteEventCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteEventCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventCategoryMutation, { data, loading, error }] = useDeleteEventCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventCategoryMutation, DeleteEventCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventCategoryMutation, DeleteEventCategoryMutationVariables>(DeleteEventCategoryDocument, options);
      }
export type DeleteEventCategoryMutationHookResult = ReturnType<typeof useDeleteEventCategoryMutation>;
export type DeleteEventCategoryMutationResult = Apollo.MutationResult<DeleteEventCategoryMutation>;
export type DeleteEventCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteEventCategoryMutation, DeleteEventCategoryMutationVariables>;
export const SaveGroupDocument = gql`
    mutation SaveGroup($groupEntity: GroupEntityInput) {
  saveGroup(entity: $groupEntity) {
    id
  }
}
    `;
export type SaveGroupMutationFn = Apollo.MutationFunction<SaveGroupMutation, SaveGroupMutationVariables>;

/**
 * __useSaveGroupMutation__
 *
 * To run a mutation, you first call `useSaveGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveGroupMutation, { data, loading, error }] = useSaveGroupMutation({
 *   variables: {
 *      groupEntity: // value for 'groupEntity'
 *   },
 * });
 */
export function useSaveGroupMutation(baseOptions?: Apollo.MutationHookOptions<SaveGroupMutation, SaveGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveGroupMutation, SaveGroupMutationVariables>(SaveGroupDocument, options);
      }
export type SaveGroupMutationHookResult = ReturnType<typeof useSaveGroupMutation>;
export type SaveGroupMutationResult = Apollo.MutationResult<SaveGroupMutation>;
export type SaveGroupMutationOptions = Apollo.BaseMutationOptions<SaveGroupMutation, SaveGroupMutationVariables>;
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($deleteGroupId: String) {
  deleteGroup(id: $deleteGroupId)
}
    `;
export type DeleteGroupMutationFn = Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      deleteGroupId: // value for 'deleteGroupId'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, options);
      }
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = Apollo.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = Apollo.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const SaveJobAdDocument = gql`
    mutation SaveJobAd($entity: JobAdEntityInput) {
  saveJobAd(entity: $entity) {
    ...JobAd
  }
}
    ${JobAdFragmentDoc}`;
export type SaveJobAdMutationFn = Apollo.MutationFunction<SaveJobAdMutation, SaveJobAdMutationVariables>;

/**
 * __useSaveJobAdMutation__
 *
 * To run a mutation, you first call `useSaveJobAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveJobAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveJobAdMutation, { data, loading, error }] = useSaveJobAdMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveJobAdMutation(baseOptions?: Apollo.MutationHookOptions<SaveJobAdMutation, SaveJobAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveJobAdMutation, SaveJobAdMutationVariables>(SaveJobAdDocument, options);
      }
export type SaveJobAdMutationHookResult = ReturnType<typeof useSaveJobAdMutation>;
export type SaveJobAdMutationResult = Apollo.MutationResult<SaveJobAdMutation>;
export type SaveJobAdMutationOptions = Apollo.BaseMutationOptions<SaveJobAdMutation, SaveJobAdMutationVariables>;
export const DeleteJobAdDocument = gql`
    mutation DeleteJobAd($id: String) {
  deleteJobAd(id: $id)
}
    `;
export type DeleteJobAdMutationFn = Apollo.MutationFunction<DeleteJobAdMutation, DeleteJobAdMutationVariables>;

/**
 * __useDeleteJobAdMutation__
 *
 * To run a mutation, you first call `useDeleteJobAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobAdMutation, { data, loading, error }] = useDeleteJobAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJobAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobAdMutation, DeleteJobAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJobAdMutation, DeleteJobAdMutationVariables>(DeleteJobAdDocument, options);
      }
export type DeleteJobAdMutationHookResult = ReturnType<typeof useDeleteJobAdMutation>;
export type DeleteJobAdMutationResult = Apollo.MutationResult<DeleteJobAdMutation>;
export type DeleteJobAdMutationOptions = Apollo.BaseMutationOptions<DeleteJobAdMutation, DeleteJobAdMutationVariables>;
export const SaveJobTypeDocument = gql`
    mutation SaveJobType($entity: JobTypeEntityInput) {
  saveJobType(entity: $entity) {
    ...JobTypeField
  }
}
    ${JobTypeFieldFragmentDoc}`;
export type SaveJobTypeMutationFn = Apollo.MutationFunction<SaveJobTypeMutation, SaveJobTypeMutationVariables>;

/**
 * __useSaveJobTypeMutation__
 *
 * To run a mutation, you first call `useSaveJobTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveJobTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveJobTypeMutation, { data, loading, error }] = useSaveJobTypeMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveJobTypeMutation(baseOptions?: Apollo.MutationHookOptions<SaveJobTypeMutation, SaveJobTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveJobTypeMutation, SaveJobTypeMutationVariables>(SaveJobTypeDocument, options);
      }
export type SaveJobTypeMutationHookResult = ReturnType<typeof useSaveJobTypeMutation>;
export type SaveJobTypeMutationResult = Apollo.MutationResult<SaveJobTypeMutation>;
export type SaveJobTypeMutationOptions = Apollo.BaseMutationOptions<SaveJobTypeMutation, SaveJobTypeMutationVariables>;
export const DeleteJobTypeDocument = gql`
    mutation DeleteJobType($id: String) {
  deleteJobType(id: $id)
}
    `;
export type DeleteJobTypeMutationFn = Apollo.MutationFunction<DeleteJobTypeMutation, DeleteJobTypeMutationVariables>;

/**
 * __useDeleteJobTypeMutation__
 *
 * To run a mutation, you first call `useDeleteJobTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobTypeMutation, { data, loading, error }] = useDeleteJobTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJobTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobTypeMutation, DeleteJobTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJobTypeMutation, DeleteJobTypeMutationVariables>(DeleteJobTypeDocument, options);
      }
export type DeleteJobTypeMutationHookResult = ReturnType<typeof useDeleteJobTypeMutation>;
export type DeleteJobTypeMutationResult = Apollo.MutationResult<DeleteJobTypeMutation>;
export type DeleteJobTypeMutationOptions = Apollo.BaseMutationOptions<DeleteJobTypeMutation, DeleteJobTypeMutationVariables>;
export const SaveLinkDocument = gql`
    mutation SaveLink($entity: LinkEntityInput) {
  link: saveLink(entity: $entity) {
    ...Link
  }
}
    ${LinkFragmentDoc}`;
export type SaveLinkMutationFn = Apollo.MutationFunction<SaveLinkMutation, SaveLinkMutationVariables>;

/**
 * __useSaveLinkMutation__
 *
 * To run a mutation, you first call `useSaveLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveLinkMutation, { data, loading, error }] = useSaveLinkMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveLinkMutation(baseOptions?: Apollo.MutationHookOptions<SaveLinkMutation, SaveLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveLinkMutation, SaveLinkMutationVariables>(SaveLinkDocument, options);
      }
export type SaveLinkMutationHookResult = ReturnType<typeof useSaveLinkMutation>;
export type SaveLinkMutationResult = Apollo.MutationResult<SaveLinkMutation>;
export type SaveLinkMutationOptions = Apollo.BaseMutationOptions<SaveLinkMutation, SaveLinkMutationVariables>;
export const DeleteLinkDocument = gql`
    mutation DeleteLink($id: String) {
  deleteLink(id: $id)
}
    `;
export type DeleteLinkMutationFn = Apollo.MutationFunction<DeleteLinkMutation, DeleteLinkMutationVariables>;

/**
 * __useDeleteLinkMutation__
 *
 * To run a mutation, you first call `useDeleteLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLinkMutation, { data, loading, error }] = useDeleteLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLinkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLinkMutation, DeleteLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLinkMutation, DeleteLinkMutationVariables>(DeleteLinkDocument, options);
      }
export type DeleteLinkMutationHookResult = ReturnType<typeof useDeleteLinkMutation>;
export type DeleteLinkMutationResult = Apollo.MutationResult<DeleteLinkMutation>;
export type DeleteLinkMutationOptions = Apollo.BaseMutationOptions<DeleteLinkMutation, DeleteLinkMutationVariables>;
export const SaveLinkCategoryDocument = gql`
    mutation SaveLinkCategory($entity: LinkCategoryEntityInput) {
  linkCategory: saveLinkCategory(entity: $entity) {
    ...LinkCategoryField
  }
}
    ${LinkCategoryFieldFragmentDoc}`;
export type SaveLinkCategoryMutationFn = Apollo.MutationFunction<SaveLinkCategoryMutation, SaveLinkCategoryMutationVariables>;

/**
 * __useSaveLinkCategoryMutation__
 *
 * To run a mutation, you first call `useSaveLinkCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveLinkCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveLinkCategoryMutation, { data, loading, error }] = useSaveLinkCategoryMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveLinkCategoryMutation(baseOptions?: Apollo.MutationHookOptions<SaveLinkCategoryMutation, SaveLinkCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveLinkCategoryMutation, SaveLinkCategoryMutationVariables>(SaveLinkCategoryDocument, options);
      }
export type SaveLinkCategoryMutationHookResult = ReturnType<typeof useSaveLinkCategoryMutation>;
export type SaveLinkCategoryMutationResult = Apollo.MutationResult<SaveLinkCategoryMutation>;
export type SaveLinkCategoryMutationOptions = Apollo.BaseMutationOptions<SaveLinkCategoryMutation, SaveLinkCategoryMutationVariables>;
export const DeleteLinkCategoryDocument = gql`
    mutation DeleteLinkCategory($id: String) {
  deleteLinkCategory(id: $id)
}
    `;
export type DeleteLinkCategoryMutationFn = Apollo.MutationFunction<DeleteLinkCategoryMutation, DeleteLinkCategoryMutationVariables>;

/**
 * __useDeleteLinkCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteLinkCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLinkCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLinkCategoryMutation, { data, loading, error }] = useDeleteLinkCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLinkCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLinkCategoryMutation, DeleteLinkCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLinkCategoryMutation, DeleteLinkCategoryMutationVariables>(DeleteLinkCategoryDocument, options);
      }
export type DeleteLinkCategoryMutationHookResult = ReturnType<typeof useDeleteLinkCategoryMutation>;
export type DeleteLinkCategoryMutationResult = Apollo.MutationResult<DeleteLinkCategoryMutation>;
export type DeleteLinkCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteLinkCategoryMutation, DeleteLinkCategoryMutationVariables>;
export const SaveOrganizerDocument = gql`
    mutation SaveOrganizer($entity: OrganizerEntityInput) {
  organizer: saveOrganizer(entity: $entity) {
    ...OrganizerField
  }
}
    ${OrganizerFieldFragmentDoc}`;
export type SaveOrganizerMutationFn = Apollo.MutationFunction<SaveOrganizerMutation, SaveOrganizerMutationVariables>;

/**
 * __useSaveOrganizerMutation__
 *
 * To run a mutation, you first call `useSaveOrganizerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveOrganizerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveOrganizerMutation, { data, loading, error }] = useSaveOrganizerMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveOrganizerMutation(baseOptions?: Apollo.MutationHookOptions<SaveOrganizerMutation, SaveOrganizerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveOrganizerMutation, SaveOrganizerMutationVariables>(SaveOrganizerDocument, options);
      }
export type SaveOrganizerMutationHookResult = ReturnType<typeof useSaveOrganizerMutation>;
export type SaveOrganizerMutationResult = Apollo.MutationResult<SaveOrganizerMutation>;
export type SaveOrganizerMutationOptions = Apollo.BaseMutationOptions<SaveOrganizerMutation, SaveOrganizerMutationVariables>;
export const DeleteOrganizerDocument = gql`
    mutation DeleteOrganizer($id: String) {
  deleteOrganizer(id: $id)
}
    `;
export type DeleteOrganizerMutationFn = Apollo.MutationFunction<DeleteOrganizerMutation, DeleteOrganizerMutationVariables>;

/**
 * __useDeleteOrganizerMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizerMutation, { data, loading, error }] = useDeleteOrganizerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrganizerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrganizerMutation, DeleteOrganizerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrganizerMutation, DeleteOrganizerMutationVariables>(DeleteOrganizerDocument, options);
      }
export type DeleteOrganizerMutationHookResult = ReturnType<typeof useDeleteOrganizerMutation>;
export type DeleteOrganizerMutationResult = Apollo.MutationResult<DeleteOrganizerMutation>;
export type DeleteOrganizerMutationOptions = Apollo.BaseMutationOptions<DeleteOrganizerMutation, DeleteOrganizerMutationVariables>;
export const AddRolesDocument = gql`
    mutation AddRoles($userId: String, $roleIds: [String]) {
  saveUser(entity: {id: "dasadasda"}) {
    id
  }
}
    `;
export type AddRolesMutationFn = Apollo.MutationFunction<AddRolesMutation, AddRolesMutationVariables>;

/**
 * __useAddRolesMutation__
 *
 * To run a mutation, you first call `useAddRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRolesMutation, { data, loading, error }] = useAddRolesMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      roleIds: // value for 'roleIds'
 *   },
 * });
 */
export function useAddRolesMutation(baseOptions?: Apollo.MutationHookOptions<AddRolesMutation, AddRolesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddRolesMutation, AddRolesMutationVariables>(AddRolesDocument, options);
      }
export type AddRolesMutationHookResult = ReturnType<typeof useAddRolesMutation>;
export type AddRolesMutationResult = Apollo.MutationResult<AddRolesMutation>;
export type AddRolesMutationOptions = Apollo.BaseMutationOptions<AddRolesMutation, AddRolesMutationVariables>;
export const SaveTemplateAdminDocument = gql`
    mutation SaveTemplateAdmin($entity: TemplateEntityInput) {
  saveTemplate(entity: $entity) {
    ...Template
  }
}
    ${TemplateFragmentDoc}`;
export type SaveTemplateAdminMutationFn = Apollo.MutationFunction<SaveTemplateAdminMutation, SaveTemplateAdminMutationVariables>;

/**
 * __useSaveTemplateAdminMutation__
 *
 * To run a mutation, you first call `useSaveTemplateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTemplateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTemplateAdminMutation, { data, loading, error }] = useSaveTemplateAdminMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveTemplateAdminMutation(baseOptions?: Apollo.MutationHookOptions<SaveTemplateAdminMutation, SaveTemplateAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveTemplateAdminMutation, SaveTemplateAdminMutationVariables>(SaveTemplateAdminDocument, options);
      }
export type SaveTemplateAdminMutationHookResult = ReturnType<typeof useSaveTemplateAdminMutation>;
export type SaveTemplateAdminMutationResult = Apollo.MutationResult<SaveTemplateAdminMutation>;
export type SaveTemplateAdminMutationOptions = Apollo.BaseMutationOptions<SaveTemplateAdminMutation, SaveTemplateAdminMutationVariables>;
export const DeleteTemplateDocument = gql`
    mutation DeleteTemplate($id: String) {
  deleteTemplate(id: $id)
}
    `;
export type DeleteTemplateMutationFn = Apollo.MutationFunction<DeleteTemplateMutation, DeleteTemplateMutationVariables>;

/**
 * __useDeleteTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTemplateMutation, { data, loading, error }] = useDeleteTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTemplateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTemplateMutation, DeleteTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTemplateMutation, DeleteTemplateMutationVariables>(DeleteTemplateDocument, options);
      }
export type DeleteTemplateMutationHookResult = ReturnType<typeof useDeleteTemplateMutation>;
export type DeleteTemplateMutationResult = Apollo.MutationResult<DeleteTemplateMutation>;
export type DeleteTemplateMutationOptions = Apollo.BaseMutationOptions<DeleteTemplateMutation, DeleteTemplateMutationVariables>;
export const SaveTemplateTypeAdminDocument = gql`
    mutation SaveTemplateTypeAdmin($entity: TemplateTypeEntityInput) {
  saveTemplateType(entity: $entity) {
    ...TemplateTypeField
  }
}
    ${TemplateTypeFieldFragmentDoc}`;
export type SaveTemplateTypeAdminMutationFn = Apollo.MutationFunction<SaveTemplateTypeAdminMutation, SaveTemplateTypeAdminMutationVariables>;

/**
 * __useSaveTemplateTypeAdminMutation__
 *
 * To run a mutation, you first call `useSaveTemplateTypeAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTemplateTypeAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTemplateTypeAdminMutation, { data, loading, error }] = useSaveTemplateTypeAdminMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveTemplateTypeAdminMutation(baseOptions?: Apollo.MutationHookOptions<SaveTemplateTypeAdminMutation, SaveTemplateTypeAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveTemplateTypeAdminMutation, SaveTemplateTypeAdminMutationVariables>(SaveTemplateTypeAdminDocument, options);
      }
export type SaveTemplateTypeAdminMutationHookResult = ReturnType<typeof useSaveTemplateTypeAdminMutation>;
export type SaveTemplateTypeAdminMutationResult = Apollo.MutationResult<SaveTemplateTypeAdminMutation>;
export type SaveTemplateTypeAdminMutationOptions = Apollo.BaseMutationOptions<SaveTemplateTypeAdminMutation, SaveTemplateTypeAdminMutationVariables>;
export const DeleteTemplateTypeDocument = gql`
    mutation DeleteTemplateType($id: String) {
  deleteTemplateType(id: $id)
}
    `;
export type DeleteTemplateTypeMutationFn = Apollo.MutationFunction<DeleteTemplateTypeMutation, DeleteTemplateTypeMutationVariables>;

/**
 * __useDeleteTemplateTypeMutation__
 *
 * To run a mutation, you first call `useDeleteTemplateTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTemplateTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTemplateTypeMutation, { data, loading, error }] = useDeleteTemplateTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTemplateTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTemplateTypeMutation, DeleteTemplateTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTemplateTypeMutation, DeleteTemplateTypeMutationVariables>(DeleteTemplateTypeDocument, options);
      }
export type DeleteTemplateTypeMutationHookResult = ReturnType<typeof useDeleteTemplateTypeMutation>;
export type DeleteTemplateTypeMutationResult = Apollo.MutationResult<DeleteTemplateTypeMutation>;
export type DeleteTemplateTypeMutationOptions = Apollo.BaseMutationOptions<DeleteTemplateTypeMutation, DeleteTemplateTypeMutationVariables>;
export const SaveUserTemplateAdminDocument = gql`
    mutation SaveUserTemplateAdmin($entity: UserTemplateEntityInput) {
  saveUserTemplate(entity: $entity) {
    ...UserTemplateField
  }
}
    ${UserTemplateFieldFragmentDoc}`;
export type SaveUserTemplateAdminMutationFn = Apollo.MutationFunction<SaveUserTemplateAdminMutation, SaveUserTemplateAdminMutationVariables>;

/**
 * __useSaveUserTemplateAdminMutation__
 *
 * To run a mutation, you first call `useSaveUserTemplateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserTemplateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUserTemplateAdminMutation, { data, loading, error }] = useSaveUserTemplateAdminMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveUserTemplateAdminMutation(baseOptions?: Apollo.MutationHookOptions<SaveUserTemplateAdminMutation, SaveUserTemplateAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUserTemplateAdminMutation, SaveUserTemplateAdminMutationVariables>(SaveUserTemplateAdminDocument, options);
      }
export type SaveUserTemplateAdminMutationHookResult = ReturnType<typeof useSaveUserTemplateAdminMutation>;
export type SaveUserTemplateAdminMutationResult = Apollo.MutationResult<SaveUserTemplateAdminMutation>;
export type SaveUserTemplateAdminMutationOptions = Apollo.BaseMutationOptions<SaveUserTemplateAdminMutation, SaveUserTemplateAdminMutationVariables>;
export const DeleteUserTemplateDocument = gql`
    mutation DeleteUserTemplate($id: String) {
  deleteUserTemplate(id: $id)
}
    `;
export type DeleteUserTemplateMutationFn = Apollo.MutationFunction<DeleteUserTemplateMutation, DeleteUserTemplateMutationVariables>;

/**
 * __useDeleteUserTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteUserTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserTemplateMutation, { data, loading, error }] = useDeleteUserTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserTemplateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserTemplateMutation, DeleteUserTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserTemplateMutation, DeleteUserTemplateMutationVariables>(DeleteUserTemplateDocument, options);
      }
export type DeleteUserTemplateMutationHookResult = ReturnType<typeof useDeleteUserTemplateMutation>;
export type DeleteUserTemplateMutationResult = Apollo.MutationResult<DeleteUserTemplateMutation>;
export type DeleteUserTemplateMutationOptions = Apollo.BaseMutationOptions<DeleteUserTemplateMutation, DeleteUserTemplateMutationVariables>;
export const SaveUserAdminDocument = gql`
    mutation SaveUserAdmin($user: UserEntityInput) {
  saveUser(entity: $user) {
    id
  }
}
    `;
export type SaveUserAdminMutationFn = Apollo.MutationFunction<SaveUserAdminMutation, SaveUserAdminMutationVariables>;

/**
 * __useSaveUserAdminMutation__
 *
 * To run a mutation, you first call `useSaveUserAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUserAdminMutation, { data, loading, error }] = useSaveUserAdminMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useSaveUserAdminMutation(baseOptions?: Apollo.MutationHookOptions<SaveUserAdminMutation, SaveUserAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUserAdminMutation, SaveUserAdminMutationVariables>(SaveUserAdminDocument, options);
      }
export type SaveUserAdminMutationHookResult = ReturnType<typeof useSaveUserAdminMutation>;
export type SaveUserAdminMutationResult = Apollo.MutationResult<SaveUserAdminMutation>;
export type SaveUserAdminMutationOptions = Apollo.BaseMutationOptions<SaveUserAdminMutation, SaveUserAdminMutationVariables>;
export const ApproveUserDocument = gql`
    mutation ApproveUser($entity: UserEntityInput) {
  saveUser(entity: $entity) {
    id
  }
}
    `;
export type ApproveUserMutationFn = Apollo.MutationFunction<ApproveUserMutation, ApproveUserMutationVariables>;

/**
 * __useApproveUserMutation__
 *
 * To run a mutation, you first call `useApproveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveUserMutation, { data, loading, error }] = useApproveUserMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useApproveUserMutation(baseOptions?: Apollo.MutationHookOptions<ApproveUserMutation, ApproveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApproveUserMutation, ApproveUserMutationVariables>(ApproveUserDocument, options);
      }
export type ApproveUserMutationHookResult = ReturnType<typeof useApproveUserMutation>;
export type ApproveUserMutationResult = Apollo.MutationResult<ApproveUserMutation>;
export type ApproveUserMutationOptions = Apollo.BaseMutationOptions<ApproveUserMutation, ApproveUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($userId: String) {
  deleteUser(id: $userId)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetCompaniesDocument = gql`
    query GetCompanies($params: FilterSortPaginateInput) {
  getCompanies(params: $params) {
    total
    result {
      ...Company
    }
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
      }
export function useGetCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export type GetCompaniesQueryHookResult = ReturnType<typeof useGetCompaniesQuery>;
export type GetCompaniesLazyQueryHookResult = ReturnType<typeof useGetCompaniesLazyQuery>;
export type GetCompaniesQueryResult = Apollo.QueryResult<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetCompanyDocument = gql`
    query GetCompany($entity: CompanyEntityInput) {
  getCompany(entity: $entity) {
    ...Company
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetCompanyQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
      }
export function useGetCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
        }
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>;
export type GetCompanyLazyQueryHookResult = ReturnType<typeof useGetCompanyLazyQuery>;
export type GetCompanyQueryResult = Apollo.QueryResult<GetCompanyQuery, GetCompanyQueryVariables>;
export const GetEventsAdminDocument = gql`
    query GetEventsAdmin($params: FilterSortPaginateInput) {
  getEvents(params: $params) {
    total
    result {
      ...Event
    }
  }
}
    ${EventFragmentDoc}`;

/**
 * __useGetEventsAdminQuery__
 *
 * To run a query within a React component, call `useGetEventsAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsAdminQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetEventsAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsAdminQuery, GetEventsAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsAdminQuery, GetEventsAdminQueryVariables>(GetEventsAdminDocument, options);
      }
export function useGetEventsAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsAdminQuery, GetEventsAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsAdminQuery, GetEventsAdminQueryVariables>(GetEventsAdminDocument, options);
        }
export type GetEventsAdminQueryHookResult = ReturnType<typeof useGetEventsAdminQuery>;
export type GetEventsAdminLazyQueryHookResult = ReturnType<typeof useGetEventsAdminLazyQuery>;
export type GetEventsAdminQueryResult = Apollo.QueryResult<GetEventsAdminQuery, GetEventsAdminQueryVariables>;
export const GetEventAdminDocument = gql`
    query GetEventAdmin($entity: EventEntityInput) {
  getEvent(entity: $entity) {
    ...Event
  }
}
    ${EventFragmentDoc}`;

/**
 * __useGetEventAdminQuery__
 *
 * To run a query within a React component, call `useGetEventAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventAdminQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetEventAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetEventAdminQuery, GetEventAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventAdminQuery, GetEventAdminQueryVariables>(GetEventAdminDocument, options);
      }
export function useGetEventAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventAdminQuery, GetEventAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventAdminQuery, GetEventAdminQueryVariables>(GetEventAdminDocument, options);
        }
export type GetEventAdminQueryHookResult = ReturnType<typeof useGetEventAdminQuery>;
export type GetEventAdminLazyQueryHookResult = ReturnType<typeof useGetEventAdminLazyQuery>;
export type GetEventAdminQueryResult = Apollo.QueryResult<GetEventAdminQuery, GetEventAdminQueryVariables>;
export const GetEventCategoriesAdminDocument = gql`
    query GetEventCategoriesAdmin {
  categories: getEventCategories {
    total
    result {
      ...CategoryField
    }
  }
}
    ${CategoryFieldFragmentDoc}`;

/**
 * __useGetEventCategoriesAdminQuery__
 *
 * To run a query within a React component, call `useGetEventCategoriesAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventCategoriesAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventCategoriesAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventCategoriesAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetEventCategoriesAdminQuery, GetEventCategoriesAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventCategoriesAdminQuery, GetEventCategoriesAdminQueryVariables>(GetEventCategoriesAdminDocument, options);
      }
export function useGetEventCategoriesAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventCategoriesAdminQuery, GetEventCategoriesAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventCategoriesAdminQuery, GetEventCategoriesAdminQueryVariables>(GetEventCategoriesAdminDocument, options);
        }
export type GetEventCategoriesAdminQueryHookResult = ReturnType<typeof useGetEventCategoriesAdminQuery>;
export type GetEventCategoriesAdminLazyQueryHookResult = ReturnType<typeof useGetEventCategoriesAdminLazyQuery>;
export type GetEventCategoriesAdminQueryResult = Apollo.QueryResult<GetEventCategoriesAdminQuery, GetEventCategoriesAdminQueryVariables>;
export const GetEventCategoryDocument = gql`
    query GetEventCategory($entity: EventCategoryEntityInput) {
  category: getEventCategory(entity: $entity) {
    ...CategoryField
  }
}
    ${CategoryFieldFragmentDoc}`;

/**
 * __useGetEventCategoryQuery__
 *
 * To run a query within a React component, call `useGetEventCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventCategoryQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetEventCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetEventCategoryQuery, GetEventCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventCategoryQuery, GetEventCategoryQueryVariables>(GetEventCategoryDocument, options);
      }
export function useGetEventCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventCategoryQuery, GetEventCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventCategoryQuery, GetEventCategoryQueryVariables>(GetEventCategoryDocument, options);
        }
export type GetEventCategoryQueryHookResult = ReturnType<typeof useGetEventCategoryQuery>;
export type GetEventCategoryLazyQueryHookResult = ReturnType<typeof useGetEventCategoryLazyQuery>;
export type GetEventCategoryQueryResult = Apollo.QueryResult<GetEventCategoryQuery, GetEventCategoryQueryVariables>;
export const GetGroupsDocument = gql`
    query GetGroups {
  groups: getGroups {
    result {
      ...GroupField
    }
  }
}
    ${GroupFieldFragmentDoc}`;

/**
 * __useGetGroupsQuery__
 *
 * To run a query within a React component, call `useGetGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetGroupsQuery, GetGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupsQuery, GetGroupsQueryVariables>(GetGroupsDocument, options);
      }
export function useGetGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupsQuery, GetGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupsQuery, GetGroupsQueryVariables>(GetGroupsDocument, options);
        }
export type GetGroupsQueryHookResult = ReturnType<typeof useGetGroupsQuery>;
export type GetGroupsLazyQueryHookResult = ReturnType<typeof useGetGroupsLazyQuery>;
export type GetGroupsQueryResult = Apollo.QueryResult<GetGroupsQuery, GetGroupsQueryVariables>;
export const GetGroupDocument = gql`
    query GetGroup($groupId: String) {
  group: getGroup(entity: {id: $groupId}) {
    ...GroupField
  }
}
    ${GroupFieldFragmentDoc}`;

/**
 * __useGetGroupQuery__
 *
 * To run a query within a React component, call `useGetGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGetGroupQuery(baseOptions?: Apollo.QueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, options);
      }
export function useGetGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, options);
        }
export type GetGroupQueryHookResult = ReturnType<typeof useGetGroupQuery>;
export type GetGroupLazyQueryHookResult = ReturnType<typeof useGetGroupLazyQuery>;
export type GetGroupQueryResult = Apollo.QueryResult<GetGroupQuery, GetGroupQueryVariables>;
export const GetJobAdsAdminDocument = gql`
    query GetJobAdsAdmin($params: FilterSortPaginateInput) {
  getJobAds(params: $params) {
    total
    result {
      ...JobAd
    }
  }
}
    ${JobAdFragmentDoc}`;

/**
 * __useGetJobAdsAdminQuery__
 *
 * To run a query within a React component, call `useGetJobAdsAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobAdsAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobAdsAdminQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetJobAdsAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetJobAdsAdminQuery, GetJobAdsAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobAdsAdminQuery, GetJobAdsAdminQueryVariables>(GetJobAdsAdminDocument, options);
      }
export function useGetJobAdsAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobAdsAdminQuery, GetJobAdsAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobAdsAdminQuery, GetJobAdsAdminQueryVariables>(GetJobAdsAdminDocument, options);
        }
export type GetJobAdsAdminQueryHookResult = ReturnType<typeof useGetJobAdsAdminQuery>;
export type GetJobAdsAdminLazyQueryHookResult = ReturnType<typeof useGetJobAdsAdminLazyQuery>;
export type GetJobAdsAdminQueryResult = Apollo.QueryResult<GetJobAdsAdminQuery, GetJobAdsAdminQueryVariables>;
export const GetJobAdAdminDocument = gql`
    query GetJobAdAdmin($entity: JobAdEntityInput) {
  getJobAd(entity: $entity) {
    ...JobAd
  }
}
    ${JobAdFragmentDoc}`;

/**
 * __useGetJobAdAdminQuery__
 *
 * To run a query within a React component, call `useGetJobAdAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobAdAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobAdAdminQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetJobAdAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetJobAdAdminQuery, GetJobAdAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobAdAdminQuery, GetJobAdAdminQueryVariables>(GetJobAdAdminDocument, options);
      }
export function useGetJobAdAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobAdAdminQuery, GetJobAdAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobAdAdminQuery, GetJobAdAdminQueryVariables>(GetJobAdAdminDocument, options);
        }
export type GetJobAdAdminQueryHookResult = ReturnType<typeof useGetJobAdAdminQuery>;
export type GetJobAdAdminLazyQueryHookResult = ReturnType<typeof useGetJobAdAdminLazyQuery>;
export type GetJobAdAdminQueryResult = Apollo.QueryResult<GetJobAdAdminQuery, GetJobAdAdminQueryVariables>;
export const GetJobTypesAdminDocument = gql`
    query GetJobTypesAdmin($params: FilterSortPaginateInput) {
  getJobTypes(params: $params) {
    total
    result {
      ...JobTypeField
    }
  }
}
    ${JobTypeFieldFragmentDoc}`;

/**
 * __useGetJobTypesAdminQuery__
 *
 * To run a query within a React component, call `useGetJobTypesAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobTypesAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobTypesAdminQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetJobTypesAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetJobTypesAdminQuery, GetJobTypesAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobTypesAdminQuery, GetJobTypesAdminQueryVariables>(GetJobTypesAdminDocument, options);
      }
export function useGetJobTypesAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobTypesAdminQuery, GetJobTypesAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobTypesAdminQuery, GetJobTypesAdminQueryVariables>(GetJobTypesAdminDocument, options);
        }
export type GetJobTypesAdminQueryHookResult = ReturnType<typeof useGetJobTypesAdminQuery>;
export type GetJobTypesAdminLazyQueryHookResult = ReturnType<typeof useGetJobTypesAdminLazyQuery>;
export type GetJobTypesAdminQueryResult = Apollo.QueryResult<GetJobTypesAdminQuery, GetJobTypesAdminQueryVariables>;
export const GetJobTypeDocument = gql`
    query GetJobType($entity: JobTypeEntityInput) {
  getJobType(entity: $entity) {
    ...JobTypeField
  }
}
    ${JobTypeFieldFragmentDoc}`;

/**
 * __useGetJobTypeQuery__
 *
 * To run a query within a React component, call `useGetJobTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobTypeQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetJobTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetJobTypeQuery, GetJobTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobTypeQuery, GetJobTypeQueryVariables>(GetJobTypeDocument, options);
      }
export function useGetJobTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobTypeQuery, GetJobTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobTypeQuery, GetJobTypeQueryVariables>(GetJobTypeDocument, options);
        }
export type GetJobTypeQueryHookResult = ReturnType<typeof useGetJobTypeQuery>;
export type GetJobTypeLazyQueryHookResult = ReturnType<typeof useGetJobTypeLazyQuery>;
export type GetJobTypeQueryResult = Apollo.QueryResult<GetJobTypeQuery, GetJobTypeQueryVariables>;
export const GetLinksDocument = gql`
    query GetLinks($params: FilterSortPaginateInput) {
  getLinks(params: $params) {
    total
    result {
      ...Link
    }
  }
}
    ${LinkFragmentDoc}`;

/**
 * __useGetLinksQuery__
 *
 * To run a query within a React component, call `useGetLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinksQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetLinksQuery(baseOptions?: Apollo.QueryHookOptions<GetLinksQuery, GetLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinksQuery, GetLinksQueryVariables>(GetLinksDocument, options);
      }
export function useGetLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinksQuery, GetLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinksQuery, GetLinksQueryVariables>(GetLinksDocument, options);
        }
export type GetLinksQueryHookResult = ReturnType<typeof useGetLinksQuery>;
export type GetLinksLazyQueryHookResult = ReturnType<typeof useGetLinksLazyQuery>;
export type GetLinksQueryResult = Apollo.QueryResult<GetLinksQuery, GetLinksQueryVariables>;
export const GetLinkDocument = gql`
    query GetLink($entity: LinkEntityInput) {
  getLink(entity: $entity) {
    ...Link
  }
}
    ${LinkFragmentDoc}`;

/**
 * __useGetLinkQuery__
 *
 * To run a query within a React component, call `useGetLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinkQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetLinkQuery(baseOptions?: Apollo.QueryHookOptions<GetLinkQuery, GetLinkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinkQuery, GetLinkQueryVariables>(GetLinkDocument, options);
      }
export function useGetLinkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinkQuery, GetLinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinkQuery, GetLinkQueryVariables>(GetLinkDocument, options);
        }
export type GetLinkQueryHookResult = ReturnType<typeof useGetLinkQuery>;
export type GetLinkLazyQueryHookResult = ReturnType<typeof useGetLinkLazyQuery>;
export type GetLinkQueryResult = Apollo.QueryResult<GetLinkQuery, GetLinkQueryVariables>;
export const GetLinkCategoriesAdminDocument = gql`
    query GetLinkCategoriesAdmin($params: FilterSortPaginateInput) {
  getLinkCategories(params: $params) {
    result {
      ...LinkCategoryField
    }
  }
}
    ${LinkCategoryFieldFragmentDoc}`;

/**
 * __useGetLinkCategoriesAdminQuery__
 *
 * To run a query within a React component, call `useGetLinkCategoriesAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinkCategoriesAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinkCategoriesAdminQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetLinkCategoriesAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetLinkCategoriesAdminQuery, GetLinkCategoriesAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinkCategoriesAdminQuery, GetLinkCategoriesAdminQueryVariables>(GetLinkCategoriesAdminDocument, options);
      }
export function useGetLinkCategoriesAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinkCategoriesAdminQuery, GetLinkCategoriesAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinkCategoriesAdminQuery, GetLinkCategoriesAdminQueryVariables>(GetLinkCategoriesAdminDocument, options);
        }
export type GetLinkCategoriesAdminQueryHookResult = ReturnType<typeof useGetLinkCategoriesAdminQuery>;
export type GetLinkCategoriesAdminLazyQueryHookResult = ReturnType<typeof useGetLinkCategoriesAdminLazyQuery>;
export type GetLinkCategoriesAdminQueryResult = Apollo.QueryResult<GetLinkCategoriesAdminQuery, GetLinkCategoriesAdminQueryVariables>;
export const GetLinkCategoryDocument = gql`
    query GetLinkCategory($entity: LinkCategoryEntityInput) {
  getLinkCategory(entity: $entity) {
    ...LinkCategoryField
  }
}
    ${LinkCategoryFieldFragmentDoc}`;

/**
 * __useGetLinkCategoryQuery__
 *
 * To run a query within a React component, call `useGetLinkCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinkCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinkCategoryQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetLinkCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetLinkCategoryQuery, GetLinkCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinkCategoryQuery, GetLinkCategoryQueryVariables>(GetLinkCategoryDocument, options);
      }
export function useGetLinkCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinkCategoryQuery, GetLinkCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinkCategoryQuery, GetLinkCategoryQueryVariables>(GetLinkCategoryDocument, options);
        }
export type GetLinkCategoryQueryHookResult = ReturnType<typeof useGetLinkCategoryQuery>;
export type GetLinkCategoryLazyQueryHookResult = ReturnType<typeof useGetLinkCategoryLazyQuery>;
export type GetLinkCategoryQueryResult = Apollo.QueryResult<GetLinkCategoryQuery, GetLinkCategoryQueryVariables>;
export const GetOrganizersDocument = gql`
    query GetOrganizers {
  organizers: getOrganizers {
    result {
      ...OrganizerField
    }
    total
  }
}
    ${OrganizerFieldFragmentDoc}`;

/**
 * __useGetOrganizersQuery__
 *
 * To run a query within a React component, call `useGetOrganizersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrganizersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrganizersQuery, GetOrganizersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizersQuery, GetOrganizersQueryVariables>(GetOrganizersDocument, options);
      }
export function useGetOrganizersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizersQuery, GetOrganizersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizersQuery, GetOrganizersQueryVariables>(GetOrganizersDocument, options);
        }
export type GetOrganizersQueryHookResult = ReturnType<typeof useGetOrganizersQuery>;
export type GetOrganizersLazyQueryHookResult = ReturnType<typeof useGetOrganizersLazyQuery>;
export type GetOrganizersQueryResult = Apollo.QueryResult<GetOrganizersQuery, GetOrganizersQueryVariables>;
export const GetOrganizerDocument = gql`
    query GetOrganizer($entity: OrganizerEntityInput) {
  organizer: getOrganizer(entity: $entity) {
    ...OrganizerField
  }
}
    ${OrganizerFieldFragmentDoc}`;

/**
 * __useGetOrganizerQuery__
 *
 * To run a query within a React component, call `useGetOrganizerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizerQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetOrganizerQuery(baseOptions?: Apollo.QueryHookOptions<GetOrganizerQuery, GetOrganizerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizerQuery, GetOrganizerQueryVariables>(GetOrganizerDocument, options);
      }
export function useGetOrganizerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizerQuery, GetOrganizerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizerQuery, GetOrganizerQueryVariables>(GetOrganizerDocument, options);
        }
export type GetOrganizerQueryHookResult = ReturnType<typeof useGetOrganizerQuery>;
export type GetOrganizerLazyQueryHookResult = ReturnType<typeof useGetOrganizerLazyQuery>;
export type GetOrganizerQueryResult = Apollo.QueryResult<GetOrganizerQuery, GetOrganizerQueryVariables>;
export const GetQuestionsDocument = gql`
    query GetQuestions {
  questions: getQuestions {
    result {
      ...QuestionField
    }
  }
}
    ${QuestionFieldFragmentDoc}`;

/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
      }
export function useGetQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsQueryResult = Apollo.QueryResult<GetQuestionsQuery, GetQuestionsQueryVariables>;
export const DeleteQuestionDocument = gql`
    mutation DeleteQuestion($questionId: String) {
  deleteQuestion(id: $questionId)
}
    `;
export type DeleteQuestionMutationFn = Apollo.MutationFunction<DeleteQuestionMutation, DeleteQuestionMutationVariables>;

/**
 * __useDeleteQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionMutation, { data, loading, error }] = useDeleteQuestionMutation({
 *   variables: {
 *      questionId: // value for 'questionId'
 *   },
 * });
 */
export function useDeleteQuestionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument, options);
      }
export type DeleteQuestionMutationHookResult = ReturnType<typeof useDeleteQuestionMutation>;
export type DeleteQuestionMutationResult = Apollo.MutationResult<DeleteQuestionMutation>;
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const GetRolesDocument = gql`
    query GetRoles {
  roles: getRoles {
    result {
      ...RoleField
    }
  }
}
    ${RoleFieldFragmentDoc}`;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;
export const GetTemplatesAdminDocument = gql`
    query GetTemplatesAdmin($params: FilterSortPaginateInput) {
  getTemplates(params: $params) {
    total
    result {
      ...Template
    }
  }
}
    ${TemplateFragmentDoc}`;

/**
 * __useGetTemplatesAdminQuery__
 *
 * To run a query within a React component, call `useGetTemplatesAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplatesAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplatesAdminQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetTemplatesAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetTemplatesAdminQuery, GetTemplatesAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplatesAdminQuery, GetTemplatesAdminQueryVariables>(GetTemplatesAdminDocument, options);
      }
export function useGetTemplatesAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplatesAdminQuery, GetTemplatesAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplatesAdminQuery, GetTemplatesAdminQueryVariables>(GetTemplatesAdminDocument, options);
        }
export type GetTemplatesAdminQueryHookResult = ReturnType<typeof useGetTemplatesAdminQuery>;
export type GetTemplatesAdminLazyQueryHookResult = ReturnType<typeof useGetTemplatesAdminLazyQuery>;
export type GetTemplatesAdminQueryResult = Apollo.QueryResult<GetTemplatesAdminQuery, GetTemplatesAdminQueryVariables>;
export const GetTemplateAdminDocument = gql`
    query GetTemplateAdmin($entity: TemplateEntityInput) {
  getTemplate(entity: $entity) {
    ...Template
  }
}
    ${TemplateFragmentDoc}`;

/**
 * __useGetTemplateAdminQuery__
 *
 * To run a query within a React component, call `useGetTemplateAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplateAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplateAdminQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetTemplateAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetTemplateAdminQuery, GetTemplateAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplateAdminQuery, GetTemplateAdminQueryVariables>(GetTemplateAdminDocument, options);
      }
export function useGetTemplateAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplateAdminQuery, GetTemplateAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplateAdminQuery, GetTemplateAdminQueryVariables>(GetTemplateAdminDocument, options);
        }
export type GetTemplateAdminQueryHookResult = ReturnType<typeof useGetTemplateAdminQuery>;
export type GetTemplateAdminLazyQueryHookResult = ReturnType<typeof useGetTemplateAdminLazyQuery>;
export type GetTemplateAdminQueryResult = Apollo.QueryResult<GetTemplateAdminQuery, GetTemplateAdminQueryVariables>;
export const GetTemplateTypesAdminDocument = gql`
    query GetTemplateTypesAdmin($params: FilterSortPaginateInput) {
  getTemplateTypes(params: $params) {
    total
    result {
      ...TemplateTypeField
    }
  }
}
    ${TemplateTypeFieldFragmentDoc}`;

/**
 * __useGetTemplateTypesAdminQuery__
 *
 * To run a query within a React component, call `useGetTemplateTypesAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplateTypesAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplateTypesAdminQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetTemplateTypesAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetTemplateTypesAdminQuery, GetTemplateTypesAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplateTypesAdminQuery, GetTemplateTypesAdminQueryVariables>(GetTemplateTypesAdminDocument, options);
      }
export function useGetTemplateTypesAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplateTypesAdminQuery, GetTemplateTypesAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplateTypesAdminQuery, GetTemplateTypesAdminQueryVariables>(GetTemplateTypesAdminDocument, options);
        }
export type GetTemplateTypesAdminQueryHookResult = ReturnType<typeof useGetTemplateTypesAdminQuery>;
export type GetTemplateTypesAdminLazyQueryHookResult = ReturnType<typeof useGetTemplateTypesAdminLazyQuery>;
export type GetTemplateTypesAdminQueryResult = Apollo.QueryResult<GetTemplateTypesAdminQuery, GetTemplateTypesAdminQueryVariables>;
export const GetTemplateTypeAdminDocument = gql`
    query GetTemplateTypeAdmin($entity: TemplateTypeEntityInput) {
  getTemplateType(entity: $entity) {
    ...TemplateTypeField
  }
}
    ${TemplateTypeFieldFragmentDoc}`;

/**
 * __useGetTemplateTypeAdminQuery__
 *
 * To run a query within a React component, call `useGetTemplateTypeAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplateTypeAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplateTypeAdminQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetTemplateTypeAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetTemplateTypeAdminQuery, GetTemplateTypeAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplateTypeAdminQuery, GetTemplateTypeAdminQueryVariables>(GetTemplateTypeAdminDocument, options);
      }
export function useGetTemplateTypeAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplateTypeAdminQuery, GetTemplateTypeAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplateTypeAdminQuery, GetTemplateTypeAdminQueryVariables>(GetTemplateTypeAdminDocument, options);
        }
export type GetTemplateTypeAdminQueryHookResult = ReturnType<typeof useGetTemplateTypeAdminQuery>;
export type GetTemplateTypeAdminLazyQueryHookResult = ReturnType<typeof useGetTemplateTypeAdminLazyQuery>;
export type GetTemplateTypeAdminQueryResult = Apollo.QueryResult<GetTemplateTypeAdminQuery, GetTemplateTypeAdminQueryVariables>;
export const GetUserTemplatesAdminDocument = gql`
    query GetUserTemplatesAdmin($params: FilterSortPaginateInput) {
  getUserTemplates(params: $params) {
    total
    result {
      ...UserTemplate
    }
  }
}
    ${UserTemplateFragmentDoc}`;

/**
 * __useGetUserTemplatesAdminQuery__
 *
 * To run a query within a React component, call `useGetUserTemplatesAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTemplatesAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTemplatesAdminQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetUserTemplatesAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetUserTemplatesAdminQuery, GetUserTemplatesAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTemplatesAdminQuery, GetUserTemplatesAdminQueryVariables>(GetUserTemplatesAdminDocument, options);
      }
export function useGetUserTemplatesAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTemplatesAdminQuery, GetUserTemplatesAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTemplatesAdminQuery, GetUserTemplatesAdminQueryVariables>(GetUserTemplatesAdminDocument, options);
        }
export type GetUserTemplatesAdminQueryHookResult = ReturnType<typeof useGetUserTemplatesAdminQuery>;
export type GetUserTemplatesAdminLazyQueryHookResult = ReturnType<typeof useGetUserTemplatesAdminLazyQuery>;
export type GetUserTemplatesAdminQueryResult = Apollo.QueryResult<GetUserTemplatesAdminQuery, GetUserTemplatesAdminQueryVariables>;
export const GetUserTemplateAdminDocument = gql`
    query GetUserTemplateAdmin($entity: UserTemplateEntityInput) {
  getUserTemplate(entity: $entity) {
    ...UserTemplate
  }
}
    ${UserTemplateFragmentDoc}`;

/**
 * __useGetUserTemplateAdminQuery__
 *
 * To run a query within a React component, call `useGetUserTemplateAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTemplateAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTemplateAdminQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetUserTemplateAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetUserTemplateAdminQuery, GetUserTemplateAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTemplateAdminQuery, GetUserTemplateAdminQueryVariables>(GetUserTemplateAdminDocument, options);
      }
export function useGetUserTemplateAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTemplateAdminQuery, GetUserTemplateAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTemplateAdminQuery, GetUserTemplateAdminQueryVariables>(GetUserTemplateAdminDocument, options);
        }
export type GetUserTemplateAdminQueryHookResult = ReturnType<typeof useGetUserTemplateAdminQuery>;
export type GetUserTemplateAdminLazyQueryHookResult = ReturnType<typeof useGetUserTemplateAdminLazyQuery>;
export type GetUserTemplateAdminQueryResult = Apollo.QueryResult<GetUserTemplateAdminQuery, GetUserTemplateAdminQueryVariables>;
export const GetApprovedUsersDocument = gql`
    query GetApprovedUsers {
  approvedUsers: getUsers(
    params: {expression: {entity: {operator: EQUAL, path: "approved", value: "true"}}}
  ) {
    result {
      ...UserField
    }
  }
}
    ${UserFieldFragmentDoc}`;

/**
 * __useGetApprovedUsersQuery__
 *
 * To run a query within a React component, call `useGetApprovedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApprovedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApprovedUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetApprovedUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetApprovedUsersQuery, GetApprovedUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApprovedUsersQuery, GetApprovedUsersQueryVariables>(GetApprovedUsersDocument, options);
      }
export function useGetApprovedUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApprovedUsersQuery, GetApprovedUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApprovedUsersQuery, GetApprovedUsersQueryVariables>(GetApprovedUsersDocument, options);
        }
export type GetApprovedUsersQueryHookResult = ReturnType<typeof useGetApprovedUsersQuery>;
export type GetApprovedUsersLazyQueryHookResult = ReturnType<typeof useGetApprovedUsersLazyQuery>;
export type GetApprovedUsersQueryResult = Apollo.QueryResult<GetApprovedUsersQuery, GetApprovedUsersQueryVariables>;
export const GetRequestedUsersDocument = gql`
    query GetRequestedUsers {
  requestedUsers: getUsers(
    params: {expression: {entity: {operator: EQUAL, path: "approved", value: "false"}}}
  ) {
    result {
      ...UserField
    }
  }
}
    ${UserFieldFragmentDoc}`;

/**
 * __useGetRequestedUsersQuery__
 *
 * To run a query within a React component, call `useGetRequestedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestedUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRequestedUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetRequestedUsersQuery, GetRequestedUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRequestedUsersQuery, GetRequestedUsersQueryVariables>(GetRequestedUsersDocument, options);
      }
export function useGetRequestedUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRequestedUsersQuery, GetRequestedUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRequestedUsersQuery, GetRequestedUsersQueryVariables>(GetRequestedUsersDocument, options);
        }
export type GetRequestedUsersQueryHookResult = ReturnType<typeof useGetRequestedUsersQuery>;
export type GetRequestedUsersLazyQueryHookResult = ReturnType<typeof useGetRequestedUsersLazyQuery>;
export type GetRequestedUsersQueryResult = Apollo.QueryResult<GetRequestedUsersQuery, GetRequestedUsersQueryVariables>;
export const ChatlistenerDocument = gql`
    subscription Chatlistener($token: String!) {
  addChatListener(token: $token) {
    content
    data
    title
    type
  }
}
    `;

/**
 * __useChatlistenerSubscription__
 *
 * To run a query within a React component, call `useChatlistenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatlistenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatlistenerSubscription({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChatlistenerSubscription(baseOptions: Apollo.SubscriptionHookOptions<ChatlistenerSubscription, ChatlistenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatlistenerSubscription, ChatlistenerSubscriptionVariables>(ChatlistenerDocument, options);
      }
export type ChatlistenerSubscriptionHookResult = ReturnType<typeof useChatlistenerSubscription>;
export type ChatlistenerSubscriptionResult = Apollo.SubscriptionResult<ChatlistenerSubscription>;
export const CreateTokenDocument = gql`
    mutation CreateToken($password: String, $username: String) {
  createToken(password: $password, username: $username) {
    access
    refresh
  }
}
    `;
export type CreateTokenMutationFn = Apollo.MutationFunction<CreateTokenMutation, CreateTokenMutationVariables>;

/**
 * __useCreateTokenMutation__
 *
 * To run a mutation, you first call `useCreateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTokenMutation, { data, loading, error }] = useCreateTokenMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateTokenMutation, CreateTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTokenMutation, CreateTokenMutationVariables>(CreateTokenDocument, options);
      }
export type CreateTokenMutationHookResult = ReturnType<typeof useCreateTokenMutation>;
export type CreateTokenMutationResult = Apollo.MutationResult<CreateTokenMutation>;
export type CreateTokenMutationOptions = Apollo.BaseMutationOptions<CreateTokenMutation, CreateTokenMutationVariables>;
export const DeleteEventFavoriteDocument = gql`
    mutation DeleteEventFavorite($eventId: String) {
  deleteEventFavorite(eventId: $eventId) {
    id
  }
}
    `;
export type DeleteEventFavoriteMutationFn = Apollo.MutationFunction<DeleteEventFavoriteMutation, DeleteEventFavoriteMutationVariables>;

/**
 * __useDeleteEventFavoriteMutation__
 *
 * To run a mutation, you first call `useDeleteEventFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventFavoriteMutation, { data, loading, error }] = useDeleteEventFavoriteMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useDeleteEventFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventFavoriteMutation, DeleteEventFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventFavoriteMutation, DeleteEventFavoriteMutationVariables>(DeleteEventFavoriteDocument, options);
      }
export type DeleteEventFavoriteMutationHookResult = ReturnType<typeof useDeleteEventFavoriteMutation>;
export type DeleteEventFavoriteMutationResult = Apollo.MutationResult<DeleteEventFavoriteMutation>;
export type DeleteEventFavoriteMutationOptions = Apollo.BaseMutationOptions<DeleteEventFavoriteMutation, DeleteEventFavoriteMutationVariables>;
export const DeleteJobAdFavoriteDocument = gql`
    mutation DeleteJobAdFavorite($jobAdId: String) {
  deleteJobAdFavorite(jobAdId: $jobAdId) {
    id
  }
}
    `;
export type DeleteJobAdFavoriteMutationFn = Apollo.MutationFunction<DeleteJobAdFavoriteMutation, DeleteJobAdFavoriteMutationVariables>;

/**
 * __useDeleteJobAdFavoriteMutation__
 *
 * To run a mutation, you first call `useDeleteJobAdFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobAdFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobAdFavoriteMutation, { data, loading, error }] = useDeleteJobAdFavoriteMutation({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *   },
 * });
 */
export function useDeleteJobAdFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobAdFavoriteMutation, DeleteJobAdFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJobAdFavoriteMutation, DeleteJobAdFavoriteMutationVariables>(DeleteJobAdFavoriteDocument, options);
      }
export type DeleteJobAdFavoriteMutationHookResult = ReturnType<typeof useDeleteJobAdFavoriteMutation>;
export type DeleteJobAdFavoriteMutationResult = Apollo.MutationResult<DeleteJobAdFavoriteMutation>;
export type DeleteJobAdFavoriteMutationOptions = Apollo.BaseMutationOptions<DeleteJobAdFavoriteMutation, DeleteJobAdFavoriteMutationVariables>;
export const GetChatDocument = gql`
    query GetChat($entity: ChatEntityInput) {
  getChat(entity: $entity) {
    id
    name
    participants {
      user {
        id
      }
    }
  }
}
    `;

/**
 * __useGetChatQuery__
 *
 * To run a query within a React component, call `useGetChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetChatQuery(baseOptions?: Apollo.QueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, options);
      }
export function useGetChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, options);
        }
export type GetChatQueryHookResult = ReturnType<typeof useGetChatQuery>;
export type GetChatLazyQueryHookResult = ReturnType<typeof useGetChatLazyQuery>;
export type GetChatQueryResult = Apollo.QueryResult<GetChatQuery, GetChatQueryVariables>;
export const GetChatsDocument = gql`
    query GetChats {
  getChats {
    result {
      name
      id
      modified
    }
  }
}
    `;

/**
 * __useGetChatsQuery__
 *
 * To run a query within a React component, call `useGetChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChatsQuery(baseOptions?: Apollo.QueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
      }
export function useGetChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
        }
export type GetChatsQueryHookResult = ReturnType<typeof useGetChatsQuery>;
export type GetChatsLazyQueryHookResult = ReturnType<typeof useGetChatsLazyQuery>;
export type GetChatsQueryResult = Apollo.QueryResult<GetChatsQuery, GetChatsQueryVariables>;
export const GetEventDocument = gql`
    query GetEvent($id: String!) {
  getEvent(entity: {id: $id}) {
    name
    nextSchedule {
      startDate
      endDate
    }
    titleImage {
      id
    }
    id
    description
    address {
      street
      place
      postalCode
      latitude
      longitude
      id
      houseNumber
      created
    }
    schedules {
      id
      endDate
      startDate
    }
    category {
      id
      name
    }
    organizer {
      id
      name
      phone
      website
      mail
    }
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQuery, GetEventQueryVariables>;
export const GetEventCategorieNamesDocument = gql`
    query GetEventCategorieNames($params: FilterSortPaginateInput) {
  getEventCategories(params: $params) {
    result {
      id
      name
    }
  }
}
    `;

/**
 * __useGetEventCategorieNamesQuery__
 *
 * To run a query within a React component, call `useGetEventCategorieNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventCategorieNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventCategorieNamesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetEventCategorieNamesQuery(baseOptions?: Apollo.QueryHookOptions<GetEventCategorieNamesQuery, GetEventCategorieNamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventCategorieNamesQuery, GetEventCategorieNamesQueryVariables>(GetEventCategorieNamesDocument, options);
      }
export function useGetEventCategorieNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventCategorieNamesQuery, GetEventCategorieNamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventCategorieNamesQuery, GetEventCategorieNamesQueryVariables>(GetEventCategorieNamesDocument, options);
        }
export type GetEventCategorieNamesQueryHookResult = ReturnType<typeof useGetEventCategorieNamesQuery>;
export type GetEventCategorieNamesLazyQueryHookResult = ReturnType<typeof useGetEventCategorieNamesLazyQuery>;
export type GetEventCategorieNamesQueryResult = Apollo.QueryResult<GetEventCategorieNamesQuery, GetEventCategorieNamesQueryVariables>;
export const GetEventCategoriesDocument = gql`
    query GetEventCategories($params: FilterSortPaginateInput) {
  getEventCategories(params: $params) {
    result {
      name
      id
      events {
        nextSchedule {
          startDate
          endDate
        }
        titleImage {
          name
          id
        }
        schedules {
          id
          startDate
          endDate
        }
        name
        id
        organizer {
          website
          phone
          name
          mail
          id
        }
        description
        address {
          houseNumber
          id
          latitude
          longitude
          modified
          place
          postalCode
          street
        }
      }
    }
  }
}
    `;

/**
 * __useGetEventCategoriesQuery__
 *
 * To run a query within a React component, call `useGetEventCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventCategoriesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetEventCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetEventCategoriesQuery, GetEventCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventCategoriesQuery, GetEventCategoriesQueryVariables>(GetEventCategoriesDocument, options);
      }
export function useGetEventCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventCategoriesQuery, GetEventCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventCategoriesQuery, GetEventCategoriesQueryVariables>(GetEventCategoriesDocument, options);
        }
export type GetEventCategoriesQueryHookResult = ReturnType<typeof useGetEventCategoriesQuery>;
export type GetEventCategoriesLazyQueryHookResult = ReturnType<typeof useGetEventCategoriesLazyQuery>;
export type GetEventCategoriesQueryResult = Apollo.QueryResult<GetEventCategoriesQuery, GetEventCategoriesQueryVariables>;
export const GetEventImagesDocument = gql`
    query GetEventImages($entity: EventEntityInput) {
  getEvent(entity: $entity) {
    images {
      id
      name
    }
  }
}
    `;

/**
 * __useGetEventImagesQuery__
 *
 * To run a query within a React component, call `useGetEventImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventImagesQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetEventImagesQuery(baseOptions?: Apollo.QueryHookOptions<GetEventImagesQuery, GetEventImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventImagesQuery, GetEventImagesQueryVariables>(GetEventImagesDocument, options);
      }
export function useGetEventImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventImagesQuery, GetEventImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventImagesQuery, GetEventImagesQueryVariables>(GetEventImagesDocument, options);
        }
export type GetEventImagesQueryHookResult = ReturnType<typeof useGetEventImagesQuery>;
export type GetEventImagesLazyQueryHookResult = ReturnType<typeof useGetEventImagesLazyQuery>;
export type GetEventImagesQueryResult = Apollo.QueryResult<GetEventImagesQuery, GetEventImagesQueryVariables>;
export const GetEventsDocument = gql`
    query getEvents($params: FilterSortPaginateInput) {
  getEvents(params: $params) {
    result {
      name
      nextSchedule {
        startDate
        endDate
      }
      titleImage {
        id
      }
      id
      description
      address {
        street
        place
        postalCode
        latitude
        longitude
        id
        houseNumber
        created
      }
      schedules {
        id
        endDate
        startDate
      }
      category {
        id
        name
      }
      organizer {
        id
        name
        phone
        website
        mail
      }
    }
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetJobAdDocument = gql`
    query GetJobAd($entity: JobAdEntityInput) {
  getJobAd(entity: $entity) {
    company {
      address {
        houseNumber
        id
        latitude
        longitude
        place
        postalCode
        street
      }
      id
      mail
      name
      phone
      website
    }
    dueDate
    content
    id
    title
    type {
      color
      id
      name
    }
    startDate
  }
}
    `;

/**
 * __useGetJobAdQuery__
 *
 * To run a query within a React component, call `useGetJobAdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobAdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobAdQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetJobAdQuery(baseOptions?: Apollo.QueryHookOptions<GetJobAdQuery, GetJobAdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobAdQuery, GetJobAdQueryVariables>(GetJobAdDocument, options);
      }
export function useGetJobAdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobAdQuery, GetJobAdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobAdQuery, GetJobAdQueryVariables>(GetJobAdDocument, options);
        }
export type GetJobAdQueryHookResult = ReturnType<typeof useGetJobAdQuery>;
export type GetJobAdLazyQueryHookResult = ReturnType<typeof useGetJobAdLazyQuery>;
export type GetJobAdQueryResult = Apollo.QueryResult<GetJobAdQuery, GetJobAdQueryVariables>;
export const GetJobAdsDocument = gql`
    query GetJobAds($params: FilterSortPaginateInput) {
  getJobAds(params: $params) {
    result {
      company {
        address {
          houseNumber
          id
          latitude
          longitude
          place
          postalCode
          street
        }
        id
        mail
        name
        phone
        website
      }
      dueDate
      id
      title
      type {
        color
        id
        name
      }
      startDate
    }
  }
}
    `;

/**
 * __useGetJobAdsQuery__
 *
 * To run a query within a React component, call `useGetJobAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobAdsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetJobAdsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobAdsQuery, GetJobAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobAdsQuery, GetJobAdsQueryVariables>(GetJobAdsDocument, options);
      }
export function useGetJobAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobAdsQuery, GetJobAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobAdsQuery, GetJobAdsQueryVariables>(GetJobAdsDocument, options);
        }
export type GetJobAdsQueryHookResult = ReturnType<typeof useGetJobAdsQuery>;
export type GetJobAdsLazyQueryHookResult = ReturnType<typeof useGetJobAdsLazyQuery>;
export type GetJobAdsQueryResult = Apollo.QueryResult<GetJobAdsQuery, GetJobAdsQueryVariables>;
export const GetJobTypesDocument = gql`
    query GetJobTypes($params: FilterSortPaginateInput) {
  getJobTypes(params: $params) {
    result {
      color
      created
      id
      name
      modified
      jobAds {
        created
        dueDate
        id
        modified
        startDate
        title
        company {
          address {
            houseNumber
            id
            place
            postalCode
            street
          }
          id
          mail
          name
          phone
          website
          modified
          created
        }
        type {
          color
        }
      }
    }
  }
}
    `;

/**
 * __useGetJobTypesQuery__
 *
 * To run a query within a React component, call `useGetJobTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobTypesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetJobTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetJobTypesQuery, GetJobTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobTypesQuery, GetJobTypesQueryVariables>(GetJobTypesDocument, options);
      }
export function useGetJobTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobTypesQuery, GetJobTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobTypesQuery, GetJobTypesQueryVariables>(GetJobTypesDocument, options);
        }
export type GetJobTypesQueryHookResult = ReturnType<typeof useGetJobTypesQuery>;
export type GetJobTypesLazyQueryHookResult = ReturnType<typeof useGetJobTypesLazyQuery>;
export type GetJobTypesQueryResult = Apollo.QueryResult<GetJobTypesQuery, GetJobTypesQueryVariables>;
export const GetLinkCategoriesDocument = gql`
    query GetLinkCategories($params: FilterSortPaginateInput) {
  getLinkCategories(params: $params) {
    result {
      id
      name
      link {
        id
        title
        url
      }
    }
  }
}
    `;

/**
 * __useGetLinkCategoriesQuery__
 *
 * To run a query within a React component, call `useGetLinkCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinkCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinkCategoriesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetLinkCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetLinkCategoriesQuery, GetLinkCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinkCategoriesQuery, GetLinkCategoriesQueryVariables>(GetLinkCategoriesDocument, options);
      }
export function useGetLinkCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinkCategoriesQuery, GetLinkCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinkCategoriesQuery, GetLinkCategoriesQueryVariables>(GetLinkCategoriesDocument, options);
        }
export type GetLinkCategoriesQueryHookResult = ReturnType<typeof useGetLinkCategoriesQuery>;
export type GetLinkCategoriesLazyQueryHookResult = ReturnType<typeof useGetLinkCategoriesLazyQuery>;
export type GetLinkCategoriesQueryResult = Apollo.QueryResult<GetLinkCategoriesQuery, GetLinkCategoriesQueryVariables>;
export const GetMeAssignmentsDocument = gql`
    query GetMeAssignments {
  me {
    assignments {
      assignmentState {
        name
      }
      id
      questionnaire {
        questions {
          id
          item
        }
      }
    }
  }
}
    `;

/**
 * __useGetMeAssignmentsQuery__
 *
 * To run a query within a React component, call `useGetMeAssignmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeAssignmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeAssignmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeAssignmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetMeAssignmentsQuery, GetMeAssignmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeAssignmentsQuery, GetMeAssignmentsQueryVariables>(GetMeAssignmentsDocument, options);
      }
export function useGetMeAssignmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeAssignmentsQuery, GetMeAssignmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeAssignmentsQuery, GetMeAssignmentsQueryVariables>(GetMeAssignmentsDocument, options);
        }
export type GetMeAssignmentsQueryHookResult = ReturnType<typeof useGetMeAssignmentsQuery>;
export type GetMeAssignmentsLazyQueryHookResult = ReturnType<typeof useGetMeAssignmentsLazyQuery>;
export type GetMeAssignmentsQueryResult = Apollo.QueryResult<GetMeAssignmentsQuery, GetMeAssignmentsQueryVariables>;
export const GetMeBasicDocument = gql`
    query GetMeBasic {
  me {
    id
    fullname
    phone
    email
    profilePicture {
      id
    }
  }
}
    `;

/**
 * __useGetMeBasicQuery__
 *
 * To run a query within a React component, call `useGetMeBasicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeBasicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeBasicQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeBasicQuery(baseOptions?: Apollo.QueryHookOptions<GetMeBasicQuery, GetMeBasicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeBasicQuery, GetMeBasicQueryVariables>(GetMeBasicDocument, options);
      }
export function useGetMeBasicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeBasicQuery, GetMeBasicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeBasicQuery, GetMeBasicQueryVariables>(GetMeBasicDocument, options);
        }
export type GetMeBasicQueryHookResult = ReturnType<typeof useGetMeBasicQuery>;
export type GetMeBasicLazyQueryHookResult = ReturnType<typeof useGetMeBasicLazyQuery>;
export type GetMeBasicQueryResult = Apollo.QueryResult<GetMeBasicQuery, GetMeBasicQueryVariables>;
export const GetMeFavoritesDocument = gql`
    query GetMeFavorites {
  me {
    id
    favoriteEvents {
      id
      titleImage {
        id
        base64
        mimeType
      }
      schedules {
        endDate
        startDate
      }
      nextSchedule {
        endDate
        startDate
      }
      name
      address {
        houseNumber
        place
        postalCode
        street
      }
    }
    favoriteJobAds {
      id
      company {
        address {
          houseNumber
          place
          postalCode
          street
        }
        mail
        name
        phone
        website
      }
      title
      type {
        color
      }
      startDate
      dueDate
    }
  }
}
    `;

/**
 * __useGetMeFavoritesQuery__
 *
 * To run a query within a React component, call `useGetMeFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeFavoritesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeFavoritesQuery(baseOptions?: Apollo.QueryHookOptions<GetMeFavoritesQuery, GetMeFavoritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeFavoritesQuery, GetMeFavoritesQueryVariables>(GetMeFavoritesDocument, options);
      }
export function useGetMeFavoritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeFavoritesQuery, GetMeFavoritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeFavoritesQuery, GetMeFavoritesQueryVariables>(GetMeFavoritesDocument, options);
        }
export type GetMeFavoritesQueryHookResult = ReturnType<typeof useGetMeFavoritesQuery>;
export type GetMeFavoritesLazyQueryHookResult = ReturnType<typeof useGetMeFavoritesLazyQuery>;
export type GetMeFavoritesQueryResult = Apollo.QueryResult<GetMeFavoritesQuery, GetMeFavoritesQueryVariables>;
export const FeedbacksDocument = gql`
    query Feedbacks {
  me {
    feedbacks {
      id
      rating
      course {
        name
      }
    }
  }
}
    `;

/**
 * __useFeedbacksQuery__
 *
 * To run a query within a React component, call `useFeedbacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedbacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedbacksQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedbacksQuery(baseOptions?: Apollo.QueryHookOptions<FeedbacksQuery, FeedbacksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedbacksQuery, FeedbacksQueryVariables>(FeedbacksDocument, options);
      }
export function useFeedbacksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedbacksQuery, FeedbacksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedbacksQuery, FeedbacksQueryVariables>(FeedbacksDocument, options);
        }
export type FeedbacksQueryHookResult = ReturnType<typeof useFeedbacksQuery>;
export type FeedbacksLazyQueryHookResult = ReturnType<typeof useFeedbacksLazyQuery>;
export type FeedbacksQueryResult = Apollo.QueryResult<FeedbacksQuery, FeedbacksQueryVariables>;
export const GetMeUploadsDocument = gql`
    query GetMeUploads {
  me {
    id
    uploads {
      id
      mimeType
      base64
      name
    }
  }
}
    `;

/**
 * __useGetMeUploadsQuery__
 *
 * To run a query within a React component, call `useGetMeUploadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeUploadsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeUploadsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeUploadsQuery(baseOptions?: Apollo.QueryHookOptions<GetMeUploadsQuery, GetMeUploadsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeUploadsQuery, GetMeUploadsQueryVariables>(GetMeUploadsDocument, options);
      }
export function useGetMeUploadsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeUploadsQuery, GetMeUploadsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeUploadsQuery, GetMeUploadsQueryVariables>(GetMeUploadsDocument, options);
        }
export type GetMeUploadsQueryHookResult = ReturnType<typeof useGetMeUploadsQuery>;
export type GetMeUploadsLazyQueryHookResult = ReturnType<typeof useGetMeUploadsLazyQuery>;
export type GetMeUploadsQueryResult = Apollo.QueryResult<GetMeUploadsQuery, GetMeUploadsQueryVariables>;
export const GetMeUserTemplatesDocument = gql`
    query GetMeUserTemplates {
  me {
    id
    userTemplates {
      id
      content
      name
      templateType {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useGetMeUserTemplatesQuery__
 *
 * To run a query within a React component, call `useGetMeUserTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeUserTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeUserTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeUserTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<GetMeUserTemplatesQuery, GetMeUserTemplatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeUserTemplatesQuery, GetMeUserTemplatesQueryVariables>(GetMeUserTemplatesDocument, options);
      }
export function useGetMeUserTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeUserTemplatesQuery, GetMeUserTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeUserTemplatesQuery, GetMeUserTemplatesQueryVariables>(GetMeUserTemplatesDocument, options);
        }
export type GetMeUserTemplatesQueryHookResult = ReturnType<typeof useGetMeUserTemplatesQuery>;
export type GetMeUserTemplatesLazyQueryHookResult = ReturnType<typeof useGetMeUserTemplatesLazyQuery>;
export type GetMeUserTemplatesQueryResult = Apollo.QueryResult<GetMeUserTemplatesQuery, GetMeUserTemplatesQueryVariables>;
export const GetMessagesDocument = gql`
    query GetMessages($params: FilterSortPaginateInput) {
  getMessages(params: $params) {
    result {
      id
      parent {
        id
        user {
          fullname
        }
        content
      }
      content
      media {
        id
      }
      user {
        id
        fullname
      }
    }
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const GetNotificationsDocument = gql`
    query GetNotifications {
  me {
    notifications {
      id
      read
      title
      content
      created
    }
  }
}
    `;

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a React component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNotificationsQuery(baseOptions?: Apollo.QueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
      }
export function useGetNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
        }
export type GetNotificationsQueryHookResult = ReturnType<typeof useGetNotificationsQuery>;
export type GetNotificationsLazyQueryHookResult = ReturnType<typeof useGetNotificationsLazyQuery>;
export type GetNotificationsQueryResult = Apollo.QueryResult<GetNotificationsQuery, GetNotificationsQueryVariables>;
export const GetTemplateDocument = gql`
    query GetTemplate($id: String!) {
  getTemplate(entity: {id: $id}) {
    id
    name
    content
  }
}
    `;

/**
 * __useGetTemplateQuery__
 *
 * To run a query within a React component, call `useGetTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTemplateQuery(baseOptions: Apollo.QueryHookOptions<GetTemplateQuery, GetTemplateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplateQuery, GetTemplateQueryVariables>(GetTemplateDocument, options);
      }
export function useGetTemplateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplateQuery, GetTemplateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplateQuery, GetTemplateQueryVariables>(GetTemplateDocument, options);
        }
export type GetTemplateQueryHookResult = ReturnType<typeof useGetTemplateQuery>;
export type GetTemplateLazyQueryHookResult = ReturnType<typeof useGetTemplateLazyQuery>;
export type GetTemplateQueryResult = Apollo.QueryResult<GetTemplateQuery, GetTemplateQueryVariables>;
export const GetTemplateTypesDocument = gql`
    query GetTemplateTypes($params: FilterSortPaginateInput) {
  getTemplateTypes(params: $params) {
    result {
      id
      name
    }
  }
}
    `;

/**
 * __useGetTemplateTypesQuery__
 *
 * To run a query within a React component, call `useGetTemplateTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplateTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplateTypesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetTemplateTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetTemplateTypesQuery, GetTemplateTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplateTypesQuery, GetTemplateTypesQueryVariables>(GetTemplateTypesDocument, options);
      }
export function useGetTemplateTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplateTypesQuery, GetTemplateTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplateTypesQuery, GetTemplateTypesQueryVariables>(GetTemplateTypesDocument, options);
        }
export type GetTemplateTypesQueryHookResult = ReturnType<typeof useGetTemplateTypesQuery>;
export type GetTemplateTypesLazyQueryHookResult = ReturnType<typeof useGetTemplateTypesLazyQuery>;
export type GetTemplateTypesQueryResult = Apollo.QueryResult<GetTemplateTypesQuery, GetTemplateTypesQueryVariables>;
export const GetTemplatesDocument = gql`
    query GetTemplates($id: String!) {
  getTemplates(
    params: {expression: {entity: {operator: EQUAL, path: "templateType.id", value: $id}}}
  ) {
    result {
      id
      name
    }
  }
}
    `;

/**
 * __useGetTemplatesQuery__
 *
 * To run a query within a React component, call `useGetTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplatesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTemplatesQuery(baseOptions: Apollo.QueryHookOptions<GetTemplatesQuery, GetTemplatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplatesQuery, GetTemplatesQueryVariables>(GetTemplatesDocument, options);
      }
export function useGetTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplatesQuery, GetTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplatesQuery, GetTemplatesQueryVariables>(GetTemplatesDocument, options);
        }
export type GetTemplatesQueryHookResult = ReturnType<typeof useGetTemplatesQuery>;
export type GetTemplatesLazyQueryHookResult = ReturnType<typeof useGetTemplatesLazyQuery>;
export type GetTemplatesQueryResult = Apollo.QueryResult<GetTemplatesQuery, GetTemplatesQueryVariables>;
export const GetUserTemplateDocument = gql`
    query GetUserTemplate($id: String!) {
  getUserTemplate(entity: {id: $id}) {
    id
    name
    content
  }
}
    `;

/**
 * __useGetUserTemplateQuery__
 *
 * To run a query within a React component, call `useGetUserTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTemplateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserTemplateQuery(baseOptions: Apollo.QueryHookOptions<GetUserTemplateQuery, GetUserTemplateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTemplateQuery, GetUserTemplateQueryVariables>(GetUserTemplateDocument, options);
      }
export function useGetUserTemplateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTemplateQuery, GetUserTemplateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTemplateQuery, GetUserTemplateQueryVariables>(GetUserTemplateDocument, options);
        }
export type GetUserTemplateQueryHookResult = ReturnType<typeof useGetUserTemplateQuery>;
export type GetUserTemplateLazyQueryHookResult = ReturnType<typeof useGetUserTemplateLazyQuery>;
export type GetUserTemplateQueryResult = Apollo.QueryResult<GetUserTemplateQuery, GetUserTemplateQueryVariables>;
export const GetUserTemplatesDocument = gql`
    query GetUserTemplates($id: String!) {
  getUserTemplates(
    params: {expression: {entity: {operator: EQUAL, path: "templateType.id", value: $id}}}
  ) {
    result {
      id
      name
      content
    }
  }
}
    `;

/**
 * __useGetUserTemplatesQuery__
 *
 * To run a query within a React component, call `useGetUserTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTemplatesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserTemplatesQuery(baseOptions: Apollo.QueryHookOptions<GetUserTemplatesQuery, GetUserTemplatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTemplatesQuery, GetUserTemplatesQueryVariables>(GetUserTemplatesDocument, options);
      }
export function useGetUserTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTemplatesQuery, GetUserTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTemplatesQuery, GetUserTemplatesQueryVariables>(GetUserTemplatesDocument, options);
        }
export type GetUserTemplatesQueryHookResult = ReturnType<typeof useGetUserTemplatesQuery>;
export type GetUserTemplatesLazyQueryHookResult = ReturnType<typeof useGetUserTemplatesLazyQuery>;
export type GetUserTemplatesQueryResult = Apollo.QueryResult<GetUserTemplatesQuery, GetUserTemplatesQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    result {
      fullname
      id
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const RefreshTokenDocument = gql`
    mutation refreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    access
    refresh
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($entity: UserEntityInput) {
  saveUser(entity: $entity) {
    email
    id
    fullname
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($key: String, $password: String!) {
  resetPassword(key: $key, password: $password)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      key: // value for 'key'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SaveAssignmentDocument = gql`
    mutation SaveAssignment($entity: AssignmentEntityInput) {
  saveAssignment(entity: $entity) {
    id
  }
}
    `;
export type SaveAssignmentMutationFn = Apollo.MutationFunction<SaveAssignmentMutation, SaveAssignmentMutationVariables>;

/**
 * __useSaveAssignmentMutation__
 *
 * To run a mutation, you first call `useSaveAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAssignmentMutation, { data, loading, error }] = useSaveAssignmentMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<SaveAssignmentMutation, SaveAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveAssignmentMutation, SaveAssignmentMutationVariables>(SaveAssignmentDocument, options);
      }
export type SaveAssignmentMutationHookResult = ReturnType<typeof useSaveAssignmentMutation>;
export type SaveAssignmentMutationResult = Apollo.MutationResult<SaveAssignmentMutation>;
export type SaveAssignmentMutationOptions = Apollo.BaseMutationOptions<SaveAssignmentMutation, SaveAssignmentMutationVariables>;
export const SaveChatDocument = gql`
    mutation SaveChat($entity: ChatEntityInput) {
  saveChat(entity: $entity) {
    id
  }
}
    `;
export type SaveChatMutationFn = Apollo.MutationFunction<SaveChatMutation, SaveChatMutationVariables>;

/**
 * __useSaveChatMutation__
 *
 * To run a mutation, you first call `useSaveChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveChatMutation, { data, loading, error }] = useSaveChatMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveChatMutation(baseOptions?: Apollo.MutationHookOptions<SaveChatMutation, SaveChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveChatMutation, SaveChatMutationVariables>(SaveChatDocument, options);
      }
export type SaveChatMutationHookResult = ReturnType<typeof useSaveChatMutation>;
export type SaveChatMutationResult = Apollo.MutationResult<SaveChatMutation>;
export type SaveChatMutationOptions = Apollo.BaseMutationOptions<SaveChatMutation, SaveChatMutationVariables>;
export const SaveFeedbackDocument = gql`
    mutation SaveFeedback($entity: FeedbackEntityInput) {
  saveFeedback(entity: $entity) {
    id
  }
}
    `;
export type SaveFeedbackMutationFn = Apollo.MutationFunction<SaveFeedbackMutation, SaveFeedbackMutationVariables>;

/**
 * __useSaveFeedbackMutation__
 *
 * To run a mutation, you first call `useSaveFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveFeedbackMutation, { data, loading, error }] = useSaveFeedbackMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<SaveFeedbackMutation, SaveFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveFeedbackMutation, SaveFeedbackMutationVariables>(SaveFeedbackDocument, options);
      }
export type SaveFeedbackMutationHookResult = ReturnType<typeof useSaveFeedbackMutation>;
export type SaveFeedbackMutationResult = Apollo.MutationResult<SaveFeedbackMutation>;
export type SaveFeedbackMutationOptions = Apollo.BaseMutationOptions<SaveFeedbackMutation, SaveFeedbackMutationVariables>;
export const SaveMessageDocument = gql`
    mutation SaveMessage($entity: MessageEntityInput) {
  saveMessage(entity: $entity) {
    id
  }
}
    `;
export type SaveMessageMutationFn = Apollo.MutationFunction<SaveMessageMutation, SaveMessageMutationVariables>;

/**
 * __useSaveMessageMutation__
 *
 * To run a mutation, you first call `useSaveMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveMessageMutation, { data, loading, error }] = useSaveMessageMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveMessageMutation(baseOptions?: Apollo.MutationHookOptions<SaveMessageMutation, SaveMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveMessageMutation, SaveMessageMutationVariables>(SaveMessageDocument, options);
      }
export type SaveMessageMutationHookResult = ReturnType<typeof useSaveMessageMutation>;
export type SaveMessageMutationResult = Apollo.MutationResult<SaveMessageMutation>;
export type SaveMessageMutationOptions = Apollo.BaseMutationOptions<SaveMessageMutation, SaveMessageMutationVariables>;
export const SaveNotificationDocument = gql`
    mutation SaveNotification($entity: NotificationEntityInput) {
  saveNotification(entity: $entity) {
    id
  }
}
    `;
export type SaveNotificationMutationFn = Apollo.MutationFunction<SaveNotificationMutation, SaveNotificationMutationVariables>;

/**
 * __useSaveNotificationMutation__
 *
 * To run a mutation, you first call `useSaveNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveNotificationMutation, { data, loading, error }] = useSaveNotificationMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveNotificationMutation(baseOptions?: Apollo.MutationHookOptions<SaveNotificationMutation, SaveNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveNotificationMutation, SaveNotificationMutationVariables>(SaveNotificationDocument, options);
      }
export type SaveNotificationMutationHookResult = ReturnType<typeof useSaveNotificationMutation>;
export type SaveNotificationMutationResult = Apollo.MutationResult<SaveNotificationMutation>;
export type SaveNotificationMutationOptions = Apollo.BaseMutationOptions<SaveNotificationMutation, SaveNotificationMutationVariables>;
export const SaveSubscriptionDocument = gql`
    mutation SaveSubscription($entity: SubscriptionEntityInput) {
  saveSubscription(entity: $entity) {
    id
  }
}
    `;
export type SaveSubscriptionMutationFn = Apollo.MutationFunction<SaveSubscriptionMutation, SaveSubscriptionMutationVariables>;

/**
 * __useSaveSubscriptionMutation__
 *
 * To run a mutation, you first call `useSaveSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveSubscriptionMutation, { data, loading, error }] = useSaveSubscriptionMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<SaveSubscriptionMutation, SaveSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveSubscriptionMutation, SaveSubscriptionMutationVariables>(SaveSubscriptionDocument, options);
      }
export type SaveSubscriptionMutationHookResult = ReturnType<typeof useSaveSubscriptionMutation>;
export type SaveSubscriptionMutationResult = Apollo.MutationResult<SaveSubscriptionMutation>;
export type SaveSubscriptionMutationOptions = Apollo.BaseMutationOptions<SaveSubscriptionMutation, SaveSubscriptionMutationVariables>;
export const SaveUploadsDocument = gql`
    mutation SaveUploads($uploads: [MediaEntityInput]) {
  addUploads(uploads: $uploads) {
    id
  }
}
    `;
export type SaveUploadsMutationFn = Apollo.MutationFunction<SaveUploadsMutation, SaveUploadsMutationVariables>;

/**
 * __useSaveUploadsMutation__
 *
 * To run a mutation, you first call `useSaveUploadsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUploadsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUploadsMutation, { data, loading, error }] = useSaveUploadsMutation({
 *   variables: {
 *      uploads: // value for 'uploads'
 *   },
 * });
 */
export function useSaveUploadsMutation(baseOptions?: Apollo.MutationHookOptions<SaveUploadsMutation, SaveUploadsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUploadsMutation, SaveUploadsMutationVariables>(SaveUploadsDocument, options);
      }
export type SaveUploadsMutationHookResult = ReturnType<typeof useSaveUploadsMutation>;
export type SaveUploadsMutationResult = Apollo.MutationResult<SaveUploadsMutation>;
export type SaveUploadsMutationOptions = Apollo.BaseMutationOptions<SaveUploadsMutation, SaveUploadsMutationVariables>;
export const SaveUserDocument = gql`
    mutation SaveUser($entity: UserEntityInput) {
  saveUser(entity: $entity) {
    assignments {
      questionnaire {
        name
        questions {
          answers {
            rating
            id
          }
          id
          item
        }
        id
      }
      id
    }
    email
    favoriteEvents {
      id
      name
      titleImage {
        base64
        id
        modified
        name
      }
      images {
        base64
        id
        mimeType
        name
      }
      nextSchedule {
        endDate
        id
        startDate
      }
    }
    favoriteJobAds {
      type {
        color
      }
      startDate
      dueDate
      title
      company {
        address {
          houseNumber
          id
          street
          postalCode
        }
        mail
        name
        phone
        website
        id
      }
    }
    fullname
    id
    phone
    profilePicture {
      base64
      id
      mimeType
      name
    }
    uploads {
      base64
      id
      mimeType
      name
    }
    userTemplates {
      name
      id
      content
      templateType {
        id
        name
      }
    }
    verification {
      id
      key
    }
  }
}
    `;
export type SaveUserMutationFn = Apollo.MutationFunction<SaveUserMutation, SaveUserMutationVariables>;

/**
 * __useSaveUserMutation__
 *
 * To run a mutation, you first call `useSaveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUserMutation, { data, loading, error }] = useSaveUserMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useSaveUserMutation(baseOptions?: Apollo.MutationHookOptions<SaveUserMutation, SaveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUserMutation, SaveUserMutationVariables>(SaveUserDocument, options);
      }
export type SaveUserMutationHookResult = ReturnType<typeof useSaveUserMutation>;
export type SaveUserMutationResult = Apollo.MutationResult<SaveUserMutation>;
export type SaveUserMutationOptions = Apollo.BaseMutationOptions<SaveUserMutation, SaveUserMutationVariables>;
export const SaveUserTemplateDocument = gql`
    mutation SaveUserTemplate($name: String, $content: String, $templateTypeId: String!, $templateId: String, $userId: String!) {
  saveUserTemplate(
    entity: {id: $templateId, content: $content, name: $name, templateType: {id: $templateTypeId}, user: {id: $userId}}
  ) {
    id
    name
  }
}
    `;
export type SaveUserTemplateMutationFn = Apollo.MutationFunction<SaveUserTemplateMutation, SaveUserTemplateMutationVariables>;

/**
 * __useSaveUserTemplateMutation__
 *
 * To run a mutation, you first call `useSaveUserTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUserTemplateMutation, { data, loading, error }] = useSaveUserTemplateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      content: // value for 'content'
 *      templateTypeId: // value for 'templateTypeId'
 *      templateId: // value for 'templateId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSaveUserTemplateMutation(baseOptions?: Apollo.MutationHookOptions<SaveUserTemplateMutation, SaveUserTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUserTemplateMutation, SaveUserTemplateMutationVariables>(SaveUserTemplateDocument, options);
      }
export type SaveUserTemplateMutationHookResult = ReturnType<typeof useSaveUserTemplateMutation>;
export type SaveUserTemplateMutationResult = Apollo.MutationResult<SaveUserTemplateMutation>;
export type SaveUserTemplateMutationOptions = Apollo.BaseMutationOptions<SaveUserTemplateMutation, SaveUserTemplateMutationVariables>;
export const SendPasswordResetDocument = gql`
    mutation sendPasswordReset($email: String!) {
  sendPasswordReset(mailAddress: $email)
}
    `;
export type SendPasswordResetMutationFn = Apollo.MutationFunction<SendPasswordResetMutation, SendPasswordResetMutationVariables>;

/**
 * __useSendPasswordResetMutation__
 *
 * To run a mutation, you first call `useSendPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPasswordResetMutation, { data, loading, error }] = useSendPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<SendPasswordResetMutation, SendPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendPasswordResetMutation, SendPasswordResetMutationVariables>(SendPasswordResetDocument, options);
      }
export type SendPasswordResetMutationHookResult = ReturnType<typeof useSendPasswordResetMutation>;
export type SendPasswordResetMutationResult = Apollo.MutationResult<SendPasswordResetMutation>;
export type SendPasswordResetMutationOptions = Apollo.BaseMutationOptions<SendPasswordResetMutation, SendPasswordResetMutationVariables>;
export const SendVerificationDocument = gql`
    mutation sendVerification($email: String!) {
  sendVerification(mailAddress: $email)
}
    `;
export type SendVerificationMutationFn = Apollo.MutationFunction<SendVerificationMutation, SendVerificationMutationVariables>;

/**
 * __useSendVerificationMutation__
 *
 * To run a mutation, you first call `useSendVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendVerificationMutation, { data, loading, error }] = useSendVerificationMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendVerificationMutation(baseOptions?: Apollo.MutationHookOptions<SendVerificationMutation, SendVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendVerificationMutation, SendVerificationMutationVariables>(SendVerificationDocument, options);
      }
export type SendVerificationMutationHookResult = ReturnType<typeof useSendVerificationMutation>;
export type SendVerificationMutationResult = Apollo.MutationResult<SendVerificationMutation>;
export type SendVerificationMutationOptions = Apollo.BaseMutationOptions<SendVerificationMutation, SendVerificationMutationVariables>;
export const VerifyDocument = gql`
    mutation Verify($key: String) {
  verify(key: $key) {
    id
  }
}
    `;
export type VerifyMutationFn = Apollo.MutationFunction<VerifyMutation, VerifyMutationVariables>;

/**
 * __useVerifyMutation__
 *
 * To run a mutation, you first call `useVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMutation, { data, loading, error }] = useVerifyMutation({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useVerifyMutation(baseOptions?: Apollo.MutationHookOptions<VerifyMutation, VerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyMutation, VerifyMutationVariables>(VerifyDocument, options);
      }
export type VerifyMutationHookResult = ReturnType<typeof useVerifyMutation>;
export type VerifyMutationResult = Apollo.MutationResult<VerifyMutation>;
export type VerifyMutationOptions = Apollo.BaseMutationOptions<VerifyMutation, VerifyMutationVariables>;