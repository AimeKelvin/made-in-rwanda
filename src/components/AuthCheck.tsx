
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface AuthCheckProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  redirectTo?: string;
}

const AuthCheck = ({ 
  children, 
  requireAdmin = false, 
  redirectTo = "/login" 
}: AuthCheckProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("user");
      
      if (!storedUser) {
        toast({
          title: "Authentication Required",
          description: "Please log in to access this page.",
          variant: "destructive",
        });
        navigate(redirectTo);
        return;
      }
      
      const userData = JSON.parse(storedUser);
      
      if (requireAdmin && userData.role !== "admin") {
        toast({
          title: "Access Denied",
          description: "You don't have permission to access this page.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }
      
      setUser(userData);
      setLoading(false);
    };
    
    checkAuth();
  }, [navigate, toast, redirectTo, requireAdmin]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthCheck;
