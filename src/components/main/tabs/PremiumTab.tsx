'use client';

import { useState } from 'react';
import { PREMIUM_GUIDES, QUIZ_DURATIONS, QUIZ_BUDGETS, QUIZ_PREFERENCES, TRAVEL_GOALS } from '@/lib/data';
import { PremiumGuide, QuizAnswer, QuizRecommendation } from '@/lib/types';
import { Crown, Check, ShoppingCart, Sparkles, ChevronRight, X } from 'lucide-react';

export default function PremiumTab() {
  const [view, setView] = useState<'guides' | 'quiz'>('guides');
  const [selectedGuide, setSelectedGuide] = useState<PremiumGuide | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer>({
    duration: '',
    budget: '',
    preference: '',
    goal: '',
  });
  const [recommendation, setRecommendation] = useState<QuizRecommendation | null>(null);

  const handleQuizSubmit = () => {
    // Lógica simplificada de recomendação
    let recommendedCountry = 'Malta';
    let programType = 'Intercâmbio de Inglês';
    let estimatedCost = 'R$ 25.000 - R$ 35.000';
    let justification = '';

    // Análise baseada no orçamento
    if (quizAnswers.budget === 'Até R$10.000') {
      recommendedCountry = 'Portugal';
      programType = 'Curso de curta duração';
      estimatedCost = 'R$ 8.000 - R$ 12.000';
      justification = 'Portugal oferece o melhor custo-benefício para orçamentos menores, com a vantagem do mesmo idioma e proximidade cultural. Você pode fazer um curso de 1-2 meses e ainda ter uma experiência europeia completa.';
    } else if (quizAnswers.budget === 'R$10.000 - R$20.000') {
      recommendedCountry = 'Malta';
      programType = 'Intercâmbio de Inglês (3-6 meses)';
      estimatedCost = 'R$ 15.000 - R$ 22.000';
      justification = 'Malta é perfeita para seu orçamento! Você consegue estudar inglês por 3-6 meses, trabalhar part-time para ajudar nos custos, e ainda aproveitar o clima mediterrâneo e a vida na Europa.';
    } else if (quizAnswers.budget === 'R$20.000 - R$40.000') {
      recommendedCountry = 'Irlanda';
      programType = 'Intercâmbio de Trabalho e Estudo';
      estimatedCost = 'R$ 28.000 - R$ 38.000';
      justification = 'A Irlanda é ideal para seu perfil! Com esse orçamento, você pode fazer um programa de 6-8 meses, trabalhar legalmente 20h/semana (40h nas férias) e ter uma experiência completa em um país desenvolvido com excelente qualidade de vida.';
    } else if (quizAnswers.budget === 'R$40.000 - R$60.000') {
      recommendedCountry = 'Canadá';
      programType = 'College ou Curso Profissionalizante';
      estimatedCost = 'R$ 45.000 - R$ 58.000';
      justification = 'Com esse investimento, o Canadá é sua melhor opção! Você pode fazer um curso de college de 1 ano, trabalhar durante o curso e ainda ter direito ao PGWP (permissão de trabalho pós-graduação), abrindo portas para imigração permanente.';
    } else {
      recommendedCountry = 'Austrália';
      programType = 'Curso Vocacional + Trabalho';
      estimatedCost = 'R$ 60.000 - R$ 80.000';
      justification = 'A Austrália oferece a melhor experiência para seu orçamento! Você pode fazer um curso vocacional de 1-2 anos, trabalhar 48h quinzenais, ter acesso a salários altos (AUD$25-30/hora) e ainda aproveitar praias paradisíacas e qualidade de vida excepcional.';
    }

    // Ajustes baseados na duração
    if (quizAnswers.duration === '1 mês') {
      programType = 'Curso intensivo de idiomas';
      justification += ' Para 1 mês, recomendamos focar em um curso intensivo para maximizar o aprendizado no curto período.';
    }

    // Ajustes baseados no objetivo
    if (quizAnswers.goal === 'Trabalhar') {
      if (recommendedCountry === 'Malta' || recommendedCountry === 'Irlanda') {
        justification += ' Esses países permitem trabalho part-time durante o intercâmbio, perfeito para seu objetivo!';
      }
    }

    setRecommendation({
      country: recommendedCountry,
      programType,
      estimatedCost,
      justification,
    });
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({
      duration: '',
      budget: '',
      preference: '',
      goal: '',
    });
    setRecommendation(null);
  };

  if (selectedGuide) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedGuide(null)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all"
        >
          <X className="w-5 h-5" />
          <span>Voltar</span>
        </button>

        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Crown className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Guia Premium: {selectedGuide.countryName}</h2>
              </div>
              <p className="text-amber-100 text-lg mb-4">
                Manual completo de adaptação e vida no país
              </p>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">R$ {selectedGuide.price.toFixed(2)}</span>
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg">
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  Comprar Agora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview do Conteúdo */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📍 Como Viver no País</h3>
            <ul className="space-y-2">
              {selectedGuide.content.living.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🛒 Onde Fazer Compras</h3>
            <div className="space-y-3">
              {selectedGuide.content.shopping.map((shop, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{shop.name}</h4>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">
                      {shop.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">📍 {shop.region}</p>
                  <p className="text-sm text-gray-700">💡 {shop.tips}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🚌 Transporte Público</h3>
            <div className="space-y-4">
              {selectedGuide.content.transport.map((transport, index) => (
                <div key={index} className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{transport.type}</h4>
                  <p className="text-sm text-gray-700 mb-3">{transport.howToUse}</p>
                  <div className="space-y-1">
                    {transport.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-sm text-gray-600">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎭 Passeios e Turismo</h3>
            <div className="space-y-3">
              {selectedGuide.content.tourism.map((tour, index) => (
                <div key={index} className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{tour.name}</h4>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        tour.worthIt
                          ? 'bg-green-200 text-green-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {tour.worthIt ? '✓ Vale a pena' : '✗ Evite'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{tour.description}</p>
                  {tour.estimatedCost && (
                    <p className="text-sm font-semibold text-purple-600">
                      💰 {tour.estimatedCost}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔧 Serviços do Dia a Dia</h3>
            <ul className="space-y-2">
              {selectedGuide.content.dailyServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'quiz') {
    if (recommendation) {
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-2">🎉 Sua Recomendação Personalizada</h2>
            <p className="text-green-100 text-lg">
              Baseado nas suas respostas, encontramos o intercâmbio perfeito para você!
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-green-500">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{recommendation.country}</h3>
              <p className="text-xl text-gray-600">{recommendation.programType}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">💰 Investimento Estimado</h4>
              <p className="text-2xl font-bold text-green-600">{recommendation.estimatedCost}</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">📝 Por que essa recomendação?</h4>
              <p className="text-gray-700 leading-relaxed">{recommendation.justification}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={resetQuiz}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Fazer Novamente
              </button>
              <button
                onClick={() => setView('guides')}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Ver Guias Premium
              </button>
            </div>
          </div>
        </div>
      );
    }

    const quizQuestions = [
      {
        question: 'Quanto tempo você tem disponível?',
        options: QUIZ_DURATIONS,
        key: 'duration' as keyof QuizAnswer,
      },
      {
        question: 'Qual seu orçamento total?',
        options: QUIZ_BUDGETS,
        key: 'budget' as keyof QuizAnswer,
      },
      {
        question: 'Qual sua preferência de destino?',
        options: QUIZ_PREFERENCES,
        key: 'preference' as keyof QuizAnswer,
      },
      {
        question: 'Qual seu objetivo principal?',
        options: TRAVEL_GOALS,
        key: 'goal' as keyof QuizAnswer,
      },
    ];

    const currentQuestion = quizQuestions[quizStep];

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <button
          onClick={() => {
            if (quizStep === 0) {
              setView('guides');
            } else {
              setQuizStep(quizStep - 1);
            }
          }}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all"
        >
          <X className="w-5 h-5" />
          <span>Voltar</span>
        </button>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-2">✨ Melhor Intercâmbio pra Mim</h2>
          <p className="text-purple-100 text-lg">
            Responda 4 perguntas e descubra o intercâmbio ideal para você
          </p>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Pergunta {quizStep + 1} de 4</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${((quizStep + 1) / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setQuizAnswers({ ...quizAnswers, [currentQuestion.key]: option });
                  if (quizStep < 3) {
                    setQuizStep(quizStep + 1);
                  } else {
                    handleQuizSubmit();
                  }
                }}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  quizAnswers[currentQuestion.key] === option
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{option}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Crown className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Conteúdo Premium</h2>
            </div>
            <p className="text-amber-100 text-lg mb-4">
              Guias completos e ferramentas exclusivas para sua jornada
            </p>
          </div>
        </div>
      </div>

      {/* Quiz CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white shadow-xl">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Melhor Intercâmbio pra Mim</h3>
            </div>
            <p className="text-purple-100 mb-4">
              Descubra qual intercâmbio é perfeito para seu perfil, orçamento e objetivos através do nosso quiz inteligente!
            </p>
            <button
              onClick={() => setView('quiz')}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all shadow-lg"
            >
              Fazer Quiz Agora
            </button>
          </div>
        </div>
      </div>

      {/* Premium Guides */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Guias por País</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PREMIUM_GUIDES.map((guide) => (
            <div
              key={guide.countryId}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Inter{guide.countryName}
                  </h4>
                  <p className="text-sm text-gray-600">Guia completo de adaptação</p>
                </div>
                <Crown className="w-8 h-8 text-amber-500" />
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Como viver no país</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Melhores mercados e compras</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Transporte público detalhado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Passeios e dicas locais</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-gray-900">
                  R$ {guide.price.toFixed(2)}
                </span>
                <button
                  onClick={() => setSelectedGuide(guide)}
                  className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-all"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
