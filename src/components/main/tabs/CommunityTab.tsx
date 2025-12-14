'use client';

import { useState, useEffect } from 'react';
import { User, ChatMessage } from '@/lib/types';
import { COUNTRIES } from '@/lib/data';
import { Send, Users, MessageCircle } from 'lucide-react';

interface CommunityTabProps {
  user: User;
}

export default function CommunityTab({ user }: CommunityTabProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>('geral');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');

  // Simula mensagens iniciais
  useEffect(() => {
    const initialMessages: ChatMessage[] = [
      {
        id: '1',
        userId: 'user1',
        userName: 'Maria Silva',
        message: 'Alguém já morou em Sliema, Malta? Como é a região?',
        timestamp: new Date(Date.now() - 3600000),
        countryTopic: 'malta',
      },
      {
        id: '2',
        userId: 'user2',
        userName: 'João Santos',
        message: 'Morei lá por 6 meses! É ótimo, perto de tudo e tem muitos brasileiros.',
        timestamp: new Date(Date.now() - 3000000),
        countryTopic: 'malta',
      },
      {
        id: '3',
        userId: 'user3',
        userName: 'Ana Costa',
        message: 'Qual a melhor escola de inglês em Dublin?',
        timestamp: new Date(Date.now() - 7200000),
        countryTopic: 'ireland',
      },
      {
        id: '4',
        userId: 'user4',
        userName: 'Pedro Lima',
        message: 'Recomendo a Emerald! Professores excelentes e localização ótima.',
        timestamp: new Date(Date.now() - 6000000),
        countryTopic: 'ireland',
      },
      {
        id: '5',
        userId: 'user5',
        userName: 'Carla Mendes',
        message: 'Alguém tem dicas de como economizar no Canadá?',
        timestamp: new Date(Date.now() - 10800000),
        countryTopic: 'canada',
      },
    ];
    setMessages(initialMessages);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      userId: user.id,
      userName: user.email.split('@')[0],
      message: newMessage,
      timestamp: new Date(),
      countryTopic: selectedTopic !== 'geral' ? selectedTopic : undefined,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const filteredMessages = messages.filter((msg) => {
    if (selectedTopic === 'geral') return true;
    return msg.countryTopic === selectedTopic;
  });

  const topics = [
    { id: 'geral', name: 'Geral', icon: '💬' },
    ...COUNTRIES.map((country) => ({
      id: country.id,
      name: country.name,
      icon: country.flag,
    })),
  ];

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000);

    if (hours > 24) {
      return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    } else if (hours > 0) {
      return `${hours}h atrás`;
    } else if (minutes > 0) {
      return `${minutes}min atrás`;
    } else {
      return 'Agora';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Comunidade InterLife</h2>
            </div>
            <p className="text-green-100 text-lg">
              Troque experiências com outros intercambistas
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-sm text-green-100">Usuários online</p>
            <p className="text-2xl font-bold">127</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Topics Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Tópicos
            </h3>
            <div className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    selectedTopic === topic.id
                      ? 'bg-green-50 text-green-600 border-2 border-green-600'
                      : 'text-gray-600 hover:bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <span className="text-2xl">{topic.icon}</span>
                  <span className="text-sm">{topic.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">
                  {topics.find((t) => t.id === selectedTopic)?.icon}
                </span>
                {topics.find((t) => t.id === selectedTopic)?.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {filteredMessages.length} mensagens
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {filteredMessages.length === 0 ? (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Nenhuma mensagem ainda</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Seja o primeiro a iniciar a conversa!
                  </p>
                </div>
              ) : (
                filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${
                      msg.userId === user.id ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.userId === user.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-300 text-gray-700'
                      }`}
                    >
                      {msg.userName.charAt(0).toUpperCase()}
                    </div>
                    <div
                      className={`flex-1 max-w-md ${
                        msg.userId === user.id ? 'text-right' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {msg.userId !== user.id && (
                          <>
                            <span className="font-semibold text-sm text-gray-900">
                              {msg.userName}
                            </span>
                            <span className="text-xs text-gray-400">•</span>
                          </>
                        )}
                        <span className="text-xs text-gray-400">
                          {formatTime(msg.timestamp)}
                        </span>
                      </div>
                      <div
                        className={`inline-block px-4 py-3 rounded-2xl ${
                          msg.userId === user.id
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Message Input */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-gray-200 p-4 bg-gray-50"
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span className="hidden sm:inline">Enviar</span>
                </button>
              </div>
            </form>
          </div>

          {/* Community Guidelines */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">📋 Diretrizes da Comunidade</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Seja respeitoso e educado com todos os membros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Compartilhe experiências reais e úteis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Não compartilhe informações pessoais sensíveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Evite spam e propaganda não solicitada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
