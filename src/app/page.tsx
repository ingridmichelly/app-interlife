'use client';

import { useState, useEffect } from 'react';
import { User } from '@/lib/types';
import OnboardingFlow from '@/components/onboarding/OnboardingFlow';
import MainApp from '@/components/main/MainApp';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula verificação de usuário logado
    const storedUser = localStorage.getItem('interlife_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleOnboardingComplete = (userData: User) => {
    setUser(userData);
    localStorage.setItem('interlife_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('interlife_user');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user || !user.hasCompletedOnboarding) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  return <MainApp user={user} onLogout={handleLogout} />;
}
