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

export type EventCategoryEntity = {
  __typename?: 'EventCategoryEntity';
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type EventCategoryEntityInput = {
  color?: InputMaybe<Scalars['String']>;
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

export type FilterSortPaginateInput = {
  dir?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<QueryExpressionInput>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
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
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  jobAds?: Maybe<Array<Maybe<JobAdEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type JobTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  jobAds?: InputMaybe<Array<InputMaybe<JobAdEntityInput>>>;
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
  deleteCategory: Scalars['Boolean'];
  deleteCategorys: Scalars['Boolean'];
  deleteCompanies: Scalars['Boolean'];
  deleteCompany: Scalars['Boolean'];
  deleteEvent: Scalars['Boolean'];
  deleteEvents: Scalars['Boolean'];
  deleteJobAd: Scalars['Boolean'];
  deleteJobAds: Scalars['Boolean'];
  deleteJobType: Scalars['Boolean'];
  deleteJobTypes: Scalars['Boolean'];
  deleteLink: Scalars['Boolean'];
  deleteLinkCategory: Scalars['Boolean'];
  deleteLinks: Scalars['Boolean'];
  deleteOrganizer: Scalars['Boolean'];
  deleteOrganizers: Scalars['Boolean'];
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
  saveCategory?: Maybe<EventCategoryEntity>;
  saveCategorys?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  saveCompanies?: Maybe<Array<Maybe<CompanyEntity>>>;
  saveCompany?: Maybe<CompanyEntity>;
  saveEvent?: Maybe<EventEntity>;
  saveEvents?: Maybe<Array<Maybe<EventEntity>>>;
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
  sendPasswordReset: Scalars['Boolean'];
  sendVerification: Scalars['Boolean'];
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
export type MutationDeleteEventArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventsArgs = {
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
export type MutationSaveEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};


/** Mutation root */
export type MutationSaveEventsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
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

export type PageableList_CompanyEntity = {
  __typename?: 'PageableList_CompanyEntity';
  result?: Maybe<Array<Maybe<CompanyEntity>>>;
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
  getCategory?: Maybe<EventCategoryEntity>;
  getCategorys?: Maybe<PageableList_EventCategoryEntity>;
  getCompanies?: Maybe<PageableList_CompanyEntity>;
  getCompany?: Maybe<CompanyEntity>;
  getEvent?: Maybe<EventEntity>;
  getEvents?: Maybe<PageableList_EventEntity>;
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
export type QueryGetEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};


/** Query root */
export type QueryGetEventsArgs = {
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

export type GetEventQueryVariables = Exact<{
  entity?: InputMaybe<EventEntityInput>;
}>;


export type GetEventQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, name?: string | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null } | null, address?: { __typename?: 'AddressEntity', street?: string | null, place?: string | null } | null } | null };

export type GetEventsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetEventsQuery = { __typename?: 'Query', getEvents?: { __typename?: 'PageableList_EventEntity', result?: Array<{ __typename?: 'EventEntity', id?: string | null, name?: string | null, titleImage?: { __typename?: 'MediaEntity', id?: string | null } | null, address?: { __typename?: 'AddressEntity', street?: string | null, place?: string | null } | null } | null> | null } | null };

export type SendPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendPasswordResetMutation = { __typename?: 'Mutation', sendPasswordReset: boolean };

export type SendVerificationMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendVerificationMutation = { __typename?: 'Mutation', sendVerification: boolean };


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