'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  PiggyBank, 
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  Eye,
  Zap
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const Dashboard = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [monthlySpending, setMonthlySpending] = useState(0);

  // Simulação de dados do Open Finance
  const accountsData = [
    { bank: 'Banco do Brasil', balance: 15420.50, type: 'Conta Corrente', status: 'connected' },
    { bank: 'Nubank', balance: 3250.80, type: 'Conta Digital', status: 'connected' },
    { bank: 'Inter', balance: 890.30, type: 'Poupança', status: 'connected' },
    { bank: 'Itaú', balance: 7200.00, type: 'Conta Corrente', status: 'pending' }
  ];

  const transactionsData = [
    { date: '2024-09-27', amount: -89.90, description: 'Netflix', category: 'Entretenimento', agent: 'Guardião sugeriu cancelar' },
    { date: '2024-09-26', amount: -1200.00, description: 'Aluguel', category: 'Moradia', agent: 'Agendado via Conciliador' },
    { date: '2024-09-25', amount: -45.50, description: 'Uber', category: 'Transporte', agent: null },
    { date: '2024-09-24', amount: 3500.00, description: 'Salário', category: 'Renda', agent: null },
    { date: '2024-09-23', amount: -180.00, description: 'Academia SmartFit', category: 'Saúde', agent: 'Onboarder otimizou pagamento' }
  ];

  const spendingByCategory = [
    { name: 'Moradia', value: 1200, color: '#4c6fff' },
    { name: 'Alimentação', value: 680, color: '#6366f1' },
    { name: 'Transporte', value: 320, color: '#8b5cf6' },
    { name: 'Entretenimento', value: 240, color: '#06b6d4' },
    { name: 'Saúde', value: 180, color: '#10b981' },
    { name: 'Outros', value: 150, color: '#f59e0b' }
  ];

  const monthlyTrend = [
    { month: 'Mai', income: 3500, expenses: 2800, savings: 700 },
    { month: 'Jun', income: 3500, expenses: 2650, savings: 850 },
    { month: 'Jul', income: 3500, expenses: 2900, savings: 600 },
    { month: 'Ago', income: 3500, expenses: 2750, savings: 750 },
    { month: 'Set', income: 3500, expenses: 2570, savings: 930 }
  ];

  const aiInsights = [
    {
      type: 'warning',
      title: 'Assinatura Não Utilizada',
      description: 'Spotify Premium não foi usado nos últimos 30 dias',
      action: 'Economize R$ 16,90/mês',
      agent: 'Guardião Financeiro',
      urgency: 'medium'
    },
    {
      type: 'success',
      title: 'Meta de Economia',
      description: 'Você está 23% acima da meta mensal!',
      action: 'Parabéns! Continue assim',
      agent: 'Life Planner',
      urgency: 'low'
    },
    {
      type: 'info',
      title: 'Otimização de Pagamento',
      description: 'PIX para conta de luz oferece 2% de desconto',
      action: 'Economize R$ 8,50 este mês',
      agent: 'Conciliador',
      urgency: 'medium'
    },
    {
      type: 'alert',
      title: 'Transação Suspeita',
      description: 'Compra de R$ 450 detectada em localização incomum',
      action: 'Verificar agora',
      agent: 'Guardião Financeiro',
      urgency: 'high'
    }
  ];

  useEffect(() => {
    // Animação de contadores
    const targetBalance = accountsData.reduce((sum, acc) => sum + acc.balance, 0);
    const targetSpending = Math.abs(transactionsData.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0));
    
    let currentBalance = 0;
    let currentSpending = 0;
    
    const interval = setInterval(() => {
      if (currentBalance < targetBalance) {
        currentBalance += targetBalance / 100;
        setTotalBalance(Math.min(currentBalance, targetBalance));
      }
      if (currentSpending < targetSpending) {
        currentSpending += targetSpending / 100;
        setMonthlySpending(Math.min(currentSpending, targetSpending));
      }
      
      if (currentBalance >= targetBalance && currentSpending >= targetSpending) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      default: return 'border-green-500 bg-green-50';
    }
  };

  const getUrgencyIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'alert': return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default: return <Clock className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-bemobi"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Saldo Total</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {totalBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% este mês
              </p>
            </div>
            <div className="gradient-bemobi p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Gastos do Mês</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {monthlySpending.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingDown className="h-4 w-4 mr-1" />
                -8% vs mês anterior
              </p>
            </div>
            <div className="bg-red-500 p-3 rounded-lg">
              <CreditCard className="h-6 w-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Economia Mensal</p>
              <p className="text-2xl font-bold text-gray-900">R$ 930,00</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <PiggyBank className="h-4 w-4 mr-1" />
                Meta: R$ 750
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
          transition={{ delay: 0.3 }}
          className="card-bemobi"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Alertas IA</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-sm text-yellow-600 flex items-center mt-1">
                <Zap className="h-4 w-4 mr-1" />
                2 ações pendentes
              </p>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Insights Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card-bemobi"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Insights da IA Proativa</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            4 Agentes Ativos
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`border-l-4 p-4 rounded-lg ${getUrgencyColor(insight.urgency)}`}
            >
              <div className="flex items-start space-x-3">
                {getUrgencyIcon(insight.type)}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{insight.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500">{insight.agent}</span>
                    <button className="text-sm font-medium text-bemobi-primary hover:text-bemobi-secondary flex items-center">
                      {insight.action}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-bemobi"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendência Mensal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`R$ ${value}`, '']} />
              <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} name="Receita" />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Gastos" />
              <Line type="monotone" dataKey="savings" stroke="#4c6fff" strokeWidth={2} name="Economia" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Spending by Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-bemobi"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gastos por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={spendingByCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {spendingByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`R$ ${value}`, '']} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Connected Accounts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="card-bemobi"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Contas Conectadas (Open Finance)</h3>
          <button className="btn-bemobi-secondary text-sm py-2 px-4">
            <Eye className="h-4 w-4 mr-2" />
            Conectar Nova Conta
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {accountsData.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{account.bank}</h4>
                <span className={`w-3 h-3 rounded-full ${
                  account.status === 'connected' ? 'bg-green-500' : 'bg-yellow-500'
                }`} />
              </div>
              <p className="text-sm text-gray-600 mb-2">{account.type}</p>
              <p className="text-lg font-semibold text-gray-900">
                R$ {account.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="card-bemobi"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Transações Recentes</h3>
        <div className="space-y-4">
          {transactionsData.map((transaction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.amount > 0 ? (
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{transaction.description}</h4>
                  <p className="text-sm text-gray-600">{transaction.category}</p>
                  {transaction.agent && (
                    <p className="text-xs text-blue-600 mt-1">{transaction.agent}</p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
