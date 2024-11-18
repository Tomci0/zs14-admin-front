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