declare module '*.png' {
    const value: string;
    export default value;
}

interface INavItem {
    title: string;
    permission?: string | string[];
    path: string;
    tooltip?: string;
    collapsible?: boolean;
    icon: string;
    items?: INavItem[];
}

interface ApiResponse extends Response {
    error?: {
        authError?: boolean;
        statusCode: number;
        isLogged: boolean;
        status: string;
    };
    message: string;
    isLogged?: boolean;
    data?: any;
}

interface IScope {
    _id: string;
    name: string;
    description: string;
    subject: string;
    type: {
        _id: string;
        name: string;
        test: boolean;
        shorttest: boolean;
        practise: boolean;
    };
}
