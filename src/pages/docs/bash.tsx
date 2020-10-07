import { FC } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Navigation, NavigationItem } from '../../shared/Navigation';
import { SummaryInterface, StatsInterface, ProfileInterface, IncomeInterface, BalanceInterface, CashInterface, AnalysisInterface, HoldersInterface, InsidersInterface, InsiderTransactionsInterface } from '../../shared/InterfaceData';

import { AppContainer } from '../../theme/Theme.app';
import { DocsContainer } from '../../theme/Theme.docs';

export const BashElements: Array<NavigationItem> = [
    { name: 'Program Options', element: '#program-options' },
    { name: 'Summary', element: '#summary' },
    { name: 'Stats', element: '#stats' },
    { name: 'Profile', element: '#profile' },
    { name: 'Income Statements', element: '#income-statements' },
    { name: 'Balance Sheets', element: '#balance-sheets' },
    { name: 'Cash Flows', element: '#cash-flows' },
    { name: 'Analysis', element: '#analysis' },
    { name: 'Holders', element: '#holders' },
    { name: 'Insiders', element: '#insiders' },
    { name: 'Insider Transactions', element: '#insider-transactions' },
]

export const Bash: FC = () => {
    return(
        <AppContainer>
            <DocsContainer>
                <Navigation elements={BashElements}/>
                <div className="documentation">

                    <div id="program-options" className="documentation-item">
                        <h2>Program Options</h2>
                        <p>There are 3 key program options.</p>
                        <p>1. mute - This removes any console output when pulling data</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf summary MSFT --mute`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>2. file - This enables writing data to files, the default output is ./output.json</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf summary MSFT --file`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>3. file - This specifies the path to output the JSON data to</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf summary MSFT --file --path msft.json`}
                        </SyntaxHighlighter>
                    </div>

                    <div id="summary" className="documentation-item">
                        <h2>Summary</h2>
                        <p>The summary command outputs a brief summary about the equity.</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf summary <symbol>\n` +
                            `$ yf summary MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {SummaryInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="stats" className="documentation-item">
                        <h2>Stats</h2>
                        <p>The stats command outputs general stats about the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf stats <symbol>\n` +
                            `$ yf stats MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {StatsInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="profile" className="documentation-item">
                        <h2>Profile</h2>
                        <p>The profile command outputs general profile information about the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf profile <symbol>\n` +
                            `$ yf profile MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {ProfileInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="income-statements" className="documentation-item">
                        <h2>Income Statements</h2>
                        <p>The income statements command outputs the last 4 years of income statement information from the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf income-statements <symbol>\n` +
                            `$ yf income-statements MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {IncomeInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="balance-sheets" className="documentation-item">
                        <h2>Balance Sheets</h2>
                        <p>The balance sheets command outputs the last 4 years of balance sheets from the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf balance-sheets <symbol>\n` +
                            `$ yf balance-sheets MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {BalanceInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="cash-flow" className="documentation-item">
                        <h2>Cash Flow</h2>
                        <p>The cash flow command outputs the last 4 years of cash flow statements from the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf cash-flows <symbol>\n` +
                            `$ yf cash-flows MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {CashInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="analysis" className="documentation-item">
                        <h2>Analysis</h2>
                        <p>The analysis command outputs the historical analysis for the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf analysis <symbol>\n` +
                            `$ yf analysis MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {AnalysisInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="holders" className="documentation-item">
                        <h2>Holders</h2>
                        <p>The holders command outputs the key holders for the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf holders <symbol>\n` +
                            `$ yf holders MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {HoldersInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="insiders" className="documentation-item">
                        <h2>Insiders</h2>
                        <p>The insiders command outputs the key insiders for the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf insiders <symbol>\n` +
                            `$ yf insiders MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {InsidersInterface}
                        </SyntaxHighlighter>
                    </div>

                    <div id="insider-transactions" className="documentation-item">
                        <h2>Insider Transactions</h2>
                        <p>The insider transactions command outputs the key insiders for the equity</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="bash" style={dark} className="sh">
                            {`$ yf insider-transactions <symbol>\n` +
                            `$ yf insider-transactions MSFT`}
                        </SyntaxHighlighter>

                        <div className="space"/>

                        <p>Interface</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {InsiderTransactionsInterface}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </DocsContainer>
        </AppContainer>
    );
}

export default Bash;