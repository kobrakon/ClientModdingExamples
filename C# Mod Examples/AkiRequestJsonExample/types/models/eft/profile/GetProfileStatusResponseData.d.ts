export interface GetProfileStatusResponseData {
    maxPveCountExceeded: false;
    profiles: ProfileData[];
}
export interface ProfileData {
    profileid: string;
    status: string;
    sid: string;
    ip: string;
    port: number;
}
