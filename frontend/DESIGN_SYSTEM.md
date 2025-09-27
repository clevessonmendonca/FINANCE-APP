# 🎨 Bemobi Design System
## Design System Oficial baseado na identidade visual da Bemobi

Baseado na análise do site oficial da [Bemobi](https://bemobi.com/), este design system replica fielmente a identidade visual e padrões de interface da empresa.

---

## 🎨 **Paleta de Cores**

### Cores Principais
```css
--bemobi-primary: #4c6fff     /* Azul principal do gradiente */
--bemobi-secondary: #6366f1   /* Azul secundário */
--bemobi-accent: #8b5cf6      /* Roxo do gradiente */
```

### Gradientes Oficiais
```css
--bemobi-gradient: linear-gradient(135deg, #4c6fff 0%, #6366f1 50%, #8b5cf6 100%);
--bemobi-gradient-light: linear-gradient(135deg, rgba(76, 111, 255, 0.1) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);
```

### Cores de Estado
```css
--bemobi-success: #10b981    /* Verde para sucesso */
--bemobi-warning: #f59e0b    /* Amarelo para avisos */
--bemobi-error: #ef4444      /* Vermelho para erros */
--bemobi-info: #06b6d4       /* Azul claro para informações */
```

### Escala de Cinzas
```css
--bemobi-gray-50: #f8fafc    /* Muito claro */
--bemobi-gray-100: #f1f5f9   /* Background claro */
--bemobi-gray-200: #e2e8f0   /* Bordes sutis */
--bemobi-gray-300: #cbd5e1   /* Bordes normais */
--bemobi-gray-400: #94a3b8   /* Texto secundário */
--bemobi-gray-500: #64748b   /* Texto normal */
--bemobi-gray-600: #475569   /* Texto importante */
--bemobi-gray-700: #334155   /* Texto escuro */
--bemobi-gray-800: #1e293b   /* Muito escuro */
--bemobi-gray-900: #0f172a   /* Texto principal */
```

---

## 📝 **Tipografia**

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;
```

### Escala Tipográfica
- **xs**: 0.75rem (12px) - line-height: 1rem
- **sm**: 0.875rem (14px) - line-height: 1.25rem  
- **base**: 1rem (16px) - line-height: 1.5rem
- **lg**: 1.125rem (18px) - line-height: 1.75rem
- **xl**: 1.25rem (20px) - line-height: 1.75rem
- **2xl**: 1.5rem (24px) - line-height: 2rem
- **3xl**: 1.875rem (30px) - line-height: 2.25rem
- **4xl**: 2.25rem (36px) - line-height: 2.5rem
- **5xl**: 3rem (48px) - line-height: 1
- **6xl**: 3.75rem (60px) - line-height: 1

### Classes Utilitárias
```css
.text-bemobi-heading  /* Títulos principais - bold, cor escura */
.text-bemobi-body     /* Texto corpo - cor média, leading relaxed */
```

---

## 🔲 **Componentes Principais**

### Botões

#### Botão Primário
```css
.btn-bemobi-primary {
  background: var(--bemobi-gradient);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  box-shadow: 0 4px 6px -1px rgba(76, 111, 255, 0.1);
  transition: all 0.2s ease-in-out;
}

.btn-bemobi-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(76, 111, 255, 0.2);
}
```

#### Botão Secundário
```css
.btn-bemobi-secondary {
  background: transparent;
  color: var(--bemobi-primary);
  border: 2px solid var(--bemobi-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}

.btn-bemobi-secondary:hover {
  background: var(--bemobi-primary);
  color: white;
}
```

### Cards

#### Card Principal
```css
.card-bemobi {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(76, 111, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(76, 111, 255, 0.1);
  transition: all 0.3s ease;
}

.card-bemobi:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(76, 111, 255, 0.1);
}
```

#### Glass Card
```css
.glass-bemobi {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
}
```

### Inputs

#### Input Principal
```css
.input-bemobi {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--bemobi-gray-300);
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.input-bemobi:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 2px var(--bemobi-primary);
}
```

### Alertas

#### Alert de Sucesso
```css
.alert-bemobi-success {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 1rem;
  border-radius: 0.5rem;
}
```

#### Alert de Aviso
```css
.alert-bemobi-warning {
  background: #fffbeb;
  border: 1px solid #fed7aa;
  color: #92400e;
  padding: 1rem;
  border-radius: 0.5rem;
}
```

#### Alert de Erro
```css
.alert-bemobi-error {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
  padding: 1rem;
  border-radius: 0.5rem;
}
```

### Badges

#### Badge de Status
```css
.badge-success {
  background: #dcfce7;
  color: #166534;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-warning {
  background: #fef3c7;
  color: #92400e;
  /* ... mesmas propriedades */
}

.badge-error {
  background: #fee2e2;
  color: #991b1b;
  /* ... mesmas propriedades */
}
```

---

## 🎭 **Sombras e Elevações**

### Sombras Temáticas da Bemobi
```css
.shadow-bemobi-sm    /* 0 1px 2px 0 rgba(76, 111, 255, 0.05) */
.shadow-bemobi       /* 0 4px 6px -1px rgba(76, 111, 255, 0.1) */
.shadow-bemobi-lg    /* 0 10px 15px -3px rgba(76, 111, 255, 0.1) */
.shadow-bemobi-xl    /* 0 20px 25px -5px rgba(76, 111, 255, 0.1) */
```

---

## 🎬 **Animações**

### Transições Suaves
```css
transition: all 0.2s ease-in-out;  /* Para interações rápidas */
transition: all 0.3s ease;         /* Para cards e componentes */
```

### Animações Personalizadas
```css
.animate-fade-in-up   /* Fade + slide up */
.animate-pulse-slow   /* Pulse lento para status */
.animate-gradient     /* Gradiente animado */
```

### Keyframes Customizados
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## 📐 **Espaçamento e Grid**

### Sistema de Espaçamento
- **Base**: 0.25rem (4px)
- **Multiplicadores**: 1x, 2x, 3x, 4x, 5x, 6x, 8x, 10x, 12x, 16x, 20x, 24x
- **Customizados**: 18 (4.5rem), 88 (22rem), 128 (32rem)

### Border Radius
```css
.rounded-none    /* 0 */
.rounded-sm      /* 0.125rem */
.rounded         /* 0.375rem - padrão */
.rounded-md      /* 0.5rem */
.rounded-lg      /* 0.75rem - botões */
.rounded-xl      /* 1rem - cards */
.rounded-2xl     /* 1.5rem - cards grandes */
.rounded-3xl     /* 2rem - elementos especiais */
```

---

## 🎨 **Componentes Especiais**

### Hero Section
```css
.hero-bemobi {
  background: linear-gradient(135deg, #f8fafc 0%, rgba(76, 111, 255, 0.05) 100%);
  position: relative;
  overflow: hidden;
}
```

### Floating Action Button
```css
.fab-bemobi {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  background: var(--bemobi-gradient);
  color: white;
  box-shadow: 0 10px 15px -3px rgba(76, 111, 255, 0.1);
  transition: all 0.3s ease;
}

.fab-bemobi:hover {
  transform: scale(1.1);
  box-shadow: 0 20px 25px -5px rgba(76, 111, 255, 0.3);
}
```

### Loading States
```css
.loading-shimmer-bemobi {
  animation: shimmer 1.2s ease-in-out infinite;
  background: linear-gradient(
    to right,
    var(--bemobi-gray-100) 8%,
    var(--bemobi-gray-200) 18%,
    var(--bemobi-gray-100) 33%
  );
  background-size: 800px 104px;
}
```

---

## 🔧 **Implementação**

### Tailwind CSS Classes
Todas as cores e componentes estão disponíveis como classes Tailwind:

```html
<!-- Botão primário -->
<button class="btn-bemobi-primary">
  Clique aqui
</button>

<!-- Card com hover -->
<div class="card-bemobi">
  Conteúdo do card
</div>

<!-- Input com foco -->
<input class="input-bemobi" placeholder="Digite aqui" />

<!-- Badge de sucesso -->
<span class="badge-success">Concluído</span>

<!-- Gradiente de fundo -->
<div class="gradient-bemobi text-white p-6 rounded-xl">
  Área com gradiente
</div>
```

### CSS Variables
Use as variáveis CSS em qualquer lugar:

```css
.meu-componente {
  background: var(--bemobi-gradient);
  color: var(--bemobi-gray-900);
  box-shadow: 0 4px 6px rgba(76, 111, 255, 0.1);
}
```

---

## 🎯 **Boas Práticas**

### Acessibilidade
- Contraste mínimo de 4.5:1 para texto normal
- Contraste mínimo de 3:1 para texto grande
- Estados de foco visíveis em todos os elementos interativos
- Texto alternativo em imagens e ícones

### Performance
- Use `transform` e `opacity` para animações suaves
- Prefira CSS variables para temas dinâmicos
- Minimize repaints com `will-change` quando necessário

### Consistência
- Sempre use as classes do design system
- Mantenha espaçamentos consistentes (múltiplos de 4px)
- Use a tipografia definida para hierarquia visual
- Aplique sombras de forma consistente por tipo de componente

---

## 🚀 **Exemplo de Uso Completo**

```html
<div class="hero-bemobi">
  <div class="container mx-auto px-6 py-12">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-bemobi-gray-900 mb-4">
        Bem-vindo ao <span class="text-bemobi-primary">Guardian</span>
      </h1>
      <p class="text-lg text-bemobi-gray-600 max-w-2xl mx-auto">
        Seu agente de IA proativo para segurança financeira
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card-bemobi text-center">
        <div class="w-12 h-12 gradient-bemobi rounded-lg mx-auto mb-4 flex items-center justify-center">
          <svg class="w-6 h-6 text-white">...</svg>
        </div>
        <h3 class="text-lg font-semibold text-bemobi-gray-900 mb-2">
          Proteção 24/7
        </h3>
        <p class="text-bemobi-gray-600">
          Monitoramento contínuo contra fraudes
        </p>
      </div>
      
      <!-- Mais cards... -->
    </div>
    
    <div class="text-center mt-8">
      <button class="btn-bemobi-primary mr-4">
        Começar Agora
      </button>
      <button class="btn-bemobi-secondary">
        Saber Mais
      </button>
    </div>
  </div>
</div>
```

Este design system garante que toda a aplicação mantenha a identidade visual consistente e profissional da Bemobi, proporcionando uma experiência de usuário coesa e reconhecível.
