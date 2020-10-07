export const BackgroundColor = '#060606';
export const HeaderColor = '#1a1a1a';
export const MenuColor = '#262626';
export const PanelColor = '#1e1e1e';
export const InputColor = '#303030';
export const FontColor = '#FFFFFF';

export const ButtonColor = '#313131';
export const ButtonHighlight = '#6b6b6b';
export const ButtonActive = '#989898';

export const ThemePrimary = `#327CCB`;
export const ThemeSecondary = `#2862A0`;

export const GradBackground = `linear-gradient(245deg, rgba(27,27,27,1) 0%, rgba(40,40,40,1) 50%, rgba(37,37,37,1) 100%)`

export function Easing(property: string = 'background', duration: string = '0.5s') {
    return `transition: ${property} ${duration} cubic-bezier(0.76, 0, 0.24, 1);`
}