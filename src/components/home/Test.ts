export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
  OffsetDateTime: any;
  UNREPRESENTABLE: any;
};

export type AddressEntity = {
  __typename?: "AddressEntity";
  company?: Maybe<Array<Maybe<CompanyEntity>>>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  event?: Maybe<Array<Maybe<EventEntity>>>;
  houseNumber?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  latitude?: Maybe<Scalars["Float"]>;
  longtitude?: Maybe<Scalars["Float"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  place?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  street?: Maybe<Scalars["String"]>;
};

export type AddressEntityInput = {
  company?: InputMaybe<Array<InputMaybe<CompanyEntityInput>>>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  event?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  houseNumber?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  latitude?: InputMaybe<Scalars["Float"]>;
  longtitude?: InputMaybe<Scalars["Float"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  place?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
};

export type CompanyEntity = {
  __typename?: "CompanyEntity";
  address?: Maybe<AddressEntity>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  jobAd?: Maybe<Array<Maybe<JobAdEntity>>>;
  mail?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

export type CompanyEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  jobAd?: InputMaybe<Array<InputMaybe<JobAdEntityInput>>>;
  mail?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export enum ConjunctionOperator {
  And = "AND",
  AndNot = "AND_NOT",
  Or = "OR",
  OrNot = "OR_NOT",
}

export type EventCategoryEntity = {
  __typename?: "EventCategoryEntity";
  color?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  icon?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
};

export type EventCategoryEntityInput = {
  color?: InputMaybe<Scalars["String"]>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  icon?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type EventEntity = {
  __typename?: "EventEntity";
  address?: Maybe<AddressEntity>;
  category?: Maybe<EventCategoryEntity>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  images?: Maybe<Array<Maybe<MediaEntity>>>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
  organizer?: Maybe<OrganizerEntity>;
  schedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  titleImage?: Maybe<MediaEntity>;
};

export type EventEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  category?: InputMaybe<EventCategoryEntityInput>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  organizer?: InputMaybe<OrganizerEntityInput>;
  schedules?: InputMaybe<Array<InputMaybe<ScheduleEntityInput>>>;
  titleImage?: InputMaybe<MediaEntityInput>;
};

export type FilterSortPaginateInput = {
  dir?: InputMaybe<Scalars["String"]>;
  expression?: InputMaybe<QueryExpressionInput>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type JobAdEntity = {
  __typename?: "JobAdEntity";
  company?: Maybe<CompanyEntity>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  dueDate?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  startDate?: Maybe<Scalars["OffsetDateTime"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<JobTypeEntity>;
};

export type JobAdEntityInput = {
  company?: InputMaybe<CompanyEntityInput>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  dueDate?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  startDate?: InputMaybe<Scalars["OffsetDateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<JobTypeEntityInput>;
};

export type JobTypeEntity = {
  __typename?: "JobTypeEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  jobAds?: Maybe<Array<Maybe<JobAdEntity>>>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
};

export type JobTypeEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  jobAds?: InputMaybe<Array<InputMaybe<JobAdEntityInput>>>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type LinkCategoryEntity = {
  __typename?: "LinkCategoryEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  link?: Maybe<Array<Maybe<LinkEntity>>>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
};

export type LinkCategoryEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  link?: InputMaybe<Array<InputMaybe<LinkEntityInput>>>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type LinkEntity = {
  __typename?: "LinkEntity";
  category?: Maybe<LinkCategoryEntity>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type LinkEntityInput = {
  category?: InputMaybe<LinkCategoryEntityInput>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type MediaEntity = {
  __typename?: "MediaEntity";
  base64?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
};

export type MediaEntityInput = {
  base64?: InputMaybe<Scalars["String"]>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  saveRoles?: Maybe<Array<Maybe<RoleEntity>>>;
  resetPassword: Scalars["Boolean"];
  deleteUsers: Scalars["Boolean"];
  saveJobAd?: Maybe<JobAdEntity>;
  saveJobAds?: Maybe<Array<Maybe<JobAdEntity>>>;
  saveEvents?: Maybe<Array<Maybe<EventEntity>>>;
  saveCompany?: Maybe<CompanyEntity>;
  saveEvent?: Maybe<EventEntity>;
  saveLinkCategory?: Maybe<LinkCategoryEntity>;
  saveOrganizers?: Maybe<Array<Maybe<OrganizerEntity>>>;
  saveCompanies?: Maybe<Array<Maybe<CompanyEntity>>>;
  saveJobTypes?: Maybe<Array<Maybe<JobTypeEntity>>>;
  deleteCompanies: Scalars["Boolean"];
  saveAddresss?: Maybe<Array<Maybe<AddressEntity>>>;
  deleteTemplate: Scalars["Boolean"];
  deleteOrganizers: Scalars["Boolean"];
  deleteEvent: Scalars["Boolean"];
  saveTemplates?: Maybe<Array<Maybe<TemplateEntity>>>;
  saveUser?: Maybe<UserEntity>;
  deleteCompany: Scalars["Boolean"];
  sendVerification: Scalars["Boolean"];
  saveTemplateTypes?: Maybe<Array<Maybe<TemplateTypeEntity>>>;
  deleteAddress: Scalars["Boolean"];
  createToken?: Maybe<TokenDto>;
  saveJobType?: Maybe<JobTypeEntity>;
  deleteJobAd: Scalars["Boolean"];
  saveUserTemplates?: Maybe<Array<Maybe<UserTemplateEntity>>>;
  deleteJobAds: Scalars["Boolean"];
  deleteAddresss: Scalars["Boolean"];
  saveCategory?: Maybe<EventCategoryEntity>;
  deleteUser: Scalars["Boolean"];
  deleteRoles: Scalars["Boolean"];
  saveSchedule?: Maybe<ScheduleEntity>;
  deleteUserTemplate: Scalars["Boolean"];
  deleteOrganizer: Scalars["Boolean"];
  deleteTemplateTypes: Scalars["Boolean"];
  deleteCategorys: Scalars["Boolean"];
  deleteLinkCategory: Scalars["Boolean"];
  deleteEvents: Scalars["Boolean"];
  deleteJobTypes: Scalars["Boolean"];
  saveTemplateType?: Maybe<TemplateTypeEntity>;
  deleteUserTemplates: Scalars["Boolean"];
  saveSchedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  saveUserTemplate?: Maybe<UserTemplateEntity>;
  saveLinks?: Maybe<Array<Maybe<LinkEntity>>>;
  verify?: Maybe<UserEntity>;
  deleteSchedules: Scalars["Boolean"];
  sendPasswordReset: Scalars["Boolean"];
  saveLinkCategories?: Maybe<Array<Maybe<LinkCategoryEntity>>>;
  deleteLinks: Scalars["Boolean"];
  saveLink?: Maybe<LinkEntity>;
  saveRole?: Maybe<RoleEntity>;
  saveUsers?: Maybe<Array<Maybe<UserEntity>>>;
  saveOrganizer?: Maybe<OrganizerEntity>;
  deleteSchedule: Scalars["Boolean"];
  deleteLink: Scalars["Boolean"];
  deleteCategory: Scalars["Boolean"];
  deleteRole: Scalars["Boolean"];
  saveCategorys?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  deleteTemplates: Scalars["Boolean"];
  saveTemplate?: Maybe<TemplateEntity>;
  deleteTemplateType: Scalars["Boolean"];
  saveAddress?: Maybe<AddressEntity>;
  deleteJobType: Scalars["Boolean"];
  refreshToken?: Maybe<TokenDto>;
};

export type MutationSaveRolesArgs = {
  entities?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
};

export type MutationResetPasswordArgs = {
  password?: InputMaybe<Scalars["String"]>;
  key?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSaveJobAdArgs = {
  entity?: InputMaybe<JobAdEntityInput>;
};

export type MutationSaveJobAdsArgs = {
  entities?: InputMaybe<Array<InputMaybe<JobAdEntityInput>>>;
};

export type MutationSaveEventsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
};

export type MutationSaveCompanyArgs = {
  entity?: InputMaybe<CompanyEntityInput>;
};

export type MutationSaveEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};

export type MutationSaveLinkCategoryArgs = {
  entity?: InputMaybe<LinkCategoryEntityInput>;
};

export type MutationSaveOrganizersArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganizerEntityInput>>>;
};

export type MutationSaveCompaniesArgs = {
  entities?: InputMaybe<Array<InputMaybe<CompanyEntityInput>>>;
};

export type MutationSaveJobTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<JobTypeEntityInput>>>;
};

export type MutationDeleteCompaniesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSaveAddresssArgs = {
  entities?: InputMaybe<Array<InputMaybe<AddressEntityInput>>>;
};

export type MutationDeleteTemplateArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteOrganizersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationDeleteEventArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationSaveTemplatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<TemplateEntityInput>>>;
};

export type MutationSaveUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};

export type MutationDeleteCompanyArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationSendVerificationArgs = {
  mailAddress?: InputMaybe<Scalars["String"]>;
};

export type MutationSaveTemplateTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<TemplateTypeEntityInput>>>;
};

export type MutationDeleteAddressArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateTokenArgs = {
  password?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type MutationSaveJobTypeArgs = {
  entity?: InputMaybe<JobTypeEntityInput>;
};

export type MutationDeleteJobAdArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationSaveUserTemplatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserTemplateEntityInput>>>;
};

export type MutationDeleteJobAdsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationDeleteAddresssArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSaveCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};

export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteRolesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSaveScheduleArgs = {
  entity?: InputMaybe<ScheduleEntityInput>;
};

export type MutationDeleteUserTemplateArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteOrganizerArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteTemplateTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationDeleteCategorysArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationDeleteLinkCategoryArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteEventsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationDeleteJobTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSaveTemplateTypeArgs = {
  entity?: InputMaybe<TemplateTypeEntityInput>;
};

export type MutationDeleteUserTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSaveSchedulesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ScheduleEntityInput>>>;
};

export type MutationSaveUserTemplateArgs = {
  entity?: InputMaybe<UserTemplateEntityInput>;
};

export type MutationSaveLinksArgs = {
  entities?: InputMaybe<Array<InputMaybe<LinkEntityInput>>>;
};

export type MutationVerifyArgs = {
  key?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteSchedulesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSendPasswordResetArgs = {
  mailAddress?: InputMaybe<Scalars["String"]>;
};

export type MutationSaveLinkCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<LinkCategoryEntityInput>>>;
};

export type MutationDeleteLinksArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSaveLinkArgs = {
  entity?: InputMaybe<LinkEntityInput>;
};

export type MutationSaveRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};

export type MutationSaveUsersArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type MutationSaveOrganizerArgs = {
  entity?: InputMaybe<OrganizerEntityInput>;
};

export type MutationDeleteScheduleArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteLinkArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteCategoryArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteRoleArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationSaveCategorysArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventCategoryEntityInput>>>;
};

export type MutationDeleteTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationSaveTemplateArgs = {
  entity?: InputMaybe<TemplateEntityInput>;
};

export type MutationDeleteTemplateTypeArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationSaveAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};

export type MutationDeleteJobTypeArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type OrganizerEntity = {
  __typename?: "OrganizerEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  event?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars["String"]>;
  mail?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

export type OrganizerEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  event?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars["String"]>;
  mail?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type PageableList_AddressEntity = {
  __typename?: "PageableList_AddressEntity";
  result?: Maybe<Array<Maybe<AddressEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_CompanyEntity = {
  __typename?: "PageableList_CompanyEntity";
  result?: Maybe<Array<Maybe<CompanyEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_EventCategoryEntity = {
  __typename?: "PageableList_EventCategoryEntity";
  result?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_EventEntity = {
  __typename?: "PageableList_EventEntity";
  result?: Maybe<Array<Maybe<EventEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_JobAdEntity = {
  __typename?: "PageableList_JobAdEntity";
  result?: Maybe<Array<Maybe<JobAdEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_JobTypeEntity = {
  __typename?: "PageableList_JobTypeEntity";
  result?: Maybe<Array<Maybe<JobTypeEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_LinkCategoryEntity = {
  __typename?: "PageableList_LinkCategoryEntity";
  result?: Maybe<Array<Maybe<LinkCategoryEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_LinkEntity = {
  __typename?: "PageableList_LinkEntity";
  result?: Maybe<Array<Maybe<LinkEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_OrganizerEntity = {
  __typename?: "PageableList_OrganizerEntity";
  result?: Maybe<Array<Maybe<OrganizerEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_RoleEntity = {
  __typename?: "PageableList_RoleEntity";
  result?: Maybe<Array<Maybe<RoleEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_ScheduleEntity = {
  __typename?: "PageableList_ScheduleEntity";
  result?: Maybe<Array<Maybe<ScheduleEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_TemplateEntity = {
  __typename?: "PageableList_TemplateEntity";
  result?: Maybe<Array<Maybe<TemplateEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_TemplateTypeEntity = {
  __typename?: "PageableList_TemplateTypeEntity";
  result?: Maybe<Array<Maybe<TemplateTypeEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_UserEntity = {
  __typename?: "PageableList_UserEntity";
  result?: Maybe<Array<Maybe<UserEntity>>>;
  total: Scalars["Long"];
};

export type PageableList_UserTemplateEntity = {
  __typename?: "PageableList_UserTemplateEntity";
  result?: Maybe<Array<Maybe<UserTemplateEntity>>>;
  total: Scalars["Long"];
};

export type PasswordResetEntity = {
  __typename?: "PasswordResetEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  user?: Maybe<UserEntity>;
};

export type PasswordResetEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  key?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  user?: InputMaybe<UserEntityInput>;
};

export type Query = {
  __typename?: "Query";
  getEvent?: Maybe<EventEntity>;
  getAddresss?: Maybe<PageableList_AddressEntity>;
  getLinks?: Maybe<PageableList_LinkEntity>;
  getLinkCategories?: Maybe<PageableList_LinkCategoryEntity>;
  getUser?: Maybe<UserEntity>;
  getOrganizers?: Maybe<PageableList_OrganizerEntity>;
  getTemplateType?: Maybe<TemplateTypeEntity>;
  getSchedule?: Maybe<ScheduleEntity>;
  getJobTypes?: Maybe<PageableList_JobTypeEntity>;
  getTemplates?: Maybe<PageableList_TemplateEntity>;
  getEvents?: Maybe<PageableList_EventEntity>;
  getCompanies?: Maybe<PageableList_CompanyEntity>;
  getUsers?: Maybe<PageableList_UserEntity>;
  getAddress?: Maybe<AddressEntity>;
  getSchedules?: Maybe<PageableList_ScheduleEntity>;
  getRoles?: Maybe<PageableList_RoleEntity>;
  getTemplate?: Maybe<TemplateEntity>;
  getTemplateTypes?: Maybe<PageableList_TemplateTypeEntity>;
  getCategory?: Maybe<EventCategoryEntity>;
  getRole?: Maybe<RoleEntity>;
  getJobAds?: Maybe<PageableList_JobAdEntity>;
  getJobAd?: Maybe<JobAdEntity>;
  getLink?: Maybe<LinkEntity>;
  getCompany?: Maybe<CompanyEntity>;
  getUserTemplates?: Maybe<PageableList_UserTemplateEntity>;
  getLinkCategory?: Maybe<LinkCategoryEntity>;
  getJobType?: Maybe<JobTypeEntity>;
  getUserTemplate?: Maybe<UserTemplateEntity>;
  getCategorys?: Maybe<PageableList_EventCategoryEntity>;
  getOrganizer?: Maybe<OrganizerEntity>;
};

export type QueryGetEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};

export type QueryGetAddresssArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetLinksArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetLinkCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};

export type QueryGetOrganizersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetTemplateTypeArgs = {
  entity?: InputMaybe<TemplateTypeEntityInput>;
};

export type QueryGetScheduleArgs = {
  entity?: InputMaybe<ScheduleEntityInput>;
};

export type QueryGetJobTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetTemplatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetEventsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetCompaniesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetUsersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};

export type QueryGetSchedulesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetRolesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetTemplateArgs = {
  entity?: InputMaybe<TemplateEntityInput>;
};

export type QueryGetTemplateTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};

export type QueryGetRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};

export type QueryGetJobAdsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetJobAdArgs = {
  entity?: InputMaybe<JobAdEntityInput>;
};

export type QueryGetLinkArgs = {
  entity?: InputMaybe<LinkEntityInput>;
};

export type QueryGetCompanyArgs = {
  entity?: InputMaybe<CompanyEntityInput>;
};

export type QueryGetUserTemplatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetLinkCategoryArgs = {
  entity?: InputMaybe<LinkCategoryEntityInput>;
};

export type QueryGetJobTypeArgs = {
  entity?: InputMaybe<JobTypeEntityInput>;
};

export type QueryGetUserTemplateArgs = {
  entity?: InputMaybe<UserTemplateEntityInput>;
};

export type QueryGetCategorysArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryGetOrganizerArgs = {
  entity?: InputMaybe<OrganizerEntityInput>;
};

export type QueryConjunctionInput = {
  operands?: InputMaybe<Array<InputMaybe<QueryExpressionInput>>>;
  operator?: InputMaybe<ConjunctionOperator>;
};

export type QueryEntityInput = {
  operator?: InputMaybe<QueryOperator>;
  path?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type QueryExpressionInput = {
  conjunction?: InputMaybe<QueryConjunctionInput>;
  entity?: InputMaybe<QueryEntityInput>;
};

export enum QueryOperator {
  Equal = "EQUAL",
  GreaterOrEqual = "GREATER_OR_EQUAL",
  GreaterThan = "GREATER_THAN",
  LessOrEqual = "LESS_OR_EQUAL",
  LessThan = "LESS_THAN",
  Like = "LIKE",
  NotEqual = "NOT_EQUAL",
}

export type RoleEntity = {
  __typename?: "RoleEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type RoleEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type ScheduleEntity = {
  __typename?: "ScheduleEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  endDate?: Maybe<Scalars["OffsetDateTime"]>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  startDate?: Maybe<Scalars["OffsetDateTime"]>;
};

export type ScheduleEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  endDate?: InputMaybe<Scalars["OffsetDateTime"]>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  startDate?: InputMaybe<Scalars["OffsetDateTime"]>;
};

export type TemplateEntity = {
  __typename?: "TemplateEntity";
  content?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
  templateType?: Maybe<TemplateTypeEntity>;
};

export type TemplateEntityInput = {
  content?: InputMaybe<Scalars["String"]>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  templateType?: InputMaybe<TemplateTypeEntityInput>;
};

export type TemplateTypeEntity = {
  __typename?: "TemplateTypeEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
  templates?: Maybe<Array<Maybe<TemplateEntity>>>;
  userTemplates?: Maybe<Array<Maybe<UserTemplateEntity>>>;
};

export type TemplateTypeEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  templates?: InputMaybe<Array<InputMaybe<TemplateEntityInput>>>;
  userTemplates?: InputMaybe<Array<InputMaybe<UserTemplateEntityInput>>>;
};

export type TokenDto = {
  __typename?: "TokenDto";
  access?: Maybe<Scalars["String"]>;
  refresh?: Maybe<Scalars["String"]>;
};

export type UserEntity = {
  __typename?: "UserEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  email?: Maybe<Scalars["String"]>;
  fullname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  password?: Maybe<Scalars["String"]>;
  passwordReset?: Maybe<PasswordResetEntity>;
  roles?: Maybe<Array<Maybe<RoleEntity>>>;
  uploads?: Maybe<Array<Maybe<MediaEntity>>>;
  userTemplates?: Maybe<Array<Maybe<UserTemplateEntity>>>;
  verification?: Maybe<VerificationEntity>;
};

export type UserEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  email?: InputMaybe<Scalars["String"]>;
  fullname?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordReset?: InputMaybe<PasswordResetEntityInput>;
  roles?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<MediaEntityInput>>>;
  userTemplates?: InputMaybe<Array<InputMaybe<UserTemplateEntityInput>>>;
  verification?: InputMaybe<VerificationEntityInput>;
};

export type UserTemplateEntity = {
  __typename?: "UserTemplateEntity";
  content?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  name?: Maybe<Scalars["String"]>;
  templateType?: Maybe<TemplateTypeEntity>;
  user?: Maybe<UserEntity>;
};

export type UserTemplateEntityInput = {
  content?: InputMaybe<Scalars["String"]>;
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  templateType?: InputMaybe<TemplateTypeEntityInput>;
  user?: InputMaybe<UserEntityInput>;
};

export type VerificationEntity = {
  __typename?: "VerificationEntity";
  created?: Maybe<Scalars["OffsetDateTime"]>;
  id?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  modified?: Maybe<Scalars["OffsetDateTime"]>;
  user?: Maybe<UserEntity>;
};

export type VerificationEntityInput = {
  created?: InputMaybe<Scalars["OffsetDateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  key?: InputMaybe<Scalars["String"]>;
  modified?: InputMaybe<Scalars["OffsetDateTime"]>;
  user?: InputMaybe<UserEntityInput>;
};
