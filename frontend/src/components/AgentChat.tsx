'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Mic, 
  Paperclip, 
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Target,
  Users,
  MessageCircle,
  Shield
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  agent?: string;
  actions?: Array<{
    label: string;
    action: string;
    type: 'primary' | 'secondary' | 'warning';
  }>;
}

const AgentChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Olá! Sou seu Copiloto Financeiro Inteligente. Meus 4 agentes especializados estão prontos para te ajudar. Como posso te auxiliar hoje?',
      sender: 'agent',
      timestamp: new Date(),
      agent: 'Sistema Central'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeAgent, setActiveAgent] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const agents = [
    {
      id: 'onboarder',
      name: 'Agente Onboarder',
      icon: Users,
      color: 'bg-blue-500',
      description: 'Especialista em adesão e configuração'
    },
    {
      id: 'conciliador',
      name: 'Agente Conciliador',
      icon: MessageCircle,
      color: 'bg-green-500',
      description: 'Gerenciamento e suporte proativo'
    },
    {
      id: 'guardiao',
      name: 'Guardião Financeiro',
      icon: Shield,
      color: 'bg-red-500',
      description: 'Segurança e otimização contínua'
    },
    {
      id: 'planner',
      name: 'Life Planner',
      icon: Target,
      color: 'bg-purple-500',
      description: 'Metas de vida e planejamento'
    }
  ];

  const quickActions = [
    'Verificar transações suspeitas',
    'Otimizar minhas assinaturas',
    'Configurar nova meta de economia',
    'Analisar meus gastos do mês',
    'Conectar nova conta bancária',
    'Receber dicas de economia'
  ];

  const predefinedResponses = {
    'verificar transações suspeitas': {
      agent: 'Guardião Financeiro',
      content: 'Analisando suas transações... 🔍\n\nDetectei 1 transação suspeita:\n• R$ 450,00 - Compra online em localização diferente\n• Horário: 03:47 (fora do seu padrão)\n\nEsta transação foi feita por você?',
      actions: [
        { label: 'Sim, fui eu', action: 'confirm_transaction', type: 'primary' as const },
        { label: 'Não reconheço', action: 'block_card', type: 'warning' as const },
        { label: 'Ver detalhes', action: 'view_details', type: 'secondary' as const }
      ]
    },
    'otimizar minhas assinaturas': {
      agent: 'Guardião Financeiro',
      content: 'Analisando suas assinaturas ativas... 📊\n\nEncontrei oportunidades de economia:\n\n• Netflix: R$ 32,90/mês - Não usado há 45 dias\n• Spotify: R$ 16,90/mês - Uso baixo (2h/mês)\n• Amazon Prime: R$ 14,90/mês - Bem utilizado ✅\n\nEconomia potencial: R$ 49,80/mês (R$ 597,60/ano)',
      actions: [
        { label: 'Cancelar Netflix', action: 'cancel_netflix', type: 'warning' as const },
        { label: 'Pausar Spotify', action: 'pause_spotify', type: 'secondary' as const },
        { label: 'Ver alternativas', action: 'view_alternatives', type: 'primary' as const }
      ]
    },
    'configurar nova meta de economia': {
      agent: 'Life Planner',
      content: 'Vamos criar sua nova meta! 🎯\n\nBaseado no seu perfil, sugiro:\n\n💰 Meta sugerida: R$ 8.000 em 12 meses\n📈 Valor mensal: R$ 667\n💡 Estratégia: Otimizar gastos variáveis\n\nAnalisando seus gastos, você pode alcançar isso reduzindo:\n• Delivery: -R$ 200/mês\n• Assinaturas: -R$ 50/mês\n• Entretenimento: -R$ 100/mês',
      actions: [
        { label: 'Aceitar meta', action: 'create_goal', type: 'primary' as const },
        { label: 'Personalizar', action: 'customize_goal', type: 'secondary' as const },
        { label: 'Ver plano detalhado', action: 'view_plan', type: 'secondary' as const }
      ]
    },
    'analisar meus gastos do mês': {
      agent: 'Agente Conciliador',
      content: 'Análise completa dos seus gastos de setembro 📈\n\n💳 Total gasto: R$ 2.570,00\n📊 Vs mês anterior: -8% (economia de R$ 220)\n\n🏆 Destaques positivos:\n• Alimentação: -15% (excelente!)\n• Transporte: -22% (uso de bike)\n\n⚠️ Atenção:\n• Entretenimento: +35% (revisar streaming)\n• Compras online: +18%\n\nRecomendação: Você está no caminho certo! Foque em reduzir entretenimento no próximo mês.',
      actions: [
        { label: 'Ver detalhes', action: 'view_breakdown', type: 'primary' as const },
        { label: 'Comparar períodos', action: 'compare_periods', type: 'secondary' as const },
        { label: 'Exportar relatório', action: 'export_report', type: 'secondary' as const }
      ]
    },
    'conectar nova conta bancária': {
      agent: 'Agente Onboarder',
      content: 'Vou te ajudar a conectar uma nova conta via Open Finance! 🏦\n\n🔐 Processo 100% seguro e criptografado\n📱 Autorização pelo app do seu banco\n⚡ Conexão em tempo real\n\nBancos disponíveis:\n• Nubank, Inter, C6 Bank\n• Itaú, Bradesco, Santander\n• Banco do Brasil, Caixa\n• + 200 instituições',
      actions: [
        { label: 'Escolher banco', action: 'select_bank', type: 'primary' as const },
        { label: 'Ver tutorial', action: 'view_tutorial', type: 'secondary' as const },
        { label: 'Sobre segurança', action: 'security_info', type: 'secondary' as const }
      ]
    },
    'receber dicas de economia': {
      agent: 'Life Planner',
      content: 'Dicas personalizadas baseadas no seu perfil! 💡\n\n🎯 Dicas para este mês:\n\n1. **PIX Programado**: Use para contas fixas (economia de R$ 15/mês em taxas)\n\n2. **Dia da Economia**: Quartas-feiras têm melhores promoções para seus gastos\n\n3. **Cashback Otimizado**: Seu cartão oferece 3% em farmácias - use mais!\n\n4. **Energia**: Desligue aparelhos stand-by (economia de ~R$ 25/mês)\n\n5. **Assinatura Família**: Spotify Família sai mais barato que individual',
      actions: [
        { label: 'Aplicar dicas', action: 'apply_tips', type: 'primary' as const },
        { label: 'Mais dicas', action: 'more_tips', type: 'secondary' as const },
        { label: 'Lembrete semanal', action: 'weekly_reminder', type: 'secondary' as const }
      ]
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAgentResponse = (userMessage: string) => {
    setIsTyping(true);
    setActiveAgent('Processando...');

    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();
      let response = predefinedResponses[lowerMessage as keyof typeof predefinedResponses];
      
      if (!response) {
        // Resposta genérica baseada em palavras-chave
        if (lowerMessage.includes('transação') || lowerMessage.includes('suspeita')) {
          response = predefinedResponses['verificar transações suspeitas'];
        } else if (lowerMessage.includes('assinatura') || lowerMessage.includes('netflix') || lowerMessage.includes('spotify')) {
          response = predefinedResponses['otimizar minhas assinaturas'];
        } else if (lowerMessage.includes('meta') || lowerMessage.includes('economia') || lowerMessage.includes('poupar')) {
          response = predefinedResponses['configurar nova meta de economia'];
        } else if (lowerMessage.includes('gasto') || lowerMessage.includes('análise') || lowerMessage.includes('relatório')) {
          response = predefinedResponses['analisar meus gastos do mês'];
        } else if (lowerMessage.includes('banco') || lowerMessage.includes('conta') || lowerMessage.includes('conectar')) {
          response = predefinedResponses['conectar nova conta bancária'];
        } else {
          response = {
            agent: 'Sistema Central',
            content: 'Entendi sua solicitação! Meus agentes especializados podem te ajudar com:\n\n🛡️ **Guardião Financeiro**: Segurança e otimização\n👥 **Onboarder**: Configuração de serviços\n💬 **Conciliador**: Suporte e gerenciamento\n🎯 **Life Planner**: Metas e planejamento\n\nEscolha uma das opções abaixo ou me fale mais sobre o que precisa!',
            actions: [
              { label: 'Verificar segurança', action: 'security_check', type: 'primary' as const },
              { label: 'Analisar gastos', action: 'analyze_spending', type: 'secondary' as const },
              { label: 'Criar meta', action: 'create_goal', type: 'secondary' as const }
            ]
          };
        }
      }

      setActiveAgent(response.agent);
      
      const newMessage: Message = {
        id: Date.now().toString(),
        content: response.content,
        sender: 'agent',
        timestamp: new Date(),
        agent: response.agent,
        actions: response.actions
      };

      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
      setActiveAgent('');
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    simulateAgentResponse(inputValue);
    setInputValue('');
  };

  const handleQuickAction = (action: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: action,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    simulateAgentResponse(action);
  };

  const handleActionClick = (action: string) => {
    const responses = {
      'confirm_transaction': 'Perfeito! Transação confirmada como legítima. Continuarei monitorando sua conta. 🛡️',
      'block_card': 'Cartão bloqueado imediatamente! Novo cartão será enviado em 2 dias úteis. Sua segurança é nossa prioridade. 🔒',
      'cancel_netflix': 'Cancelamento do Netflix iniciado. Você economizará R$ 32,90/mês (R$ 394,80/ano). Posso sugerir alternativas gratuitas? 💰',
      'create_goal': 'Meta criada com sucesso! R$ 8.000 em 12 meses. Você receberá lembretes semanais e dicas personalizadas. 🎯',
      'select_bank': 'Abrindo lista de bancos... Escolha sua instituição para conectar via Open Finance de forma segura. 🏦'
    };

    const responseText = responses[action as keyof typeof responses] || 'Ação executada com sucesso! ✅';
    
    const responseMessage: Message = {
      id: Date.now().toString(),
      content: responseText,
      sender: 'agent',
      timestamp: new Date(),
      agent: activeAgent || 'Sistema'
    };

    setMessages(prev => [...prev, responseMessage]);
  };

  const getAgentIcon = (agentName: string) => {
    const agent = agents.find(a => a.name === agentName);
    if (agent) {
      const IconComponent = agent.icon;
      return <IconComponent className="h-5 w-5" />;
    }
    return <Bot className="h-5 w-5" />;
  };

  const getAgentColor = (agentName: string) => {
    const agent = agents.find(a => a.name === agentName);
    return agent?.color || 'bg-blue-500';
  };

  return (
    <div className="h-[700px] card-bemobi flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="gradient-bemobi p-2 rounded-lg">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Chat com IA</h3>
            <p className="text-sm text-gray-500">4 Agentes Especializados • Online</p>
          </div>
        </div>
        
        {activeAgent && (
          <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-blue-700">{activeAgent}</span>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                {message.sender === 'agent' && message.agent && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`${getAgentColor(message.agent)} p-1 rounded`}>
                      {getAgentIcon(message.agent)}
                    </div>
                    <span className="text-xs text-gray-500">{message.agent}</span>
                  </div>
                )}
                
                <div
                  className={`rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'gradient-bemobi text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                  
                  {message.actions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleActionClick(action.action)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                            action.type === 'primary'
                              ? 'bg-white text-blue-600 hover:bg-blue-50'
                              : action.type === 'warning'
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <p className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString('pt-BR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-2 mb-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action)}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua pergunta ou solicite ajuda aos agentes..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bemobi-primary focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
              <Paperclip className="h-4 w-4" />
            </button>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Mic className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="btn-bemobi-primary p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentChat;
