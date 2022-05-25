export declare type OAuthProfile = {
    email: string;
    firstName: string;
    gender?: string;
    id: string;
    lastName: string;
    name: string;
    profilePicURL: string;
};
export declare type OAuthToken = {
    accessToken: string;
    expiresAt: number;
    expiresIn: number;
    firstIssued_at: number;
    idToken: string;
    scope: string;
};
export declare type SocialUser = {
    profile: OAuthProfile;
    provider: string;
    token: OAuthToken;
};
