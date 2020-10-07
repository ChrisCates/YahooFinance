import { FC } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Navigation, NavigationItem } from '../../shared/Navigation';
import { SummaryInterface, StatsInterface, ProfileInterface, IncomeInterface, BalanceInterface, CashInterface, AnalysisInterface, HoldersInterface, InsidersInterface, InsiderTransactionsInterface } from '../../shared/InterfaceData';
import { Summary, Stats, Profile, Income, Balance, Cash, Analysis, Holders, Insiders, InsiderTx } from '../../shared/LibraryData';

import { AppContainer } from '../../theme/Theme.app';
import { DocsContainer } from '../../theme/Theme.docs';

export const LibraryElements: Array<NavigationItem> = [
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
];

export const Library: FC = () => {
    return(
        <AppContainer>
            <DocsContainer>
                <Navigation elements={LibraryElements}/>
                <div className="documentation">

                    <div id="summary" className="documentation-item">
                        <h2>Summary</h2>
                        <p>The summary command outputs a brief summary about the equity.</p>

                        <p>Usage</p>
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Summary}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Stats}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Profile}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Income}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Balance}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Cash}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Analysis}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Holders}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {Insiders}
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
                        <SyntaxHighlighter language="typescript" style={dark} className="sh">
                            {InsiderTx}
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

export default Library;