import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoundWaveAnimation from "@/components/SoundWaveAnimation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Target, Brain, Globe, Users, Music, Calendar } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-electric bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                <span className="text-foreground">Analytics</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced machine learning algorithms analyze streaming data to predict revenue and optimize your music portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Analytics Dashboard Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Revenue Analytics */}
              <Card className="lg:col-span-2 p-8 bg-studio-surface/30 backdrop-blur-md border-border/20">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold">Revenue Forecast</h3>
                  <div className="flex items-center space-x-2 text-green-500">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-semibold">+12.3%</span>
                  </div>
                </div>
                
                <div className="h-64 bg-studio-deep/50 rounded-lg p-6 mb-6">
                  <div className="h-full flex items-end justify-between">
                    <SoundWaveAnimation bars={32} className="h-full w-full" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$847K</div>
                    <div className="text-sm text-muted-foreground">This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">$2.1M</div>
                    <div className="text-sm text-muted-foreground">Q4 Projection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">95.2%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </Card>

              {/* Key Metrics */}
              <div className="space-y-6">
                <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold">Stream Analysis</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Streams</span>
                      <span className="font-semibold">24.7M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Growth Rate</span>
                      <span className="font-semibold text-green-500">+8.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Top Platform</span>
                      <span className="font-semibold">Spotify</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Globe className="h-6 w-6 text-secondary" />
                    <h4 className="text-lg font-semibold">Global Reach</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Countries</span>
                      <span className="font-semibold">127</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Top Market</span>
                      <span className="font-semibold">United States</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Emerging</span>
                      <span className="font-semibold text-accent">Brazil</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-20 bg-studio-deep/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Intelligent Insights</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI analyzes millions of data points to provide actionable insights for your music business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Predictive Modeling</h3>
                <p className="text-sm text-muted-foreground">
                  Machine learning models predict future revenue with 95%+ accuracy
                </p>
              </Card>

              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Target className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Trend Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Identify emerging trends and market opportunities early
                </p>
              </Card>

              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Audience Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Deep dive into listener demographics and behaviors
                </p>
              </Card>

              <Card className="p-6 bg-studio-surface/30 backdrop-blur-md border-border/20 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Release Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Optimize release timing for maximum impact
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Integrations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Platform Integrations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect all your streaming platforms and get unified analytics across your entire music portfolio.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Supported Platforms</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-studio-medium/30 rounded-lg">
                    <Music className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Spotify</div>
                      <div className="text-sm text-muted-foreground">Real-time streaming data</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-studio-medium/30 rounded-lg">
                    <Music className="h-6 w-6 text-secondary" />
                    <div>
                      <div className="font-semibold">Apple Music</div>
                      <div className="text-sm text-muted-foreground">Detailed analytics</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-studio-medium/30 rounded-lg">
                    <Music className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">YouTube Music</div>
                      <div className="text-sm text-muted-foreground">Video & audio metrics</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-studio-medium/30 rounded-lg">
                    <Music className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">SoundCloud</div>
                      <div className="text-sm text-muted-foreground">Independent releases</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-studio-surface/30 backdrop-blur-md border-border/20">
                <h4 className="text-xl font-semibold mb-6">Real-Time Data Sync</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Spotify</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-500">Connected</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Apple Music</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-500">Connected</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>YouTube Music</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-yellow-500">Syncing</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Amazon Music</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Not Connected</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6">Connect More Platforms</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Reports */}
        <section className="py-20 bg-studio-deep/20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Custom Analytics Reports</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Generate detailed reports for investors, labels, and financial institutions with our advanced analytics engine.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500M+</div>
                  <div className="text-muted-foreground">Data Points Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">95.2%</div>
                  <div className="text-muted-foreground">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-muted-foreground">Real-Time Updates</div>
                </div>
              </div>

              <Button size="lg" className="glow-primary hover:animate-pulse-glow">
                View Analytics Dashboard
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;