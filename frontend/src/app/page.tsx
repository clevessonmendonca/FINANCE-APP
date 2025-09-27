'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Target, 
  MessageCircle, 
  TrendingUp, 
  CreditCard, 
  Bell,
  ChevronRight,
  Eye,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';

import Dashboard from '@/components/Dashboard';
import AgentChat from '@/components/AgentChat';
import OnboardingAgent from '@/components/OnboardingAgent';
import SecurityAgent from '@/components/SecurityAgent';
import LifePlannerAgent from '@/components/LifePlannerAgent';
import B2BPanel from '@/components/B2BPanel';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotification, setShowNotification] = useState(true);

  const agents = [
    {
      id: 'onboarder',
      name: 'Agente Onboarder',
      description: 'Guia na adesão e configuração de serviços',
      icon: Users,
      color: 'bg-blue-500',
      status: 'Ativo'
    },
    {
      id: 'conciliador',
      name: 'Agente Conciliador',
      description: 'Gerenciamento e suporte proativo',
      icon: MessageCircle,
      color: 'bg-green-500',
      status: 'Ativo'
    },
    {
      id: 'guardiao',
      name: 'Guardião Financeiro',
      description: 'Segurança e otimização contínua',
      icon: Shield,
      color: 'bg-red-500',
      status: 'Monitorando'
    },
    {
      id: 'planner',
      name: 'Life Planner',
      description: 'Metas de vida e planejamento',
      icon: Target,
      color: 'bg-purple-500',
      status: 'Ativo'
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'chat', label: 'Chat IA', icon: MessageCircle },
    { id: 'onboarding', label: 'Onboarder', icon: Users },
    { id: 'security', label: 'Guardião', icon: Shield },
    { id: 'planner', label: 'Life Planner', icon: Target },
    { id: 'b2b', label: 'Painel B2B', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="gradient-bemobi p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Bemobi Connect AI</h1>
                <p className="text-sm text-gray-500">Seu Copiloto Financeiro Inteligente</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <AnimatePresence>
                {showNotification && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 flex items-center space-x-2"
                  >
                    <Bell className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-800">
                      IA detectou economia de R$ 180/mês em assinaturas
                    </span>
                    <button
                      onClick={() => setShowNotification(false)}
                      className="text-green-600 hover:text-green-800"
                    >
                      ×
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="gradient-bemobi text-white px-4 py-2 rounded-lg text-sm font-medium">
                4 Agentes Ativos
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-bemobi py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Revolucione sua Jornada Financeira com 
              <span className="text-transparent bg-clip-text gradient-bemobi"> IA Proativa</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              4 agentes de IA especializados trabalham 24/7 como seus copilotos financeiros, 
              integrando Open Finance + Smart Checkout + Grace para uma experiência única.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8"
            >
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card-bemobi text-center group hover:scale-105 transition-transform"
                >
                  <div className={`w-12 h-12 ${agent.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                    <agent.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{agent.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{agent.description}</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {agent.status}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap
                  ${activeTab === tab.id
                    ? 'border-bemobi-primary text-bemobi-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'chat' && <AgentChat />}
            {activeTab === 'onboarding' && <OnboardingAgent />}
            {activeTab === 'security' && <SecurityAgent />}
            {activeTab === 'planner' && <LifePlannerAgent />}
            {activeTab === 'b2b' && <B2BPanel />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Hackathon Bemobi 2025</h3>
            <p className="text-gray-400">
              Bemobi Connect AI - Revolucionando pagamentos com Inteligência Artificial
            </p>
            <div className="mt-4 flex justify-center items-center space-x-6 text-sm text-gray-400">
              <span>• Integração Open Finance</span>
              <span>• Smart Checkout</span>
              <span>• Grace AI</span>
              <span>• Segurança BeTrusty</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}