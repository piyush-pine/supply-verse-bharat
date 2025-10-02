import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Package, 
  Truck, 
  IndianRupee, 
  Leaf, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  FileText,
  BarChart3,
  RefreshCw
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold">AgriChain</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Data
              </Button>
              <Button size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Title & Last Updated */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
          <p className="text-muted-foreground">Real-time monitoring of your supply chain activities</p>
          <p className="text-sm text-muted-foreground mt-1">Last updated: Today, 2:45 PM IST</p>
        </div>

        {/* Critical Alerts */}
        <Card className="p-6 mb-8 border-destructive/50 bg-destructive/5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-destructive mb-3">Critical Quality Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div>
                    <p className="font-medium">Shipment #AGR-2024-001</p>
                    <p className="text-sm text-muted-foreground">Temperature exceeded threshold: 28°C detected</p>
                  </div>
                  <Button size="sm" variant="destructive">View Details</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div>
                    <p className="font-medium">Shipment #AGR-2024-003</p>
                    <p className="text-sm text-muted-foreground">Humidity levels critical: 85% detected</p>
                  </div>
                  <Button size="sm" variant="destructive">View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <Badge className="bg-primary/10 text-primary border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                12%
              </Badge>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">24</p>
              <p className="text-sm text-muted-foreground mb-2">Active Shipments</p>
              <p className="text-xs text-muted-foreground">18 On Track • 6 Delayed</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-warning" />
              </div>
              <Badge className="bg-secondary/10 text-secondary border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                8%
              </Badge>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">156</p>
              <p className="text-sm text-muted-foreground mb-2">Product Listings</p>
              <p className="text-xs text-muted-foreground">142 Active • 14 Pending</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-success" />
              </div>
              <Badge className="bg-primary/10 text-primary border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                15%
              </Badge>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">₹2,45,680</p>
              <p className="text-sm text-muted-foreground mb-2">Monthly Revenue</p>
              <p className="text-xs text-muted-foreground">₹1,89,420 Received • ₹56,260 Pending</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <Badge className="bg-primary/10 text-primary border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                22%
              </Badge>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">890</p>
              <p className="text-sm text-muted-foreground mb-2">Sustainability Points</p>
              <p className="text-xs text-muted-foreground">Gold Tier • Next: Platinum</p>
            </div>
          </Card>
        </div>

        {/* Charts and Data */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Shipment Status */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Shipment Status Overview</h3>
              <Badge variant="outline" className="bg-primary/5">Live</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>On Track</span>
                </div>
                <span className="font-semibold">18</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <span>In Transit</span>
                </div>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <span>Delayed</span>
                </div>
                <span className="font-semibold">2</span>
              </div>
            </div>
          </Card>

          {/* IoT Sensor Data */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">IoT Sensor Data</h3>
              <Badge variant="outline" className="bg-primary/5">Live Data</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Temperature</p>
                <p className="text-3xl font-bold mb-1">5°C</p>
                <p className="text-xs text-muted-foreground">Optimal Range: 2-8°C</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Humidity</p>
                <p className="text-3xl font-bold mb-1">55%</p>
                <p className="text-xs text-muted-foreground">Optimal Range: 45-65%</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Last sensor reading: 2 minutes ago</p>
          </Card>
        </div>

        {/* Recent Shipments & Payments */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Shipments */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Recent Shipments</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">Organic Rice Shipment</p>
                  <p className="text-sm text-muted-foreground mb-2">AGR-2024-045 • Mumbai to Delhi</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-warning/10 text-warning border-0">In Transit</Badge>
                    <span className="text-xs text-muted-foreground">ETA: Today, 6:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">Fresh Vegetables Batch</p>
                  <p className="text-sm text-muted-foreground mb-2">AGR-2024-046 • Pune Processing Center</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-warning/10 text-warning border-0">Processing</Badge>
                    <span className="text-xs text-muted-foreground">Temp: 4°C • Humidity: 55%</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">Premium Mango Export</p>
                  <p className="text-sm text-muted-foreground mb-2">AGR-2024-044 • Bangalore to Singapore</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/10 text-primary border-0">Delivered</Badge>
                    <span className="text-xs text-muted-foreground">Completed 2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment Status */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Payment Status</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">₹45,600</p>
                  <p className="text-sm text-muted-foreground mb-2">Rice Export Payment</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/10 text-primary border-0">Received</Badge>
                    <span className="text-xs text-muted-foreground">Transaction ID: TXN-2024-1205</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">₹32,400</p>
                  <p className="text-sm text-muted-foreground mb-2">Vegetable Supply</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-warning/10 text-warning border-0">Pending</Badge>
                    <span className="text-xs text-muted-foreground">Expected: Tomorrow</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">₹28,900</p>
                  <p className="text-sm text-muted-foreground mb-2">Mango Export</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-secondary/10 text-secondary border-0">Processing</Badge>
                    <span className="text-xs text-muted-foreground">Bank verification in progress</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">₹1,06,900</p>
                    <p className="text-sm text-muted-foreground">Total Pending</p>
                  </div>
                  <Button size="sm">Request Payment</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6 mt-8">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Plus className="w-5 h-5" />
              <span>Add New Product</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Truck className="w-5 h-5" />
              <span>Create Shipment</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <FileText className="w-5 h-5" />
              <span>Generate Invoice</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>View Analytics</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
