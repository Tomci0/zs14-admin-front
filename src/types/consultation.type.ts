import { EBuilding, ETime } from './enums';

import IUser from './user.type';

export default interface IConsultation {
    _id?: string;

    date: Date;
    time: number;
    subjects?: string[];
    teacher?: IUser;
    building?: string;
    room?: string;

    color?: string;

    max_students?: number;
    students?: number | IUser[];
    end_signing_up?: Date;

    description?: string;
    scopes?: IScope[];

    isSigned?: boolean;
}
