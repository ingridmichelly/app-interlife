'use client';

import { useState } from 'react';
import { COUNTRIES } from '@/lib/data';
import { Country } from '@/lib/types';
import { Search, FileText, CreditCard, Home as HomeIcon, GraduationCap, Plane, ChevronDown, ChevronUp, X } from 'lucide-react';

export default function CountriesTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>(['documentation']);

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  if (selectedCountry) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
          <button
            onClick={() => setSelectedCountry(null)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-all"
          >
            <X className="w-5 h-5" />
            <span>Voltar para lista</span>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-7xl">{selectedCountry.flag}</span>
            <div>
              <h2 className="text-4xl font-bold mb-2">{selectedCountry.name}</h2>
              <p className="text-blue-100 text-lg">{selectedCountry.description}</p>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Custos Iniciais</h3>
            <p className="text-2xl font-bold text-blue-600">{selectedCountry.costs.initialCosts}</p>
            <p className="text-sm text-gray-500 mt-1">Investimento inicial estimado</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Custo de Vida</h3>
            <p className="text-2xl font-bold text-green-600">{selectedCountry.costs.monthlyLiving}</p>
            <p className="text-sm text-gray-500 mt-1">Por mês</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Moeda</h3>
            <p className="text-2xl font-bold text-purple-600">{selectedCountry.costs.currency}</p>
            <p className="text-sm text-gray-500 mt-1">Moeda local</p>
          </div>
        </div>

        {/* Documentation */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection('documentation')}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Documentação Necessária</h3>
            </div>
            {expandedSections.includes('documentation') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {expandedSections.includes('documentation') && (
            <div className="px-6 pb-6 space-y-3">
              {selectedCountry.documentation.map((doc, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visa Types */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection('visa')}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Tipos de Visto</h3>
            </div>
            {expandedSections.includes('visa') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {expandedSections.includes('visa') && (
            <div className="px-6 pb-6 space-y-4">
              {selectedCountry.visaTypes.map((visa, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{visa.name}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        visa.required
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {visa.required ? 'Obrigatório' : 'Opcional'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{visa.description}</p>
                  {visa.cost && (
                    <p className="text-sm font-semibold text-blue-600">Custo: {visa.cost}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Schools */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection('schools')}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Opções de Escolas</h3>
            </div>
            {expandedSections.includes('schools') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {expandedSections.includes('schools') && (
            <div className="px-6 pb-6 space-y-3">
              {selectedCountry.schools.map((school, index) => (
                <div key={index} className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">{school.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{school.type}</p>
                  <p className="text-sm font-semibold text-purple-600">{school.priceRange}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Accommodations */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection('accommodation')}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <HomeIcon className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Opções de Acomodação</h3>
            </div>
            {expandedSections.includes('accommodation') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {expandedSections.includes('accommodation') && (
            <div className="px-6 pb-6 space-y-3">
              {selectedCountry.accommodations.map((acc, index) => (
                <div key={index} className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">{acc.type}</h4>
                  <p className="text-sm text-gray-600 mb-2">{acc.description}</p>
                  <p className="text-sm font-semibold text-orange-600">{acc.priceRange}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Flight Info */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection('flight')}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <Plane className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Informações sobre Passagem Aérea</h3>
            </div>
            {expandedSections.includes('flight') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {expandedSections.includes('flight') && (
            <div className="px-6 pb-6">
              <p className="text-gray-700 p-4 bg-blue-50 rounded-lg">{selectedCountry.flightInfo}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-2">Explore Destinos</h2>
        <p className="text-blue-100 text-lg">
          Informações completas sobre documentação, custos e muito mais
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar país..."
          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
        />
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((country) => (
          <div
            key={country.id}
            onClick={() => setSelectedCountry(country)}
            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-7xl group-hover:scale-110 transition-transform">{country.flag}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{country.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm">
                  <p className="text-gray-500">A partir de</p>
                  <p className="font-bold text-blue-600">{country.costs.monthlyLiving}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all group-hover:scale-105">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCountries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum país encontrado</p>
        </div>
      )}
    </div>
  );
}
