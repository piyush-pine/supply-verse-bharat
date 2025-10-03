import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Plus, Search, Filter, Package, IndianRupee, MapPin } from "lucide-react";
import { toast } from "sonner";

const Marketplace = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock products data - different based on role
  const getProductsForRole = () => {
    if (user?.role === "farmer" || user?.role === "msme") {
      return [
        {
          id: "1",
          name: "Organic Rice",
          price: 45,
          unit: "kg",
          quantity: 1000,
          location: "Punjab",
          seller: "You",
          certification: "Organic Certified",
          status: "Active",
        },
        {
          id: "2",
          name: "Fresh Vegetables Mix",
          price: 30,
          unit: "kg",
          quantity: 500,
          location: "Maharashtra",
          seller: "You",
          certification: "Quality Assured",
          status: "Active",
        },
      ];
    } else {
      return [
        {
          id: "3",
          name: "Premium Basmati Rice",
          price: 120,
          unit: "kg",
          quantity: 2000,
          location: "Haryana",
          seller: "Green Farms Co.",
          certification: "Export Quality",
          status: "Available",
        },
        {
          id: "4",
          name: "Organic Wheat",
          price: 35,
          unit: "kg",
          quantity: 1500,
          location: "Madhya Pradesh",
          seller: "Organic Growers",
          certification: "Organic Certified",
          status: "Available",
        },
        {
          id: "5",
          name: "Fresh Mangoes (Alphonso)",
          price: 250,
          unit: "kg",
          quantity: 300,
          location: "Ratnagiri",
          seller: "Mango Farmers Association",
          certification: "GI Tagged",
          status: "Available",
        },
        {
          id: "6",
          name: "Turmeric Powder",
          price: 180,
          unit: "kg",
          quantity: 800,
          location: "Tamil Nadu",
          seller: "Spice Valley MSME",
          certification: "ISO Certified",
          status: "Available",
        },
      ];
    }
  };

  const products = getProductsForRole();

  const handleAddProduct = () => {
    toast.success("Product listing form will open");
  };

  const handleBuyProduct = (productName: string) => {
    toast.success(`Added ${productName} to cart`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Marketplace</h2>
            <p className="text-muted-foreground">
              {user?.role === "farmer" || user?.role === "msme"
                ? "Manage your product listings"
                : "Browse and purchase quality agricultural products"}
            </p>
          </div>
          
          {(user?.role === "farmer" || user?.role === "msme") && (
            <Button onClick={handleAddProduct}>
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          )}
        </div>

        {/* Search and Filter Bar */}
        <Card className="p-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </Card>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-0">
                  {product.status}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <IndianRupee className="w-4 h-4" />
                  <span className="text-2xl font-bold text-foreground">
                    ₹{product.price}
                  </span>
                  <span className="text-sm">/ {product.unit}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {product.location}
                </div>

                <p className="text-sm text-muted-foreground">
                  Available: {product.quantity} {product.unit}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  Seller: {product.seller}
                </p>
              </div>

              <Badge variant="outline" className="mb-4">
                {product.certification}
              </Badge>

              <Button
                className="w-full"
                onClick={() => handleBuyProduct(product.name)}
                disabled={product.seller === "You"}
              >
                {product.seller === "You" ? "Your Product" : "Add to Cart"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
