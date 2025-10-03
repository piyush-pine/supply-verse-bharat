import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
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
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  // Role-specific data
  const getDashboardData = () => {
    switch (user.role) {
      case "farmer":
        return {
          stats: [
            { label: "Active Listings", value: "12", icon: Package, trend: "+3", detail: "8 Crops • 4 Processed" },
            { label: "Pending Orders", value: "8", icon: Truck, trend: "+2", detail: "5 Confirmed • 3 Processing" },
            { label: "This Month Revenue", value: "₹1,24,500", icon: IndianRupee, trend: "+18%", detail: "₹98,200 Received" },
            { label: "Sustainability", value: "680", icon: Leaf, trend: "+45", detail: "Silver Tier" },
          ],
          alerts: [
            { id: "1", title: "New Order Received", desc: "Order #FAR-101 for Organic Rice - 200kg", type: "success" },
          ],
        };
      case "msme":
        return {
          stats: [
            { label: "Processing Units", value: "4", icon: Package, trend: "Active", detail: "3 Running • 1 Maintenance" },
            { label: "Active Shipments", value: "18", icon: Truck, trend: "+5", detail: "12 On Track • 6 Delayed" },
            { label: "Monthly Revenue", value: "₹3,45,680", icon: IndianRupee, trend: "+22%", detail: "₹2,89,420 Received" },
            { label: "Quality Score", value: "940", icon: Leaf, trend: "+15", detail: "Platinum Tier" },
          ],
          alerts: [
            { id: "1", title: "Quality Alert", desc: "Batch #MSM-445 requires inspection", type: "warning" },
          ],
        };
      case "logistics":
        return {
          stats: [
            { label: "Active Deliveries", value: "34", icon: Truck, trend: "+8", detail: "28 On Track • 6 Delayed" },
            { label: "Fleet Status", value: "24/30", icon: Package, trend: "80%", detail: "6 In Maintenance" },
            { label: "Monthly Earnings", value: "₹2,15,400", icon: IndianRupee, trend: "+12%", detail: "₹1,85,200 Received" },
            { label: "Efficiency Score", value: "850", icon: Leaf, trend: "+28", detail: "Gold Tier" },
          ],
          alerts: [
            { id: "1", title: "Route Optimization", desc: "New efficient route available for Delhi-Mumbai", type: "success" },
          ],
        };
      default: // buyer
        return {
          stats: [
            { label: "Active Orders", value: "6", icon: Package, trend: "+2", detail: "4 In Transit • 2 Processing" },
            { label: "Tracked Shipments", value: "6", icon: Truck, trend: "Live", detail: "All On Schedule" },
            { label: "Monthly Spending", value: "₹89,500", icon: IndianRupee, trend: "+8%", detail: "10 Purchases" },
            { label: "Eco Points", value: "420", icon: Leaf, trend: "+35", detail: "Silver Tier" },
          ],
          alerts: [
            { id: "1", title: "Delivery Update", desc: "Order #BUY-2024-078 arriving today at 3:00 PM", type: "success" },
          ],
        };
    }
  };

  const dashboardData = getDashboardData();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Title & Last Updated */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
          <p className="text-muted-foreground">Real-time monitoring of your supply chain activities</p>
          <p className="text-sm text-muted-foreground mt-1">Last updated: Today, 2:45 PM IST</p>
        </div>

        {/* Role-specific Alerts */}
        {dashboardData.alerts.length > 0 && (
          <Card className={`p-6 mb-8 ${
            dashboardData.alerts[0].type === "warning" 
              ? "border-warning/50 bg-warning/5" 
              : "border-primary/50 bg-primary/5"
          }`}>
            <div className="flex items-start gap-3">
              {dashboardData.alerts[0].type === "warning" ? (
                <AlertTriangle className="w-5 h-5 text-warning mt-1" />
              ) : (
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
              )}
              <div className="flex-1">
                <h3 className={`font-semibold mb-3 ${
                  dashboardData.alerts[0].type === "warning" ? "text-warning" : "text-primary"
                }`}>
                  Notifications
                </h3>
                <div className="space-y-3">
                  {dashboardData.alerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div>
                        <p className="font-medium">{alert.title}</p>
                        <p className="text-sm text-muted-foreground">{alert.desc}</p>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Stats Cards - Role specific */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardData.stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-0">
                    {stat.trend}
                  </Badge>
                </div>
                <div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              </Card>
            );
          })}
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
