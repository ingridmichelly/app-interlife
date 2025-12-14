import { Country, PremiumGuide } from './types';

export const COUNTRIES: Country[] = [
  {
    id: 'malta',
    name: 'Malta',
    flag: '🇲🇹',
    description: 'Ilha no Mediterrâneo, inglês como idioma oficial, clima agradável e custo acessível.',
    documentation: [
      'Passaporte válido por pelo menos 6 meses',
      'Comprovante de matrícula em escola',
      'Comprovante financeiro (€48 por dia)',
      'Seguro saúde internacional',
    ],
    visaTypes: [
      {
        name: 'Visto de Estudante',
        required: true,
        description: 'Necessário para cursos acima de 90 dias',
        cost: '€66',
      },
      {
        name: 'Visto de Turista',
        required: false,
        description: 'Brasileiros podem ficar até 90 dias sem visto',
      },
    ],
    costs: {
      initialCosts: '€3.000 - €5.000',
      monthlyLiving: '€800 - €1.200',
      currency: 'EUR',
    },
    schools: [
      { name: 'EC Malta', type: 'Inglês Geral', priceRange: '€200-€400/semana' },
      { name: 'ESE Malta', type: 'Inglês + Trabalho', priceRange: '€250-€450/semana' },
      { name: 'IELS', type: 'Preparatório IELTS', priceRange: '€300-€500/semana' },
    ],
    accommodations: [
      { type: 'Homestay', priceRange: '€600-€900/mês', description: 'Casa de família maltesa' },
      { type: 'Apartamento Compartilhado', priceRange: '€400-€700/mês', description: 'Quarto em flat com outros estudantes' },
      { type: 'Residência Estudantil', priceRange: '€800-€1.200/mês', description: 'Acomodação da escola' },
    ],
    flightInfo: 'Voos diretos de São Paulo custam entre R$3.500 - R$6.000 (ida e volta). Melhor época: março a junho.',
  },
  {
    id: 'ireland',
    name: 'Irlanda',
    flag: '🇮🇪',
    description: 'País europeu com permissão de trabalho para estudantes, cultura rica e paisagens incríveis.',
    documentation: [
      'Passaporte válido',
      'Carta de aceitação da escola (mínimo 25 semanas)',
      'Comprovante financeiro (€4.200 + curso + seguro)',
      'Seguro saúde obrigatório',
    ],
    visaTypes: [
      {
        name: 'Stamp 2 (Estudante)',
        required: true,
        description: 'Permite estudar e trabalhar 20h/semana (40h nas férias)',
        cost: '€300',
      },
    ],
    costs: {
      initialCosts: '€7.000 - €10.000',
      monthlyLiving: '€1.200 - €1.800',
      currency: 'EUR',
    },
    schools: [
      { name: 'Emerald Cultural Institute', type: 'Inglês Geral', priceRange: '€3.000-€4.500 (25 semanas)' },
      { name: 'Atlas Language School', type: 'Inglês + Trabalho', priceRange: '€2.800-€4.000 (25 semanas)' },
      { name: 'Horner School', type: 'Business English', priceRange: '€3.500-€5.000 (25 semanas)' },
    ],
    accommodations: [
      { type: 'Homestay', priceRange: '€800-€1.200/mês', description: 'Casa de família irlandesa' },
      { type: 'Apartamento Compartilhado', priceRange: '€600-€1.000/mês', description: 'Quarto em flat' },
      { type: 'Residência Estudantil', priceRange: '€1.000-€1.500/mês', description: 'Acomodação próxima à escola' },
    ],
    flightInfo: 'Voos com escala custam entre R$4.000 - R$7.000 (ida e volta). Melhor época: setembro a novembro.',
  },
  {
    id: 'canada',
    name: 'Canadá',
    flag: '🇨🇦',
    description: 'País multicultural com excelente qualidade de vida, educação de ponta e oportunidades de trabalho.',
    documentation: [
      'Passaporte válido',
      'Carta de aceitação da escola (LOA)',
      'Comprovante financeiro (CAD$10.000 + curso)',
      'Exame médico',
      'Certificado de antecedentes criminais',
    ],
    visaTypes: [
      {
        name: 'Study Permit',
        required: true,
        description: 'Permite estudar em cursos acima de 6 meses',
        cost: 'CAD$150',
      },
      {
        name: 'Work Permit (PGWP)',
        required: false,
        description: 'Permissão de trabalho pós-graduação para cursos de college/universidade',
      },
    ],
    costs: {
      initialCosts: 'CAD$15.000 - CAD$25.000',
      monthlyLiving: 'CAD$1.500 - CAD$2.500',
      currency: 'CAD',
    },
    schools: [
      { name: 'ILAC', type: 'Inglês Geral', priceRange: 'CAD$1.400-€2.000/mês' },
      { name: 'ILSC', type: 'Inglês + Trabalho', priceRange: 'CAD$1.500-€2.200/mês' },
      { name: 'Seneca College', type: 'College (Diploma)', priceRange: 'CAD$15.000-€20.000/ano' },
    ],
    accommodations: [
      { type: 'Homestay', priceRange: 'CAD$900-€1.400/mês', description: 'Casa de família canadense' },
      { type: 'Apartamento Compartilhado', priceRange: 'CAD$700-€1.200/mês', description: 'Quarto em flat' },
      { type: 'Residência Estudantil', priceRange: 'CAD$1.200-€1.800/mês', description: 'On-campus housing' },
    ],
    flightInfo: 'Voos diretos de São Paulo/Rio custam entre R$3.000 - R$6.000 (ida e volta). Melhor época: maio a setembro.',
  },
  {
    id: 'australia',
    name: 'Austrália',
    flag: '🇦🇺',
    description: 'Destino dos sonhos com praias paradisíacas, vida selvagem única e excelente qualidade de vida.',
    documentation: [
      'Passaporte válido',
      'CoE (Confirmation of Enrolment)',
      'Comprovante financeiro (AUD$24.505/ano)',
      'Seguro OSHC obrigatório',
      'Exame médico e raio-X',
    ],
    visaTypes: [
      {
        name: 'Student Visa (subclass 500)',
        required: true,
        description: 'Permite estudar e trabalhar 48h quinzenais durante o curso',
        cost: 'AUD$710',
      },
    ],
    costs: {
      initialCosts: 'AUD$10.000 - AUD$15.000',
      monthlyLiving: 'AUD$2.000 - AUD$3.000',
      currency: 'AUD',
    },
    schools: [
      { name: 'Navitas English', type: 'Inglês Geral', priceRange: 'AUD$350-€450/semana' },
      { name: 'ILSC Sydney', type: 'Inglês + Trabalho', priceRange: 'AUD$380-€480/semana' },
      { name: 'TAFE NSW', type: 'Cursos Vocacionais', priceRange: 'AUD$8.000-€15.000/ano' },
    ],
    accommodations: [
      { type: 'Homestay', priceRange: 'AUD$300-€400/semana', description: 'Casa de família australiana' },
      { type: 'Apartamento Compartilhado', priceRange: 'AUD$200-€350/semana', description: 'Quarto em sharehouse' },
      { type: 'Residência Estudantil', priceRange: 'AUD$350-€500/semana', description: 'Student accommodation' },
    ],
    flightInfo: 'Voos com escala custam entre R$5.000 - R$9.000 (ida e volta). Melhor época: março a maio.',
  },
  {
    id: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    description: 'Mesmo idioma, cultura rica, custo de vida acessível e porta de entrada para a Europa.',
    documentation: [
      'Passaporte válido',
      'Comprovante de matrícula',
      'Comprovante financeiro (€7.980/ano)',
      'Seguro saúde PB4 ou privado',
      'Comprovante de alojamento',
    ],
    visaTypes: [
      {
        name: 'Visto de Estudante (D4)',
        required: true,
        description: 'Para cursos acima de 90 dias',
        cost: '€90',
      },
      {
        name: 'Autorização de Residência',
        required: true,
        description: 'Solicitada após chegada em Portugal',
        cost: '€170',
      },
    ],
    costs: {
      initialCosts: '€4.000 - €7.000',
      monthlyLiving: '€700 - €1.200',
      currency: 'EUR',
    },
    schools: [
      { name: 'Universidade de Lisboa', type: 'Graduação/Mestrado', priceRange: '€1.000-€7.000/ano' },
      { name: 'CIAL Lisboa', type: 'Português', priceRange: '€200-€400/semana' },
      { name: 'ISCTE', type: 'Business School', priceRange: '€3.000-€8.000/ano' },
    ],
    accommodations: [
      { type: 'Quarto em Apartamento', priceRange: '€300-€600/mês', description: 'Quarto individual em flat compartilhado' },
      { type: 'Residência Universitária', priceRange: '€250-€500/mês', description: 'Residência da universidade' },
      { type: 'Estúdio', priceRange: '€600-€1.000/mês', description: 'Apartamento completo pequeno' },
    ],
    flightInfo: 'Voos diretos de São Paulo custam entre R$2.500 - R$5.000 (ida e volta). Melhor época: abril a junho.',
  },
];

export const PREMIUM_GUIDES: PremiumGuide[] = [
  {
    countryId: 'malta',
    countryName: 'Malta',
    price: 49.90,
    content: {
      living: [
        'Como abrir conta bancária em Malta',
        'Registro no JobsPlus para trabalhar legalmente',
        'Melhores bairros para morar (Sliema, St. Julian\'s, Gzira)',
        'Como funciona o sistema de saúde público',
        'Aplicativos essenciais (Bolt, Tallinja, Wolt)',
      ],
      shopping: [
        { name: 'Lidl', type: 'Supermercado', region: 'Várias', tips: 'Mais barato, ótimo custo-benefício' },
        { name: 'Pavi', type: 'Supermercado', region: 'Sliema, Gzira', tips: 'Preços médios, boa variedade' },
        { name: 'Greens', type: 'Supermercado', region: 'St. Julian\'s', tips: 'Produtos frescos e orgânicos' },
        { name: 'Wembley Store', type: 'Loja de Departamento', region: 'Várias', tips: 'Utensílios domésticos baratos' },
      ],
      transport: [
        {
          type: 'Ônibus',
          howToUse: 'Compre o cartão Tallinja Card (€15 inicial + créditos). Passe custa €1.50 no verão e €2 no inverno.',
          tips: [
            'Baixe o app Tallinja para ver horários em tempo real',
            'Ônibus noturnos funcionam até 2h da manhã',
            'Linhas principais: 13, 14, 21, 31, 41',
          ],
        },
        {
          type: 'Bolt/eCabs',
          howToUse: 'Apps de transporte. Bolt é mais barato, eCabs mais confiável.',
          tips: [
            'Corridas custam entre €8-€15 em média',
            'Evite horários de pico (8h-9h e 17h-19h)',
            'Sempre confirme a placa do carro',
          ],
        },
      ],
      tourism: [
        { name: 'Valletta', worthIt: true, description: 'Capital histórica, patrimônio da UNESCO', estimatedCost: 'Grátis' },
        { name: 'Blue Lagoon (Comino)', worthIt: true, description: 'Águas cristalinas paradisíacas', estimatedCost: '€25-€40 (ferry)' },
        { name: 'Mdina', worthIt: true, description: 'Cidade medieval silenciosa', estimatedCost: 'Grátis' },
        { name: 'Gozo Island', worthIt: true, description: 'Ilha vizinha com praias e natureza', estimatedCost: '€15-€30' },
        { name: 'Paceville (vida noturna)', worthIt: false, description: 'Área de festas, pode ser muito turístico', estimatedCost: '€20-€50' },
      ],
      dailyServices: [
        'Melhor operadora de celular: GO ou Vodafone (€10-€20/mês)',
        'Internet residencial: Melita ou GO (€25-€40/mês)',
        'Lavanderia: €5-€8 por máquina (lavanderias self-service)',
        'Correios: Malta Post (envios internacionais €10-€30)',
      ],
    },
  },
  {
    countryId: 'ireland',
    countryName: 'Irlanda',
    price: 59.90,
    content: {
      living: [
        'Como obter o PPS Number (essencial para trabalhar)',
        'Abertura de conta bancária (AIB, Bank of Ireland, Revolut)',
        'Registro no GNIB/IRP (imigração)',
        'Melhores áreas para morar em Dublin (D1, D2, D7, D8)',
        'Sistema de saúde: GP (médico de família) e hospitais públicos',
      ],
      shopping: [
        { name: 'Lidl', type: 'Supermercado', region: 'Várias', tips: 'Mais barato, ótima qualidade' },
        { name: 'Tesco', type: 'Supermercado', region: 'Várias', tips: 'Preços médios, grande variedade' },
        { name: 'Aldi', type: 'Supermercado', region: 'Várias', tips: 'Muito barato, produtos próprios' },
        { name: 'Dunnes Stores', type: 'Supermercado', region: 'Várias', tips: 'Produtos irlandeses, roupas também' },
        { name: 'Penneys (Primark)', type: 'Roupas', region: 'Centro', tips: 'Roupas baratas e da moda' },
      ],
      transport: [
        {
          type: 'Leap Card',
          howToUse: 'Cartão recarregável para ônibus, tram e trem. Compre em lojas Spar, Centra ou estações.',
          tips: [
            'Ônibus: €2.15 por viagem com Leap Card',
            'Tram (Luas): €2.10-€3.30 dependendo da zona',
            'Baixe o app TFI Live para horários',
          ],
        },
        {
          type: 'Dublin Bikes',
          howToUse: 'Sistema de bicicletas compartilhadas. €20/ano ou €5 por 3 dias.',
          tips: [
            'Primeiros 30 minutos são grátis',
            'Estações por toda Dublin',
            'Ótimo para trajetos curtos',
          ],
        },
      ],
      tourism: [
        { name: 'Cliffs of Moher', worthIt: true, description: 'Falésias impressionantes na costa oeste', estimatedCost: '€40-€60 (tour)' },
        { name: 'Temple Bar', worthIt: false, description: 'Área turística cara, evite para economizar', estimatedCost: '€7-€9 por pint' },
        { name: 'Guinness Storehouse', worthIt: true, description: 'Experiência da cerveja Guinness', estimatedCost: '€26' },
        { name: 'Galway', worthIt: true, description: 'Cidade costeira charmosa', estimatedCost: '€20-€30 (transporte)' },
        { name: 'Phoenix Park', worthIt: true, description: 'Maior parque urbano da Europa', estimatedCost: 'Grátis' },
      ],
      dailyServices: [
        'Operadoras: Three, Vodafone, Eir (€20-€30/mês)',
        'Internet: Virgin Media, Sky, Eir (€40-€60/mês)',
        'Lavanderia: €6-€10 por máquina',
        'An Post (correios): envios internacionais €15-€40',
      ],
    },
  },
  {
    countryId: 'canada',
    countryName: 'Canadá',
    price: 69.90,
    content: {
      living: [
        'Como obter o SIN (Social Insurance Number)',
        'Abertura de conta bancária (TD, RBC, Scotiabank)',
        'Sistema de saúde provincial (OHIP em Ontario)',
        'Melhores bairros em Toronto (Downtown, North York, Scarborough)',
        'Como funciona o sistema de crédito canadense',
      ],
      shopping: [
        { name: 'No Frills', type: 'Supermercado', region: 'Várias', tips: 'Mais barato, marca própria' },
        { name: 'FreshCo', type: 'Supermercado', region: 'Várias', tips: 'Preços baixos, produtos frescos' },
        { name: 'Walmart', type: 'Supermercado', region: 'Várias', tips: 'Tudo em um lugar, preços competitivos' },
        { name: 'Dollarama', type: 'Loja de $1', region: 'Várias', tips: 'Utensílios e produtos por CAD$1-$4' },
        { name: 'Winners', type: 'Roupas', region: 'Várias', tips: 'Roupas de marca com desconto' },
      ],
      transport: [
        {
          type: 'TTC (Toronto)',
          howToUse: 'Sistema de metrô, ônibus e streetcar. Compre Presto Card (recarregável).',
          tips: [
            'Tarifa única: CAD$3.35 com Presto',
            'Passe mensal: CAD$156',
            'Baixe o app TTC para rotas e horários',
          ],
        },
        {
          type: 'GO Transit',
          howToUse: 'Trens e ônibus regionais. Use Presto Card.',
          tips: [
            'Conecta Toronto com cidades vizinhas',
            'Preços variam por distância',
            'Desconto para estudantes',
          ],
        },
      ],
      tourism: [
        { name: 'Niagara Falls', worthIt: true, description: 'Cataratas impressionantes', estimatedCost: 'CAD$20-$40 (transporte)' },
        { name: 'CN Tower', worthIt: false, description: 'Vista bonita mas cara', estimatedCost: 'CAD$40-$50' },
        { name: 'Toronto Islands', worthIt: true, description: 'Ilhas com praias e parques', estimatedCost: 'CAD$9 (ferry)' },
        { name: 'Casa Loma', worthIt: true, description: 'Castelo histórico', estimatedCost: 'CAD$30' },
        { name: 'Distillery District', worthIt: true, description: 'Área histórica com cafés e arte', estimatedCost: 'Grátis' },
      ],
      dailyServices: [
        'Operadoras: Fido, Koodo, Public Mobile (CAD$35-$60/mês)',
        'Internet: Rogers, Bell, TekSavvy (CAD$50-$80/mês)',
        'Lavanderia: CAD$3-$5 por máquina',
        'Canada Post: envios internacionais CAD$20-$60',
      ],
    },
  },
];

export const TRAVEL_GOALS = [
  'Trabalhar',
  'Estudar',
  'Intercâmbio',
  'Aprender Inglês',
  'Aprender Espanhol',
  'Turismo',
  'Experiência Cultural',
  'Desenvolvimento Profissional',
];

export const QUIZ_DURATIONS = [
  '1 mês',
  '3 meses',
  '6 meses',
  '1 ano',
  'Mais de 1 ano',
];

export const QUIZ_BUDGETS = [
  'Até R$10.000',
  'R$10.000 - R$20.000',
  'R$20.000 - R$40.000',
  'R$40.000 - R$60.000',
  'Acima de R$60.000',
];

export const QUIZ_PREFERENCES = [
  'Europa',
  'América do Norte',
  'Oceania',
  'Clima quente',
  'Clima frio',
  'Cidade grande',
  'Cidade pequena',
  'Praia',
  'Montanha',
  'Sem preferência',
];
