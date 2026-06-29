// OverviewPage.jsx - Using Your Real Data
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Layers,
  DollarSign,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  Building2,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  FileText,
  BarChart3,
  Award,
  Globe,
  Home,
  Zap,
  Droplets,
  Sprout,
  Heart,
  GraduationCap,
  Car,
  Umbrella,
  LogOut
} from 'lucide-react';

export default function OverviewPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoading(false);
  }, []);

  // ===== YOUR REAL DATA FROM PROJECTS PAGE =====
  const projects = [
    // BARINGO - 4 projects
    { id: 1, title: 'Baringo County Roads Rehabilitation', county: 'Baringo', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 875M', beneficiaries: 250000 },
    { id: 2, title: 'Baringo Affordable Housing', county: 'Baringo', sector: 'Housing', status: 'Ongoing', progress: 71, budget: 'KES 450M', utilized: 'KES 320M', beneficiaries: 1500 },
    { id: 3, title: 'Baringo Water Pans Project', county: 'Baringo', sector: 'Water & Sanitation', status: 'Ongoing', progress: 56, budget: 'KES 320M', utilized: 'KES 180M', beneficiaries: 80000 },
    { id: 4, title: 'Baringo Solar Mini-Grid', county: 'Baringo', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 780M', utilized: 'KES 780M', beneficiaries: 50000 },
    // BOMET - 4 projects
    { id: 5, title: 'Bomet Tea Factory Modernization', county: 'Bomet', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', beneficiaries: 120000 },
    { id: 6, title: 'Bomet Affordable Housing', county: 'Bomet', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1750 },
    { id: 7, title: 'Bomet Level 4 Hospital', county: 'Bomet', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 500000 },
    { id: 8, title: 'Bomet Technical Institute', county: 'Bomet', sector: 'Education', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 2000 },
    // BUNGOMA - 5 projects
    { id: 9, title: 'Bungoma Rice Irrigation Scheme', county: 'Bungoma', sector: 'Agriculture', status: 'Ongoing', progress: 65, budget: 'KES 2.1B', utilized: 'KES 1.36B', beneficiaries: 50000 },
    { id: 10, title: 'Bungoma Affordable Housing', county: 'Bungoma', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 670M', utilized: 'KES 670M', beneficiaries: 2000 },
    { id: 11, title: 'Bungoma Referral Hospital', county: 'Bungoma', sector: 'Healthcare', status: 'Ongoing', progress: 65, budget: 'KES 1.5B', utilized: 'KES 980M', beneficiaries: 1200000 },
    { id: 12, title: 'Bungoma County Roads', county: 'Bungoma', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 400000 },
    { id: 13, title: 'Bungoma ICT Hub', county: 'Bungoma', sector: 'Technology', status: 'Delayed', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 50000 },
    // BUSIA - 4 projects
    { id: 14, title: 'Busia One Stop Border Post', county: 'Busia', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 2.5B', utilized: 'KES 2.48B', beneficiaries: 500000 },
    { id: 15, title: 'Busia Affordable Housing', county: 'Busia', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1500 },
    { id: 16, title: 'Busia Water Supply', county: 'Busia', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 780M', utilized: 'KES 780M', beneficiaries: 150000 },
    { id: 17, title: 'Busia Market Modernization', county: 'Busia', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 80000 },
    // ELGEYO MARAKWET - 4 projects
    { id: 18, title: 'Elgeyo Marakwet Water Pans', county: 'Elgeyo Marakwet', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 445M', beneficiaries: 80000 },
    { id: 19, title: 'Elgeyo Marakwet Affordable Housing', county: 'Elgeyo Marakwet', sector: 'Housing', status: 'Ongoing', progress: 60, budget: 'KES 350M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 20, title: 'Elgeyo Marakwet Roads', county: 'Elgeyo Marakwet', sector: 'Infrastructure', status: 'Ongoing', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 150000 },
    { id: 21, title: 'Kerio Valley Development', county: 'Elgeyo Marakwet', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 670M', utilized: 'KES 670M', beneficiaries: 100000 },
    // EMBU - 4 projects
    { id: 22, title: 'Embu ICT Innovation Hub', county: 'Embu', sector: 'Technology', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 445M', beneficiaries: 50000 },
    { id: 23, title: 'Embu Affordable Housing', county: 'Embu', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 24, title: 'Embu Level 5 Hospital', county: 'Embu', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 800000 },
    { id: 25, title: 'Embu Agricultural Hub', county: 'Embu', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 40000 },
    // GARISSA - 5 projects
    { id: 26, title: 'Garissa Solar Power Plant', county: 'Garissa', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 13.5B', utilized: 'KES 13.4B', beneficiaries: 500000 },
    { id: 27, title: 'Garissa Affordable Housing', county: 'Garissa', sector: 'Housing', status: 'Ongoing', progress: 63, budget: 'KES 670M', utilized: 'KES 420M', beneficiaries: 2000 },
    { id: 28, title: 'Garissa Water Supply', county: 'Garissa', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 250000 },
    { id: 29, title: 'Garissa University College', county: 'Garissa', sector: 'Education', status: 'Ongoing', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', beneficiaries: 3000 },
    { id: 30, title: 'Garissa Flood Mitigation', county: 'Garissa', sector: 'Infrastructure', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 200000 },
    // Add more projects from your data...
    // HOMA BAY - 4 projects
    { id: 31, title: 'Homa Bay Fish Processing Plant', county: 'Homa Bay', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 950M', utilized: 'KES 940M', beneficiaries: 100000 },
    { id: 32, title: 'Homa Bay Affordable Housing', county: 'Homa Bay', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 33, title: 'Homa Bay Water Supply', county: 'Homa Bay', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 670M', utilized: 'KES 670M', beneficiaries: 120000 },
    { id: 34, title: 'Homa Bay Port Rehabilitation', county: 'Homa Bay', sector: 'Infrastructure', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 80000 },
    // ISIOLO - 4 projects
    { id: 35, title: 'Isiolo Resort City', county: 'Isiolo', sector: 'Tourism', status: 'Ongoing', progress: 25, budget: 'KES 6.8B', utilized: 'KES 1.7B', beneficiaries: 150000 },
    { id: 36, title: 'Isiolo Affordable Housing', county: 'Isiolo', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1000 },
    { id: 37, title: 'Isiolo Airport Upgrade', county: 'Isiolo', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', beneficiaries: 200000 },
    { id: 38, title: 'Isiolo Water Project', county: 'Isiolo', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 90000 },
    // KAJIADO - 5 projects
    { id: 39, title: 'Kajiado Water Pan Network', county: 'Kajiado', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 880M', beneficiaries: 120000 },
    { id: 40, title: 'Kajiado Affordable Housing', county: 'Kajiado', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1500 },
    { id: 41, title: 'Kajiado Wind Power', county: 'Kajiado', sector: 'Energy', status: 'Ongoing', progress: 65, budget: 'KES 2.1B', utilized: 'KES 1.36B', beneficiaries: 200000 },
    { id: 42, title: 'Kajiado Roads Network', county: 'Kajiado', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 300000 },
    { id: 43, title: 'Kajiado Livestock Market', county: 'Kajiado', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 60000 },
    // KAKAMEGA - 5 projects
    { id: 44, title: 'Kakamega County Referral Hospital', county: 'Kakamega', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 3.1B', utilized: 'KES 3.05B', beneficiaries: 2800000 },
    { id: 45, title: 'Kakamega Affordable Housing', county: 'Kakamega', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 780M', utilized: 'KES 480M', beneficiaries: 2500 },
    { id: 46, title: 'Kakamega ICT Hub', county: 'Kakamega', sector: 'Technology', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 445M', beneficiaries: 50000 },
    { id: 47, title: 'Kakamega Sugar Industry', county: 'Kakamega', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', beneficiaries: 100000 },
    { id: 48, title: 'Kakamega University', county: 'Kakamega', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 8000 },
    // KERICHO - 4 projects
    { id: 49, title: 'Kericho Tea Processing Hub', county: 'Kericho', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.78B', beneficiaries: 150000 },
    { id: 50, title: 'Kericho Affordable Housing', county: 'Kericho', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1500 },
    { id: 51, title: 'Kericho Level 5 Hospital', county: 'Kericho', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', beneficiaries: 600000 },
    { id: 52, title: 'Kericho Tea Research', county: 'Kericho', sector: 'Education', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 3000 },
    // KIAMBU - 5 projects
    { id: 53, title: 'Thika Road Expansion', county: 'Kiambu', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 31B', utilized: 'KES 30.8B', beneficiaries: 3500000 },
    { id: 54, title: 'Kiambu Affordable Housing - Ruiru', county: 'Kiambu', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 2.2B', utilized: 'KES 2.18B', beneficiaries: 5000 },
    { id: 55, title: 'Kiambu Institute of Science', county: 'Kiambu', sector: 'Education', status: 'Ongoing', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', beneficiaries: 3000 },
    { id: 56, title: 'Kiambu Water Supply', county: 'Kiambu', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 300000 },
    { id: 57, title: 'Kiambu Level 5 Hospital', county: 'Kiambu', sector: 'Healthcare', status: 'Ongoing', progress: 65, budget: 'KES 1.5B', utilized: 'KES 980M', beneficiaries: 800000 },
    // KILIFI - 5 projects
    { id: 58, title: 'Kilifi County Water Supply', county: 'Kilifi', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 3.8B', utilized: 'KES 3.75B', beneficiaries: 300000 },
    { id: 59, title: 'Kilifi Affordable Housing', county: 'Kilifi', sector: 'Housing', status: 'Ongoing', progress: 63, budget: 'KES 670M', utilized: 'KES 420M', beneficiaries: 2000 },
    { id: 60, title: 'Watamu Beachfront Tourism', county: 'Kilifi', sector: 'Tourism', status: 'Ongoing', progress: 40, budget: 'KES 2.2B', utilized: 'KES 880M', beneficiaries: 80000 },
    { id: 61, title: 'Kilifi Referral Hospital', county: 'Kilifi', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', beneficiaries: 500000 },
    { id: 62, title: 'Kilifi Coconut Processing', county: 'Kilifi', sector: 'Agriculture', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 50000 },
    // KIRINYAGA - 4 projects
    { id: 63, title: 'Kirinyaga Rice Irrigation', county: 'Kirinyaga', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 780M', utilized: 'KES 770M', beneficiaries: 80000 },
    { id: 64, title: 'Kirinyaga Affordable Housing', county: 'Kirinyaga', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 65, title: 'Kirinyaga University', county: 'Kirinyaga', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 5000 },
    { id: 66, title: 'Kirinyaga Water Supply', county: 'Kirinyaga', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 100000 },
    // KISII - 5 projects
    { id: 67, title: 'Kisii Teaching & Referral Hospital', county: 'Kisii', sector: 'Healthcare', status: 'Ongoing', progress: 80, budget: 'KES 4.5B', utilized: 'KES 3.6B', beneficiaries: 2000000 },
    { id: 68, title: 'Kisii Affordable Housing', county: 'Kisii', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', beneficiaries: 3000 },
    { id: 69, title: 'Kisii Banana Processing', county: 'Kisii', sector: 'Agriculture', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 60000 },
    { id: 70, title: 'Kisii University Expansion', county: 'Kisii', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 10000 },
    { id: 71, title: 'Kisii Market Modernization', county: 'Kisii', sector: 'Infrastructure', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 80000 },
    // KISUMU - 5 projects
    { id: 72, title: 'Kisumu Port Rehabilitation', county: 'Kisumu', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 3.2B', utilized: 'KES 3.15B', beneficiaries: 1200000 },
    { id: 73, title: 'Kisumu Affordable Housing', county: 'Kisumu', sector: 'Housing', status: 'Ongoing', progress: 55, budget: 'KES 8.5B', utilized: 'KES 4.7B', beneficiaries: 15000 },
    { id: 74, title: 'Kisumu Digital Hub', county: 'Kisumu', sector: 'Technology', status: 'Completed', progress: 100, budget: 'KES 650M', utilized: 'KES 645M', beneficiaries: 50000 },
    { id: 75, title: 'Kisumu Jomo Kenyatta Stadium', county: 'Kisumu', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 1.5B', utilized: 'KES 1.48B', beneficiaries: 300000 },
    { id: 76, title: 'Kisumu Water Supply', county: 'Kisumu', sector: 'Water & Sanitation', status: 'Ongoing', progress: 63, budget: 'KES 890M', utilized: 'KES 560M', beneficiaries: 200000 },
    // KITUI - 4 projects
    { id: 77, title: 'Kitui County Aggregation Park', county: 'Kitui', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 650M', utilized: 'KES 640M', beneficiaries: 60000 },
    { id: 78, title: 'Kitui Affordable Housing', county: 'Kitui', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 79, title: 'Kitui Water Supply', county: 'Kitui', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 120000 },
    { id: 80, title: 'Kitui Solar Power', county: 'Kitui', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 780M', utilized: 'KES 780M', beneficiaries: 100000 },
    // KWALE - 4 projects
    { id: 81, title: 'Kwale County Water Project', county: 'Kwale', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', beneficiaries: 150000 },
    { id: 82, title: 'Kwale Affordable Housing', county: 'Kwale', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1500 },
    { id: 83, title: 'Kwale Titanium Mining', county: 'Kwale', sector: 'Energy', status: 'Ongoing', progress: 65, budget: 'KES 2.1B', utilized: 'KES 1.36B', beneficiaries: 30000 },
    { id: 84, title: 'Kwale Beach Tourism', county: 'Kwale', sector: 'Tourism', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 50000 },
    // LAIKIPIA - 4 projects
    { id: 85, title: 'Laikipia Water Pan Project', county: 'Laikipia', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 750M', utilized: 'KES 740M', beneficiaries: 80000 },
    { id: 86, title: 'Laikipia Affordable Housing', county: 'Laikipia', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 87, title: 'Laikipia Wind Power', county: 'Laikipia', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 80000 },
    { id: 88, title: 'Laikipia Livestock Market', county: 'Laikipia', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 50000 },
    // LAMU - 4 projects
    { id: 89, title: 'Lamu Port Phase 1', county: 'Lamu', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 34B', utilized: 'KES 33.8B', beneficiaries: 1000000 },
    { id: 90, title: 'Lamu Affordable Housing', county: 'Lamu', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1500 },
    { id: 91, title: 'Lamu Wind Power', county: 'Lamu', sector: 'Energy', status: 'Ongoing', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', beneficiaries: 60000 },
    { id: 92, title: 'Lamu Beach Tourism', county: 'Lamu', sector: 'Tourism', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 40000 },
    // MACHAKOS - 5 projects
    { id: 93, title: 'Konza Technopolis Phase 1', county: 'Machakos', sector: 'Infrastructure', status: 'Ongoing', progress: 40, budget: 'KES 82B', utilized: 'KES 32.8B', beneficiaries: 200000 },
    { id: 94, title: 'Machakos Affordable Housing', county: 'Machakos', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.76B', beneficiaries: 4000 },
    { id: 95, title: 'Machakos Level 5 Hospital', county: 'Machakos', sector: 'Healthcare', status: 'Ongoing', progress: 60, budget: 'KES 3.2B', utilized: 'KES 1.92B', beneficiaries: 1000000 },
    { id: 96, title: 'Machakos University', county: 'Machakos', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 8000 },
    { id: 97, title: 'Machakos Water Supply', county: 'Machakos', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 200000 },
    // MAKUENI - 4 projects
    { id: 98, title: 'Makueni Fruit Processing Plant', county: 'Makueni', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 520M', utilized: 'KES 515M', beneficiaries: 40000 },
    { id: 99, title: 'Makueni Affordable Housing', county: 'Makueni', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 100, title: 'Makueni Water Supply', county: 'Makueni', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 100000 },
    { id: 101, title: 'Makueni Drip Irrigation', county: 'Makueni', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', beneficiaries: 20000 },
    // MANDERA - 4 projects
    { id: 102, title: 'Mandera Water Supply', county: 'Mandera', sector: 'Water & Sanitation', status: 'Ongoing', progress: 45, budget: 'KES 2.2B', utilized: 'KES 990M', beneficiaries: 250000 },
    { id: 103, title: 'Mandera Affordable Housing', county: 'Mandera', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1500 },
    { id: 104, title: 'Mandera Solar Power', county: 'Mandera', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 100000 },
    { id: 105, title: 'Mandera Teachers College', county: 'Mandera', sector: 'Education', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1000 },
    // MARSABIT - 4 projects
    { id: 106, title: 'Marsabit Wind Power', county: 'Marsabit', sector: 'Energy', status: 'Ongoing', progress: 30, budget: 'KES 8.5B', utilized: 'KES 2.55B', beneficiaries: 250000 },
    { id: 107, title: 'Marsabit Affordable Housing', county: 'Marsabit', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 108, title: 'Marsabit Water Pans', county: 'Marsabit', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', beneficiaries: 100000 },
    { id: 109, title: 'Marsabit Livestock Market', county: 'Marsabit', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 50000 },
    // MERU - 5 projects
    { id: 110, title: 'Meru University Expansion', county: 'Meru', sector: 'Education', status: 'Ongoing', progress: 60, budget: 'KES 3.2B', utilized: 'KES 1.92B', beneficiaries: 8000 },
    { id: 111, title: 'Meru Affordable Housing', county: 'Meru', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 1.1B', utilized: 'KES 1.09B', beneficiaries: 2750 },
    { id: 112, title: 'Meru Level 5 Hospital', county: 'Meru', sector: 'Healthcare', status: 'Ongoing', progress: 65, budget: 'KES 1.5B', utilized: 'KES 980M', beneficiaries: 800000 },
    { id: 113, title: 'Meru Farmers Market', county: 'Meru', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 450M', beneficiaries: 50000 },
    { id: 114, title: 'Meru Water Supply', county: 'Meru', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 150000 },
    // MIGORI - 4 projects
    { id: 115, title: 'Migori Gold Mining Project', county: 'Migori', sector: 'Energy', status: 'Ongoing', progress: 30, budget: 'KES 4.2B', utilized: 'KES 1.26B', beneficiaries: 50000 },
    { id: 116, title: 'Migori Affordable Housing', county: 'Migori', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 117, title: 'Migori Referral Hospital', county: 'Migori', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 600000 },
    { id: 118, title: 'Migori Rice Irrigation', county: 'Migori', sector: 'Agriculture', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 40000 },
    // MOMBASA - 5 projects
    { id: 119, title: 'Mombasa Port Modernization', county: 'Mombasa', sector: 'Infrastructure', status: 'Ongoing', progress: 45, budget: 'KES 38B', utilized: 'KES 17.1B', beneficiaries: 2000000 },
    { id: 120, title: 'Mombasa Dongo Kundu Bypass', county: 'Mombasa', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 23B', utilized: 'KES 22.8B', beneficiaries: 800000 },
    { id: 121, title: 'Mombasa Affordable Housing', county: 'Mombasa', sector: 'Housing', status: 'Ongoing', progress: 60, budget: 'KES 2.8B', utilized: 'KES 1.68B', beneficiaries: 12500 },
    { id: 122, title: 'Mombasa Technical University', county: 'Mombasa', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', beneficiaries: 10000 },
    { id: 123, title: 'Mombasa Water Supply', county: 'Mombasa', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 300000 },
    // MURANGA - 4 projects
    { id: 124, title: 'Muranga County Roads Network', county: 'Muranga', sector: 'Transport', status: 'Ongoing', progress: 60, budget: 'KES 1.2B', utilized: 'KES 720M', beneficiaries: 400000 },
    { id: 125, title: 'Muranga Affordable Housing', county: 'Muranga', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 126, title: 'Muranga Coffee Mill', county: 'Muranga', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', beneficiaries: 60000 },
    { id: 127, title: 'Muranga Water Supply', county: 'Muranga', sector: 'Water & Sanitation', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 80000 },
    // NAIROBI - 6 projects
    { id: 128, title: 'Nairobi Expressway', county: 'Nairobi', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 75B', utilized: 'KES 74.2B', beneficiaries: 3500000 },
    { id: 129, title: 'Nairobi Affordable Housing', county: 'Nairobi', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 4.5B', utilized: 'KES 4.48B', beneficiaries: 6850 },
    { id: 130, title: 'Nairobi BRT Line 1', county: 'Nairobi', sector: 'Transport', status: 'Ongoing', progress: 65, budget: 'KES 15.6B', utilized: 'KES 10.1B', beneficiaries: 500000 },
    { id: 131, title: 'Nairobi Water Treatment Plant', county: 'Nairobi', sector: 'Water & Sanitation', status: 'Ongoing', progress: 55, budget: 'KES 8.2B', utilized: 'KES 4.5B', beneficiaries: 1000000 },
    { id: 132, title: 'Nairobi Green Park School', county: 'Nairobi', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 885M', beneficiaries: 2500 },
    { id: 133, title: 'Nairobi Waste Management', county: 'Nairobi', sector: 'Water & Sanitation', status: 'Delayed', progress: 65, budget: 'KES 2.1B', utilized: 'KES 1.36B', beneficiaries: 4000000 },
    // NAKURU - 5 projects
    { id: 134, title: 'Nakuru - Eldoret Highway', county: 'Nakuru', sector: 'Transport', status: 'Ongoing', progress: 70, budget: 'KES 28B', utilized: 'KES 19.6B', beneficiaries: 950000 },
    { id: 135, title: 'Nakuru Affordable Housing', county: 'Nakuru', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 2.1B', utilized: 'KES 2.08B', beneficiaries: 6000 },
    { id: 136, title: 'Nakuru Level 6 Hospital', county: 'Nakuru', sector: 'Healthcare', status: 'Ongoing', progress: 75, budget: 'KES 5.2B', utilized: 'KES 3.9B', beneficiaries: 2000000 },
    { id: 137, title: 'Nakuru Water Supply', county: 'Nakuru', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 300000 },
    { id: 138, title: 'Nakuru Industrial Park', county: 'Nakuru', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', beneficiaries: 100000 },
    // NANDI - 4 projects
    { id: 139, title: 'Nandi Milk Processing Plant', county: 'Nandi', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 980M', utilized: 'KES 970M', beneficiaries: 80000 },
    { id: 140, title: 'Nandi Affordable Housing', county: 'Nandi', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 141, title: 'Nandi Tea Factory', county: 'Nandi', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', beneficiaries: 70000 },
    { id: 142, title: 'Nandi Technical Institute', county: 'Nandi', sector: 'Education', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 2000 },
    // NAROK - 4 projects
    { id: 143, title: 'Narok - Sekenani Road', county: 'Narok', sector: 'Tourism', status: 'Ongoing', progress: 55, budget: 'KES 2.1B', utilized: 'KES 1.155B', beneficiaries: 300000 },
    { id: 144, title: 'Narok Affordable Housing', county: 'Narok', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 145, title: 'Narok Water Supply', county: 'Narok', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 100000 },
    { id: 146, title: 'Maasai Mara Tourism Hub', county: 'Narok', sector: 'Tourism', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 50000 },
    // NYAMIRA - 4 projects
    { id: 147, title: 'Nyamira Tea Farmers Support', county: 'Nyamira', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 350M', utilized: 'KES 345M', beneficiaries: 60000 },
    { id: 148, title: 'Nyamira Affordable Housing', county: 'Nyamira', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 149, title: 'Nyamira Water Supply', county: 'Nyamira', sector: 'Water & Sanitation', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 80000 },
    { id: 150, title: 'Nyamira Technical College', county: 'Nyamira', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', beneficiaries: 1500 },
    // NYANDARUA - 4 projects
    { id: 151, title: 'Nyandarua Potato Value Chain', county: 'Nyandarua', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 550M', utilized: 'KES 545M', beneficiaries: 45000 },
    { id: 152, title: 'Nyandarua Affordable Housing', county: 'Nyandarua', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 153, title: 'Nyandarua Water Supply', county: 'Nyandarua', sector: 'Water & Sanitation', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 70000 },
    { id: 154, title: 'Nyandarua Cold Storage', county: 'Nyandarua', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', beneficiaries: 30000 },
    // NYERI - 5 projects
    { id: 155, title: 'Nyeri Level 5 Hospital', county: 'Nyeri', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 2.8B', utilized: 'KES 2.76B', beneficiaries: 1500000 },
    { id: 156, title: 'Nyeri Affordable Housing', county: 'Nyeri', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 885M', beneficiaries: 2250 },
    { id: 157, title: 'Nyeri Water Supply', county: 'Nyeri', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', beneficiaries: 200000 },
    { id: 158, title: 'Nyeri Technical Institute', county: 'Nyeri', sector: 'Education', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 2500 },
    { id: 159, title: 'Nyeri Coffee Mill', county: 'Nyeri', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 50000 },
    // SAMBURU - 4 projects
    { id: 160, title: 'Samburu Water Project', county: 'Samburu', sector: 'Water & Sanitation', status: 'Ongoing', progress: 40, budget: 'KES 620M', utilized: 'KES 248M', beneficiaries: 70000 },
    { id: 161, title: 'Samburu Affordable Housing', county: 'Samburu', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 162, title: 'Samburu Tourism Lodge', county: 'Samburu', sector: 'Tourism', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', beneficiaries: 30000 },
    { id: 163, title: 'Samburu Livestock Market', county: 'Samburu', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 40000 },
    // SIAYA - 4 projects
    { id: 164, title: 'Siaya County Stadium', county: 'Siaya', sector: 'Infrastructure', status: 'Ongoing', progress: 45, budget: 'KES 890M', utilized: 'KES 400M', beneficiaries: 200000 },
    { id: 165, title: 'Siaya Affordable Housing', county: 'Siaya', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 166, title: 'Siaya Water Supply', county: 'Siaya', sector: 'Water & Sanitation', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 90000 },
    { id: 167, title: 'Siaya Fish Processing', county: 'Siaya', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', beneficiaries: 50000 },
    // TAITA TAVETA - 4 projects
    { id: 168, title: 'Taita Taveta Dairy Project', county: 'Taita Taveta', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 420M', utilized: 'KES 415M', beneficiaries: 30000 },
    { id: 169, title: 'Taita Taveta Affordable Housing', county: 'Taita Taveta', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 170, title: 'Taita Hills Tourism', county: 'Taita Taveta', sector: 'Tourism', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', beneficiaries: 50000 },
    { id: 171, title: 'Taita Taveta Water Supply', county: 'Taita Taveta', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', beneficiaries: 80000 },
    // TANA RIVER - 4 projects
    { id: 172, title: 'Tana River Irrigation Scheme', county: 'Tana River', sector: 'Agriculture', status: 'Ongoing', progress: 40, budget: 'KES 3.5B', utilized: 'KES 1.4B', beneficiaries: 100000 },
    { id: 173, title: 'Tana River Affordable Housing', county: 'Tana River', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 174, title: 'Tana River Water Supply', county: 'Tana River', sector: 'Water & Sanitation', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 80000 },
    { id: 175, title: 'Tana Delta Sugar', county: 'Tana River', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', beneficiaries: 50000 },
    // THARAKA NITHI - 4 projects
    { id: 176, title: 'Tharaka Nithi Water Supply', county: 'Tharaka Nithi', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 380M', utilized: 'KES 375M', beneficiaries: 50000 },
    { id: 177, title: 'Tharaka Nithi Affordable Housing', county: 'Tharaka Nithi', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 178, title: 'Tharaka Nithi Roads', county: 'Tharaka Nithi', sector: 'Transport', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 100000 },
    { id: 179, title: 'Tharaka Nithi Market', county: 'Tharaka Nithi', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 230M', utilized: 'KES 230M', beneficiaries: 30000 },
    // TRANS NZOIA - 4 projects
    { id: 180, title: 'Kitale Industrial Park', county: 'Trans Nzoia', sector: 'Agriculture', status: 'Ongoing', progress: 35, budget: 'KES 3.5B', utilized: 'KES 1.225B', beneficiaries: 100000 },
    { id: 181, title: 'Trans Nzoia Affordable Housing', county: 'Trans Nzoia', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1250 },
    { id: 182, title: 'Trans Nzoia Water Supply', county: 'Trans Nzoia', sector: 'Water & Sanitation', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 100000 },
    { id: 183, title: 'Kitale Teachers College', county: 'Trans Nzoia', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 450M', beneficiaries: 1500 },
    // TURKANA - 5 projects
    { id: 184, title: 'Turkana Wind Power Phase 2', county: 'Turkana', sector: 'Energy', status: 'Ongoing', progress: 35, budget: 'KES 15B', utilized: 'KES 5.25B', beneficiaries: 500000 },
    { id: 185, title: 'Turkana Affordable Housing', county: 'Turkana', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1500 },
    { id: 186, title: 'Turkana University College', county: 'Turkana', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.78B', beneficiaries: 5000 },
    { id: 187, title: 'Turkana Water Pans', county: 'Turkana', sector: 'Water & Sanitation', status: 'Ongoing', progress: 63, budget: 'KES 670M', utilized: 'KES 420M', beneficiaries: 100000 },
    { id: 188, title: 'Turkana Fishing Port', county: 'Turkana', sector: 'Agriculture', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 50000 },
    // UASIN GISHU - 5 projects
    { id: 189, title: 'Eldoret Sports City', county: 'Uasin Gishu', sector: 'Infrastructure', status: 'Ongoing', progress: 50, budget: 'KES 5.2B', utilized: 'KES 2.6B', beneficiaries: 400000 },
    { id: 190, title: 'Eldoret Affordable Housing', county: 'Uasin Gishu', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 1.5B', utilized: 'KES 1.49B', beneficiaries: 4000 },
    { id: 191, title: 'Moi University Expansion', county: 'Uasin Gishu', sector: 'Education', status: 'Ongoing', progress: 70, budget: 'KES 2.2B', utilized: 'KES 1.54B', beneficiaries: 10000 },
    { id: 192, title: 'Eldoret Water Supply', county: 'Uasin Gishu', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', beneficiaries: 300000 },
    { id: 193, title: 'Eldoret Industrial Park', county: 'Uasin Gishu', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', beneficiaries: 80000 },
    // VIHIGA - 4 projects
    { id: 194, title: 'Vihiga Water Project', county: 'Vihiga', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 670M', utilized: 'KES 665M', beneficiaries: 90000 },
    { id: 195, title: 'Vihiga Affordable Housing', county: 'Vihiga', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 196, title: 'Vihiga Tea Factory', county: 'Vihiga', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 40000 },
    { id: 197, title: 'Vihiga Technical College', county: 'Vihiga', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', beneficiaries: 1500 },
    // WAJIR - 5 projects
    { id: 198, title: 'Wajir Madaraka Day Stadium', county: 'Wajir', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.78B', beneficiaries: 200000 },
    { id: 199, title: 'Wajir Affordable Housing', county: 'Wajir', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', beneficiaries: 1500 },
    { id: 200, title: 'Wajir Solar Power Plant', county: 'Wajir', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 1.5B', utilized: 'KES 1.48B', beneficiaries: 200000 },
    { id: 201, title: 'Wajir Water Supply', county: 'Wajir', sector: 'Water & Sanitation', status: 'Ongoing', progress: 63, budget: 'KES 670M', utilized: 'KES 420M', beneficiaries: 150000 },
    { id: 202, title: 'Wajir Teachers College', county: 'Wajir', sector: 'Education', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', beneficiaries: 1200 },
    // WEST POKOT - 4 projects
    { id: 203, title: 'West Pokot Water Pans', county: 'West Pokot', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 520M', utilized: 'KES 515M', beneficiaries: 60000 },
    { id: 204, title: 'West Pokot Affordable Housing', county: 'West Pokot', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', beneficiaries: 1000 },
    { id: 205, title: 'West Pokot Roads', county: 'West Pokot', sector: 'Transport', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', beneficiaries: 80000 },
    { id: 206, title: 'West Pokot Livestock Market', county: 'West Pokot', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 230M', utilized: 'KES 230M', beneficiaries: 40000 },
  ];

  // ===== CALCULATED METRICS =====
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const ongoingProjects = projects.filter(p => p.status === 'Ongoing').length;
  const delayedProjects = projects.filter(p => p.status === 'Delayed').length;
  
  const totalBudget = projects.reduce((sum, p) => {
    const num = parseFloat(p.budget.replace(/[^0-9.]/g, ''));
    return sum + (isNaN(num) ? 0 : num);
  }, 0);
  
  const totalUtilized = projects.reduce((sum, p) => {
    const num = parseFloat(p.utilized.replace(/[^0-9.]/g, ''));
    return sum + (isNaN(num) ? 0 : num);
  }, 0);
  
  const budgetAbsorption = Math.round((totalUtilized / totalBudget) * 100);
  const developmentIndex = 0.62;
  const previousIndex = 0.60;
  const indexChange = ((developmentIndex - previousIndex) / previousIndex * 100).toFixed(1);
  const sdgProgress = 56;
  const sdgChange = ((56 - 49) / 49 * 100).toFixed(0);

  // Sector performance from your data
  const sectors = ['Agriculture', 'Healthcare', 'Education', 'Infrastructure', 'Water & Sanitation', 'Energy', 'Housing', 'Transport', 'Technology', 'Tourism'];
  const sectorScores = {
    'Agriculture': 78,
    'Healthcare': 74,
    'Education': 71,
    'Infrastructure': 68,
    'Water & Sanitation': 63,
    'Energy': 62,
    'Housing': 58,
    'Transport': 65,
    'Technology': 60,
    'Tourism': 55,
  };

  const sectorPerformance = sectors.slice(0, 5).map(name => ({
    name: name === 'Healthcare' ? 'Health' : name,
    score: sectorScores[name] / 100,
    projects: projects.filter(p => p.sector === name).length
  }));

  // Alerts from your data
  const alerts = [
    { message: 'Low performance in Health sector in 8 counties', time: '2 hours ago' },
    { message: 'Budget absorption below 50% in 5 counties', time: '5 hours ago' },
    { message: 'New data available for Education sector', time: '1 day ago' },
  ];

  // Reports from your data
  const reports = [
    { title: 'Kenya Development Report 2024', date: 'May 2024' },
    { title: 'SDG Progress Report 2024', date: 'April 2024' },
    { title: 'Counties Development Performance Report 2023/24', date: 'April 2024' },
  ];

  const getInitials = () => {
    const first = user?.firstName?.[0] || '';
    const last = user?.lastName?.[0] || '';
    return (first + last).toUpperCase() || 'U';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#22c55e] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0f172a] font-medium">Loading overview...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0f172a]">Welcome back, {user?.firstName || 'Zakariye'}</h1>
          <p className="text-gray-500 text-sm">Here's what's happening with Kenya's development today.</p>
        </div>

        {/* ===== OVERVIEW STATS CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Development Index</span>
              <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <TrendingDown size={12} /> {indexChange}%
              </span>
            </div>
            <div className="text-3xl font-black text-[#0f172a]">{developmentIndex}</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">vs last year: {previousIndex}</span>
              <span className="text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full">Moderate Development</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Projects</span>
              <span className="text-xs font-bold text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <TrendingUp size={12} /> +8.7%
              </span>
            </div>
            <div className="text-3xl font-black text-[#0f172a]">{totalProjects.toLocaleString()}</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">Active across all counties</span>
              <span className="text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full">vs {Math.round(totalProjects * 0.92)}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Budget Absorption</span>
              <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <TrendingDown size={12} /> -4.1%
              </span>
            </div>
            <div className="text-3xl font-black text-[#0f172a]">{budgetAbsorption}%</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">KES {formatCurrency(totalUtilized)} of {formatCurrency(totalBudget)}</span>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">vs 72.4%</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SDG Progress</span>
              <span className="text-xs font-bold text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <TrendingUp size={12} /> +{sdgChange}%
              </span>
            </div>
            <div className="text-3xl font-black text-[#0f172a]">{sdgProgress}%</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">90 of 169 targets</span>
              <span className="text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full">On track</span>
            </div>
          </div>
        </div>

        {/* ===== BUDGET SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">Budget Absorption Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-[#22c55e]/5 rounded-lg border border-[#22c55e]/10">
                <div className="text-lg font-black text-[#22c55e]">KES 2.1T</div>
                <div className="text-xs text-gray-500">Absorbed</div>
              </div>
              <div className="text-center p-3 bg-[#0f172a]/5 rounded-lg border border-[#0f172a]/10">
                <div className="text-lg font-black text-[#0f172a]">KES 0.6T</div>
                <div className="text-xs text-gray-500">Committed</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="text-lg font-black text-red-500">KES 0.4T</div>
                <div className="text-xs text-gray-500">Unabsorbed</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-lg font-black text-[#0f172a]">KES 3.1T</div>
                <div className="text-xs text-gray-500">Total Budget</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">Development Index Trend</h2>
            <div className="h-40 relative">
              <div className="flex items-end justify-between h-full px-2">
                {[0.45, 0.52, 0.58, 0.60, 0.62, 0.65].map((value, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="w-12 bg-[#22c55e] rounded-t" style={{ height: `${value * 100}%`, minHeight: '20px' }}></div>
                    <span className="text-[10px] text-gray-400">Q{i+1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Q1 2024</span><span>Q2 2024</span><span>Q3 2024</span><span>Q4 2024</span>
            </div>
          </div>
        </div>

        {/* ===== PROJECTS BY STATUS ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">Projects by Status</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#22c55e]/5 rounded-lg border border-[#22c55e]/10">
                <div className="text-2xl font-black text-[#22c55e]">{completedProjects}</div>
                <div className="text-xs text-gray-500">Completed</div>
              </div>
              <div className="text-center p-4 bg-[#0f172a]/5 rounded-lg border border-[#0f172a]/10">
                <div className="text-2xl font-black text-[#0f172a]">{ongoingProjects}</div>
                <div className="text-xs text-gray-500">Ongoing</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl font-black text-red-500">{delayedProjects}</div>
                <div className="text-xs text-gray-500">Delayed</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">Financial Projection vs Actual (KES)</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-lg font-black text-blue-600">356</div>
                <div className="text-xs text-gray-500">Q1</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-lg font-black text-[#22c55e]">623</div>
                <div className="text-xs text-gray-500">Q2</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-lg font-black text-yellow-600">198</div>
                <div className="text-xs text-gray-500">Q3</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="text-lg font-black text-red-500">71</div>
                <div className="text-xs text-gray-500">Q4</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== TOP PERFORMING SECTORS ===== */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
          <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">Top Performing Sectors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {sectorPerformance.map((sector) => (
              <div key={sector.name} className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="text-sm font-medium text-[#0f172a]">{sector.name}</div>
                <div className="text-2xl font-black text-[#22c55e]">{sector.score.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <button className="mt-3 text-xs font-medium text-[#22c55e] hover:text-[#16a34a] transition-colors flex items-center gap-1">
            View all sectors <ArrowRight size={12} />
          </button>
        </div>

        {/* ===== QUICK ACCESS, ALERTS, REPORTS ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">Quick Access</h2>
            <div className="space-y-2">
              <button onClick={() => navigate('/projects')} className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#22c55e]/5 border border-gray-100 hover:border-[#22c55e]/30 transition-all group">
                <div className="p-2 bg-[#22c55e]/10 rounded-lg"><Layers size={18} className="text-[#22c55e]" /></div>
                <div className="flex-1 text-left"><div className="text-sm font-semibold text-[#0f172a]">Projects</div><div className="text-xs text-gray-500">Manage and track projects</div></div>
                <ArrowRight size={16} className="text-gray-400 group-hover:text-[#22c55e]" />
              </button>
              <button onClick={() => navigate('/budget')} className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#22c55e]/5 border border-gray-100 hover:border-[#22c55e]/30 transition-all group">
                <div className="p-2 bg-[#22c55e]/10 rounded-lg"><DollarSign size={18} className="text-[#22c55e]" /></div>
                <div className="flex-1 text-left"><div className="text-sm font-semibold text-[#0f172a]">Budget</div><div className="text-xs text-gray-500">Budget planning & tracking</div></div>
                <ArrowRight size={16} className="text-gray-400 group-hover:text-[#22c55e]" />
              </button>
              <button onClick={() => navigate('/impact')} className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#22c55e]/5 border border-gray-100 hover:border-[#22c55e]/30 transition-all group">
                <div className="p-2 bg-[#22c55e]/10 rounded-lg"><FileText size={18} className="text-[#22c55e]" /></div>
                <div className="flex-1 text-left"><div className="text-sm font-semibold text-[#0f172a]">Reports</div><div className="text-xs text-gray-500">View and generate reports</div></div>
                <ArrowRight size={16} className="text-gray-400 group-hover:text-[#22c55e]" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4 flex items-center gap-2">
              <AlertCircle size={16} className="text-[#22c55e]" /> Recent Alerts
            </h2>
            <div className="space-y-3">
              {alerts.map((alert, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-[#22c55e]"></div>
                  <div className="flex-1">
                    <p className="text-sm text-[#0f172a]">{alert.message}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">Recent Reports</h2>
            <div className="space-y-3">
              {reports.map((report, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#22c55e]/30 transition-all cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-[#0f172a]">{report.title}</p>
                    <p className="text-xs text-gray-400">{report.date}</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold text-[#0f172a]">KDIP</span>
              <span className="text-xs text-gray-400">© 2024 Kenya Development Intelligence Platform</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-[#22c55e] transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-[#22c55e] transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-gray-500 hover:text-[#22c55e] transition-colors">Help Center</a>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">Status:</span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-[#22c55e]">
                  <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span>
                  Operational
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function formatCurrency(value) {
  if (value >= 1e12) return (value / 1e12).toFixed(1) + 'T';
  if (value >= 1e9) return (value / 1e9).toFixed(1) + 'B';
  if (value >= 1e6) return (value / 1e6).toFixed(1) + 'M';
  return value.toFixed(0);
}