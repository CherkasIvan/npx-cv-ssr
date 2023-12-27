import { IAuth } from './auth.interface';

export interface AuthState {
    user: IAuth | null;
    isFetching: boolean;
}
