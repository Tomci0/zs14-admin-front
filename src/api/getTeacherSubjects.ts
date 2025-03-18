import { getApiUrl } from '../constants/functions';

export default async function getSubjects() {
    const response = await fetch(getApiUrl('data', 'subjects'), {
        method: 'GET',
        credentials: 'include',
    });

    if (!response.ok) {
        return [];
    }

    const subjects = await response.json();

    return subjects.data.map((subject: any) => subject.name);
}
