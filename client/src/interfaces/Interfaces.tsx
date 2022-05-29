export interface IUser {
    accessToken: string;
    user: {
        _id: string;
        __v: string;
        name: string | null;
        username: string | null;
        password: string | null;
        parkId: string[];
    };
}