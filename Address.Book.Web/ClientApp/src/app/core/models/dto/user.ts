import { UserAddress } from "./user-address";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    address: UserAddress;
}