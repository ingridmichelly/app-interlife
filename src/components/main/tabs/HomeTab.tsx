'use client';

import { User } from '@/lib/types';
import { COUNTRIES } from '@/lib/data';
import { Plane, Target, Calendar, TrendingUp, Globe, Sparkles } from 'lucide-react';

interface HomeTabProps {
  user: User;
}

export default function HomeTab({ user }: HomeTabProps) {
  const recommendedCountries = COUNTRIES.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Bem-vindo ao InterLife! 🎉</h2>
            <p className="text-blue-100 text-lg mb-4">
              Seu guia completo para planejar o intercâmbio dos sonhos
            </p>
            {user.preferences?.travelGoal && (
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Target className="w-5 h-5" />
                <span>Objetivo: {user.preferences.travelGoal}</span>
              </div>
            )}
          </div>
          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Plane className="w-12 h-12" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Países</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{COUNTRIES.length}</p>
          <p className="text-sm text-gray-500 mt-1">Destinos disponíveis</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Guias Premium</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">4</p>
          <p className="text-sm text-gray-500 mt-1">Guias completos</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Economia</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">30%</p>
          <p className="text-sm text-gray-500 mt-1">Média de economia</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Planejamento</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">100%</p>
          <p className="text-sm text-gray-500 mt-1">Suporte completo</p>
        </div>
      </div>

      {/* Personalized Recommendations */}
      {user.preferences?.country && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Recomendação Personalizada
              </h3>
              <p className="text-gray-700 mb-3">
                Baseado no seu interesse em <strong>{user.preferences.country}</strong>, 
                preparamos informações completas sobre este destino na aba "Países".
              </p>
              <button className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-all shadow-md hover:shadow-lg">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Featured Countries */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Destinos em Destaque</h3>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Ver todos →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedCountries.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-7xl">{country.flag}</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {country.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <p className="text-gray-500">Custo de vida</p>
                    <p className="font-semibold text-gray-900">{country.costs.monthlyLiving}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all group-hover:scale-105">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold mb-3">
            Descubra o intercâmbio perfeito para você! ✨
          </h3>
          <p className="text-purple-100 mb-6 text-lg">
            Faça nosso quiz inteligente e receba uma recomendação personalizada baseada no seu perfil, 
            orçamento e objetivos. Disponível na versão Premium!
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Fazer Quiz Agora
          </button>
        </div>
      </div>
    </div>
  );
}
