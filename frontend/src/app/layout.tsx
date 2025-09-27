import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bemobi Rewards AI - Hackathon 2025',
  description: 'Plataforma white-label com IA para gamificação de pagamentos recorrentes',
  keywords: ['hackathon', 'bemobi', 'ai', 'payments', 'gamification', 'rewards'],
  authors: [{ name: 'Team Hackathon Bemobi 2025' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
