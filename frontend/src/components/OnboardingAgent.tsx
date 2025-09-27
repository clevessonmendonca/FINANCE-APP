'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Smartphone, 
  CreditCard, 
  Globe,
  Shield,
  Zap,
  Star,
  MapPin,
  Languages,
  Banknote
} from 'lucide-react';

const OnboardingAgent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const countries = [
    { code: 'BR', name: 'Brasil', currency: 'BRL', methods: ['PIX', 'Cartão', 'Boleto'], flag: '🇧🇷' },
    { code: 'MX', name: 'México', currency: 'MXN', methods: ['OXXO', 'SPEI', 'Cartão'], flag: '🇲🇽' },
    { code: 'CO', name: 'Colômbia', currency: 'COP', methods: ['PSE', 'Efecty', 'Cartão'], flag: '🇨🇴' },
    { code: 'AR', name: 'Argentina', currency: 'ARS', methods: ['Transferencia', 'Rapipago', 'Cartão'], flag: '🇦🇷' }
  ];

  const onboardingSteps = [
    {
      title: 'Bem-vindo ao Bemobi Connect AI!',
      subtitle: 'Vou te ajudar a configurar sua experiência financeira personalizada',
      component: 'welcome'
    },
    {
      title: 'Onde você está localizado?',
      subtitle: 'Isso me ajuda a personalizar métodos de pagamento e regulamentações locais',
      component: 'location'
    },
    {
      title: 'Como você prefere pagar?',
      subtitle: 'Vou sugerir os métodos mais vantajosos para seu perfil',
      component: 'payment'
    },
    {
      title: 'Conectar suas contas',
      subtitle: 'Via Open Finance, de forma 100% segura',
      component: 'accounts'
    },
    {
      title: 'Configuração concluída!',
      subtitle: 'Seus agentes IA estão prontos para trabalhar',
      component: 'complete'
    }
  ];

  const selectedCountryData = countries.find(c => c.code === selectedCountry);

  const handleNext = () => {
    if (currentStep === 1 && !selectedCountry) return;
    if (currentStep === 2 && !selectedPaymentMethod) return;
    
    if (currentStep < onboardingSteps.length - 1) {
      setIsProcessing(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsProcessing(false);
      }, 1500);
    }
  };

  const WelcomeStep = () => (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-24 h-24 bg-blue-500 rounded-full mx-auto flex items-center justify-center"
      >
        <Users className="h-12 w-12 text-white" />
      </motion.div>
      
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Sou seu Agente Onboarder
        </h3>
        <p className="text-gray-600">
          Especialista em adesão e configuração de serviços. Vou tornar sua experiência 
          simples, rápida e totalmente personalizada para seu perfil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center space-x-2 text-green-600">
          <Shield className="h-4 w-4" />
          <span>100% Seguro</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-600">
          <Zap className="h-4 w-4" />
          <span>Setup em 3 min</span>
        </div>
        <div className="flex items-center space-x-2 text-purple-600">
          <Star className="h-4 w-4" />
          <span>IA Personalizada</span>
        </div>
      </div>
    </div>
  );

  const LocationStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Globe className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <p className="text-gray-600">
          Selecione seu país para que eu possa adaptar a experiência às regulamentações 
          locais e métodos de pagamento mais populares.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {countries.map((country) => (
          <motion.button
            key={country.code}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCountry(country.code)}
            className={`p-4 border-2 rounded-lg text-left transition-all ${
              selectedCountry === country.code
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{country.flag}</span>
              <div>
                <h4 className="font-semibold text-gray-900">{country.name}</h4>
                <p className="text-sm text-gray-600">Moeda: {country.currency}</p>
                <p className="text-xs text-gray-500">
                  Métodos: {country.methods.join(', ')}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {selectedCountryData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4"
        >
          <div className="flex items-center space-x-2 text-green-800">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">
              Ótima escolha! {selectedCountryData.name} selecionado
            </span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Configurei automaticamente os métodos de pagamento locais e regulamentações LGPD/PCI.
          </p>
        </motion.div>
      )}
    </div>
  );

  const PaymentStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <CreditCard className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <p className="text-gray-600">
          Com base na sua localização ({selectedCountryData?.name}), 
          aqui estão os métodos de pagamento mais vantajosos:
        </p>
      </div>

      <div className="space-y-4">
        {selectedCountryData?.methods.map((method, index) => {
          const benefits = {
            'PIX': { speed: 'Instantâneo', fee: 'Sem taxa', cashback: '2% cashback' },
            'Cartão': { speed: '24h', fee: 'Taxa 2.9%', cashback: '1% cashback' },
            'Boleto': { speed: '1-3 dias', fee: 'R$ 3,50', cashback: 'Sem cashback' },
            'OXXO': { speed: '2-4h', fee: '$15 MXN', cashback: '1% desconto' },
            'SPEI': { speed: 'Instantâneo', fee: 'Sem taxa', cashback: '3% cashback' },
            'PSE': { speed: 'Instantâneo', fee: 'Sem taxa', cashback: '2% cashback' },
            'Transferencia': { speed: '1-2h', fee: '$200 ARS', cashback: '1% desconto' }
          };

          const benefit = benefits[method as keyof typeof benefits] || benefits['Cartão'];

          return (
            <motion.button
              key={method}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedPaymentMethod(method)}
              className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                selectedPaymentMethod === method
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{method}</h4>
                  <div className="flex space-x-4 text-sm text-gray-600 mt-1">
                    <span>⚡ {benefit.speed}</span>
                    <span>💰 {benefit.fee}</span>
                    <span>🎁 {benefit.cashback}</span>
                  </div>
                </div>
                {selectedPaymentMethod === method && (
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {selectedPaymentMethod && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-center space-x-2 text-blue-800">
            <Star className="h-5 w-5" />
            <span className="font-medium">
              Excelente! {selectedPaymentMethod} configurado como método principal
            </span>
          </div>
          <p className="text-sm text-blue-700 mt-1">
            Vou sempre sugerir este método primeiro, mas posso recomendar alternativas 
            quando for mais vantajoso para você.
          </p>
        </motion.div>
      )}
    </div>
  );

  const AccountsStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Banknote className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Conectar suas contas bancárias
        </h3>
        <p className="text-gray-600">
          Via Open Finance, vou acessar seus dados de forma segura para oferecer 
          insights personalizados e detectar oportunidades de economia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Nubank', 'Inter', 'Banco do Brasil', 'Itaú'].map((bank, index) => (
          <motion.div
            key={bank}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Banknote className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{bank}</h4>
                  <p className="text-sm text-gray-500">Conta encontrada</p>
                </div>
              </div>
              <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                Conectar
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Segurança Garantida</h4>
            <p className="text-sm text-yellow-700 mt-1">
              • Criptografia end-to-end<br/>
              • Conformidade LGPD e PCI-DSS<br/>
              • Você controla quais dados compartilhar<br/>
              • Pode revogar acesso a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const CompleteStep = () => (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center"
      >
        <CheckCircle className="h-12 w-12 text-white" />
      </motion.div>
      
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Configuração Concluída! 🎉
        </h3>
        <p className="text-gray-600">
          Seus 4 agentes de IA especializados estão ativos e prontos para trabalhar 
          como seus copilotos financeiros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-blue-600 mb-2">
            <Users className="h-5 w-5" />
            <span className="font-medium">Agente Onboarder</span>
          </div>
          <p className="text-sm text-blue-700">
            Configurado para {selectedCountryData?.name} com método preferencial {selectedPaymentMethod}
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-green-600 mb-2">
            <Shield className="h-5 w-5" />
            <span className="font-medium">Guardião Financeiro</span>
          </div>
          <p className="text-sm text-green-700">
            Monitorando 4 contas conectadas para detectar fraudes e otimizar gastos
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-purple-600 mb-2">
            <Star className="h-5 w-5" />
            <span className="font-medium">Life Planner</span>
          </div>
          <p className="text-sm text-purple-700">
            Pronto para ajudar você a criar e alcançar suas metas financeiras
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-yellow-600 mb-2">
            <Smartphone className="h-5 w-5" />
            <span className="font-medium">Agente Conciliador</span>
          </div>
          <p className="text-sm text-yellow-700">
            Disponível 24/7 via WhatsApp, app e web para suporte proativo
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-bemobi-primary"
      >
        Começar a usar agora!
      </motion.button>
    </div>
  );

  const renderStepContent = () => {
    switch (onboardingSteps[currentStep]?.component) {
      case 'welcome': return <WelcomeStep />;
      case 'location': return <LocationStep />;
      case 'payment': return <PaymentStep />;
      case 'accounts': return <AccountsStep />;
      case 'complete': return <CompleteStep />;
      default: return <WelcomeStep />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card-bemobi">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Agente Onboarder</h2>
              <p className="text-sm text-gray-500">Configuração Inteligente • MCPS + Grace + Smart Checkout</p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-500">Progresso</p>
            <p className="text-lg font-semibold text-gray-900">
              {currentStep + 1} de {onboardingSteps.length}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {onboardingSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index < currentStep ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < onboardingSteps.length - 1 && (
                  <div className={`w-20 h-1 mx-2 ${
                    index < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {onboardingSteps[currentStep]?.title}
            </h3>
            <p className="text-gray-600">
              {onboardingSteps[currentStep]?.subtitle}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentStep < onboardingSteps.length - 1 && (
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="btn-bemobi-secondary disabled:opacity-50"
            >
              Voltar
            </button>
            
            <button
              onClick={handleNext}
              disabled={
                isProcessing ||
                (currentStep === 1 && !selectedCountry) ||
                (currentStep === 2 && !selectedPaymentMethod)
              }
              className="btn-bemobi-primary disabled:opacity-50 flex items-center space-x-2"
            >
              {isProcessing ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Continuar</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingAgent;
