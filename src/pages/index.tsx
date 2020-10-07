import Link from 'next/link';
import { FC } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Button } from '@chakra-ui/core';
import { AppContainer } from '../theme/Theme.app';
import { IndexContainer } from '../theme/Theme.index';

export const Index: FC = () => {
    return(
        <AppContainer>
            <IndexContainer>
                <img className="yf-logo" src={require('../assets/yf.png')}/>
                <h2>A flexible API and Library to aggregate data on Stonks.</h2>
                
                <div className="snippet">
                    <h3>Use it on the command line</h3>
                    <SyntaxHighlighter language="bash" style={dark}>
{`$ npm install @chriscates/yahoofinance --global
$
$ yf summary MSFT
$
$ Summary for MSFT
$ ...`}
                    </SyntaxHighlighter>

                    <Link href="/docs/bash">
                        <Button variantColor="green" size="lg">
                            Read the CLI docs
                        </Button>
                    </Link>
                </div>

                <div className="snippet">
                    <h3>Use it as a library</h3>
                    <SyntaxHighlighter language="typescript" style={dark}>
{`import { GetProfile } from '@chriscates/yahoofinance';
const Profile = await GetProfile('TSLA');
console.log(Profile);
// ... Profile Data`}
                    </SyntaxHighlighter>

                    <Link href="/docs/library">
                        <Button variantColor="green" size="lg">
                            Read the library docs
                        </Button>
                    </Link>
                </div>
            </IndexContainer>
            
        </AppContainer>
    );
}

export default Index;