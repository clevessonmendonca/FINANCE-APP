'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Clock,
  Target,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Zap,
  Award,
  Bell,
  Settings,
  Download
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area } from 'recharts';

const B2BPanel = () => {
  const [activeMetric, setActiveMetric] = useState('overview');
  const [realTimeData, setRealTimeData] = useState({
    activeUsers: 15847,
    conversionRate: 94.2,
    avgResolutionTime: 1.4,
    customerSatisfaction: 96.8
  });

  // Simulação de dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10 - 5),
        conversionRate: Math.max(90, Math.min(98, prev.conversionRate + (Math.random() - 0.5) * 0.5)),
        avgResolutionTime: Math.max(1, Math.min(3, prev.avgResolutionTime + (Math.random() - 0.5) * 0.1)),
        customerSatisfaction: Math.max(90, Math.min(99, prev.customerSatisfaction + (Math.random() - 0.5) * 0.3))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const monthlyMetrics = [
    { month: 'Jan', conversion: 87.2, retention: 78.5, satisfaction: 92.1, volume: 125000 },
    { month: 'Fev', conversion: 89.1, retention: 80.2, satisfaction: 93.4, volume: 132000 },
    { month: 'Mar', conversion: 91.3, retention: 82.1, satisfaction: 94.2, volume: 145000 },
    { month: 'Abr', conversion: 92.8, retention: 84.3, satisfaction: 95.1, volume: 158000 },
    { month: 'Mai', conversion: 93.5, retention: 85.7, satisfaction: 95.8, volume: 167000 },
    { month: 'Jun', conversion: 94.2, retention: 87.2, satisfaction: 96.8, volume: 175000 }
  ];

  const agentPerformance = [
    { agent: 'Onboarder', efficiency: 97.2, interactions: 5420, conversions: 5271 },
    { agent: 'Conciliador', efficiency: 94.8, interactions: 8930, conversions: 8465 },
    { agent: 'Guardião', efficiency: 98.1, interactions: 2340, conversions: 2295 },
    { agent: 'Life Planner', efficiency: 95.7, interactions: 3180, conversions: 3043 }
  ];

  const industryComparison = [
    { segment: 'Fintech', bemobi: 94.2, market: 78.5, advantage: 15.7 },
    { segment: 'E-commerce', bemobi: 96.1, market: 72.3, advantage: 23.8 },
    { segment: 'Telecom', bemobi: 93.8, market: 69.2, advantage: 24.6 },
    { segment: 'Utilities', bemobi: 95.4, market: 71.8, advantage: 23.6 }
  ];

  const costReduction = [
    { category: 'Suporte Humano', before: 450000, after: 180000, reduction: 60 },
    { category: 'Recuperação de Dívidas', before: 320000, after: 96000, reduction: 70 },
    { category: 'Aquisição de Clientes', before: 280000, after: 168000, reduction: 40 },
    { category: 'Operações', before: 520000, after: 312000, reduction: 40 }
  ];

  const alerts = [
    {
      type: 'opportunity',
      title: 'Oportunidade de Upsell Detectada',
      description: '1,247 clientes elegíveis para upgrade de plano',
      impact: '+R$ 87.3k receita potencial',
      urgency: 'high'
    },
    {
      type: 'churn',
      title: 'Risco de Churn Identificado',
      description: '89 clientes com alta probabilidade de cancelamento',
      impact: 'R$ 34.5k receita em risco',
      urgency: 'high'
    },
    {
      type: 'efficiency',
      title: 'Peak de Eficiência Atingido',
      description: 'Agentes IA operando 15% acima da média',
      impact: '+2.3% conversão hoje',
      urgency: 'medium'
    }
  ];

  const clientSegments = [
    { name: 'Enterprise', value: 45, revenue: 2800000, color: '#4c6fff' },
    { name: 'Mid-Market', value: 30, revenue: 1650000, color: '#6366f1' },
    { name: 'Small Business', value: 20, revenue: 890000, color: '#8b5cf6' },
    { name: 'Startup', value: 5, revenue: 180000, color: '#06b6d4' }
  ];

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const getAlertColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      default: return 'border-green-500 bg-green-50';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <TrendingUp className="h-5 w-5 text-green-600" />;
      case 'churn': return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'efficiency': return <Zap className="h-5 w-5 text-blue-600" />;
      default: return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-bemobi"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="gradient-bemobi p-3 rounded-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Painel Executivo B2B</h2>
              <p className="text-gray-600">
                Insights e métricas para empresas clientes • Analytics em tempo real
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="btn-bemobi-secondary flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Exportar</span>
            </button>
            <button className="btn-bemobi-primary flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Configurar</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-bemobi"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Usuários Ativos</p>
              <p className="text-2xl font-bold text-blue-600">
                {realTimeData.activeUsers.toLocaleString('pt-BR')}
              </p>
              <p className="text-sm text-blue-600 flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +5.7% vs ontem
              </p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-bemobi"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Taxa de Conversão</p>
              <p className="text-2xl font-bold text-green-600">
                {realTimeData.conversionRate.toFixed(1)}%
              </p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% vs média mercado
              </p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-bemobi"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tempo de Resolução</p>
              <p className="text-2xl font-bold text-orange-600">
                {realTimeData.avgResolutionTime.toFixed(1)}min
              </p>
              <p className="text-sm text-orange-600 flex items-center mt-1">
                <TrendingDown className="h-4 w-4 mr-1" />
                -45% vs manual
              </p>
            </div>
            <div className="bg-orange-500 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-bemobi"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Satisfação Cliente</p>
              <p className="text-2xl font-bold text-purple-600">
                {realTimeData.customerSatisfaction.toFixed(1)}%
              </p>
              <p className="text-sm text-purple-600 flex items-center mt-1">
                <Award className="h-4 w-4 mr-1" />
                Excelente NPS
              </p>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card-bemobi"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Alertas Inteligentes</h3>
          <div className="flex items-center space-x-2 bg-red-50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-700 text-sm font-medium">3 Ações Recomendadas</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`border-l-4 p-4 rounded-lg ${getAlertColor(alert.urgency)}`}
            >
              <div className="flex items-start space-x-3">
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{alert.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500">IA Recommendation</span>
                    <span className="text-sm font-medium text-green-600">{alert.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-bemobi"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendências de Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="conversion" stackId="1" stroke="#4c6fff" fill="#4c6fff" fillOpacity={0.6} name="Conversão %" />
              <Area type="monotone" dataKey="retention" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Retenção %" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Agent Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-bemobi"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance dos Agentes IA</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={agentPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="agent" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="efficiency" fill="#4c6fff" name="Eficiência %" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Industry Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="card-bemobi"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Vantagem Competitiva por Segmento</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryComparison.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <h4 className="font-semibold text-gray-900 mb-3">{segment.segment}</h4>
              
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#4c6fff"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${(segment.bemobi / 100) * 251.2} 251.2`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-900">{segment.bemobi}%</span>
                </div>
              </div>
              
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bemobi:</span>
                  <span className="font-medium text-blue-600">{segment.bemobi}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mercado:</span>
                  <span className="font-medium text-gray-600">{segment.market}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vantagem:</span>
                  <span className="font-medium text-green-600">+{segment.advantage}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cost Reduction Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-bemobi"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Redução de Custos com IA</h3>
          
          <div className="space-y-4">
            {costReduction.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{item.category}</h4>
                  <span className="text-lg font-bold text-green-600">-{item.reduction}%</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Antes</p>
                    <p className="font-medium text-red-600">{formatCurrency(item.before)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Depois</p>
                    <p className="font-medium text-green-600">{formatCurrency(item.after)}</p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.reduction}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Economia: {formatCurrency(item.before - item.after)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="card-bemobi"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição de Clientes</h3>
          
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={clientSegments}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {clientSegments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            {clientSegments.map((segment, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: segment.color }}
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{segment.name}</p>
                  <p className="text-gray-500">{formatCurrency(segment.revenue)}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ROI Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="card-bemobi bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ROI do Bemobi Connect AI
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-green-600">312%</p>
              <p className="text-sm text-gray-600">ROI em 12 meses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">R$ 2.4M</p>
              <p className="text-sm text-gray-600">Economia anual</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">67%</p>
              <p className="text-sm text-gray-600">Redução de custos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">6 meses</p>
              <p className="text-sm text-gray-600">Payback period</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default B2BPanel;
