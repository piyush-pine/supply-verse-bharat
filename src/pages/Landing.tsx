import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  User, 
  ShoppingBag, 
  Truck, 
  Shield, 
  Link2, 
  Cpu, 
  FileText, 
  Activity, 
  Mic, 
  Award,
  Check,
  ChevronDown,
  Play,
  BookOpen,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Leaf
} from "lucide-react";

const Landing = () => {
  const roles = [
    {
      title: "Farmers & MSMEs",
      icon: User,
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      checkColor: "text-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700",
      features: [
        "Verified profiles with digital ID",
        "Product listing with IoT data",
        "Voice & multilingual support"
      ],
      link: "/auth"
    },
    {
      title: "Buyers",
      icon: ShoppingBag,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      checkColor: "text-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      features: [
        "View product provenance",
        "Real-time freshness data",
        "Secure escrow payments"
      ],
      link: "/auth"
    },
    {
      title: "Logistics",
      icon: Truck,
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      checkColor: "text-orange-500",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      features: [
        "Real-time shipment tracking",
        "IoT condition monitoring",
        "Digital delivery confirmation"
      ],
      link: "/auth"
    },
    {
      title: "Admins",
      icon: Shield,
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      checkColor: "text-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        "User verification",
        "Quality control",
        "Fraud detection"
      ],
      link: "/auth"
    }
  ];

  const features = [
    {
      title: "Blockchain Provenance",
      description: "Every transaction and product movement is recorded on an immutable blockchain ledger ensuring complete transparency.",
      icon: Link2,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "IoT Monitoring",
      description: "Real-time monitoring of product conditions (temperature, humidity) throughout the supply chain journey.",
      icon: Cpu,
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Smart Contracts",
      description: "Automated escrow payments and quality verification through tamper-proof smart contracts.",
      icon: FileText,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "AI Fraud Detection",
      description: "Machine learning algorithms monitor transactions for anomalies and potential fraud.",
      icon: Activity,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Voice Interface",
      description: "Voice commands and multilingual support for farmers with limited digital literacy.",
      icon: Mic,
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      title: "Sustainability Rewards",
      description: "Farmers earn tokens for sustainable practices that can be redeemed for benefits.",
      icon: Award,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-600">AgriChain</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full cursor-pointer hover:scale-105 transition-transform">
                <span className="text-sm text-gray-600">EN</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <a href="#features" className="hidden md:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition">Features</a>
              <a href="#how-it-works" className="hidden md:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition">How It Works</a>
              <a href="#about" className="hidden md:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition">About</a>
              <Link to="/auth">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">Login</Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-green-600 hover:bg-green-700 text-white" size="sm">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-green-600">Transparent</span> Supply Chain for Indian Agriculture
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              AgriChain leverages blockchain technology to create a fair, transparent, and efficient agricultural supply chain ecosystem connecting farmers directly with buyers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/auth">
                <Button className="bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg px-6 py-3 h-auto text-base">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline" className="px-6 py-3 h-auto border-gray-300 hover:bg-gray-50 text-base">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=630&fit=crop" 
                alt="Dashboard Preview" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Blockchain Verified</p>
                  <p className="text-xs text-gray-500">Immutable records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">For Everyone in the Supply Chain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`${role.bgColor} p-6`}>
                    <div className={`${role.iconBg} w-14 h-14 rounded-full flex items-center justify-center mx-auto`}>
                      <Icon className={`w-6 h-6 ${role.iconColor}`} />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">{role.title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {role.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className={`w-5 h-5 ${role.checkColor} mt-0.5 mr-2 flex-shrink-0`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={role.link}>
                      <Button className={`w-full ${role.buttonColor} text-white`}>
                        Register as {role.title.split(" ")[0]}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            AgriChain combines cutting-edge technologies to revolutionize agricultural supply chains
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className={`${feature.bgColor} w-14 h-14 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor} transition-transform group-hover:rotate-12 group-hover:scale-110`} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform agricultural supply chains?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join AgriChain today and be part of the movement towards transparency, fairness, and efficiency in Indian agriculture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/auth">
              <Button className="bg-white text-green-700 hover:bg-gray-100 shadow-md hover:shadow-lg px-6 py-3 h-auto">
                Get Started for Free
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3 h-auto">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-white">AgriChain</span>
              </div>
              <p className="text-sm mb-6">
                Blockchain-powered transparent supply chain platform for Indian agriculture and MSMEs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">API</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Guides</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white transition">About</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            <p>&copy; 2023 AgriChain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
