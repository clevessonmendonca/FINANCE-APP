'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  PiggyBank,
  MapPin,
  Plane,
  Home,
  GraduationCap,
  Car,
  Heart,
  Plus,
  CheckCircle,
  Clock,
  Zap,
  Award
} from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const LifePlannerAgent = () => {
  const [activeTab, setActiveTab] = useState('goals');
  const [selectedGoal, setSelectedGoal] = useState<any>(null);
  const [showNewGoalModal, setShowNewGoalModal] = useState(false);

  const goals = [
    {
      id: 1,
      title: 'Viagem para Europa',
      target: 15000,
      current: 4200,
      deadline: '2025-06-15',
      category: 'travel',
      icon: Plane,
      color: '#4c6fff',
      monthlyTarget: 900,
      progress: 28,
      daysLeft: 261,
      strategies: [
        'Cancelar Netflix e Spotify não utilizados (-R$ 49,80/mês)',
        'Reduzir delivery em 50% (-R$ 200/mês)',
        'Usar cashback do cartão (+R$ 45/mês)'
      ],
      milestones: [
        { amount: 3750, date: '2024-12-31', status: 'completed' },
        { amount: 7500, date: '2025-02-28', status: 'current' },
        { amount: 11250, date: '2025-04-30', status: 'pending' },
        { amount: 15000, date: '2025-06-15', status: 'pending' }
      ]
    },
    {
      id: 2,
      title: 'Entrada do Apartamento',
      target: 50000,
      current: 18500,
      deadline: '2025-12-31',
      category: 'home',
      icon: Home,
      color: '#10b981',
      monthlyTarget: 2200,
      progress: 37,
      daysLeft: 461,
      strategies: [
        'Investir em CDB com 12% a.a.',
        'Economizar R$ 300/mês em gastos variáveis',
        'Renda extra com freelances'
      ]
    },
    {
      id: 3,
      title: 'MBA Internacional',
      target: 80000,
      current: 12000,
      deadline: '2026-03-01',
      category: 'education',
      icon: GraduationCap,
      color: '#8b5cf6',
      monthlyTarget: 3400,
      progress: 15,
      daysLeft: 548,
      strategies: [
        'Aplicar em fundos de educação',
        'Buscar bolsas de estudo',
        'Aumento salarial planejado'
      ]
    }
  ];

  const insights = [
    {
      type: 'optimization',
      title: 'Meta Viagem acelerada em 2 meses',
      description: 'Cancelando assinaturas não utilizadas, você pode antecipar sua viagem',
      action: 'Aplicar otimização',
      impact: '+R$ 597,60 extras',
      urgency: 'high'
    },
    {
      type: 'investment',
      title: 'Oportunidade de rendimento',
      description: 'CDB oferece 2% a mais que sua poupança atual',
      action: 'Migrar investimento',
      impact: '+R$ 240/mês',
      urgency: 'medium'
    },
    {
      type: 'achievement',
      title: 'Parabéns! Meta intermediária atingida',
      description: 'Você bateu 25% da meta da viagem antes do prazo',
      action: 'Ver próxima meta',
      impact: 'No caminho certo!',
      urgency: 'low'
    }
  ];

  const monthlyBreakdown = [
    { month: 'Set', planned: 900, actual: 1050, category: 'Viagem' },
    { month: 'Out', planned: 900, actual: 850, category: 'Viagem' },
    { month: 'Nov', planned: 900, actual: 920, category: 'Viagem' },
    { month: 'Dez', planned: 900, actual: 0, category: 'Viagem' }
  ];

  const spendingOptimization = [
    { category: 'Alimentação', current: 680, optimized: 480, savings: 200 },
    { category: 'Transporte', current: 320, optimized: 250, savings: 70 },
    { category: 'Entretenimento', current: 240, optimized: 120, savings: 120 },
    { category: 'Assinaturas', current: 89, optimized: 39, savings: 50 }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'travel': return Plane;
      case 'home': return Home;
      case 'education': return GraduationCap;
      case 'car': return Car;
      case 'health': return Heart;
      default: return Target;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      default: return 'border-green-500 bg-green-50';
    }
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const calculateDaysLeft = (deadline: string) => {
    const today = new Date();
    const target = new Date(deadline);
    const diffTime = target.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
            <div className="bg-purple-500 p-3 rounded-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Life Planner</h2>
              <p className="text-gray-600">
                Agente de IA para metas financeiras • Amazon Bedrock + Análise Preditiva
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setShowNewGoalModal(true)}
            className="btn-bemobi-primary flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Nova Meta</span>
          </button>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-bemobi"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Metas Ativas</p>
              <p className="text-2xl font-bold text-purple-600">{goals.length}</p>
              <p className="text-sm text-purple-600 flex items-center mt-1">
                <Target className="h-4 w-4 mr-1" />
                Em progresso
              </p>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <Target className="h-6 w-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Total Poupado</p>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(goals.reduce((sum, goal) => sum + goal.current, 0))}
              </p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% este mês
              </p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <PiggyBank className="h-6 w-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Meta Objetivo</p>
              <p className="text-2xl font-bold text-blue-600">
                {formatCurrency(goals.reduce((sum, goal) => sum + goal.target, 0))}
              </p>
              <p className="text-sm text-blue-600 flex items-center mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                Até Jun/2026
              </p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Economia IA</p>
              <p className="text-2xl font-bold text-orange-600">R$ 440</p>
              <p className="text-sm text-orange-600 flex items-center mt-1">
                <Zap className="h-4 w-4 mr-1" />
                Otimizações ativas
              </p>
            </div>
            <div className="bg-orange-500 p-3 rounded-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: 'goals', label: 'Minhas Metas', icon: Target },
            { id: 'insights', label: 'Insights IA', icon: Zap },
            { id: 'optimization', label: 'Otimização', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                }
              `}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'goals' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Goals List */}
              <div className="space-y-6">
                {goals.map((goal, index) => {
                  const IconComponent = getCategoryIcon(goal.category);
                  return (
                    <motion.div
                      key={goal.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card-bemobi cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedGoal(goal)}
                    >
                      <div className="flex items-start space-x-4">
                        <div style={{ backgroundColor: goal.color }} className="p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                            <span className="text-sm text-gray-500">{goal.progress}%</span>
                          </div>
                          
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                            <motion.div
                              className="h-2 rounded-full"
                              style={{ backgroundColor: goal.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${goal.progress}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Atual</p>
                              <p className="font-medium">{formatCurrency(goal.current)}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Meta</p>
                              <p className="font-medium">{formatCurrency(goal.target)}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Prazo</p>
                              <p className="font-medium">{calculateDaysLeft(goal.deadline)} dias</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Goal Detail */}
              {selectedGoal && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card-bemobi"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div style={{ backgroundColor: selectedGoal.color }} className="p-3 rounded-lg">
                      {getCategoryIcon(selectedGoal.category)({ className: "h-6 w-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedGoal.title}</h3>
                      <p className="text-gray-600">Detalhes e estratégias da IA</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Progress Chart */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Progresso Mensal</h4>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={monthlyBreakdown}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => [formatCurrency(Number(value)), '']} />
                          <Line type="monotone" dataKey="planned" stroke="#e5e7eb" strokeWidth={2} name="Planejado" strokeDasharray="5 5" />
                          <Line type="monotone" dataKey="actual" stroke={selectedGoal.color} strokeWidth={3} name="Real" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Strategies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Estratégias Sugeridas pela IA</h4>
                      <div className="space-y-2">
                        {selectedGoal.strategies.map((strategy: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{strategy}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Milestones */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Marcos Importantes</h4>
                      <div className="space-y-3">
                        {selectedGoal.milestones?.map((milestone: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${
                                milestone.status === 'completed' ? 'bg-green-500' :
                                milestone.status === 'current' ? 'bg-blue-500' :
                                'bg-gray-300'
                              }`} />
                              <span className="font-medium">{formatCurrency(milestone.amount)}</span>
                            </div>
                            <span className="text-sm text-gray-500">{milestone.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`card-bemobi border-l-4 ${getUrgencyColor(insight.urgency)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-5 w-5 text-purple-600" />
                        <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{insight.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-medium">{insight.impact}</span>
                        <button className="btn-bemobi-primary text-sm py-2 px-4">
                          {insight.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'optimization' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Spending Optimization */}
              <div className="card-bemobi">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Otimização de Gastos por IA
                </h3>
                
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={spendingOptimization}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip formatter={(value) => [formatCurrency(Number(value)), '']} />
                    <Bar dataKey="current" fill="#e5e7eb" name="Atual" />
                    <Bar dataKey="optimized" fill="#4c6fff" name="Otimizado" />
                  </BarChart>
                </ResponsiveContainer>

                <div className="mt-4 space-y-2">
                  {spendingOptimization.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{item.category}</span>
                      <span className="text-green-600 font-medium">
                        -{formatCurrency(item.savings)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Plan */}
              <div className="card-bemobi">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Plano de Economia Personalizado
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Economia Total Mensal</h4>
                    <p className="text-2xl font-bold text-blue-600">R$ 440,00</p>
                    <p className="text-sm text-blue-700">+18% em relação ao mês anterior</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Ações Recomendadas:</h4>
                    
                    {[
                      { action: 'Cancelar Netflix não utilizado', savings: 32.90, difficulty: 'Fácil' },
                      { action: 'Reduzir delivery para 2x/semana', savings: 200, difficulty: 'Médio' },
                      { action: 'Usar bike 3x/semana', savings: 120, difficulty: 'Médio' },
                      { action: 'Trocar plano de celular', savings: 87, difficulty: 'Fácil' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{item.action}</p>
                          <p className="text-sm text-gray-500">Dificuldade: {item.difficulty}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">+{formatCurrency(item.savings)}</p>
                          <button className="text-sm text-blue-600 hover:underline">Aplicar</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LifePlannerAgent;
