export type LoginInputs = {
    email: string;
    password: string;
    message: string;
    user: {}
    success: boolean
}

export type RegisterInputs = {
    message: string;
    name: string;
    email: string;
    password: string;
}

export type User = {
    email: string;
    name: string;
    _id: string;
}

export type userSliceState = {
    isAuthenticate: boolean;
    isAuthLoading: boolean;
    user: User | null;
}