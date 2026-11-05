declare const CONFIG: {
    github: {
        username: string;
    };
    social: {
        linkedin: string;
        twitter: string;
        facebook: string;
        instagram: string;
        dribbble: string;
        behance: string;
        medium: string;
        dev: string;
        website: string;
        phone: string;
        email: string;
    };
    resume: {
        fileUrl: string;
    };
    skills: string[];
    experiences: {
        company: string;
        position: string;
        from: string;
        to: string;
        companyLink: string;
    }[];
    certifications: any[];
    educations: any[];
    publications: any[];
    blog: {
        source: string;
        username: string;
        limit: number;
    };
    googleAnalytics: {
        id: string;
    };
    hotjar: {
        id: string;
        snippetVersion: number;
    };
    projects: {
        github: {
            display: boolean;
            header: string;
            mode: string;
            automatic: {
                sortBy: string;
                limit: number;
                exclude: {
                    forks: boolean;
                    projects: string[];
                };
            };
        };
        external: {
            header: string;
            projects: {
                title: string;
                description: string;
                imageUrl: string;
                link: string;
            }[];
        };
    };
    themeConfig: {
        defaultTheme: string;
        disableSwitch: boolean;
        respectPrefersColorScheme: boolean;
        displayAvatarRing: boolean;
        themes: string[];
        customTheme: {
            primary: string;
            secondary: string;
            accent: string;
            neutral: string;
            'base-100': string;
            '--rounded-box': string;
            '--rounded-btn': string;
        };
    };
    pageMetadata: {
        title: string;
        description: string;
        imageURL: string;
    };
    footer: string;
    enablePWA: boolean;
};
export default CONFIG;
