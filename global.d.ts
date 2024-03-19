// global.d.ts
import { JSX } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Add definitions for HTML elements here
            // Example:
            // 'div': React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            // 'span': React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            // 'button': React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            // ...
        }
    }
}

// global.d.ts
import { JSX } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Add definitions for HTML elements here
            // Example:
            // 'div': React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            // 'span': React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            // 'button': React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            // ...
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        }
    }
}
