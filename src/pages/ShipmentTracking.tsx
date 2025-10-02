import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { 
  Truck, 
  MapPin, 
  Package, 
  CheckCircle, 
  Clock,
  Thermometer,
  Droplets
} from "lucide-react";

const ShipmentTracking = () => {
  const { user } = useAuth();

  const getShipmentsForRole = () => {
    if (user?.role === "logistics") {
      return [
        {
          id: "AGR-2024-101",
          product: "Organic Rice",
          from: "Punjab Warehouse",
          to: "Delhi Distribution Center",
          status: "In Transit",
          currentLocation: "Panipat Checkpoint",
          progress: 65,
          eta: "Today, 4:30 PM",
          temp: "22°C",
          humidity: "60%",
          updates: [
            { time: "2:00 PM", status: "Crossed Panipat", location: "Panipat" },
            { time: "11:30 AM", status: "Departed from origin", location: "Punjab" },
            { time: "10:00 AM", status: "Loaded", location: "Punjab Warehouse" },
          ],
        },
        {
          id: "AGR-2024-102",
          product: "Fresh Vegetables",
          from: "Maharashtra Farm",
          to: "Mumbai Market",
          status: "Loading",
          currentLocation: "Maharashtra Farm",
          progress: 15,
          eta: "Tomorrow, 8:00 AM",
          temp: "4°C",
          humidity: "55%",
          updates: [
            { time: "1:00 PM", status: "Quality check passed", location: "Farm" },
            { time: "12:00 PM", status: "Loading initiated", location: "Farm" },
          ],
        },
      ];
    } else if (user?.role === "farmer" || user?.role === "msme") {
      return [
        {
          id: "AGR-2024-045",
          product: "Your Rice Shipment",
          from: "Your Farm",
          to: "Delhi Buyer",
          status: "In Transit",
          currentLocation: "Halfway to destination",
          progress: 50,
          eta: "Tomorrow, 10:00 AM",
          temp: "5°C",
          humidity: "58%",
          updates: [
            { time: "1:30 PM", status: "Crossed state border", location: "Border" },
            { time: "9:00 AM", status: "Departed", location: "Your Farm" },
          ],
        },
      ];
    } else {
      return [
        {
          id: "AGR-2024-078",
          product: "Premium Basmati Rice",
          from: "Haryana Supplier",
          to: "Your Location",
          status: "Out for Delivery",
          currentLocation: "5km away",
          progress: 90,
          eta: "Today, 3:00 PM",
          temp: "6°C",
          humidity: "52%",
          updates: [
            { time: "2:15 PM", status: "Out for delivery", location: "Local Hub" },
            { time: "11:00 AM", status: "Reached city hub", location: "City Hub" },
            { time: "Yesterday", status: "In transit", location: "Highway" },
          ],
        },
      ];
    }
  };

  const shipments = getShipmentsForRole();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Shipment Tracking</h2>
          <p className="text-muted-foreground">
            Real-time tracking of your shipments
          </p>
        </div>

        <div className="space-y-6">
          {shipments.map((shipment) => (
            <Card key={shipment.id} className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{shipment.product}</h3>
                  <p className="text-sm text-muted-foreground">
                    Shipment ID: {shipment.id}
                  </p>
                </div>
                <Badge className={
                  shipment.status === "In Transit" ? "bg-warning/10 text-warning border-0" :
                  shipment.status === "Out for Delivery" ? "bg-primary/10 text-primary border-0" :
                  "bg-secondary/10 text-secondary border-0"
                }>
                  {shipment.status}
                </Badge>
              </div>

              {/* Route */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">From</p>
                    <p className="font-semibold">{shipment.from}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">To</p>
                    <p className="font-semibold">{shipment.to}</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">{shipment.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all"
                    style={{ width: `${shipment.progress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Current: {shipment.currentLocation}
                </p>
              </div>

              {/* Sensor Data & ETA */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Temperature</span>
                  </div>
                  <p className="text-2xl font-bold">{shipment.temp}</p>
                </Card>

                <Card className="p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Humidity</span>
                  </div>
                  <p className="text-2xl font-bold">{shipment.humidity}</p>
                </Card>

                <Card className="p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">ETA</span>
                  </div>
                  <p className="text-lg font-bold">{shipment.eta}</p>
                </Card>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="font-semibold mb-4">Tracking Timeline</h4>
                <div className="space-y-4">
                  {shipment.updates.map((update, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        {idx < shipment.updates.length - 1 && (
                          <div className="w-0.5 h-full bg-border my-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="font-medium">{update.status}</p>
                        <p className="text-sm text-muted-foreground">{update.location}</p>
                        <p className="text-xs text-muted-foreground mt-1">{update.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Truck className="w-4 h-4 mr-2" />
                View Live Map
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipmentTracking;
