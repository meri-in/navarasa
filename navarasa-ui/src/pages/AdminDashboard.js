import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Avatar,
  LinearProgress,
  IconButton,
  Card,
  CardContent,
  useTheme,
  alpha,
  Stack,
  Divider,
  Tooltip as MuiTooltip,
  Fade,
  Zoom,
  Grow,
  Skeleton,
  Button,
  ButtonGroup,
  Badge
} from "@mui/material";

import {
  People as PeopleIcon,
  TrendingUp as AnalyticsIcon,
  Memory as MemoryIcon,
  Storage as StorageIcon,
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  Psychology as PsychologyIcon,
  TrendingDown as TrendingDownIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  ArrowUpward as ArrowUpIcon,
  ArrowDownward as ArrowDownIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  DateRange as DateRangeIcon,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
  ShowChart as LineChartIcon,
  BubbleChart as BubbleChartIcon
} from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  Treemap,
  Sankey,
  LineChart,
  Line,
  ComposedChart,
  Scatter
} from "recharts";

// Professional color palette
const COLORS = {
  primary: ["#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe", "#e0e7ff"],
  secondary: ["#ec4899", "#f472b6", "#f9a8d4", "#fbcfe8", "#fce7f3"],
  success: ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5"],
  warning: ["#f59e0b", "#fbbf24", "#fcd34d", "#fde68a", "#fef3c7"],
  error: ["#ef4444", "#f87171", "#fca5a5", "#fecaca", "#fee2e2"],
  info: ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"],
  neutral: ["#6b7280", "#9ca3af", "#d1d5db", "#e5e7eb", "#f3f4f6"]
};

// Gradients for cards
const GRADIENTS = {
  primary: "linear-gradient(145deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
  success: "linear-gradient(145deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)",
  warning: "linear-gradient(145deg, #f59e0b 0%, #fbbf24 50%, #fcd34d 100%)",
  error: "linear-gradient(145deg, #ef4444 0%, #f87171 50%, #fca5a5 100%)",
  info: "linear-gradient(145deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)",
  midnight: "linear-gradient(145deg, #1e293b 0%, #334155 50%, #475569 100%)",
  sunset: "linear-gradient(145deg, #f43f5e 0%, #fb7185 50%, #fda4af 100%)",
  ocean: "linear-gradient(145deg, #06b6d4 0%, #22d3ee 50%, #67e8f9 100%)"
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  }
};

const chartVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2
    }
  }
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  const theme = useTheme();
  
  if (active && payload && payload.length) {
    return (
      <Paper
        elevation={8}
        sx={{
          p: 1.5,
          background: alpha(theme.palette.background.paper, 0.95),
          backdropFilter: 'blur(8px)',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: 2
        }}
      >
        <Typography variant="caption" color="text.secondary" display="block">
          {label}
        </Typography>
        {payload.map((entry, index) => (
          <Stack key={index} direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: entry.color || entry.fill
              }}
            />
            <Typography variant="body2" fontWeight="bold">
              {entry.value.toLocaleString()}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {entry.name}
            </Typography>
          </Stack>
        ))}
      </Paper>
    );
  }
  return null;
};

// 3D Pie Chart with Animation
function AnimatedPieChart({ data, title }) {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);
  
  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);
  
  return (
    <Box sx={{ width: '100%', height: 320, position: 'relative' }}>
      <ResponsiveContainer>
        <PieChart>
          <defs>
            {data.map((entry, index) => (
              <radialGradient
                key={`gradient-${index}`}
                id={`pieGradient-${index}`}
                cx="30%"
                cy="30%"
                r="70%"
                fx="30%"
                fy="30%"
              >
                <stop offset="0%" stopColor={COLORS.primary[index % COLORS.primary.length]} stopOpacity={1} />
                <stop offset="70%" stopColor={COLORS.primary[(index + 2) % COLORS.primary.length]} stopOpacity={0.8} />
                <stop offset="100%" stopColor={COLORS.primary[(index + 4) % COLORS.primary.length]} stopOpacity={0.6} />
              </radialGradient>
            ))}
          </defs>
          
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={activeIndex !== null ? 110 : 100}
            paddingAngle={4}
            dataKey="value"
            animationBegin={200}
            animationDuration={1800}
            animationEasing="ease-out"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={{
              stroke: theme.palette.text.secondary,
              strokeWidth: 1,
              strokeDasharray: '3 3'
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#pieGradient-${index})`}
                stroke={theme.palette.background.paper}
                strokeWidth={3}
                style={{
                  filter: activeIndex === index 
                    ? `drop-shadow(0 8px 16px ${alpha(COLORS.primary[index % COLORS.primary.length], 0.4)})`
                    : 'none',
                  transition: 'filter 0.3s ease'
                }}
              />
            ))}
          </Pie>
          
          <Tooltip content={<CustomTooltip />} />
          
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            iconSize={10}
            formatter={(value) => (
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {value}
              </Typography>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center Text */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none'
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary">
          {data.reduce((sum, item) => sum + item.value, 0)}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Total Count
        </Typography>
      </Box>
    </Box>
  );
}

// Advanced Bar Chart with Animation
function AnimatedBarChart({ data }) {
  const theme = useTheme();
  const [hoveredBar, setHoveredBar] = useState(null);
  
  return (
    <Box sx={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 25 }}
          onMouseMove={(state) => {
            if (state.activeTooltipIndex !== hoveredBar) {
              setHoveredBar(state.activeTooltipIndex);
            }
          }}
          onMouseLeave={() => setHoveredBar(null)}
        >
          <defs>
            {data.map((entry, index) => (
              <linearGradient
                key={`gradient-${index}`}
                id={`barGradient-${index}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={COLORS.primary[index % COLORS.primary.length]} stopOpacity={1} />
                <stop offset="70%" stopColor={COLORS.primary[(index + 1) % COLORS.primary.length]} stopOpacity={0.8} />
                <stop offset="100%" stopColor={COLORS.primary[(index + 2) % COLORS.primary.length]} stopOpacity={0.6} />
              </linearGradient>
            ))}
            
            {/* Drop Shadow Filter */}
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.2" />
            </filter>
          </defs>
          
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={alpha(theme.palette.divider, 0.1)}
            vertical={false}
          />
          
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          />
          
          <Tooltip content={<CustomTooltip />} />
          
          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            animationBegin={400}
            animationDuration={2000}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#barGradient-${index})`}
                style={{
                  filter: hoveredBar === index ? 'url(#shadow)' : 'none',
                  transform: hoveredBar === index ? 'scaleY(1.02)' : 'scaleY(1)',
                  transformOrigin: 'bottom',
                  transition: 'transform 0.2s ease, filter 0.2s ease'
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

// Trend Line Chart
function TrendLineChart({ data }) {
  const theme = useTheme();
  
  // Generate trend data
  const trendData = data.map((item, index) => ({
    name: item.name,
    value: item.value,
    trend: Math.floor(item.value * (0.9 + Math.random() * 0.2))
  }));
  
  return (
    <Box sx={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={trendData}
          margin={{ top: 20, right: 30, left: 20, bottom: 25 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={COLORS.primary[0]} stopOpacity={1} />
              <stop offset="50%" stopColor={COLORS.secondary[0]} stopOpacity={1} />
              <stop offset="100%" stopColor={COLORS.success[0]} stopOpacity={1} />
            </linearGradient>
          </defs>
          
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={alpha(theme.palette.divider, 0.1)}
            vertical={false}
          />
          
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
            yAxisId="left"
          />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
            orientation="right"
            yAxisId="right"
          />
          
          <Tooltip content={<CustomTooltip />} />
          
          <Bar
            dataKey="value"
            fill={alpha(COLORS.primary[0], 0.3)}
            radius={[4, 4, 0, 0]}
            yAxisId="left"
            barSize={30}
            animationBegin={200}
            animationDuration={1500}
          />
          
          <Line
            type="monotone"
            dataKey="trend"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={{
              r: 6,
              fill: theme.palette.background.paper,
              stroke: COLORS.primary[0],
              strokeWidth: 2
            }}
            activeDot={{
              r: 8,
              fill: COLORS.primary[0],
              stroke: theme.palette.background.paper,
              strokeWidth: 2
            }}
            yAxisId="right"
            animationBegin={600}
            animationDuration={1800}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
}

// Radial Progress Chart
function RadialProgressChart({ value, max = 100, title, color = "primary" }) {
  const theme = useTheme();
  const data = [
    { name: title, value: value, fill: COLORS[color][0] }
  ];
  
  return (
    <Box sx={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
          barSize={20}
        >
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            animationBegin={800}
            animationDuration={2000}
            animationEasing="ease-out"
          />
          <Tooltip />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              fill: theme.palette.text.primary
            }}
          >
            {value}%
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </Box>
  );
}

// Stat Card with Enhanced Animation
function StatCard({ icon: Icon, title, value, gradient, trend, trendValue, delay, subtitle }) {
  const theme = useTheme();
  
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card
        sx={{
          height: '100%',
          background: gradient,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 4,
          boxShadow: `0 12px 24px -8px ${alpha(theme.palette.common.black, 0.2)}`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -20,
            right: -20,
            width: 180,
            height: 180,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'pulse 3s infinite'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -20,
            left: -20,
            width: 150,
            height: 150,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'pulse 3s infinite reverse'
          },
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' }
          }
        }}
        elevation={0}
      >
        <CardContent sx={{ position: 'relative', zIndex: 1, p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Avatar
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'white',
                width: 56,
                height: 56,
                backdropFilter: 'blur(8px)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              <Icon sx={{ fontSize: 28 }} />
            </Avatar>
            
            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(8px)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
          
          <Typography variant="h3" fontWeight="bold" mb={0.5}>
            <CountUp
              end={value}
              duration={2.5}
              separator=","
              suffix={title === "Model Accuracy" ? "%" : ""}
            />
          </Typography>
          
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
            {title}
            {subtitle && (
              <Typography component="span" variant="caption" sx={{ ml: 1, opacity: 0.7 }}>
                {subtitle}
              </Typography>
            )}
          </Typography>
          
          {trend && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  p: 0.5,
                  borderRadius: 1,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                {trend === 'up' ? (
                  <ArrowUpIcon fontSize="small" />
                ) : (
                  <ArrowDownIcon fontSize="small" />
                )}
              </Box>
              <Typography variant="body2" fontWeight="bold">
                {trendValue}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                vs last month
              </Typography>
            </Stack>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Main Dashboard Component
function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [distribution, setDistribution] = useState([]);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [chartType, setChartType] = useState('pie');
  const [timeRange, setTimeRange] = useState('week');
  const theme = useTheme();

  const fetchAdminData = () => {
    setLoading(true);
    fetch("http://localhost:5000/admin/analytics")
      .then(res => res.json())
      .then(data => {
        setStats(data.system_stats);
        setDistribution(data.emotion_distribution);
        setRecent(data.recent_predictions);
        setLastUpdated(new Date());
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAdminData();
    const interval = setInterval(fetchAdminData, 30000);
    return () => clearInterval(interval);
  }, []);

  // Generate mock trend data
  const trends = {
    users: { value: '+12.5%', direction: 'up' },
    predictions: { value: '+23.2%', direction: 'up' },
    accuracy: { value: '+5.3%', direction: 'up' },
    server: { value: '99.9%', direction: 'up' }
  };

  return (
    <Box
      sx={{
        background: `radial-gradient(circle at 0% 0%, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 50%),
                     radial-gradient(circle at 100% 100%, ${alpha(theme.palette.secondary.main, 0.03)} 0%, transparent 50%),
                     ${theme.palette.background.default}`,
        minHeight: "100vh",
        py: 4
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            spacing={2}
            mb={4}
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="800"
                gutterBottom
                sx={{
                  background: GRADIENTS.primary,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em'
                }}
              >
                Analytics Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Monitor your system performance with real-time insights
              </Typography>
            </Box>
            
            <Stack direction="row" spacing={2} alignItems="center">
              <ButtonGroup variant="outlined" size="small">
                <Button
                  onClick={() => setTimeRange('day')}
                  variant={timeRange === 'day' ? 'contained' : 'outlined'}
                >
                  Day
                </Button>
                <Button
                  onClick={() => setTimeRange('week')}
                  variant={timeRange === 'week' ? 'contained' : 'outlined'}
                >
                  Week
                </Button>
                <Button
                  onClick={() => setTimeRange('month')}
                  variant={timeRange === 'month' ? 'contained' : 'outlined'}
                >
                  Month
                </Button>
              </ButtonGroup>
              
              <Fade in={!loading}>
                <Paper
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                    borderRadius: 2
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <ScheduleIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
                    <Typography variant="caption" color="text.secondary">
                      Updated {lastUpdated.toLocaleTimeString()}
                    </Typography>
                  </Stack>
                </Paper>
              </Fade>
              
              <MuiTooltip title="Refresh Data">
                <IconButton
                  onClick={fetchAdminData}
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                    '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.1) },
                    animation: loading ? 'spin 1s linear infinite' : 'none',
                    '@keyframes spin': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' }
                    }
                  }}
                >
                  <RefreshIcon />
                </IconButton>
              </MuiTooltip>
            </Stack>
          </Stack>
        </motion.div>

        {/* System Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                icon={PeopleIcon}
                title="Total Users"
                value={stats.users || 0}
                gradient={GRADIENTS.primary}
                trend={trends.users.direction}
                trendValue={trends.users.value}
                delay={0}
                subtitle="active"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                icon={AnalyticsIcon}
                title="Total Predictions"
                value={stats.predictions || 0}
                gradient={GRADIENTS.ocean}
                trend={trends.predictions.direction}
                trendValue={trends.predictions.value}
                delay={0.1}
                subtitle="this month"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                icon={MemoryIcon}
                title="Model Accuracy"
                value={stats.accuracy || 0}
                gradient={GRADIENTS.sunset}
                trend={trends.accuracy.direction}
                trendValue={trends.accuracy.value}
                delay={0.2}
                subtitle="average"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                icon={StorageIcon}
                title="Server Uptime"
                value={stats.server === "Online" ? 99.9 : 0}
                gradient={GRADIENTS.midnight}
                trend={trends.server.direction}
                trendValue={trends.server.value}
                delay={0.3}
                subtitle="reliability"
              />
            </Grid>
          </Grid>
        </motion.div>

        {/* Charts Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={chartVariants}
              initial="hidden"
              animate="visible"
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: theme.palette.background.paper,
                  boxShadow: `0 12px 40px -12px ${alpha(theme.palette.common.black, 0.2)}`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 24px 48px -12px ${alpha(theme.palette.common.black, 0.3)}`
                  }
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: alpha(COLORS.primary[0], 0.1), color: COLORS.primary[0] }}>
                      <PieChartIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        Emotion Distribution
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Real-time analysis of user emotions
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <ButtonGroup size="small">
                    <Button
                      onClick={() => setChartType('pie')}
                      variant={chartType === 'pie' ? 'contained' : 'outlined'}
                    >
                      Pie
                    </Button>
                    <Button
                      onClick={() => setChartType('donut')}
                      variant={chartType === 'donut' ? 'contained' : 'outlined'}
                    >
                      Donut
                    </Button>
                    <Button
                      onClick={() => setChartType('radial')}
                      variant={chartType === 'radial' ? 'contained' : 'outlined'}
                    >
                      Radial
                    </Button>
                  </ButtonGroup>
                </Stack>
                
                <Divider sx={{ mb: 3 }} />
                
                {loading ? (
                  <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />
                ) : (
                  <>
                    {chartType === 'pie' && <AnimatedPieChart data={distribution} />}
                    {chartType === 'donut' && (
                      <Box sx={{ width: '100%', height: 320 }}>
                        <ResponsiveContainer>
                          <PieChart>
                            <Pie
                              data={distribution}
                              cx="50%"
                              cy="50%"
                              innerRadius={80}
                              outerRadius={100}
                              paddingAngle={2}
                              dataKey="value"
                              animationBegin={200}
                              animationDuration={1800}
                            >
                              {distribution.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS.primary[index % COLORS.primary.length]}
                                  stroke="none"
                                />
                              ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                          </PieChart>
                        </ResponsiveContainer>
                      </Box>
                    )}
                    {chartType === 'radial' && <RadialProgressChart value={75} title="Completion" />}
                  </>
                )}
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={chartVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: theme.palette.background.paper,
                  boxShadow: `0 12px 40px -12px ${alpha(theme.palette.common.black, 0.2)}`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 24px 48px -12px ${alpha(theme.palette.common.black, 0.3)}`
                  }
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: alpha(COLORS.success[0], 0.1), color: COLORS.success[0] }}>
                      <BarChartIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        Advanced Analytics
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Comparison with trend analysis
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <ButtonGroup size="small">
                    <Button
                      onClick={() => setChartType('bar')}
                      variant={chartType === 'bar' ? 'contained' : 'outlined'}
                    >
                      Bar
                    </Button>
                    <Button
                      onClick={() => setChartType('line')}
                      variant={chartType === 'line' ? 'contained' : 'outlined'}
                    >
                      Line
                    </Button>
                    <Button
                      onClick={() => setChartType('composed')}
                      variant={chartType === 'composed' ? 'contained' : 'outlined'}
                    >
                      Composed
                    </Button>
                  </ButtonGroup>
                </Stack>
                
                <Divider sx={{ mb: 3 }} />
                
                {loading ? (
                  <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />
                ) : (
                  <>
                    {chartType === 'bar' && <AnimatedBarChart data={distribution} />}
                    {chartType === 'line' && <TrendLineChart data={distribution} />}
                    {chartType === 'composed' && <AnimatedBarChart data={distribution} />}
                  </>
                )}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Recent Predictions Table */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Grow in={!loading} timeout={1000}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: theme.palette.background.paper,
                  boxShadow: `0 12px 40px -12px ${alpha(theme.palette.common.black, 0.2)}`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  overflow: 'hidden'
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: alpha(COLORS.warning[0], 0.1), color: COLORS.warning[0] }}>
                      <PsychologyIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        Recent Predictions
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Latest emotion analysis results
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <Badge
                    badgeContent={recent.length}
                    color="primary"
                    sx={{ '& .MuiBadge-badge': { fontWeight: 'bold' } }}
                  >
                    <Chip
                      label="Live Updates"
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                  </Badge>
                </Stack>
                
                <Divider sx={{ mb: 3 }} />
                
                <Box sx={{ overflowX: 'auto' }}>
                  {loading ? (
                    <Stack spacing={1}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Skeleton key={i} variant="rectangular" height={60} sx={{ borderRadius: 1 }} />
                      ))}
                    </Stack>
                  ) : (
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>User</TableCell>
                          <TableCell>Emotion</TableCell>
                          <TableCell>Confidence</TableCell>
                          <TableCell>Time</TableCell>
                          <TableCell align="right">Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <AnimatePresence>
                          {recent.map((row, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{
                                backgroundColor: alpha(theme.palette.primary.main, 0.02),
                                scale: 1.002
                              }}
                              style={{
                                transition: 'background-color 0.2s ease'
                              }}
                            >
                              <TableCell>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                  <Avatar
                                    sx={{
                                      width: 32,
                                      height: 32,
                                      bgcolor: alpha(COLORS.primary[index % COLORS.primary.length], 0.1),
                                      color: COLORS.primary[index % COLORS.primary.length],
                                      fontSize: '0.875rem',
                                      fontWeight: 'bold'
                                    }}
                                  >
                                    {row.user.charAt(0)}
                                  </Avatar>
                                  <Typography variant="body2" fontWeight="500">
                                    {row.user}
                                  </Typography>
                                </Stack>
                              </TableCell>
                              <TableCell>
                                <Chip
                                  label={row.emotion}
                                  size="small"
                                  sx={{
                                    bgcolor: alpha(COLORS.primary[index % COLORS.primary.length], 0.1),
                                    color: COLORS.primary[index % COLORS.primary.length],
                                    fontWeight: 600,
                                    borderRadius: 1.5
                                  }}
                                />
                              </TableCell>
                              <TableCell>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: 120 }}>
                                  <LinearProgress
                                    variant="determinate"
                                    value={parseFloat(row.confidence)}
                                    sx={{
                                      flex: 1,
                                      height: 6,
                                      borderRadius: 3,
                                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                                      '& .MuiLinearProgress-bar': {
                                        bgcolor: COLORS.primary[index % COLORS.primary.length],
                                        borderRadius: 3,
                                        backgroundImage: `linear-gradient(90deg, ${COLORS.primary[index % COLORS.primary.length]}, ${COLORS.secondary[index % COLORS.secondary.length]})`
                                      }
                                    }}
                                  />
                                  <Typography variant="body2" fontWeight="600" sx={{ minWidth: 45 }}>
                                    {row.confidence}
                                  </Typography>
                                </Stack>
                              </TableCell>
                              <TableCell>
                                <Stack direction="row" alignItems="center" spacing={0.5}>
                                  <ScheduleIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
                                  <Typography variant="body2" color="text.secondary">
                                    {row.time}
                                  </Typography>
                                </Stack>
                              </TableCell>
                              <TableCell align="right">
                                <CheckCircleIcon sx={{ color: COLORS.success[0], fontSize: 20 }} />
                              </TableCell>
                            </motion.tr>
                          ))}
                        </AnimatePresence>
                      </TableBody>
                    </Table>
                  )}
                </Box>
              </Paper>
            </Grow>
          </Grid>
        </Grid>

        {/* Footer with System Health */}
        <Box mt={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap>
                    <Box>
                      <Typography variant="caption" color="text.secondary" gutterBottom>
                        CPU Usage
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Typography variant="h6" fontWeight="bold">
                          45%
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={45}
                          sx={{
                            width: 100,
                            height: 8,
                            borderRadius: 4,
                            bgcolor: alpha(theme.palette.error.main, 0.1),
                            '& .MuiLinearProgress-bar': {
                              bgcolor: COLORS.success[0],
                              borderRadius: 4
                            }
                          }}
                        />
                      </Stack>
                    </Box>
                    
                    <Box>
                      <Typography variant="caption" color="text.secondary" gutterBottom>
                        Memory Usage
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Typography variant="h6" fontWeight="bold">
                          2.4 GB
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          / 8 GB
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={30}
                          sx={{
                            width: 100,
                            height: 8,
                            borderRadius: 4,
                            bgcolor: alpha(theme.palette.warning.main, 0.1),
                            '& .MuiLinearProgress-bar': {
                              bgcolor: COLORS.warning[0],
                              borderRadius: 4
                            }
                          }}
                        />
                      </Stack>
                    </Box>
                    
                    <Box>
                      <Typography variant="caption" color="text.secondary" gutterBottom>
                        Response Time
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h6" fontWeight="bold">
                          124ms
                        </Typography>
                        <Chip
                          size="small"
                          label="Fast"
                          color="success"
                          sx={{ height: 20, fontSize: '0.625rem' }}
                        />
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      size="small"
                    >
                      Export
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<ShareIcon />}
                      size="small"
                      sx={{
                        background: GRADIENTS.primary,
                        '&:hover': { opacity: 0.9 }
                      }}
                    >
                      Share Report
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default AdminDashboard;