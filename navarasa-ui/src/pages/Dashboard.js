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
  Avatar,
  Stack,
  Chip,
  IconButton,
  LinearProgress,
  Fade,
  Grow,
  Slide,
  Zoom,
  alpha,
  useTheme,
  Tooltip,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  Timeline as TimelineIcon,
  Image as ImageIcon,
  Download as DownloadIcon,
  Refresh as RefreshIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  History as HistoryIcon,
  Assessment as AssessmentIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  FilterList as FilterIcon,
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  ShowChart as ShowChartIcon,
} from "@mui/icons-material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  ComposedChart,
} from "recharts";

// Clean emotion data without Hindi
const EMOTIONS = {
  Shringara: { color: "#FF6B6B", icon: "🌸", description: "Love, Beauty" },
  Hasya: { color: "#FFD93D", icon: "😄", description: "Humor, Laughter" },
  Karuna: { color: "#6BCB77", icon: "😢", description: "Compassion, Sadness" },
  Raudra: { color: "#FF8C42", icon: "😠", description: "Anger, Fury" },
  Veera: { color: "#4D96FF", icon: "🦁", description: "Heroism, Courage" },
  Bhayanaka: { color: "#9D65C9", icon: "😨", description: "Fear, Terror" },
  Bibhatsa: { color: "#E8A2A2", icon: "🤢", description: "Disgust, Aversion" },
  Adbhuta: { color: "#FFB347", icon: "😲", description: "Wonder, Amazement" },
  Shanta: { color: "#A8D5BA", icon: "😌", description: "Peace, Serenity" },
};

// Clean color palette
const COLORS = [
  "#FF6B6B", "#FFD93D", "#6BCB77", "#FF8C42", "#4D96FF",
  "#9D65C9", "#E8A2A2", "#FFB347", "#A8D5BA"
];

function Dashboard() {
  const theme = useTheme();
  const [distribution, setDistribution] = useState([]);
  const [totalPredictions, setTotalPredictions] = useState(0);
  const [history, setHistory] = useState([]);
  const [latest, setLatest] = useState({});
  const [loading, setLoading] = useState(false);
  const [chartType, setChartType] = useState("pie");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEmotion, setFilterEmotion] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");
  const [trendData, setTrendData] = useState([]);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Sample data based on your image
  useEffect(() => {
    // Emotion distribution data
    const sampleDistribution = [
      { name: "Adbhuta", value: 50, displayName: "Adbhuta" },
      { name: "Bibhatsa", value: 17, displayName: "Bibhatsa" },
      { name: "Raudra", value: 33, displayName: "Raudra" },
      { name: "Bhayanaka", value: 0, displayName: "Bhayanaka" },
      { name: "Shringara", value: 0, displayName: "Shringara" },
      { name: "Hasya", value: 0, displayName: "Hasya" },
      { name: "Karuna", value: 0, displayName: "Karuna" },
      { name: "Veera", value: 0, displayName: "Veera" },
      { name: "Shanta", value: 0, displayName: "Shanta" },
    ].filter(item => item.value > 0);

    setDistribution(sampleDistribution);
    setTotalPredictions(6); // Total predictions from your image (4 high + 2 low)

    // Sample history data matching your image
    const sampleHistory = [
      { time: "9:12:25 pm", emotion: "Bibhatsa", confidence: 39.99 },
      { time: "9:12:25 pm", emotion: "Bibhatsa", confidence: 39.99 },
      { time: "9:12:25 pm", emotion: "Adbhuta", confidence: 85.50 },
      { time: "9:10:25 pm", emotion: "Adbhuta", confidence: 92.00 },
      { time: "9:08:25 pm", emotion: "Raudra", confidence: 88.00 },
      { time: "9:06:25 pm", emotion: "Raudra", confidence: 82.00 },
    ];
    
    setHistory(sampleHistory);

    // Generate trend data for the chart
    const times = ["9:06:25 pm", "9:08:25 pm", "9:10:25 pm", "9:12:25 pm"];
    const trendPoints = [
      { time: "9:06:25 pm", confidence: 82, emotion: "Raudra" },
      { time: "9:08:25 pm", confidence: 88, emotion: "Raudra" },
      { time: "9:10:25 pm", confidence: 92, emotion: "Adbhuta" },
      { time: "9:12:25 pm", confidence: 39.99, emotion: "Bibhatsa" },
      { time: "9:12:25 pm", confidence: 39.99, emotion: "Bibhatsa" },
      { time: "9:12:25 pm", confidence: 85.50, emotion: "Adbhuta" },
    ];
    setTrendData(trendPoints);
    
    setLatest({
      emotion: "Bibhatsa",
      confidence: 39.99,
      time: "9:12:25 pm",
    });
  }, []);

  // Calculate confidence distribution
  const confidenceDistribution = {
    high: history.filter(h => h.confidence >= 80).length,
    medium: history.filter(h => h.confidence >= 60 && h.confidence < 80).length,
    low: history.filter(h => h.confidence < 60).length,
  };

  const getEmotionColor = (emotion) => {
    return EMOTIONS[emotion]?.color || "#6366F1";
  };

  const getIntensityColor = (confidence) => {
    if (confidence >= 80) return "#4CAF50";
    if (confidence >= 60) return "#FF9800";
    return "#F44336";
  };

  const handleChartTypeChange = (event, newType) => {
    if (newType !== null) {
      setChartType(newType);
    }
  };

  const filteredHistory = history
    .filter(row => {
      if (filterEmotion !== "all" && row.emotion !== filterEmotion) return false;
      if (searchTerm && !row.emotion?.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      return sortOrder === "desc" 
        ? new Date(b.time) - new Date(a.time)
        : new Date(a.time) - new Date(b.time);
    });

  // Calculate average confidence
  const avgConfidence = history.length 
    ? (history.reduce((acc, curr) => acc + curr.confidence, 0) / history.length).toFixed(1)
    : 0;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Paper sx={{ 
          p: 2, 
          bgcolor: alpha('#000000', 0.95),
          border: `1px solid ${alpha('#FFFFFF', 0.1)}`,
          borderRadius: 2,
        }}>
          <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.7) }}>
            Time: {payload[0].payload.time}
          </Typography>
          <Typography variant="body2" sx={{ 
            color: getEmotionColor(payload[0].payload.emotion),
            fontWeight: 600,
            mt: 0.5,
          }}>
            Emotion: {payload[0].payload.emotion}
          </Typography>
          <Typography variant="body2" sx={{ 
            color: getIntensityColor(payload[0].value),
            fontWeight: 600,
            mt: 0.5,
          }}>
            Confidence: {payload[0].value.toFixed(2)}%
          </Typography>
        </Paper>
      );
    }
    return null;
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${alpha('#0B0B1F', 0.98)} 0%, ${alpha('#1A1A3A', 0.95)} 100%)`,
      py: 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container maxWidth="lg" sx={{ mx: 'auto' }}>
        {/* Centered Header */}
        <Fade in timeout={800}>
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
              <Avatar sx={{ bgcolor: alpha('#6366F1', 0.15), width: 60, height: 60 }}>
                <AssessmentIcon sx={{ fontSize: 35, color: '#6366F1' }} />
              </Avatar>
              <Typography variant="h3" sx={{ 
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
              }}>
                Navarasa Analytics
              </Typography>
            </Stack>
            <Typography variant="subtitle1" sx={{ color: alpha('#FFFFFF', 0.7) }}>
              Real-time emotion distribution dashboard
            </Typography>
          </Box>
        </Fade>

        {/* Stats Cards - Centered */}
        <Grid container spacing={3} sx={{ mb: 4, justifyContent: 'center' }}>
          {[
            { icon: <PsychologyIcon />, label: 'Total Predictions', value: totalPredictions, color: '#6366F1' },
            { icon: <EmojiEmotionsIcon />, label: 'Active Emotions', value: distribution.length, color: '#EC4899' },
            { icon: <TrendingUpIcon />, label: 'Avg Confidence', value: `${avgConfidence}%`, color: '#10B981' },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Zoom in timeout={300 + index * 100}>
                <Paper sx={{
                  p: 3,
                  width: '100%',
                  maxWidth: 280,
                  background: `linear-gradient(135deg, ${alpha(stat.color, 0.08)} 0%, ${alpha('#FFFFFF', 0.02)} 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(stat.color, 0.15)}`,
                  borderRadius: 3,
                  textAlign: 'center',
                }}>
                  <Avatar sx={{ bgcolor: alpha(stat.color, 0.15), width: 48, height: 48, mx: 'auto', mb: 2 }}>
                    {React.cloneElement(stat.icon, { sx: { color: stat.color, fontSize: 28 } })}
                  </Avatar>
                  <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.6) }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Main Chart Row - Emotion Distribution and Confidence Trends */}
        <Grid container spacing={3} sx={{ mb: 3, justifyContent: 'center' }}>
          {/* Emotion Distribution Chart */}
          <Grid item xs={12} md={6}>
            <Slide direction="right" in timeout={500}>
              <Paper sx={{
                p: 3,
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 3,
                height: '100%',
              }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PieChartIcon sx={{ color: '#6366F1' }} />
                    <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                      Emotion Distribution
                    </Typography>
                  </Stack>
                  <ToggleButtonGroup
                    value={chartType}
                    exclusive
                    onChange={handleChartTypeChange}
                    size="small"
                    sx={{
                      bgcolor: alpha('#FFFFFF', 0.05),
                      '& .MuiToggleButton-root': {
                        color: alpha('#FFFFFF', 0.5),
                        border: 'none',
                        '&.Mui-selected': {
                          color: '#FFFFFF',
                          bgcolor: alpha('#6366F1', 0.3),
                        },
                      },
                    }}
                  >
                    <ToggleButton value="pie"><PieChartIcon fontSize="small" /></ToggleButton>
                    <ToggleButton value="bar"><BarChartIcon fontSize="small" /></ToggleButton>
                  </ToggleButtonGroup>
                </Stack>

                <Box sx={{ height: 280 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    {chartType === "pie" ? (
                      <PieChart>
                        <Pie
                          data={distribution}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={90}
                          labelLine={true}
                          label={({ name, percent }) => 
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {distribution.map((entry, index) => (
                            <Cell 
                              key={index} 
                              fill={EMOTIONS[entry.name]?.color || COLORS[index % COLORS.length]}
                              stroke={alpha('#FFFFFF', 0.2)}
                              strokeWidth={2}
                            />
                          ))}
                        </Pie>
                        <RechartsTooltip 
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <Paper sx={{ p: 1.5, bgcolor: alpha('#000000', 0.9) }}>
                                  <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
                                    <strong>{data.name}</strong>
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: EMOTIONS[data.name]?.color }}>
                                    Frequency: {data.value}%
                                  </Typography>
                                </Paper>
                              );
                            }
                            return null;
                          }}
                        />
                      </PieChart>
                    ) : (
                      <BarChart data={distribution} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke={alpha('#FFFFFF', 0.1)} />
                        <XAxis type="number" stroke={alpha('#FFFFFF', 0.5)} domain={[0, 100]} />
                        <YAxis 
                          type="category" 
                          dataKey="name" 
                          stroke={alpha('#FFFFFF', 0.5)}
                          tick={{ fill: alpha('#FFFFFF', 0.7), fontSize: 12 }}
                        />
                        <RechartsTooltip />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                          {distribution.map((entry, index) => (
                            <Cell 
                              key={index} 
                              fill={EMOTIONS[entry.name]?.color || COLORS[index % COLORS.length]}
                              fillOpacity={0.8}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </Box>

                {/* Emotion Legend */}
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
                  {distribution.map((item, index) => (
                    <Chip
                      key={index}
                      label={`${item.name} ${item.value}%`}
                      size="small"
                      sx={{
                        bgcolor: alpha(EMOTIONS[item.name]?.color || COLORS[index], 0.15),
                        color: EMOTIONS[item.name]?.color || COLORS[index],
                        border: `1px solid ${alpha(EMOTIONS[item.name]?.color || COLORS[index], 0.3)}`,
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Slide>
          </Grid>

          {/* Confidence Trends Chart */}
          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={500}>
              <Paper sx={{
                p: 3,
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 3,
                height: '100%',
              }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <ShowChartIcon sx={{ color: '#10B981' }} />
                  <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                    Confidence Trends
                  </Typography>
                  <Chip 
                    label="Last 24 hours" 
                    size="small"
                    sx={{ 
                      bgcolor: alpha('#10B981', 0.15),
                      color: '#10B981',
                      ml: 'auto',
                    }}
                  />
                </Stack>

                {/* Hover Tooltip Display */}
                {hoveredPoint && (
                  <Paper sx={{
                    p: 2,
                    mb: 2,
                    bgcolor: alpha('#000000', 0.6),
                    border: `1px solid ${alpha('#FFFFFF', 0.1)}`,
                    borderRadius: 2,
                  }}>
                    <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.7) }}>
                      Time: {hoveredPoint.time}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: getEmotionColor(hoveredPoint.emotion),
                      fontWeight: 600,
                    }}>
                      Emotion: {hoveredPoint.emotion}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: getIntensityColor(hoveredPoint.confidence),
                      fontWeight: 600,
                    }}>
                      Confidence: {hoveredPoint.confidence.toFixed(2)}%
                    </Typography>
                  </Paper>
                )}

                <Box sx={{ height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={trendData}
                      onMouseMove={(e) => {
                        if (e.activePayload) {
                          setHoveredPoint(e.activePayload[0].payload);
                        }
                      }}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke={alpha('#FFFFFF', 0.1)} />
                      <XAxis 
                        dataKey="time" 
                        stroke={alpha('#FFFFFF', 0.5)}
                        tick={{ fontSize: 10 }}
                        interval={0}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis 
                        stroke={alpha('#FFFFFF', 0.5)}
                        domain={[0, 100]}
                        tick={{ fontSize: 10 }}
                      />
                      <RechartsTooltip content={<CustomTooltip />} />
                      
                      {/* Confidence lines for each emotion */}
                      <Line
                        type="monotone"
                        dataKey="confidence"
                        stroke="#10B981"
                        strokeWidth={2}
                        dot={(props) => {
                          const { cx, cy, payload } = props;
                          return (
                            <circle
                              cx={cx}
                              cy={cy}
                              r={6}
                              fill={getEmotionColor(payload.emotion)}
                              stroke={alpha('#FFFFFF', 0.5)}
                              strokeWidth={1}
                            />
                          );
                        }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </Box>

                {/* Reference lines */}
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', px: 2 }}>
                  <Typography variant="caption" sx={{ color: alpha('#FFFFFF', 0.5) }}>0</Typography>
                  <Typography variant="caption" sx={{ color: alpha('#FFFFFF', 0.5) }}>25</Typography>
                  <Typography variant="caption" sx={{ color: alpha('#FFFFFF', 0.5) }}>50</Typography>
                  <Typography variant="caption" sx={{ color: alpha('#FFFFFF', 0.5) }}>75</Typography>
                  <Typography variant="caption" sx={{ color: alpha('#FFFFFF', 0.5) }}>100</Typography>
                </Box>
              </Paper>
            </Slide>
          </Grid>
        </Grid>

        {/* Confidence Distribution and History Row */}
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {/* Confidence Distribution */}
          <Grid item xs={12} md={5}>
            <Slide direction="up" in timeout={800}>
              <Paper sx={{
                p: 3,
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 3,
                height: '100%',
              }}>
                <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 3 }}>
                  Confidence Distribution
                </Typography>

                <Stack spacing={3}>
                  {/* High Confidence */}
                  <Box>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.8) }}>
                          High (80-100%)
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {confidenceDistribution.high} predictions
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={(confidenceDistribution.high / Math.max(history.length, 1)) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: alpha('#4CAF50', 0.2),
                        '& .MuiLinearProgress-bar': {
                          bgcolor: '#4CAF50',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>

                  {/* Medium Confidence */}
                  <Box>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <InfoIcon sx={{ color: '#FF9800', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.8) }}>
                          Medium (60-79%)
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {confidenceDistribution.medium} predictions
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={(confidenceDistribution.medium / Math.max(history.length, 1)) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: alpha('#FF9800', 0.2),
                        '& .MuiLinearProgress-bar': {
                          bgcolor: '#FF9800',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>

                  {/* Low Confidence */}
                  <Box>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <WarningIcon sx={{ color: '#F44336', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.8) }}>
                          Low (0-59%)
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {confidenceDistribution.low} predictions
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={(confidenceDistribution.low / Math.max(history.length, 1)) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: alpha('#F44336', 0.2),
                        '& .MuiLinearProgress-bar': {
                          bgcolor: '#F44336',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>

                  {/* Summary */}
                  <Box sx={{ 
                    mt: 2, 
                    pt: 2, 
                    borderTop: `1px solid ${alpha('#FFFFFF', 0.1)}`,
                    textAlign: 'center',
                  }}>
                    <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.6) }}>
                      Total Predictions: {history.length}
                    </Typography>
                    <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.6) }}>
                      Average Confidence: {avgConfidence}%
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Slide>
          </Grid>

          {/* History Table */}
          <Grid item xs={12} md={7}>
            <Slide direction="up" in timeout={800}>
              <Paper sx={{
                p: 3,
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 3,
              }}>
                <Stack spacing={2}>
                  {/* History Header with Filters */}
                  <Stack 
                    direction={{ xs: 'column', md: 'row' }} 
                    alignItems="center" 
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <HistoryIcon sx={{ color: '#8B5CF6' }} />
                      <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        Prediction History
                      </Typography>
                    </Stack>
                    
                    <Stack direction="row" spacing={1}>
                      <TextField
                        size="small"
                        placeholder="Search emotions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon sx={{ color: alpha('#FFFFFF', 0.5) }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#FFFFFF',
                            '& fieldset': { borderColor: alpha('#FFFFFF', 0.2) },
                          },
                        }}
                      />
                      
                      <FormControl size="small" sx={{ minWidth: 120 }}>
                        <Select
                          value={filterEmotion}
                          onChange={(e) => setFilterEmotion(e.target.value)}
                          displayEmpty
                          sx={{ color: '#FFFFFF' }}
                        >
                          <MenuItem value="all">All Emotions</MenuItem>
                          {distribution.map(item => (
                            <MenuItem key={item.name} value={item.name}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <IconButton 
                        size="small"
                        onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                        sx={{ color: '#FFFFFF' }}
                      >
                        <FilterIcon />
                      </IconButton>
                    </Stack>
                  </Stack>

                  {/* History Table */}
                  <Box sx={{ maxHeight: 250, overflow: 'auto', borderRadius: 2 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ 
                          bgcolor: alpha('#000000', 0.3),
                          '& th': { 
                            color: alpha('#FFFFFF', 0.8),
                            fontWeight: 600,
                            borderBottom: `2px solid ${alpha('#FFFFFF', 0.1)}`,
                            fontSize: '0.875rem',
                          }
                        }}>
                          <TableCell>Time</TableCell>
                          <TableCell>Emotion</TableCell>
                          <TableCell>Confidence</TableCell>
                          <TableCell>Level</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredHistory.map((row, index) => (
                          <TableRow 
                            key={index}
                            sx={{
                              '&:hover': { bgcolor: alpha('#FFFFFF', 0.03) },
                              '& td': { 
                                color: '#FFFFFF',
                                borderBottom: `1px solid ${alpha('#FFFFFF', 0.05)}`,
                                fontSize: '0.875rem',
                              },
                            }}
                          >
                            <TableCell>{row.time}</TableCell>
                            <TableCell>
                              <Chip
                                label={row.emotion}
                                size="small"
                                sx={{
                                  bgcolor: alpha(getEmotionColor(row.emotion), 0.15),
                                  color: getEmotionColor(row.emotion),
                                  height: 24,
                                  '& .MuiChip-label': { px: 1, fontSize: '0.75rem' },
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <LinearProgress
                                  variant="determinate"
                                  value={row.confidence}
                                  sx={{
                                    width: 50,
                                    height: 4,
                                    borderRadius: 2,
                                    bgcolor: alpha('#FFFFFF', 0.1),
                                    '& .MuiLinearProgress-bar': {
                                      bgcolor: getIntensityColor(row.confidence),
                                      borderRadius: 2,
                                    },
                                  }}
                                />
                                <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                                  {row.confidence.toFixed(1)}%
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              {row.confidence >= 80 ? 
                                <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 18 }} /> :
                               row.confidence >= 60 ? 
                                <InfoIcon sx={{ color: '#FF9800', fontSize: 18 }} /> :
                                <WarningIcon sx={{ color: '#F44336', fontSize: 18 }} />}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Stack>
              </Paper>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;