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

export interface shopData {
    _id: string;
    images: string[];
    shopName: string;
    location: string;
}

export interface IBarberRegisterInputs {
    user: string;
    experience: string;
    specialties: string[];
    document: string;
}

export interface IHostShopInputs {
    user: string;
    experience: string;
    specialties: string[];
    document: string;
    name: string;
    owner: string;
    barbers: string[];
    shopImages: string[];
    license: string;
    location: object;
    country: string;
    city: string;
    state: string;
    postal: string;
    services: string[];
}