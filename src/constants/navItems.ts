const navItems = [
    {
        title: 'Strona Główna',
        icon: 'mdi:home',
        path: '/',
        tooltip: 'Przejdź do strony głównej',
    },
    {
        title: 'Konsultacje',
        path: '/consultations',
        collapsible: true,
        items: [
            {
                title: 'Kalendarz',
                icon: 'mdi:calendar',
                path: '/consultations/calendar',
                tooltip: 'Zobacz swoje konsultacje',
            },
            {
                title: 'Historia',
                icon: 'mdi:calendar-check',
                path: '/consultations/history',
                tooltip: 'Przejrzyj historię konsultacji',
            },
        ],
    },
    {
        title: 'Radiowęzeł',
        path: '/radio',
        collapsible: true,
        items: [
            {
                title: 'Strona Radiowęzła',
                icon: 'mdi:radio',
                path: '/radio/',
                tooltip: 'Zobacz stronę radiowęzła',
            },
            {
                title: 'Piosenki od Użytkowników',
                icon: 'mdi:music',
                path: '/radio/songs',
                tooltip: 'Przeglądaj piosenki do weryfikacji',
            },
            {
                title: 'Kolejka',
                icon: 'mdi:queue-music',
                path: '/radio/queue',
                tooltip: 'Zarządzaj kolejką piosenek',
            },
            {
                title: 'Historia',
                icon: 'mdi:history',
                path: '/radio/history',
                tooltip: 'Przeglądaj historię odtwarzania',
            },
        ],
    },
    {
        title: 'E-Sport',
        path: '/esport',
        collapsible: true,
        items: [
            {
                title: 'Kalendarz Eventów',
                icon: 'mdi:calendar',
                path: '/esport/calendar',
                tooltip: 'Zobacz kalendarz eventów',
            },
            {
                title: 'Historia Eventów',
                icon: 'mdi:history',
                path: '/esport/history',
                tooltip: 'Przeglądaj historię eventów',
            },
            {
                title: 'Panel Zespołu',
                icon: 'mdi:cog',
                path: '/esport/panel',
                tooltip: 'Zarządzaj zespołem',
            },
        ],
    },
    {
        title: 'Wychowawca',
        path: '/class',
        collapsible: true,
        items: [
            {
                title: 'Twoja Klasa',
                icon: 'mdi:calendar',
                path: '/class/my',
                tooltip: 'Zobacz swoją klasę',
            },
        ],
    },
    {
        title: 'Administracyjne',
        path: '/admin',
        collapsible: true,
        items: [
            {
                title: 'Użytkownicy',
                icon: 'mdi:account-group',
                path: '/admin/users',
                tooltip: 'Zarządzaj użytkownikami',
            },
            {
                title: 'Klasy',
                icon: 'mdi:chart-bar',
                path: '/admin/reports',
                tooltip: 'Zobacz raporty klas',
            },
            {
                title: 'Statystyki',
                icon: 'mdi:chart-bar',
                path: '/admin/statistics',
                tooltip: 'Przeglądaj statystyki',
            },
        ],
    },
    {
        title: 'Super Admin',
        path: '/superadmin',
        collapsible: true,
        items: [
            {
                title: 'Logi',
                icon: 'mdi:history',
                path: '/superadmin/logs',
                tooltip: 'Przeglądaj logi systemowe',
            },
            {
                title: 'Panel Superadmina',
                icon: 'mdi:cog',
                path: '/superadmin/panel',
                tooltip: 'Zarządzaj systemem',
            },
        ],
    },
];

export default navItems;
