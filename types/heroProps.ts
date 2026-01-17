export interface HeroProps {
    badge?: { text: string };
    heading?: { line1: string; line2: string; line3: string };
    description?: { text: string };
    buttons?: {
        primary?: { text: string; onClick?: () => void };
        secondary?: { text: string; onClick?: () => void };
    };
    searchBar?: {
        placeholder: string;
        buttonText: string;
    };
}
