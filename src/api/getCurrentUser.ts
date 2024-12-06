import IUser from '../types/user.type';

import { getApiUrl } from '../constants/functions';

export default async function getCurrentUser(): Promise<any> {
    const response = await fetch(getApiUrl('users', 'me'), {
        method: 'GET',
        credentials: 'include',
    });

    const data: ApiResponse = await response.json();

    if (data.data?.isLogged) {
        data.data.isLogged = true;
        return data.data;
    } else {
        return { isLogged: false } as IUser;
    }
}
