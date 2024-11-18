// Definicja typów dla ról
type Role = 'teacher' | 'classteacher' | 'radio' | 'esport' | 'admin' | 'superadmin';

// Definicja zagnieżdżonego enum dla uprawnień
namespace Permission {
    export enum Consultations {
        Base = 'consultations',
        History = 'consultations.history',
        Calendar = 'consultations.calendar',

        Admin = 'consultations.admin',
    }

    export enum Radio {
        Base = 'radio',
        Statistics = 'radio.statistics',
        Songs = 'radio.songs',
        Queue = 'radio.queue',
        History = 'radio.history',
    }

    export enum Esport {
        Base = 'esport',
        Calendar = 'esport.calendar',
        History = 'esport.history',
        Panel = 'esport.panel',
    }

    export enum Class {
        Base = 'class',
        My = 'class.my',
    }

    export enum Admin {
        Base = 'admin',
        Users = 'admin.users',
        Reports = 'admin.reports',
        Statistics = 'admin.statistics',
    }

    export const Superadmin = 'superadmin';
}

// Zdefiniuj typ kluczy dla permissionsHierarchy
type PermissionKey =
    | keyof typeof Permission.Consultations
    | keyof typeof Permission.Radio
    | keyof typeof Permission.Esport
    | keyof typeof Permission.Class
    | keyof typeof Permission.Admin
    | typeof Permission.Superadmin;

// Mapa ról do uprawnień
const rolePermissions: Record<Role, string[]> = {
    teacher: [Permission.Consultations.Base],
    classteacher: [Permission.Consultations.Base, Permission.Class.Base],
    radio: [Permission.Radio.Base],
    esport: [Permission.Esport.Base],
    admin: [Permission.Admin.Base],
    superadmin: [Permission.Superadmin],
};

const permissionsHierarchy: Record<string, string[]> = {
    Consultations: [Permission.Consultations.History, Permission.Consultations.Calendar],
    Radio: [Permission.Radio.Statistics, Permission.Radio.Songs, Permission.Radio.Queue, Permission.Radio.History],
    Esport: [Permission.Esport.Calendar, Permission.Esport.History, Permission.Esport.Panel],
    Class: [Permission.Class.My],
    Admin: [Permission.Admin.Users, Permission.Admin.Reports, Permission.Admin.Statistics],
    Superadmin: [Permission.Superadmin],
};

// Funkcja sprawdzająca, czy użytkownik ma dane uprawnienie
export const hasPermission = (role: Role, permission: string): boolean => {
    const userPermissions = rolePermissions[role] || [];
    return userPermissions.some(
        (userPermission) =>
            userPermission === permission ||
            (permissionsHierarchy[userPermission] && permissionsHierarchy[userPermission].includes(permission))
    );
};

// Przykład użycia
const userRole: Role = 'teacher';
console.log(hasPermission(userRole, Permission.Consultations.Base)); // true
console.log(hasPermission(userRole, Permission.Consultations.History)); // true
console.log(hasPermission(userRole, Permission.Admin.Base)); // false
