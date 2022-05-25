export type OAuthProfile = {
  email: string;
  firstName: string;
  gender?: string;
  id: string;
  lastName: string;
  name: string;
  profilePicURL: string;
};

export type OAuthToken = {
  accessToken: string;
  expiresAt: number;
  expiresIn: number;
  firstIssued_at: number;
  idToken: string;
  scope: string;
};

export type SocialUser = {
  profile: OAuthProfile;
  provider: string;
  token: OAuthToken;
};
