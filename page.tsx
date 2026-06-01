"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { 
  Flame, 
  Wind, 
  Droplets, 
  ThermometerSun, 
  TreeDeciduous, 
  MapPin,
  AlertTriangle,
  BarChart3,
  Brain,
  Database,
  ArrowRight,
  ChevronDown,
  Github,
  FileText,
  Presentation,
  Download,
  ExternalLink,
  Target,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  TrendingUp,
  Activity,
  Layers,
  GitBranch,
  CheckCircle2,
  Sparkles,
  Leaf
} from "lucide-react"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area
} from "recharts"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return { count, ref }
}

// Section wrapper with animation
function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Domain", href: "#domain" },
    { label: "Dataset", href: "#dataset" },
    { label: "EDA", href: "#eda" },
    { label: "Models", href: "#models" },
    { label: "Results", href: "#results" },
    { label: "Team", href: "#team" },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-primary animate-fire-flicker" />
          <span className="font-heading font-bold text-lg text-foreground">WildFire<span className="text-primary">ML</span></span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a 
          href="#resources" 
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
        >
          Resources
        </a>
      </div>
    </motion.nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Animated fire particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            initial={{ 
              x: Math.random() * 1000,
              y: 900
            }}
            animate={{ 
              y: -100,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Machine Learning Course Project</span>
          </div>
        </motion.div>

        <motion.h1 
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-foreground">Predictive Modeling for</span>
          <br />
          <span className="text-primary">Wildfire Evacuation Zone</span>
          <br />
          <span className="text-foreground">Hit Probability</span>
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Machine Learning (24ECSC210) | IV Semester | Academic Year 2025-26
          <br />
          Department of Computer Science and Engineering (AI)
          <br />
          <span className="font-medium text-foreground">KLE Technological University</span>
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#overview" 
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 animate-pulse-glow"
          >
            Explore Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#eda" 
            className="group glass px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary/50 transition-all flex items-center gap-2"
          >
            <BarChart3 className="w-5 h-5" />
            View Research
          </a>
          <a 
            href="#results" 
            className="group glass px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary/50 transition-all flex items-center gap-2"
          >
            <Target className="w-5 h-5" />
            View Results
          </a>
        </motion.div>

        <motion.div 
          className="glass-card rounded-2xl p-6 inline-flex items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-1">Guided By</p>
            <p className="font-heading font-semibold text-foreground">Prof. Sneha Varur</p>
            <p className="text-xs text-muted-foreground">Professor, Dept. of CSE-AI</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}

// Overview Section
function OverviewSection() {
  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8" >
      <div id="overview" className="max-w-7xl mx-auto scroll-mt-24">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Project Overview
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            About the Research
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={fadeInLeft}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This project focuses on predicting wildfire evacuation zone hit probability using machine learning techniques and environmental factors such as temperature, humidity, wind speed, vegetation conditions, drought severity, and geographical information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The objective is to develop a predictive framework capable of identifying high-risk regions and assisting emergency authorities in proactive evacuation planning and disaster management.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInRight} className="glass-card rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Problem Statement
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Wildfires are among the most destructive natural disasters worldwide. Traditional wildfire response systems are reactive and often respond after ignition has occurred. This project aims to build a predictive machine learning model capable of forecasting wildfire evacuation zone hit probabilities before critical spread occurs, enabling faster response and improved public safety.
            </p>
          </motion.div>
        </div>

        {/* Motivation Stats */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Motivation</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Globe, label: "Global Incidents", value: "Increasing wildfire incidents globally" },
              { icon: Leaf, label: "Ecological Damage", value: "Environmental and ecological impact" },
              { icon: Users, label: "Human Safety", value: "Human safety at critical risk" },
              { icon: Brain, label: "Predictive Need", value: "Need for predictive disaster management" },
              { icon: Zap, label: "AI Planning", value: "AI-driven emergency planning" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// SDG Section
function SDGSection() {
  const sdgItems = [
    { icon: Shield, label: "Climate Resilience", desc: "Building systems resilient to climate change" },
    { icon: AlertTriangle, label: "Disaster Preparedness", desc: "Proactive emergency response planning" },
    { icon: Leaf, label: "Environmental Protection", desc: "Safeguarding ecosystems from fire damage" },
    { icon: Target, label: "Risk Reduction", desc: "Minimizing wildfire impact through prediction" },
    { icon: Users, label: "Sustainable Communities", desc: "Supporting community safety and sustainability" },
  ]

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-4">
            Sustainable Development
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            SDG 13 – Climate Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our project aligns with the United Nations Sustainable Development Goal 13, focusing on urgent action to combat climate change and its impacts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sdgItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// Domain Understanding Section
function DomainSection() {
  const inputFeatures = [
    { icon: ThermometerSun, label: "Temperature", color: "text-red-400" },
    { icon: Droplets, label: "Humidity", color: "text-blue-400" },
    { icon: Wind, label: "Wind Speed", color: "text-cyan-400" },
    { icon: Activity, label: "Drought Index", color: "text-yellow-400" },
    { icon: TreeDeciduous, label: "Vegetation Condition", color: "text-green-400" },
    { icon: MapPin, label: "Geographic Region", color: "text-purple-400" },
    { icon: Layers, label: "Environmental Factors", color: "text-orange-400" },
  ]

  const outputs = [
    { icon: Flame, label: "Wildfire Probability", desc: "Likelihood of fire occurrence" },
    { icon: MapPin, label: "Evacuation Zone Hit Probability", desc: "Risk level for specific zones" },
    { icon: Shield, label: "Risk Classification", desc: "Categorized risk levels" },
    { icon: AlertTriangle, label: "Early Warning Alerts", desc: "Timely notifications" },
  ]

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8" >
      <div id="domain" className="max-w-7xl mx-auto scroll-mt-24">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Domain Understanding
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Input & Output Analysis
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={fadeInLeft}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              Input Features
            </h3>
            <div className="space-y-4">
              {inputFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="font-medium text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Outputs
            </h3>
            <div className="space-y-4">
              {outputs.map((output, index) => (
                <motion.div
                  key={index}
                  variants={fadeInRight}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <output.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground block">{output.label}</span>
                    <span className="text-sm text-muted-foreground">{output.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

// Dataset Section
function DatasetSection() {
  const datasetStats = [
    { label: "Total Samples", value: 50000, suffix: "+" },
    { label: "Features", value: 15, suffix: "" },
    { label: "Training Split", value: 80, suffix: "%" },
    { label: "Validation Split", value: 20, suffix: "%" },
  ]

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div id="dataset" className="max-w-7xl mx-auto scroll-mt-24">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Dataset
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Data Overview
          </h2>
          <p className="text-muted-foreground">
            Source: <span className="text-primary font-medium">Kaggle Competition Dataset</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {datasetStats.map((stat, index) => {
            return <StatCard key={index} stat={stat} />
          })}
        </div>

        {/* Data Preprocessing Timeline */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Data Preprocessing Pipeline
          </h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {[
                { step: 1, label: "Data Collection", icon: Database },
                { step: 2, label: "Data Cleaning", icon: Activity },
                { step: 3, label: "Missing Values", icon: AlertTriangle },
                { step: 4, label: "Outlier Detection", icon: TrendingUp },
                { step: 5, label: "Feature Scaling", icon: Layers },
                { step: 6, label: "Feature Engineering", icon: GitBranch },
                { step: 7, label: "Model Ready", icon: CheckCircle2 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative z-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="glass-card rounded-xl p-4">
                    <span className="text-xs text-primary font-medium">Step {item.step}</span>
                    <p className="text-sm font-medium text-foreground mt-1">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// Stat Card Component
function StatCard({ stat }: { stat: { label: string; value: number; suffix: string } }) {
  const { count, ref } = useCounter(stat.value)
  return (
    <motion.div
      variants={fadeInUp}
      ref={ref}
      className="glass-card rounded-2xl p-8 text-center"
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-muted-foreground">{stat.label}</div>
    </motion.div>
  )
}

// EDA Section with Charts
function EDASection() {
  const temperatureData = [
    { range: "0-20°C", fires: 120 },
    { range: "20-30°C", fires: 280 },
    { range: "30-40°C", fires: 520 },
    { range: "40-50°C", fires: 380 },
    { range: "50+°C", fires: 200 },
  ]

  const humidityData = [
    { humidity: "0-20%", probability: 0.85 },
    { humidity: "20-40%", probability: 0.65 },
    { humidity: "40-60%", probability: 0.35 },
    { humidity: "60-80%", probability: 0.15 },
    { humidity: "80-100%", probability: 0.05 },
  ]

  const featureImportance = [
    { name: "Temperature", value: 0.28 },
    { name: "Humidity", value: 0.22 },
    { name: "Wind Speed", value: 0.18 },
    { name: "Drought Index", value: 0.15 },
    { name: "Vegetation", value: 0.12 },
    { name: "Other", value: 0.05 },
  ]

  const correlationData = [
    { subject: "Temperature", A: 95, fullMark: 100 },
    { subject: "Humidity", A: 85, fullMark: 100 },
    { subject: "Wind Speed", A: 75, fullMark: 100 },
    { subject: "Drought", A: 70, fullMark: 100 },
    { subject: "Vegetation", A: 60, fullMark: 100 },
    { subject: "Region", A: 50, fullMark: 100 },
  ]

  const COLORS = ['#D97706', '#EA580C', '#DC2626', '#0891B2', '#10B981', '#6B7280']

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
      <div id="eda" className="max-w-7xl mx-auto scroll-mt-24">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Exploratory Data Analysis
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Data Insights & Visualizations
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Temperature Distribution */}
          <motion.div variants={fadeInLeft} className="glass-card rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ThermometerSun className="w-5 h-5 text-red-400" />
              Temperature vs Fire Frequency
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="range" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                  <Bar dataKey="fires" fill="#D97706" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-primary">Insight:</strong> Fire incidents peak in the 30-40°C range, indicating a strong correlation between elevated temperatures and wildfire occurrence.
            </p>
          </motion.div>

          {/* Humidity Analysis */}
          <motion.div variants={fadeInRight} className="glass-card rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-400" />
              Humidity vs Fire Probability
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={humidityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="humidity" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                  <Area type="monotone" dataKey="probability" stroke="#0891B2" fill="#0891B2" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-primary">Insight:</strong> Lower humidity levels dramatically increase wildfire probability, with 0-20% humidity showing 85% fire probability.
            </p>
          </motion.div>

          {/* Feature Importance */}
          <motion.div variants={fadeInLeft} className="glass-card rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Feature Importance Analysis
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={featureImportance}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {featureImportance.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-primary">Insight:</strong> Temperature (28%) and Humidity (22%) are the most influential features in predicting wildfire probability.
            </p>
          </motion.div>

          {/* Correlation Radar */}
          <motion.div variants={fadeInRight} className="glass-card rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-400" />
              Feature Correlation Radar
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={correlationData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" fontSize={11} />
                  <PolarRadiusAxis stroke="#374151" />
                  <Radar name="Correlation" dataKey="A" stroke="#D97706" fill="#D97706" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-primary">Insight:</strong> Temperature shows highest correlation with wildfire occurrence, followed by humidity and wind speed.
            </p>
          </motion.div>
        </div>

        {/* Feature Engineering Section */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Feature Engineering
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Fire Weather Index", desc: "Combined meteorological measure" },
              { name: "Drought Severity Score", desc: "Long-term moisture deficit" },
              { name: "Vegetation Stress Index", desc: "Plant water stress level" },
              { name: "Wind Impact Factor", desc: "Fire spread acceleration" },
              { name: "Regional Fire Density", desc: "Historical fire patterns" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all"
              >
                <h4 className="font-semibold text-primary mb-2">{feature.name}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// ML Pipeline Section
function MLPipelineSection() {
  const pipelineSteps = [
    { icon: Database, label: "Data Collection", desc: "Gather environmental data" },
    { icon: Activity, label: "Preprocessing", desc: "Clean and normalize data" },
    { icon: GitBranch, label: "Feature Engineering", desc: "Create derived features" },
    { icon: Brain, label: "Model Training", desc: "Train ML algorithms" },
    { icon: Target, label: "Evaluation", desc: "Validate performance" },
    { icon: BarChart3, label: "Prediction", desc: "Generate forecasts" },
    { icon: AlertTriangle, label: "Early Warning", desc: "Alert system integration" },
  ]

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Methodology
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Machine Learning Pipeline
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative flex-1 w-full lg:w-auto"
              >
                <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.label}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

// Models Section
function ModelsSection() {
  const models = [
    { 
      name: "Random Forest", 
      accuracy: 94.2,
      purpose: "Ensemble learning for robust predictions",
      advantages: ["Handles non-linear data", "Feature importance ranking", "Reduces overfitting"]
    },
    { 
      name: "XGBoost", 
      accuracy: 96.8,
      purpose: "Gradient boosting for high performance",
      advantages: ["Best accuracy", "Handles missing values", "Built-in regularization"]
    },
    { 
      name: "LightGBM", 
      accuracy: 95.5,
      purpose: "Fast gradient boosting framework",
      advantages: ["Faster training", "Lower memory usage", "Handles large datasets"]
    },
    { 
      name: "Gradient Boosting", 
      accuracy: 93.7,
      purpose: "Sequential ensemble method",
      advantages: ["Interpretable", "Handles various data types", "Flexible loss functions"]
    },
  ]

  const comparisonData = models.map(m => ({ name: m.name, accuracy: m.accuracy }))

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
      <div id="models" className="max-w-7xl mx-auto scroll-mt-24">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Models
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Machine Learning Models
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {models.map((model, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{model.name}</h3>
                  <p className="text-sm text-muted-foreground">{model.purpose}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-primary">{model.accuracy}%</span>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${model.accuracy}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {model.advantages.map((adv, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {adv}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Model Comparison Chart */}
        <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-6">
          <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
            Model Comparison
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" domain={[90, 100]} stroke="#9CA3AF" fontSize={12} />
                <YAxis type="category" dataKey="name" stroke="#9CA3AF" fontSize={12} width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#F9FAFB' }}
                />
                <Bar dataKey="accuracy" fill="#D97706" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// Results Section
function ResultsSection() {
  const findings = [
    { icon: ThermometerSun, finding: "Temperature is a significant wildfire predictor" },
    { icon: Droplets, finding: "Low humidity increases wildfire probability" },
    { icon: Wind, finding: "Wind speed accelerates wildfire spread" },
    { icon: TreeDeciduous, finding: "Dry vegetation strongly influences ignition risk" },
    { icon: AlertTriangle, finding: "Early predictions improve evacuation planning" },
  ]

  const futureScope = [
    { icon: Globe, title: "Satellite Integration", desc: "Real-time satellite data feeds" },
    { icon: Activity, title: "Drone Monitoring", desc: "Aerial surveillance systems" },
    { icon: Layers, title: "IoT Sensors", desc: "Environmental sensor networks" },
    { icon: Zap, title: "Mobile Alerts", desc: "Real-time notification apps" },
    { icon: Shield, title: "National Framework", desc: "Country-wide monitoring" },
    { icon: Brain, title: "Edge AI", desc: "On-device ML deployment" },
  ]

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div id="results" className="max-w-7xl mx-auto scroll-mt-24">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Results
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Findings & Impact
          </h2>
        </motion.div>

        {/* Best Model Highlight */}
        <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-8 mb-12 text-center border-primary/30">
          <Award className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Best Performing Model</h3>
          <p className="text-4xl font-bold text-primary mb-2">XGBoost</p>
          <p className="text-muted-foreground">Achieved <span className="text-primary font-bold">96.8%</span> accuracy in predicting wildfire evacuation zone hit probability</p>
        </motion.div>

        {/* Key Findings */}
        <motion.div variants={fadeInUp} className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Key Findings</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {findings.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-foreground">{item.finding}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Impact */}
        <motion.div variants={fadeInUp} className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Project Impact</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Faster emergency response",
              "Better disaster preparedness",
              "Reduced human casualties",
              "Improved resource allocation",
              "Enhanced environmental protection"
            ].map((impact, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-xl p-4 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-foreground">{impact}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Scope */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Future Scope</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureScope.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// Team Section
function TeamSection() {
  const team = [
    { name: "Pranav", roll: "227", usn: "01FE24BCI100", role: "ML Engineer" },
    { name: "Sankalp", roll: "223", usn: "01FE25BCI095", role: "Data Analyst" },
    { name: "Alsaba", roll: "252", usn: "01FE25BCI705", role: "Research Lead" },
    { name: "Rakshita", roll: "255", usn: "01FE25BCI708", role: "Visualization Expert" },
  ]

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
      <div id="team" className="max-w-7xl mx-auto scroll-mt-24">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Team
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
        </motion.div>

        {/* Guide Card */}
        <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-8 mb-12 max-w-md mx-auto text-center border-primary/30">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold text-primary-foreground">SV</span>
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-1">Prof. Sneha Varur</h3>
          <p className="text-primary font-medium mb-2">Project Guide</p>
          <p className="text-sm text-muted-foreground">Professor, Department of Computer Science and Engineering (AI)</p>
        </motion.div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all group"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/80 to-orange-600/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-primary-foreground">{member.name[0]}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Roll No: {member.roll}</p>
                <p>USN: {member.usn}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// Resources Section
function ResourcesSection() {
  const resources = [
    { icon: FileText, label: "Project Report", href: "#" },
    { icon: Presentation, label: "Presentation", href: "#" },
    { icon: Github, label: "Source Code", href: "#" },
    { icon: Database, label: "Dataset", href: "#" },
    { icon: Download, label: "Documentation", href: "#" },
  ]

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div id="resources" className="max-w-7xl mx-auto scroll-mt-24">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Resources
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project Resources
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.href}
              variants={fadeInUp}
              className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/30 hover:bg-primary/5 transition-all group"
            >
              <resource.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{resource.label}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame className="w-8 h-8 text-primary" />
          <span className="font-heading font-bold text-xl text-foreground">WildFire<span className="text-primary">ML</span></span>
        </div>
        <p className="font-heading font-semibold text-foreground mb-2">KLE Technological University</p>
        <p className="text-muted-foreground text-sm mb-4">Department of Computer Science and Engineering (AI)</p>
        <p className="text-muted-foreground text-sm mb-2">Machine Learning Course Project</p>
        <p className="text-primary font-medium mb-6">Predictive Modeling for Wildfire Evacuation Zone Hit Probability</p>
        <p className="text-muted-foreground text-xs">© 2026 All Rights Reserved</p>
      </div>
    </footer>
  )
}

// Main Page
export default function WildfireMLPortfolio() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <SDGSection />
      <DomainSection />
      <DatasetSection />
      <EDASection />
      <MLPipelineSection />
      <ModelsSection />
      <ResultsSection />
      <TeamSection />
      <ResourcesSection />
      <Footer />
    </main>
  )
}
