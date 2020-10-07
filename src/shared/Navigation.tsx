import Link from 'next/link';
import { FC } from 'react';
import { DocsNavContainer } from '../theme/Theme.docs';

export interface NavigationItem {
    name: string;
    element: string;
}

export interface NavigationProps {
    elements: Array<NavigationItem>;
}

export const Navigation: FC<NavigationProps> = ({ elements }) => {
    return (
        <DocsNavContainer>
            <Link href="/">
                <a><img src={require('../assets/yf.png')}/></a>
            </Link>
            

            {
                elements.map(item => {
                    return(
                        <a
                            className="element"
                            href={item.element}
                        >
                            {item.name}
                        </a>
                    )   
                })
            }
        </DocsNavContainer>
    )
}