
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, CreditCard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CheckoutItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const sampleCartItems: CheckoutItem[] = [
  {
    id: "1",
    name: "Agaseke Basket",
    price: 75.00,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Kitenge Laptop Bag",
    price: 45.00,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800"
  }
];

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [cartItems, setCartItems] = useState<CheckoutItem[]>(sampleCartItems);
  const [loading, setLoading] = useState(false);
  
  // Form states
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("Rwanda");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  // Credit card form state
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart."
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validate form
    if (!email || !firstName || !lastName || !address || !city || !postalCode || !country) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    if (paymentMethod === "credit-card") {
      if (!cardNumber || !cardName || !expiration || !cvv) {
        toast({
          title: "Missing payment information",
          description: "Please fill out all payment fields.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }
    }
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Order placed!",
        description: "Your order has been successfully placed.",
      });
      
      // Navigate to an order confirmation page (which doesn't exist yet)
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  // Format expiration date (MM/YY)
  const formatExpiration = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Customer and Shipping Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-6 border rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State/Province</Label>
                      <Input
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal code</Label>
                      <Input
                        id="postalCode"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="notes">Order notes (optional)</Label>
                      <Textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Special instructions for delivery"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card">Credit or Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mobile-money" id="mobile-money" />
                      <Label htmlFor="mobile-money">Mobile Money</Label>
                    </div>
                  </RadioGroup>

                  <Accordion type="single" collapsible className="mt-4">
                    <AccordionItem value="creditcard-details">
                      <AccordionTrigger>Credit Card Details</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 mt-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <div className="relative">
                                <Input
                                  id="cardNumber"
                                  value={cardNumber}
                                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                  placeholder="1234 5678 9012 3456"
                                  maxLength={19}
                                />
                                <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                            <div className="md:col-span-2">
                              <Label htmlFor="cardName">Name on Card</Label>
                              <Input
                                id="cardName"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                placeholder="John Smith"
                              />
                            </div>
                            <div>
                              <Label htmlFor="expiration">Expiration (MM/YY)</Label>
                              <Input
                                id="expiration"
                                value={expiration}
                                onChange={(e) => setExpiration(formatExpiration(e.target.value))}
                                placeholder="MM/YY"
                                maxLength={5}
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                                placeholder="123"
                                maxLength={4}
                              />
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 border rounded-lg sticky top-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-200 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{item.name}</h3>
                            <p>${item.price.toFixed(2)}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          <button 
                            type="button"
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-sm text-red-600 hover:underline mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6" 
                    size="lg"
                    type="submit"
                    disabled={loading || cartItems.length === 0}
                  >
                    {loading ? "Processing..." : "Complete Order"}
                  </Button>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <p>Secure payment</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <p>Free shipping on orders over $100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
