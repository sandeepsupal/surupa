import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Heart, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 md:px-20">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <img 
              src="/lovable-uploads/d5c64836-99cd-4316-95a2-41c24ec5ed24.png" 
              alt="House of Surupa" 
              className="w-[420px]"
            />
            <p className="text-sm uppercase font-abeezee">Clothing Boutique</p>
          </div>
          <div className="flex items-center space-x-8 font-abeezee text-lg">
            <a href="#women">Women</a>
            <a href="#occasion">Occasion</a>
            <a href="#accessories">Accessories</a>
            <div className="flex items-center">
              <a href="#virtual">Virtual</a>
              <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded">New</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-8">
          <h2 className="font-georgia text-[4rem] leading-tight">
            Find Your Perfect <span className="text-primary">Blend</span> of Our
            <span className="text-primary"> Traditional</span> and Modern <span className="text-primary">Fashion</span>
          </h2>
          <div className="space-y-6">
            <p className="text-gray-500 text-xl">What are you looking for?</p>
            <div className="flex flex-wrap gap-4">
              {["Bridal Wear", "Groom Wear", "Family Collection", "Festive Outfits", "Sangeet Collection", "Pooja Outfit"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full border-black hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </Button>
              ))}
            </div>
            <a href="#explore" className="inline-block mt-8 text-xl">
              Explore all
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ddc0bc3438065dd12d7e5187df6a80c7156ccdd447b7b5ba0bbc13a5f8a9ce7"
            alt="Fashion Collection"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 md:px-20 py-20 bg-[#FFF4F3]">
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-cormorant text-4xl">Featured Products</h3>
          <Button variant="link">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ef784e99cc3bd549b5cf69d9c8487cdf1b8f710825df621b589086d3434bc84",
              name: "Multi Color Net Embroidered Lehenga Set",
              price: "₹27,200"
            },
            {
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0231ad264374441a45b552a5c9b1c39ad39158c5dae7b18100979b2066a6c86",
              name: "Green Quilted Jacket And Pant Set",
              price: "₹17,500"
            },
            {
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/73d5a1be23151750548e5183f9d6b29439f920552f99496c9b9b242b0aaef168",
              name: "Yellow Silk Blend Floral Embroidered Bundi",
              price: "₹12,500"
            },
            {
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f724c30ef6c0ac13564b20f83a90e5b755fe984aa3d647e64b6864c4b480d265",
              name: "Wine Pure Banarasi Silk Lehenga Choli",
              price: "₹10,500"
            }
          ].map((product) => (
            <div key={product.name} className="space-y-4">
              <img src={product.image} alt={product.name} className="w-full h-auto" />
              <p className="text-gray-700">{product.name}</p>
              <div className="flex justify-between items-center">
                <span>{product.price}</span>
                <Button variant="outline" className="rounded-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 md:px-20 py-20 bg-[#DDCFF04D]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="font-cormorant text-4xl">
            Subscribe to <span className="text-[#882437]">our newsletter</span> and get updates on{" "}
            <span className="text-[#882437]">new arrival</span>
          </h3>
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="your email address"
              className="rounded-full border-black"
            />
            <Button className="rounded-full bg-accent hover:bg-accent/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h4 className="font-cormorant text-primary text-3xl font-bold">House of Surupa</h4>
            <p className="text-gray-700">
              We are a modern fashion brand that offers the best of contemporary, ethnic Indian and fusion-wear styles.
            </p>
          </div>
          {[
            {
              title: "Quick Links",
              links: ["Men", "Women", "Collection", "Virtual"]
            },
            {
              title: "Policies",
              links: ["Terms & Conditions", "Shipping", "Return", "Payment Policy"]
            },
            {
              title: "My Account",
              links: ["Login", "Shopping Bag", "Wishlist", "Order Tracking", "Order History"]
            }
          ].map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-cormorant text-2xl">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-700 hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-8 border-t border-gray-200 flex justify-between text-sm text-gray-700">
          <p>© 2025 House of Surupa Fashion All Rights Reserved.</p>
          <p>We Ship Across the World</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;