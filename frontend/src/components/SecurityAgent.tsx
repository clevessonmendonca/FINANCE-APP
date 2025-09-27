'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Lock, 
  Smartphone,
  MapPin,
  Clock,
  TrendingDown,
  TrendingUp,
  Zap,
  Ban,
  Play,
  Pause,
  X
} from 'lucide-react';

const SecurityAgent = () => {
  const [activeTab, setActiveTab] = useState('threats');
  const [realTimeData, setRealTimeData] = useState({
    threatsBlocked: 23,
    monitoringAccounts: 4,
    suspiciousTransactions: 2,
    securityScore: 94
  });

  // Simulação de dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 2),
        securityScore: Math.min(100, prev.securityScore + (Math.random() - 0.5) * 2)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const threats = [
    {
      id: 1,
      type: 'fraud',
      severity: 'high',
      title: 'Transação Suspeita Detectada',
      description: 'Compra de R$ 450,00 em localização incomum (São Paulo)',
      timestamp: '2 min atrás',
      status: 'pending',
      details: {
        amount: 450.00,
        merchant: 'Loja Online Desconhecida',
        location: 'São Paulo, SP',
        device: 'iPhone novo',
        riskScore: 85
      }
    },
    {
      id: 2,
      type: 'subscription',
      severity: 'medium',
      title: 'Assinatura Não Utilizada',
      description: 'Spotify Premium - 45 dias sem uso',
      timestamp: '1 hora atrás',
      status: 'pending',
      details: {
        service: 'Spotify Premium',
        monthlyFee: 16.90,
        lastUsed: '45 dias atrás',
        yearlyWaste: 202.80
      }
    },
    {
      id: 3,
      type: 'device',
      severity: 'low',
      title: 'Novo Dispositivo Detectado',
      description: 'Login de tablet não reconhecido',
      timestamp: '3 horas atrás',
      status: 'verified',
      details: {
        device: 'iPad Pro',
        location: 'Rio de Janeiro, RJ',
        ipAddress: '192.168.1.45',
        browser: 'Safari 17.0'
      }
    },
    {
      id: 4,
      type: 'payment',
      severity: 'high',
      title: 'Tentativa de Phishing',
      description: 'Link malicioso enviado via SMS',
      timestamp: '6 horas atrás',
      status: 'blocked',
      details: {
        source: 'SMS +55 11 99999-9999',
        link: 'fake-bank-site.com',
        threat: 'Phishing bancário',
        action: 'Bloqueado automaticamente'
      }
    }
  ];

  const optimizations = [
    {
      id: 1,
      title: 'Economia com Cancelamentos',
      description: 'Identifiquei 3 assinaturas não utilizadas',
      potential: 89.70,
      action: 'Cancelar assinaturas',
      type: 'subscription'
    },
    {
      id: 2,
      title: 'Método de Pagamento Otimizado',
      description: 'PIX oferece 2% desconto na conta de luz',
      potential: 15.40,
      action: 'Alterar para PIX',
      type: 'payment'
    },
    {
      id: 3,
      title: 'Negociação de Dívida',
      description: 'Detectei possível atraso em 7 dias',
      potential: 45.00,
      action: 'Negociar parcelamento',
      type: 'debt'
    }
  ];

  const securityLogs = [
    { time: '14:32', event: 'Login bem-sucedido', location: 'Rio de Janeiro', status: 'success' },
    { time: '14:15', event: 'Transação PIX verificada', amount: 'R$ 89,90', status: 'success' },
    { time: '13:45', event: 'Tentativa de acesso bloqueada', location: 'Localização desconhecida', status: 'blocked' },
    { time: '13:22', event: 'Alteração de senha detectada', device: 'iPhone', status: 'warning' },
    { time: '12:58', event: 'Sincronização Open Finance', accounts: '4 contas', status: 'success' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="h-5 w-5" />;
      case 'medium': return <Eye className="h-5 w-5" />;
      case 'low': return <CheckCircle className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'blocked': return 'text-red-600';
      case 'success': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const handleThreatAction = (threatId: number, action: string) => {
    console.log(`Ação ${action} executada para ameaça ${threatId}`);
    // Aqui seria implementada a lógica real
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-bemobi"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Score de Segurança</p>
              <p className="text-2xl font-bold text-green-600">
                {Math.round(realTimeData.securityScore)}%
              </p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                Excelente
              </p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Ameaças Bloqueadas</p>
              <p className="text-2xl font-bold text-red-600">{realTimeData.threatsBlocked}</p>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <Zap className="h-4 w-4 mr-1" />
                Últimas 24h
              </p>
            </div>
            <div className="bg-red-500 p-3 rounded-lg">
              <Ban className="h-6 w-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Contas Monitoradas</p>
              <p className="text-2xl font-bold text-blue-600">{realTimeData.monitoringAccounts}</p>
              <p className="text-sm text-blue-600 flex items-center mt-1">
                <Eye className="h-4 w-4 mr-1" />
                Open Finance ativo
              </p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <Eye className="h-6 w-6 text-white" />
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
              <p className="text-sm font-medium text-gray-600">Economia Detectada</p>
              <p className="text-2xl font-bold text-purple-600">R$ 150,10</p>
              <p className="text-sm text-purple-600 flex items-center mt-1">
                <TrendingDown className="h-4 w-4 mr-1" />
                Este mês
              </p>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <TrendingDown className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Agent Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card-bemobi"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-red-500 p-3 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Guardião Financeiro</h2>
              <p className="text-gray-600">
                Agente de IA proativo • Integração BeTrusty + Amazon Bedrock
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-700 font-medium">Monitorando 24/7</span>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: 'threats', label: 'Ameaças Detectadas', icon: AlertTriangle },
            { id: 'optimizations', label: 'Otimizações', icon: TrendingDown },
            { id: 'logs', label: 'Log de Segurança', icon: Eye }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-red-500 text-red-600'
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
          {activeTab === 'threats' && (
            <div className="space-y-4">
              {threats.map((threat, index) => (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`card-bemobi border-l-4 ${
                    threat.severity === 'high' ? 'border-red-500' :
                    threat.severity === 'medium' ? 'border-yellow-500' :
                    'border-green-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${getSeverityColor(threat.severity)}`}>
                        {getSeverityIcon(threat.severity)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{threat.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            threat.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            threat.status === 'blocked' ? 'bg-red-100 text-red-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {threat.status === 'pending' ? 'Pendente' :
                             threat.status === 'blocked' ? 'Bloqueado' : 'Verificado'}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{threat.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          {Object.entries(threat.details).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-gray-500 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                              </span>
                              <p className="font-medium text-gray-900">{value}</p>
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-3">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {threat.timestamp}
                        </p>
                      </div>
                    </div>
                    
                    {threat.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleThreatAction(threat.id, 'block')}
                          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                        >
                          Bloquear
                        </button>
                        <button
                          onClick={() => handleThreatAction(threat.id, 'allow')}
                          className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                        >
                          Permitir
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'optimizations' && (
            <div className="space-y-4">
              {optimizations.map((opt, index) => (
                <motion.div
                  key={opt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-bemobi"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <TrendingDown className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{opt.title}</h3>
                        <p className="text-gray-600 text-sm">{opt.description}</p>
                        <p className="text-green-600 font-medium mt-1">
                          Economia potencial: R$ {opt.potential.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <button className="btn-bemobi-primary">
                      {opt.action}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="card-bemobi">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Atividade de Segurança - Tempo Real
              </h3>
              
              <div className="space-y-3">
                {securityLogs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500 font-mono">{log.time}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        log.status === 'success' ? 'bg-green-500' :
                        log.status === 'blocked' ? 'bg-red-500' :
                        'bg-yellow-500'
                      }`} />
                      <span className="text-sm text-gray-900">{log.event}</span>
                    </div>
                    
                    <div className="text-right">
                      {log.location && (
                        <p className="text-xs text-gray-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {log.location}
                        </p>
                      )}
                      {log.amount && (
                        <p className="text-xs font-medium text-gray-900">{log.amount}</p>
                      )}
                      {log.device && (
                        <p className="text-xs text-gray-500 flex items-center">
                          <Smartphone className="h-3 w-3 mr-1" />
                          {log.device}
                        </p>
                      )}
                      {log.accounts && (
                        <p className="text-xs text-gray-500">{log.accounts}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SecurityAgent;
