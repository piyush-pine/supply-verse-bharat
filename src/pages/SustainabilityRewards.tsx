import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { 
  Award, 
  Leaf, 
  TrendingUp, 
  Droplets, 
  Zap,
  TreePine,
  Recycle
} from "lucide-react";

const SustainabilityRewards = () => {
  const { user } = useAuth();

  const getRewardsForRole = () => {
    if (user?.role === "farmer" || user?.role === "msme") {
      return {
        points: 890,
        tier: "Gold",
        nextTier: "Platinum",
        pointsToNext: 110,
        carbonSaved: "1,240 kg",
        waterSaved: "45,000 L",
        achievements: [
          { icon: Leaf, title: "Organic Pioneer", desc: "100% organic practices", date: "2 weeks ago" },
          { icon: Droplets, title: "Water Warrior", desc: "Saved 50,000L water", date: "1 month ago" },
          { icon: TreePine, title: "Tree Planter", desc: "Planted 100 trees", date: "2 months ago" },
        ],
        recentActivities: [
          { activity: "Organic certification uploaded", points: 50, date: "Yesterday" },
          { activity: "Zero-waste packaging used", points: 30, date: "3 days ago" },
          { activity: "Renewable energy usage reported", points: 40, date: "1 week ago" },
        ],
      };
    } else if (user?.role === "buyer") {
      return {
        points: 450,
        tier: "Silver",
        nextTier: "Gold",
        pointsToNext: 50,
        carbonSaved: "520 kg",
        waterSaved: "18,000 L",
        achievements: [
          { icon: Recycle, title: "Eco Buyer", desc: "Purchased 100% organic", date: "1 week ago" },
          { icon: Leaf, title: "Green Choice", desc: "50 eco-friendly purchases", date: "2 weeks ago" },
        ],
        recentActivities: [
          { activity: "Purchased organic products", points: 25, date: "Yesterday" },
          { activity: "Reusable packaging chosen", points: 15, date: "4 days ago" },
          { activity: "Completed sustainable supply chain", points: 35, date: "1 week ago" },
        ],
      };
    } else {
      return {
        points: 620,
        tier: "Gold",
        nextTier: "Platinum",
        pointsToNext: 380,
        carbonSaved: "890 kg",
        waterSaved: "32,000 L",
        achievements: [
          { icon: Zap, title: "Efficient Hauler", desc: "Optimized 100 routes", date: "1 week ago" },
          { icon: Leaf, title: "Green Fleet", desc: "50% electric vehicles", date: "2 weeks ago" },
        ],
        recentActivities: [
          { activity: "Used electric vehicle for delivery", points: 40, date: "Today" },
          { activity: "Route optimization implemented", points: 30, date: "2 days ago" },
          { activity: "Zero-emission delivery", points: 50, date: "5 days ago" },
        ],
      };
    }
  };

  const rewards = getRewardsForRole();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Sustainability Rewards</h2>
          <p className="text-muted-foreground">
            Your contribution to sustainable agriculture
          </p>
        </div>

        {/* Points Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <Badge className="bg-primary text-primary-foreground border-0">
                {rewards.tier}
              </Badge>
            </div>
            <p className="text-4xl font-bold mb-2">{rewards.points}</p>
            <p className="text-sm text-muted-foreground">Sustainability Points</p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-muted-foreground">Next: {rewards.nextTier}</span>
                <span className="text-muted-foreground">{rewards.pointsToNext} pts</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary"
                  style={{ width: `${(rewards.points / (rewards.points + rewards.pointsToNext)) * 100}%` }}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-success" />
              </div>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <p className="text-3xl font-bold mb-2">{rewards.carbonSaved}</p>
            <p className="text-sm text-muted-foreground">Carbon Emissions Saved</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-bold mb-2">{rewards.waterSaved}</p>
            <p className="text-sm text-muted-foreground">Water Conserved</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Achievements */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Achievements</h3>
            <div className="space-y-4">
              {rewards.achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.desc}</p>
                      <p className="text-xs text-muted-foreground">Earned {achievement.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Recent Activities */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Recent Activities</h3>
            <div className="space-y-4">
              {rewards.recentActivities.map((activity, idx) => (
                <div key={idx} className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium mb-1">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-0">
                    +{activity.points} pts
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Redeem Rewards */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Redeem Your Points</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Premium Seeds</h4>
              <p className="text-sm text-muted-foreground mb-4">500 points</p>
              <Button variant="outline" size="sm" className="w-full">Redeem</Button>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Organic Fertilizer Kit</h4>
              <p className="text-sm text-muted-foreground mb-4">800 points</p>
              <Button variant="outline" size="sm" className="w-full">Redeem</Button>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Solar Panel Discount</h4>
              <p className="text-sm text-muted-foreground mb-4">1000 points</p>
              <Button variant="outline" size="sm" className="w-full" disabled={rewards.points < 1000}>
                {rewards.points < 1000 ? "Not enough points" : "Redeem"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SustainabilityRewards;
