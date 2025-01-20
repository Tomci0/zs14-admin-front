// import { getApiUrl } from '../constants/functions';

// export default async function getSetting(setting_name?: string): Promise<any> {
//     const url = setting_name ? getApiUrl('settings', 'get', setting_name) : getApiUrl('settings', 'get');

//     const response = await fetch(url, {
//         method: 'GET',
//         credentials: 'include',
//     });

//     const data: ApiResponse = await response.json();

//     if (data.data) {
//         return data.data;
//     } else {
//         return {};
//     }
// }

export default async function getSetting(setting_name?: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                endSchoolYear: new Date(2025, 6, 24),
            });
        }, 1000);
    });
}
