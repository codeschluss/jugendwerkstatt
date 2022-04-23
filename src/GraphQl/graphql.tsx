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
  /** Built-in scalar representing a date-time with a UTC offset */
  OffsetDateTime: any;
  /** Use SPQR's SchemaPrinter to remove this from SDL */
  UNREPRESENTABLE: any;
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
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  questionnaire?: Maybe<QuestionnaireEntity>;
  user?: Maybe<UserEntity>;
};

export type AssignmentEntityInput = {
  answers?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
  assignmentState?: InputMaybe<AssignmentStateEntityInput>;
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

export type CourseEntity = {
  __typename?: 'CourseEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  feedbacks?: Maybe<Array<Maybe<FeedbackEntity>>>;
  group?: Maybe<CourseEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type CourseEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  feedbacks?: InputMaybe<Array<InputMaybe<FeedbackEntityInput>>>;
  group?: InputMaybe<CourseEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
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
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type EventCategoryEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  icon?: InputMaybe<Scalars['String']>;
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
  courses?: Maybe<Array<Maybe<CourseEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type GroupEntityInput = {
  courses?: InputMaybe<Array<InputMaybe<CourseEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type JobAdEntity = {
  __typename?: 'JobAdEntity';
  company?: Maybe<CompanyEntity>;
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

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  createToken?: Maybe<TokenDto>;
  deleteAddress: Scalars['Boolean'];
  deleteAddresss: Scalars['Boolean'];
  deleteAnswer: Scalars['Boolean'];
  deleteAnswers: Scalars['Boolean'];
  deleteAssignment: Scalars['Boolean'];
  deleteAssignmentState: Scalars['Boolean'];
  deleteAssignmentStates: Scalars['Boolean'];
  deleteAssignments: Scalars['Boolean'];
  deleteCategory: Scalars['Boolean'];
  deleteCategorys: Scalars['Boolean'];
  deleteCompanies: Scalars['Boolean'];
  deleteCompany: Scalars['Boolean'];
  deleteCourse: Scalars['Boolean'];
  deleteCourses: Scalars['Boolean'];
  deleteErrorMessage: Scalars['Boolean'];
  deleteErrorMessages: Scalars['Boolean'];
  deleteEvent: Scalars['Boolean'];
  deleteEvents: Scalars['Boolean'];
  deleteFeedback: Scalars['Boolean'];
  deleteFeedbacks: Scalars['Boolean'];
  deleteGroup: Scalars['Boolean'];
  deleteGroups: Scalars['Boolean'];
  deleteJobAd: Scalars['Boolean'];
  deleteJobAds: Scalars['Boolean'];
  deleteJobType: Scalars['Boolean'];
  deleteJobTypes: Scalars['Boolean'];
  deleteLink: Scalars['Boolean'];
  deleteLinkCategory: Scalars['Boolean'];
  deleteLinks: Scalars['Boolean'];
  deleteOrganizer: Scalars['Boolean'];
  deleteOrganizers: Scalars['Boolean'];
  deleteQuestion: Scalars['Boolean'];
  deleteQuestionnaire: Scalars['Boolean'];
  deleteQuestionnaires: Scalars['Boolean'];
  deleteQuestions: Scalars['Boolean'];
  deleteRole: Scalars['Boolean'];
  deleteRoles: Scalars['Boolean'];
  deleteSchedule: Scalars['Boolean'];
  deleteSchedules: Scalars['Boolean'];
  deleteTemplate: Scalars['Boolean'];
  deleteTemplateType: Scalars['Boolean'];
  deleteTemplateTypes: Scalars['Boolean'];
  deleteTemplates: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteUserTemplate: Scalars['Boolean'];
  deleteUserTemplates: Scalars['Boolean'];
  deleteUsers: Scalars['Boolean'];
  refreshToken?: Maybe<TokenDto>;
  resetPassword: Scalars['Boolean'];
  saveAddress?: Maybe<AddressEntity>;
  saveAddresss?: Maybe<Array<Maybe<AddressEntity>>>;
  saveAnswer?: Maybe<AnswerEntity>;
  saveAnswers?: Maybe<Array<Maybe<AnswerEntity>>>;
  saveAssignment?: Maybe<AssignmentEntity>;
  saveAssignmentState?: Maybe<AssignmentStateEntity>;
  saveAssignmentStates?: Maybe<Array<Maybe<AssignmentStateEntity>>>;
  saveAssignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  saveCategory?: Maybe<EventCategoryEntity>;
  saveCategorys?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  saveCompanies?: Maybe<Array<Maybe<CompanyEntity>>>;
  saveCompany?: Maybe<CompanyEntity>;
  saveCourse?: Maybe<CourseEntity>;
  saveCourses?: Maybe<Array<Maybe<CourseEntity>>>;
  saveErrorMessage?: Maybe<ErrorMessageEntity>;
  saveErrorMessages?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  saveEvent?: Maybe<EventEntity>;
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
  saveOrganizer?: Maybe<OrganizerEntity>;
  saveOrganizers?: Maybe<Array<Maybe<OrganizerEntity>>>;
  saveQuestion?: Maybe<QuestionEntity>;
  saveQuestionnaire?: Maybe<QuestionnaireEntity>;
  saveQuestionnaires?: Maybe<Array<Maybe<QuestionnaireEntity>>>;
  saveQuestions?: Maybe<Array<Maybe<QuestionEntity>>>;
  saveRole?: Maybe<RoleEntity>;
  saveRoles?: Maybe<Array<Maybe<RoleEntity>>>;
  saveSchedule?: Maybe<ScheduleEntity>;
  saveSchedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  saveTemplate?: Maybe<TemplateEntity>;
  saveTemplateType?: Maybe<TemplateTypeEntity>;
  saveTemplateTypes?: Maybe<Array<Maybe<TemplateTypeEntity>>>;
  saveTemplates?: Maybe<Array<Maybe<TemplateEntity>>>;
  saveUser?: Maybe<UserEntity>;
  saveUserTemplate?: Maybe<UserTemplateEntity>;
  saveUserTemplates?: Maybe<Array<Maybe<UserTemplateEntity>>>;
  saveUsers?: Maybe<Array<Maybe<UserEntity>>>;
  sendError: Scalars['Boolean'];
  sendPasswordReset: Scalars['Boolean'];
  sendVerification: Scalars['Boolean'];
  test?: Maybe<UserEntity>;
  verify?: Maybe<UserEntity>;
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
export type MutationDeleteAddresssArgs = {
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
export type MutationDeleteCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteCategorysArgs = {
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
export type MutationDeleteOrganizerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganizersArgs = {
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
export type MutationSaveAddresssArgs = {
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
export type MutationSaveCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveCategorysArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventCategoryEntityInput>>>;
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
export type MutationSaveOrganizerArgs = {
  entity?: InputMaybe<OrganizerEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganizersArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganizerEntityInput>>>;
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

export type PageableList_OrganizerEntity = {
  __typename?: 'PageableList_OrganizerEntity';
  result?: Maybe<Array<Maybe<OrganizerEntity>>>;
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
  getAddress?: Maybe<AddressEntity>;
  getAddresss?: Maybe<PageableList_AddressEntity>;
  getAnswer?: Maybe<AnswerEntity>;
  getAnswers?: Maybe<PageableList_AnswerEntity>;
  getAssignment?: Maybe<AssignmentEntity>;
  getAssignmentState?: Maybe<AssignmentStateEntity>;
  getAssignmentStates?: Maybe<PageableList_AssignmentStateEntity>;
  getAssignments?: Maybe<PageableList_AssignmentEntity>;
  getCategory?: Maybe<EventCategoryEntity>;
  getCategorys?: Maybe<PageableList_EventCategoryEntity>;
  getCompanies?: Maybe<PageableList_CompanyEntity>;
  getCompany?: Maybe<CompanyEntity>;
  getCourse?: Maybe<CourseEntity>;
  getCourses?: Maybe<PageableList_CourseEntity>;
  getErrorMessage?: Maybe<ErrorMessageEntity>;
  getErrorMessages?: Maybe<PageableList_ErrorMessageEntity>;
  getEvent?: Maybe<EventEntity>;
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
  getOrganizer?: Maybe<OrganizerEntity>;
  getOrganizers?: Maybe<PageableList_OrganizerEntity>;
  getQuestion?: Maybe<QuestionEntity>;
  getQuestionnaire?: Maybe<QuestionnaireEntity>;
  getQuestionnaires?: Maybe<PageableList_QuestionnaireEntity>;
  getQuestions?: Maybe<PageableList_QuestionEntity>;
  getRole?: Maybe<RoleEntity>;
  getRoles?: Maybe<PageableList_RoleEntity>;
  getSchedule?: Maybe<ScheduleEntity>;
  getSchedules?: Maybe<PageableList_ScheduleEntity>;
  getTemplate?: Maybe<TemplateEntity>;
  getTemplateType?: Maybe<TemplateTypeEntity>;
  getTemplateTypes?: Maybe<PageableList_TemplateTypeEntity>;
  getTemplates?: Maybe<PageableList_TemplateEntity>;
  getUser?: Maybe<UserEntity>;
  getUserTemplate?: Maybe<UserTemplateEntity>;
  getUserTemplates?: Maybe<PageableList_UserTemplateEntity>;
  getUsers?: Maybe<PageableList_UserEntity>;
  lookupAddress?: Maybe<AddressEntity>;
};


/** Query root */
export type QueryGetAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};


/** Query root */
export type QueryGetAddresssArgs = {
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
export type QueryGetCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};


/** Query root */
export type QueryGetCategorysArgs = {
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
export type QueryGetOrganizerArgs = {
  entity?: InputMaybe<OrganizerEntityInput>;
};


/** Query root */
export type QueryGetOrganizersArgs = {
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
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  questionnaire?: Maybe<QuestionnaireEntity>;
};

export type QuestionEntityInput = {
  answers?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  item?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  questionnaire?: InputMaybe<QuestionnaireEntityInput>;
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

export type RoleEntity = {
  __typename?: 'RoleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type RoleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
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

export type UserEntity = {
  __typename?: 'UserEntity';
  course?: Maybe<CourseEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  password?: Maybe<Scalars['String']>;
  passwordReset?: Maybe<PasswordResetEntity>;
  profilePicture?: Maybe<MediaEntity>;
  roles?: Maybe<Array<Maybe<RoleEntity>>>;
  uploads?: Maybe<Array<Maybe<MediaEntity>>>;
  userTemplates?: Maybe<Array<Maybe<UserTemplateEntity>>>;
  verification?: Maybe<VerificationEntity>;
};

export type UserEntityInput = {
  course?: InputMaybe<CourseEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  password?: InputMaybe<Scalars['String']>;
  passwordReset?: InputMaybe<PasswordResetEntityInput>;
  profilePicture?: InputMaybe<MediaEntityInput>;
  roles?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  userTemplates?: InputMaybe<Array<InputMaybe<UserTemplateEntityInput>>>;
  verification?: InputMaybe<VerificationEntityInput>;
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

export type CreateTokenMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type CreateTokenMutation = { __typename?: 'Mutation', createToken?: { __typename?: 'TokenDto', access?: string | null, refresh?: string | null } | null };

export type GetEventQueryVariables = Exact<{
  entity?: InputMaybe<EventEntityInput>;
}>;


export type GetEventQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, name?: string | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null } | null, address?: { __typename?: 'AddressEntity', street?: string | null, place?: string | null } | null } | null };

export type GetEventsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetEventsQuery = { __typename?: 'Query', getEvents?: { __typename?: 'PageableList_EventEntity', result?: Array<{ __typename?: 'EventEntity', id?: string | null, name?: string | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null } | null, address?: { __typename?: 'AddressEntity', street?: string | null, place?: string | null } | null } | null> | null } | null };

export type GetLinkCategoriesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetLinkCategoriesQuery = { __typename?: 'Query', getLinkCategories?: { __typename?: 'PageableList_LinkCategoryEntity', result?: Array<{ __typename?: 'LinkCategoryEntity', name?: string | null, link?: Array<{ __typename?: 'LinkEntity', title?: string | null, url?: string | null } | null> | null } | null> | null } | null };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'TokenDto', access?: string | null, refresh?: string | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type SendPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendPasswordResetMutation = { __typename?: 'Mutation', sendPasswordReset: boolean };

export type SendVerificationMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendVerificationMutation = { __typename?: 'Mutation', sendVerification: boolean };


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
export const GetEventDocument = gql`
    query getEvent($entity: EventEntityInput) {
  getEvent(entity: $entity) {
    titleImage {
      id
    }
    id
    name
    address {
      street
      place
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
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions?: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
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
export const GetEventsDocument = gql`
    query getEvents($params: FilterSortPaginateInput) {
  getEvents(params: $params) {
    result {
      titleImage {
        id
      }
      id
      name
      address {
        street
        place
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
export const GetLinkCategoriesDocument = gql`
    query GetLinkCategories($params: FilterSortPaginateInput) {
  getLinkCategories(params: $params) {
    result {
      name
      link {
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