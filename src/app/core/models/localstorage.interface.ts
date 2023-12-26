import { IProfile } from './profile.interface';

export interface ILocalStorage {
    previousUser: IProfile | null;
    user: IProfile | null;
    rout: string;
    isDarkMode: string;
    language: string;
}
