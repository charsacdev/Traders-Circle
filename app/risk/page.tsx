import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, DollarSign, FileText, BarChart3 } from "lucide-react"

export default function RiskPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-100 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Risk Disclosure Statement</h1>
              <p className="text-xl text-gray-600 mb-8">
                Important information about the risks associated with copy trading and financial markets
              </p>
              <div className="bg-red-100 border border-red-200 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                  <div className="text-left">
                    <h3 className="font-semibold text-red-800 mb-2">High Risk Warning</h3>
                    <p className="text-red-700 text-sm">
                      Trading involves substantial risk of loss and may not be suitable for all investors. You should
                      carefully consider whether trading is appropriate for you in light of your experience, objectives,
                      financial resources, and other relevant circumstances.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>Last updated: December 19, 2024</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Required by Nigerian SEC</span>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Risk Categories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-red-200">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <TrendingDown className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-lg text-center">Market Risk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-center mb-4">
                      Financial markets are volatile and unpredictable. Prices can move rapidly against your position.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Currency fluctuations</li>
                      <li>• Economic events impact</li>
                      <li>• Political instability effects</li>
                      <li>• Market sentiment changes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <DollarSign className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg text-center">Leverage Risk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-center mb-4">
                      Leverage amplifies both profits and losses. Small market movements can result in significant
                      losses.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Magnified losses</li>
                      <li>• Margin calls</li>
                      <li>• Position liquidation</li>
                      <li>• Capital erosion</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <BarChart3 className="h-8 w-8 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg text-center">Copy Trading Risk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-center mb-4">
                      Past performance doesn't guarantee future results. Master traders can experience losses.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Strategy changes</li>
                      <li>• Performance decline</li>
                      <li>• Execution delays</li>
                      <li>• Slippage effects</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Risk Disclosure Sections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <a href="#general" className="text-primary hover:underline">
                      1. General Risk Warning
                    </a>
                    <a href="#market" className="text-primary hover:underline">
                      2. Market Risks
                    </a>
                    <a href="#leverage" className="text-primary hover:underline">
                      3. Leverage & Margin
                    </a>
                    <a href="#copy" className="text-primary hover:underline">
                      4. Copy Trading Risks
                    </a>
                    <a href="#technical" className="text-primary hover:underline">
                      5. Technical Risks
                    </a>
                    <a href="#regulatory" className="text-primary hover:underline">
                      6. Regulatory Risks
                    </a>
                    <a href="#liquidity" className="text-primary hover:underline">
                      7. Liquidity Risks
                    </a>
                    <a href="#operational" className="text-primary hover:underline">
                      8. Operational Risks
                    </a>
                    <a href="#recommendations" className="text-primary hover:underline">
                      9. Risk Management
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Disclosure Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div id="general" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. General Risk Warning</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <p className="text-red-800 font-semibold mb-2">
                    WARNING: Trading foreign exchange, contracts for difference (CFDs), and other leveraged financial
                    instruments carries a high level of risk and may not be suitable for all investors.
                  </p>
                  <p className="text-red-700 text-sm">
                    The high degree of leverage can work against you as well as for you. Before deciding to trade, you
                    should carefully consider your investment objectives, level of experience, and risk appetite. There
                    is a possibility that you could sustain a loss of some or all of your initial investment.
                  </p>
                </div>
                <p className="text-gray-700">
                  You should not invest money that you cannot afford to lose. You should be aware of all the risks
                  associated with trading and seek advice from an independent financial advisor if you have any doubts.
                </p>
              </div>

              <div id="market" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Market Risks</h2>
                <p className="text-gray-700 mb-4">
                  Financial markets are subject to various risks that can significantly impact your investments:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.1 Price Volatility</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Currency pairs can experience rapid and substantial price movements</li>
                  <li>Market volatility can increase during economic announcements and geopolitical events</li>
                  <li>Overnight gaps can occur when markets reopen after weekends or holidays</li>
                  <li>Extreme market conditions may result in significant losses</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.2 Economic Factors</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Interest rate changes by central banks</li>
                  <li>Inflation rates and economic growth indicators</li>
                  <li>Political instability and government policy changes</li>
                  <li>Natural disasters and global events</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.3 Nigerian Market Specific Risks</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Naira exchange rate fluctuations against major currencies</li>
                  <li>Central Bank of Nigeria (CBN) policy changes</li>
                  <li>Oil price volatility affecting the Nigerian economy</li>
                  <li>Political and regulatory developments</li>
                </ul>
              </div>

              <div id="leverage" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Leverage and Margin Risks</h2>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-orange-800 mb-2">Leverage Amplifies Risk</h3>
                  <p className="text-orange-700 text-sm">
                    Leverage allows you to control a large position with a relatively small amount of capital. While
                    this can magnify profits, it also magnifies losses. A small adverse price movement can result in
                    losses that exceed your initial investment.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">3.1 Margin Requirements</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>You must maintain sufficient margin to keep positions open</li>
                  <li>Margin requirements can change based on market conditions</li>
                  <li>Failure to meet margin calls may result in position liquidation</li>
                  <li>Weekend and holiday margin requirements may be higher</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">3.2 Margin Calls and Stop-Outs</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Positions may be automatically closed if margin falls below required levels</li>
                  <li>Stop-out levels are typically set at 20-50% of required margin</li>
                  <li>You may not receive advance notice of margin calls</li>
                  <li>Positions may be closed at unfavorable prices during volatile markets</li>
                </ul>
              </div>

              <div id="copy" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Copy Trading Specific Risks</h2>
                <p className="text-gray-700 mb-4">Copy trading involves additional risks beyond traditional trading:</p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">4.1 Performance Risk</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Past performance of master traders does not guarantee future results</li>
                  <li>Master traders may experience losing streaks or changes in performance</li>
                  <li>Trading strategies may become less effective over time</li>
                  <li>Master traders may change their trading approach without notice</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">4.2 Execution Risk</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Delays in copying trades may result in different execution prices</li>
                  <li>Slippage can occur between master trader execution and copy execution</li>
                  <li>Technical issues may prevent trades from being copied</li>
                  <li>Different account sizes may result in proportionally different outcomes</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">4.3 Dependency Risk</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Over-reliance on master traders without understanding their strategies</li>
                  <li>Lack of personal trading knowledge and experience</li>
                  <li>Inability to make independent trading decisions</li>
                  <li>Risk of following unsuitable trading strategies</li>
                </ul>
              </div>

              <div id="technical" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Technical and Operational Risks</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.1 Technology Risks</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Platform downtime or technical failures</li>
                  <li>Internet connectivity issues</li>
                  <li>Software bugs or system errors</li>
                  <li>Cybersecurity threats and data breaches</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.2 Communication Risks</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Delays in receiving market data or trade confirmations</li>
                  <li>Miscommunication of trading instructions</li>
                  <li>Email or notification delivery failures</li>
                  <li>Time zone differences affecting communication</li>
                </ul>
              </div>

              <div id="regulatory" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Regulatory and Legal Risks</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">6.1 Regulatory Changes</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Changes in Nigerian financial regulations</li>
                  <li>New restrictions on leverage or trading activities</li>
                  <li>Tax law changes affecting trading profits</li>
                  <li>International regulatory developments</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">6.2 Compliance Risks</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Failure to meet KYC or AML requirements</li>
                  <li>Restrictions on certain trading activities</li>
                  <li>Account suspension or closure for non-compliance</li>
                  <li>Legal consequences of regulatory violations</li>
                </ul>
              </div>

              <div id="liquidity" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Liquidity Risks</h2>
                <p className="text-gray-700 mb-4">
                  Liquidity refers to the ability to buy or sell an asset quickly without significantly affecting its
                  price:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Low liquidity can result in wider spreads and higher trading costs</li>
                  <li>Difficulty closing positions during volatile market conditions</li>
                  <li>Slippage when executing large orders</li>
                  <li>Market gaps during low liquidity periods</li>
                </ul>
              </div>

              <div id="operational" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Operational Risks</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">8.1 Counterparty Risk</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Risk of broker insolvency or default</li>
                  <li>Segregation of client funds may not provide complete protection</li>
                  <li>Counterparty credit risk in OTC transactions</li>
                  <li>Clearing and settlement risks</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">8.2 Custody Risk</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Risk of loss of funds held by third parties</li>
                  <li>Inadequate insurance coverage</li>
                  <li>Jurisdictional risks for offshore brokers</li>
                  <li>Recovery difficulties in case of broker failure</li>
                </ul>
              </div>

              <div id="recommendations" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Risk Management Recommendations</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-green-800 mb-3">Best Practices for Risk Management</h3>
                  <ul className="list-disc pl-6 text-green-700 text-sm space-y-1">
                    <li>Never invest more than you can afford to lose</li>
                    <li>Diversify your investments across multiple master traders</li>
                    <li>Set appropriate stop-loss levels and risk limits</li>
                    <li>Regularly monitor your positions and account balance</li>
                    <li>Understand the strategies of master traders you copy</li>
                    <li>Keep detailed records of all trading activities</li>
                    <li>Stay informed about market conditions and economic events</li>
                    <li>Seek independent financial advice if needed</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">9.1 Position Sizing</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Limit individual position sizes to a small percentage of your capital</li>
                  <li>Use appropriate leverage levels based on your risk tolerance</li>
                  <li>Consider correlation between different positions</li>
                  <li>Adjust position sizes based on market volatility</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">9.2 Monitoring and Review</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Regularly review the performance of copied traders</li>
                  <li>Monitor changes in trading strategies or risk levels</li>
                  <li>Set up alerts for significant account movements</li>
                  <li>Conduct periodic portfolio reviews and rebalancing</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Acknowledgment and Consent</h2>
                <p className="text-gray-700 mb-4">By using the Traders Circle platform, you acknowledge that:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>You have read and understood this Risk Disclosure Statement</li>
                  <li>You understand the risks associated with copy trading and leveraged products</li>
                  <li>You have the financial ability to bear the risks of trading</li>
                  <li>You will not hold Traders Circle liable for trading losses</li>
                  <li>You will seek independent advice if you do not understand the risks</li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-6 mt-6">
                  <p className="text-gray-700 text-sm">
                    <strong>Important:</strong> This Risk Disclosure Statement does not cover all possible risks
                    associated with trading. Market conditions and regulations may change, creating new risks. You
                    should stay informed about developments that may affect your trading activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
