import { Settings } from '../../settings/Settings';

export interface ISocialMedia {
    displayName: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    tooltipMessage: string;
}

export const SocialMediaData: ISocialMedia[] = [
    {
        displayName: 'Github',
        imageSrc: '/ico/github-logo.png',
        imageAlt: 'GitHub',
        href: Settings.GITHUB_URL,
        tooltipMessage: 'Show me some love ⭐ on GitHub',
    }
];
