/* YouSafer ABM Control Center v7 - camada de dados modular */
window.ABM_DATA = {
  "scoreRules": [
    {
      "label": "Conta pertence ao ICP primário de provedores regionais/médios",
      "bucket": "fit",
      "points": 10
    },
    {
      "label": "Base recorrente relevante ou potencial de contrato maior",
      "bucket": "fit",
      "points": 12
    },
    {
      "label": "Decisor acessível ou sponsor identificado",
      "bucket": "fit",
      "points": 8
    },
    {
      "label": "Dor de churn, retenção ou diferenciação declarada",
      "bucket": "fit",
      "points": 10
    },
    {
      "label": "Aceitou conexão ou interagiu no LinkedIn",
      "bucket": "intent",
      "points": 5
    },
    {
      "label": "Visitou LP do Diagnóstico de Retenção",
      "bucket": "intent",
      "points": 12
    },
    {
      "label": "Baixou checklist ou consumiu conteúdo-chave",
      "bucket": "intent",
      "points": 8
    },
    {
      "label": "Usou a calculadora churn x SVA ou pediu simulação",
      "bucket": "intent",
      "points": 15
    },
    {
      "label": "Respondeu email, LinkedIn ou WhatsApp permitido",
      "bucket": "intent",
      "points": 15
    },
    {
      "label": "Há pelo menos 2 stakeholders mapeados",
      "bucket": "progression",
      "points": 7
    },
    {
      "label": "Reunião/diagnóstico solicitado ou aceito",
      "bucket": "progression",
      "points": 8
    },
    {
      "label": "Próximo passo com data, responsável e contexto comercial",
      "bucket": "progression",
      "points": 5
    }
  ],
  "controlModules": [
    {
      "icon": "target",
      "title": "ICP e conta-alvo",
      "objective": "Definir quem entra no ABM.",
      "signal": "ISP regional/médio, base recorrente, dor de churn, SVA ativo ou intenção de diferenciação.",
      "action": "Classificar Tier 1/2/3 e excluir contas sem base mínima, decisor ou maturidade comercial."
    },
    {
      "icon": "brain",
      "title": "Narrativa de mercado",
      "objective": "Fazer o problema ficar óbvio.",
      "signal": "Conta engaja com temas de preço, churn, retenção, valor percebido ou SVA útil.",
      "action": "Distribuir tese em LinkedIn, blog, email e social ads antes de pedir reunião."
    },
    {
      "icon": "megaphone",
      "title": "Canais de ativação",
      "objective": "Cercar o comitê de compra.",
      "signal": "Decisores e influenciadores interagem em canais diferentes.",
      "action": "LinkedIn para autoridade, Instagram para explicação visual, Facebook para remarketing e email para cadência consultiva."
    },
    {
      "icon": "layout",
      "title": "LPs por persona",
      "objective": "Converter cada dor em sinal.",
      "signal": "Persona chega com problema diferente.",
      "action": "CEO vai para diagnóstico; Comercial para kit; CS para régua; Financeiro para calculadora; TI para checklist."
    },
    {
      "icon": "automation",
      "title": "CRM e automação",
      "objective": "Não perder nenhum sinal.",
      "signal": "Clique, visita, formulário parcial, resposta ou conexão aceita.",
      "action": "Make/n8n cria tags, score, tarefa, SLA, próximo passo e briefing comercial."
    },
    {
      "icon": "score",
      "title": "Score ABM",
      "objective": "Priorizar abordagem comercial.",
      "signal": "Fit + Intent + Progression passam de 50/70/85 pontos.",
      "action": "50 vira MQA, 70 vira SQA, 85 entra em proposta, piloto ou business case."
    },
    {
      "icon": "handshake",
      "title": "Handoff comercial",
      "objective": "Chegar em vendas com contexto.",
      "signal": "Conta tem dor, autoridade, timing ou diagnóstico solicitado.",
      "action": "SDR/Closer recebe resumo com persona, dor, conteúdo consumido, score, objeção e próximo CTA."
    },
    {
      "icon": "refresh",
      "title": "Reengajamento",
      "objective": "Recuperar contas mornas.",
      "signal": "No-show, formulário parcial, clique sem reunião ou closed-lost.",
      "action": "Nova oferta com simulação, atualização de mercado, conteúdo de prova ou convite para mesa/webinar."
    }
  ],
  "flowLanes": [
    {
      "stage": "Aquisição",
      "summary": "Lista, ICP e enriquecimento.",
      "cards": [
        {
          "icon": "target",
          "title": "Fontes de lista",
          "text": "LinkedIn, Apollo, CRM, inbound, base fria e listas setoriais."
        },
        {
          "icon": "building",
          "title": "Conta-alvo",
          "text": "ISP regional/médio com base recorrente, dor de churn e maturidade para SVA."
        },
        {
          "icon": "users",
          "title": "Comitê",
          "text": "CEO, Comercial, CS, Financeiro, TI e Marketing mapeados por influência."
        }
      ]
    },
    {
      "stage": "Engajamento",
      "summary": "Consciência, autoridade e sinal.",
      "cards": [
        {
          "icon": "linkedin",
          "title": "LinkedIn + social",
          "text": "Posts do Gabriel, conexão consultiva e anúncios por conta."
        },
        {
          "icon": "article",
          "title": "Blog + conteúdo",
          "text": "Churn, SVA, retenção, custo de reconquista e régua de ativação."
        },
        {
          "icon": "mail",
          "title": "Apollo + email",
          "text": "Sequência por persona com CTA progressivo e sem pedir reunião cedo demais."
        }
      ]
    },
    {
      "stage": "Conversão",
      "summary": "LPs, calculadora e diagnóstico.",
      "cards": [
        {
          "icon": "layout",
          "title": "5 LPs por persona",
          "text": "Cada persona recebe dor, promessa, CTA e formulário próprios."
        },
        {
          "icon": "calculator",
          "title": "Calculadora",
          "text": "Churn x SVA transforma dor em impacto financeiro e urgência."
        },
        {
          "icon": "webinar",
          "title": "Webinar / mesa",
          "text": "Retenção em provedores para multi-thread e contas estratégicas."
        }
      ]
    },
    {
      "stage": "Comercial",
      "summary": "Roteamento com contexto.",
      "cards": [
        {
          "icon": "bullseye",
          "title": "LP Diagnóstico",
          "text": "CTA principal para mão levantada, briefing e geração de MQA."
        },
        {
          "icon": "automation",
          "title": "Make + CRM",
          "text": "UTM, persona, score, campo ABM, tarefa, SLA e briefing automático."
        },
        {
          "icon": "phone",
          "title": "WhatsApp permitido",
          "text": "Follow-up consultivo e recuperação de formulário para SDR/Closer."
        }
      ]
    },
    {
      "stage": "Pipeline",
      "summary": "Oportunidade com próximo passo.",
      "hot": true,
      "cards": [
        {
          "icon": "handshake",
          "title": "Diagnóstico 1:1",
          "text": "Reunião com dor, autoridade, timing, stakeholders e próximo passo."
        },
        {
          "icon": "chart",
          "title": "Business case",
          "text": "Simulação, kit comercial, piloto e proposta para decisão."
        },
        {
          "icon": "rocket",
          "title": "Oportunidade",
          "text": "Plano de 30 dias, valor de pipeline, previsão de fechamento e responsável."
        }
      ]
    }
  ],
  "emailPersonas": {
    "decisor": {
      "label": "Decisor final / Dono",
      "pain": "Churn, margem, diferenciação e decisão estratégica de produto/benefício.",
      "promise": "Mostrar que saúde digital pode proteger a base, criar valor percebido e reduzir dependência de preço.",
      "objection": "“Já temos SVA” ou “não quero mais um fornecedor”.",
      "pass": "Passa para SDR quando responder sobre churn, pedir diagnóstico, aceitar simulação ou envolver outro decisor.",
      "sequence": [
        {
          "day": "D0",
          "trigger": "Fit confirmado",
          "subject": "Diagnóstico executivo de retenção",
          "angle": "Abrir dor de margem e churn sem vender produto cedo demais. A mensagem deve parecer consultiva e exclusiva.",
          "cta": "Responder “quero diagnóstico”"
        },
        {
          "day": "D2",
          "trigger": "Abertura ou visita",
          "subject": "Velocidade virou requisito. O que fica como diferencial?",
          "angle": "Mostrar que velocidade/preço são copiáveis, mas valor percebido na base cria defesa competitiva.",
          "cta": "Ver tese em 2 minutos"
        },
        {
          "day": "D5",
          "trigger": "Clique ou conexão",
          "subject": "Quanto custa perder 1% da base por mês?",
          "angle": "Levar a discussão para impacto financeiro e simulação conservadora de churn x SVA.",
          "cta": "Receber simulação"
        },
        {
          "day": "D7",
          "trigger": "Interação social",
          "subject": "Comentário do Gabriel + prova de autoridade",
          "angle": "Aproximação executiva pelo LinkedIn, conectando retenção e diferenciação em ISPs.",
          "cta": "Aceitar conexão"
        },
        {
          "day": "D10",
          "trigger": "Score >= 50",
          "subject": "Conversa de 20 minutos para validar fit",
          "angle": "Convite claro para diagnóstico com contexto da conta, sem chamada genérica.",
          "cta": "Agendar diagnóstico"
        },
        {
          "day": "D14",
          "trigger": "Sem resposta",
          "subject": "Fecho aqui ou retomo no próximo ciclo?",
          "angle": "Break-up educado, preservando relacionamento e timing futuro.",
          "cta": "Indicar melhor momento"
        }
      ]
    },
    "comercial": {
      "label": "Comercial / Vendas",
      "pain": "Time preso em desconto, velocidade e comparação direta com concorrentes.",
      "promise": "Dar ao comercial um argumento de valor para vender plano melhor e defender preço.",
      "objection": "“Meu time vende com campanha e desconto”.",
      "pass": "Passa quando pedir kit, script, exemplo de pitch ou reunião para adaptar discurso comercial.",
      "sequence": [
        {
          "day": "D0",
          "trigger": "Cargo comercial",
          "subject": "Um argumento além da velocidade",
          "angle": "Mostrar que saúde vira argumento de valor para planos premium e redução de desconto.",
          "cta": "Receber kit comercial"
        },
        {
          "day": "D3",
          "trigger": "Sem resposta",
          "subject": "3 objeções que o vendedor pode quebrar com SVA útil",
          "angle": "Conteúdo prático para time de vendas usar em proposta, WhatsApp e follow-up.",
          "cta": "Ver scripts"
        },
        {
          "day": "D5",
          "trigger": "Clique no kit",
          "subject": "Pitch pronto para vender valor percebido",
          "angle": "Enviar modelo de abordagem e como inserir o benefício no pacote comercial.",
          "cta": "Pedir modelo"
        },
        {
          "day": "D7",
          "trigger": "Interesse comercial",
          "subject": "Adaptar para a realidade da sua operação",
          "angle": "Conectar com rotina do time e playbook do provedor.",
          "cta": "Agendar conversa comercial"
        },
        {
          "day": "D10",
          "trigger": "Score >= 50",
          "subject": "Diagnóstico do discurso comercial",
          "angle": "Analisar onde o time perde margem por falta de diferencial percebido.",
          "cta": "Agendar diagnóstico"
        },
        {
          "day": "D14",
          "trigger": "Sem avanço",
          "subject": "Deixo o kit para quando fizer sentido?",
          "angle": "Reengajamento leve com valor entregue.",
          "cta": "Receber por email"
        }
      ]
    },
    "cs": {
      "label": "CS / Retenção / Operações",
      "pain": "Cancelamento, baixa ativação de benefício e retenção baseada só em desconto.",
      "promise": "Criar uma régua de ativação e recuperação que aumenta lembrança e uso do benefício.",
      "objection": "“Isso pode gerar mais demanda para atendimento”.",
      "pass": "Passa quando pedir régua, checklist operacional ou validação do fluxo de ativação.",
      "sequence": [
        {
          "day": "D0",
          "trigger": "Operação/CS identificado",
          "subject": "Retenção antes do cancelamento",
          "angle": "Apresentar a ideia de usar SVA como argumento antes do cliente pedir para sair.",
          "cta": "Ver régua 30 dias"
        },
        {
          "day": "D3",
          "trigger": "Abertura",
          "subject": "Benefício só fideliza quando o cliente lembra que ele existe",
          "angle": "Falar de ativação, educação da base e uso recorrente.",
          "cta": "Receber checklist"
        },
        {
          "day": "D5",
          "trigger": "Clique",
          "subject": "Onde a régua entra no SAC/CS",
          "angle": "Mostrar que o fluxo pode reduzir atrito ao invés de aumentar carga operacional.",
          "cta": "Validar fluxo"
        },
        {
          "day": "D8",
          "trigger": "Resposta ou download",
          "subject": "Aplicar no onboarding e reversão de churn",
          "angle": "Conectar 30 dias iniciais, base ativa e reengajamento de usuários.",
          "cta": "Marcar validação"
        },
        {
          "day": "D12",
          "trigger": "Score >= 50",
          "subject": "Briefing operacional para piloto",
          "angle": "Preparar handoff com tarefas, gatilhos e SLA.",
          "cta": "Agendar piloto"
        },
        {
          "day": "D16",
          "trigger": "Sem avanço",
          "subject": "Posso deixar a régua como referência?",
          "angle": "Reengajamento com utilidade prática.",
          "cta": "Receber régua"
        }
      ]
    },
    "financeiro": {
      "label": "Financeiro / Administrativo",
      "pain": "Margem, custo do churn, desconto concedido e viabilidade do SVA.",
      "promise": "Transformar a tese em números simples para apoiar decisão e business case.",
      "objection": "“Qual é o ROI disso?”",
      "pass": "Passa quando pedir calculadora, simulação ou envolver gestão/comercial na validação.",
      "sequence": [
        {
          "day": "D0",
          "trigger": "Financeiro identificado",
          "subject": "Custo de churn vs custo de SVA",
          "angle": "Tirar a discussão de “mais custo” e levar para proteção de margem.",
          "cta": "Receber calculadora"
        },
        {
          "day": "D3",
          "trigger": "Abertura ou clique",
          "subject": "Simulação conservadora com poucos dados",
          "angle": "Base ativa, churn médio e desconto já indicam se faz sentido avançar.",
          "cta": "Simular cenário"
        },
        {
          "day": "D5",
          "trigger": "Baixou planilha",
          "subject": "Onde o benefício paga a conta",
          "angle": "Mostrar ponto de equilíbrio sem prometer ganho não validado.",
          "cta": "Validar premissas"
        },
        {
          "day": "D7",
          "trigger": "Resposta",
          "subject": "Levar para decisão com comercial/gestão",
          "angle": "Conectar número com proposta e pacote comercial.",
          "cta": "Agendar validação"
        },
        {
          "day": "D10",
          "trigger": "Score >= 50",
          "subject": "Business case para reunião executiva",
          "angle": "Preparar material para decisor com risco, impacto e próximos passos.",
          "cta": "Montar business case"
        },
        {
          "day": "D14",
          "trigger": "Sem avanço",
          "subject": "Deixo a calculadora para próximo ciclo?",
          "angle": "Manter abertura para timing financeiro.",
          "cta": "Responder melhor data"
        }
      ]
    },
    "ti": {
      "label": "TI / Técnico / Redes",
      "pain": "Risco de implantação, suporte, integração e aumento de retrabalho.",
      "promise": "Reduzir objeções técnicas antes de envolver decisão comercial.",
      "objection": "“Isso vai virar problema para minha equipe”.",
      "pass": "Passa quando pedir checklist técnico, validar fluxo ou envolver operação/CS.",
      "sequence": [
        {
          "day": "D0",
          "trigger": "TI identificado",
          "subject": "Checklist técnico antes de vender SVA",
          "angle": "Mostrar que a implantação precisa ser simples, clara e sem retrabalho desnecessário.",
          "cta": "Receber checklist"
        },
        {
          "day": "D3",
          "trigger": "Abertura",
          "subject": "O que precisa estar pronto antes do piloto",
          "angle": "Ativação, comunicação, atendimento, dúvidas frequentes e CRM.",
          "cta": "Validar checklist"
        },
        {
          "day": "D5",
          "trigger": "Clique",
          "subject": "Como não sobrecarregar suporte",
          "angle": "Separar papel da YouSafer, provedor, CRM e atendimento.",
          "cta": "Ver fluxo técnico"
        },
        {
          "day": "D8",
          "trigger": "Download",
          "subject": "Validação técnica em 20 minutos",
          "angle": "Revisar pontos de implantação e riscos antes de escalar.",
          "cta": "Marcar validação"
        },
        {
          "day": "D12",
          "trigger": "Score >= 50",
          "subject": "Checklist de piloto aprovado",
          "angle": "Passar para operação com premissas claras.",
          "cta": "Enviar para operação"
        },
        {
          "day": "D16",
          "trigger": "Sem avanço",
          "subject": "Deixo o checklist como referência?",
          "angle": "Reengajamento técnico sem pressão.",
          "cta": "Responder dúvida técnica"
        }
      ]
    },
    "marketing": {
      "label": "Marketing / Conteúdo",
      "pain": "SVA existe no contrato, mas não vira percepção de valor na base.",
      "promise": "Transformar o benefício em narrativa, conteúdo e campanha de ativação.",
      "objection": "“Não temos pauta ou tempo para comunicar isso”.",
      "pass": "Passa quando pedir pauta, calendário ou briefing para adaptar comunicação.",
      "sequence": [
        {
          "day": "D0",
          "trigger": "Marketing identificado",
          "subject": "Pauta para transformar SVA em valor percebido",
          "angle": "Mostrar que benefício sem comunicação não gera lembrança nem retenção.",
          "cta": "Receber pauta"
        },
        {
          "day": "D3",
          "trigger": "Abertura",
          "subject": "4 conteúdos para ativar benefício na base",
          "angle": "Posts, e-mails, vídeos curtos e FAQ comercial para aumentar uso.",
          "cta": "Ver ideias"
        },
        {
          "day": "D5",
          "trigger": "Clique",
          "subject": "Campanha de ativação para 30 dias",
          "angle": "Roteiro de comunicação para assinante entender e usar o benefício.",
          "cta": "Receber calendário"
        },
        {
          "day": "D7",
          "trigger": "Resposta",
          "subject": "Adaptar para a marca da sua operação",
          "angle": "Levar para comunicação white label sem parecer genérico.",
          "cta": "Agendar briefing"
        },
        {
          "day": "D10",
          "trigger": "Score >= 50",
          "subject": "Conteúdo + LP + CRM no mesmo fluxo",
          "angle": "Conectar mídia, LP, email, WhatsApp e CRM.",
          "cta": "Montar campanha"
        },
        {
          "day": "D14",
          "trigger": "Sem avanço",
          "subject": "Quer que eu envie a pauta base?",
          "angle": "Reengajamento com ativo útil.",
          "cta": "Receber pauta base"
        }
      ]
    }
  },
  "socialStrategies": {
    "LinkedIn": {
      "role": "Autoridade executiva, multi-thread por conta e prova para decisores.",
      "rhythm": "3 posts semanais + comentários do Gabriel + conexão consultiva.",
      "metric": "Conexões aceitas, comentários de decisores, visitas em LP e score por conta."
    },
    "Instagram": {
      "role": "Tradução visual da tese para entendimento rápido e remarketing.",
      "rhythm": "3 Reels/carrosséis por semana + stories de bastidor + prova social.",
      "metric": "Retenção de vídeo, salvamentos, respostas, cliques e público de remarketing."
    },
    "Facebook": {
      "role": "Distribuição regional, reforço de prova e remarketing para contas/visitantes.",
      "rhythm": "2 posts por semana + campanhas de engajamento + remarketing de LP.",
      "metric": "Alcance em praças, engajamento, custo por visita qualificada e retorno de MQA."
    },
    "Artigos / Blog": {
      "role": "SEO, educação e captura de intenção de médio prazo.",
      "rhythm": "1 artigo por semana + reaproveitamento em email e social.",
      "metric": "Tráfego orgânico, tempo de leitura, cliques em LP e downloads de ativos."
    }
  },
  "socialPosts": [
    {
      "channel": "LinkedIn",
      "format": "Post executivo",
      "title": "Velocidade e preço viraram requisito, não diferencial",
      "objective": "Abrir a tese de mercado para donos e diretores de ISPs.",
      "cta": "Comentar “retenção”"
    },
    {
      "channel": "LinkedIn",
      "format": "Carrossel",
      "title": "O custo oculto de reconquistar clientes todo mês",
      "objective": "Conectar churn com margem e previsibilidade.",
      "cta": "Pedir simulação"
    },
    {
      "channel": "LinkedIn",
      "format": "Post do Gabriel",
      "title": "Por que SVA precisa ser útil, não só listado no contrato",
      "objective": "Criar autoridade e provocar decisores.",
      "cta": "Receber checklist"
    },
    {
      "channel": "LinkedIn",
      "format": "Documento",
      "title": "Framework: Fit + Intent + Progression para ISPs",
      "objective": "Educar sobre ABM e mostrar método.",
      "cta": "Ver score ABM"
    },
    {
      "channel": "LinkedIn",
      "format": "Case conceitual",
      "title": "Como um benefício de saúde pode defender preço",
      "objective": "Falar com Comercial e CEO.",
      "cta": "Receber kit"
    },
    {
      "channel": "LinkedIn",
      "format": "Enquete",
      "title": "Seu SVA gera uso ou só ocupa espaço no plano?",
      "objective": "Gerar comentários e sinais de dor.",
      "cta": "Votar"
    },
    {
      "channel": "LinkedIn",
      "format": "Post CFO",
      "title": "Quanto 1% de churn impacta sua margem?",
      "objective": "Acionar Financeiro com dor numérica.",
      "cta": "Calcular impacto"
    },
    {
      "channel": "LinkedIn",
      "format": "Post CS",
      "title": "Retenção começa antes do pedido de cancelamento",
      "objective": "Acionar Operações/CS.",
      "cta": "Ver régua"
    },
    {
      "channel": "LinkedIn",
      "format": "Convite",
      "title": "Mesa: retenção em provedores além da velocidade",
      "objective": "Criar evento de autoridade para multi-thread.",
      "cta": "Inscrever-se"
    },
    {
      "channel": "Instagram",
      "format": "Reels",
      "title": "3 sinais de que seu provedor está competindo só por preço",
      "objective": "Gerar compreensão rápida da dor.",
      "cta": "Salvar"
    },
    {
      "channel": "Instagram",
      "format": "Carrossel",
      "title": "SVA útil vs SVA esquecido no contrato",
      "objective": "Comparar valor percebido de forma visual.",
      "cta": "Ver checklist"
    },
    {
      "channel": "Instagram",
      "format": "Stories",
      "title": "Quiz: seu cliente lembra dos benefícios do plano?",
      "objective": "Criar interação e público de remarketing.",
      "cta": "Responder quiz"
    },
    {
      "channel": "Instagram",
      "format": "Reels",
      "title": "Como explicar saúde digital em 30 segundos",
      "objective": "Ajudar comercial/marketing a simplificar a oferta.",
      "cta": "Compartilhar"
    },
    {
      "channel": "Instagram",
      "format": "Carrossel",
      "title": "A régua de 30 dias para ativar o benefício",
      "objective": "Mostrar operação de CS.",
      "cta": "Receber régua"
    },
    {
      "channel": "Instagram",
      "format": "Prova social",
      "title": "O que um benefício recorrente muda na relação com a base",
      "objective": "Reforçar utilidade real.",
      "cta": "Ver exemplo"
    },
    {
      "channel": "Instagram",
      "format": "Bastidor",
      "title": "Como uma conta vira MQA no ABM",
      "objective": "Mostrar o método de forma leve.",
      "cta": "Ver score"
    },
    {
      "channel": "Instagram",
      "format": "Reels",
      "title": "O erro de vender internet só por velocidade",
      "objective": "Educar topo de funil.",
      "cta": "Enviar para alguém"
    },
    {
      "channel": "Instagram",
      "format": "Stories",
      "title": "Caixa de perguntas: SVA, retenção e saúde digital",
      "objective": "Capturar objeções para conteúdo futuro.",
      "cta": "Perguntar"
    },
    {
      "channel": "Facebook",
      "format": "Post regional",
      "title": "Provedores regionais precisam de diferenciação que a base entende",
      "objective": "Falar com donos e gerentes em praças regionais.",
      "cta": "Saiba mais"
    },
    {
      "channel": "Facebook",
      "format": "Vídeo curto",
      "title": "Por que desconto não resolve churn para sempre",
      "objective": "Educar e aquecer público frio.",
      "cta": "Assistir"
    },
    {
      "channel": "Facebook",
      "format": "Post prova",
      "title": "Benefício que entra na rotina tem mais chance de ser lembrado",
      "objective": "Construir percepção de valor.",
      "cta": "Ver benefícios"
    },
    {
      "channel": "Facebook",
      "format": "Remarketing",
      "title": "Você viu o checklist de SVA? Agora veja a calculadora",
      "objective": "Reengajar visitantes de LP.",
      "cta": "Calcular impacto"
    },
    {
      "channel": "Facebook",
      "format": "Post comercial",
      "title": "Como vender plano de maior valor sem depender só de velocidade",
      "objective": "Ativar gestores comerciais.",
      "cta": "Receber kit"
    },
    {
      "channel": "Facebook",
      "format": "Post CS",
      "title": "Régua de ativação para cliente não esquecer o benefício",
      "objective": "Ativar operação e retenção.",
      "cta": "Ver régua"
    },
    {
      "channel": "Facebook",
      "format": "Post financeiro",
      "title": "O custo de churn aparece antes do cancelamento",
      "objective": "Acionar financeiro com narrativa simples.",
      "cta": "Simular"
    },
    {
      "channel": "Facebook",
      "format": "Evento",
      "title": "Conversa sobre retenção em provedores",
      "objective": "Gerar inscrição e audiência.",
      "cta": "Participar"
    },
    {
      "channel": "Facebook",
      "format": "Depoimento/FAQ",
      "title": "Assistência de saúde não é plano de saúde: como comunicar certo",
      "objective": "Reduzir objeção e confusão.",
      "cta": "Entender diferença"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "Como reduzir churn em provedores de internet sem depender só de desconto",
      "objective": "Capturar demanda de retenção e churn.",
      "cta": "Ver diagnóstico"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "SVA para provedor de internet: o que gera valor percebido de verdade",
      "objective": "Educar Produto/SVA e Comercial.",
      "cta": "Baixar checklist"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "Custo de churn: como calcular impacto real na margem do provedor",
      "objective": "Falar com Financeiro e CEO.",
      "cta": "Pedir calculadora"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "Régua de ativação de benefício: 30 dias para aumentar lembrança e uso",
      "objective": "Apoiar CS/Retenção.",
      "cta": "Receber régua"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "Como vender internet com saúde digital no pacote sem parecer benefício genérico",
      "objective": "Apoiar Comercial.",
      "cta": "Receber kit"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "ABM para provedores: como priorizar contas, cargos e sinais de intenção",
      "objective": "Mostrar método e autoridade.",
      "cta": "Ver score ABM"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "Retenção em ISPs: por que velocidade deixou de ser diferencial",
      "objective": "Aprofundar tese executiva.",
      "cta": "Agendar diagnóstico"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "Checklist técnico para implantar SVA de saúde em provedor de internet",
      "objective": "Reduzir objeção técnica.",
      "cta": "Validar implantação"
    },
    {
      "channel": "Artigos / Blog",
      "format": "SEO",
      "title": "Como comunicar SVA de saúde para a base de assinantes",
      "objective": "Apoiar Marketing/Conteúdo.",
      "cta": "Receber pauta"
    }
  ],
  "personaLps": [
    {
      "persona": "Decisor final / Dono",
      "asset": "LP Diagnóstico executivo de retenção",
      "reason": "Dono precisa entender impacto na estratégia, margem e diferenciação.",
      "hook": "“Quanto churn ainda está sendo tratado como preço?”",
      "promise": "Mapa rápido de risco, oportunidade e tese de retenção.",
      "cta": "Agendar diagnóstico executivo",
      "fields": [
        "Empresa",
        "Base aproximada",
        "Churn percebido",
        "Decisor",
        "WhatsApp"
      ]
    },
    {
      "persona": "Comercial / Vendas",
      "asset": "LP Kit comercial SVA saúde",
      "reason": "Comercial precisa vender valor e defender preço no pacote.",
      "hook": "“Seu time tem argumento além da velocidade?”",
      "promise": "Script, pitch e proposta de valor para plano premium.",
      "cta": "Receber kit comercial",
      "fields": [
        "Empresa",
        "Cargo",
        "Canal de vendas",
        "Volume de vendedores",
        "Email"
      ]
    },
    {
      "persona": "CS / Retenção",
      "asset": "LP Régua 30 dias de ativação",
      "reason": "CS precisa ativar benefício antes do cancelamento.",
      "hook": "“Benefício só retém quando o cliente lembra que ele existe.”",
      "promise": "Régua de onboarding, lembrete, uso e reversão.",
      "cta": "Ver régua de retenção",
      "fields": [
        "Empresa",
        "Responsável CS",
        "Base ativa",
        "Canal atendimento",
        "WhatsApp"
      ]
    },
    {
      "persona": "Financeiro",
      "asset": "LP Calculadora churn x SVA",
      "reason": "Financeiro precisa enxergar custo, margem e viabilidade.",
      "hook": "“Quanto custa perder 1% da base todo mês?”",
      "promise": "Simulação conservadora para validar business case.",
      "cta": "Calcular impacto",
      "fields": [
        "Empresa",
        "Base ativa",
        "Churn médio",
        "Ticket médio",
        "Email"
      ]
    },
    {
      "persona": "TI / Operação",
      "asset": "LP Checklist técnico de implantação",
      "reason": "TI precisa reduzir risco de suporte, integração e retrabalho.",
      "hook": "“Antes de vender benefício, valide se a operação aguenta.”",
      "promise": "Checklist de implantação, atendimento e pontos de CRM.",
      "cta": "Validar implantação",
      "fields": [
        "Empresa",
        "Cargo técnico",
        "CRM atual",
        "Canal atendimento",
        "Email"
      ]
    }
  ],
  "crmCadence": [
    {
      "day": "D0",
      "trigger": "Entrada na base ou enriquecimento",
      "title": "Criar conta + contato + origem",
      "action": "Aplicar persona, tier, score inicial, fonte, tag e tarefa de revisão."
    },
    {
      "day": "D1",
      "trigger": "ICP confirmado",
      "title": "Primeiro disparo por persona",
      "action": "Email/Apollo com dor da persona e CTA de conteúdo leve."
    },
    {
      "day": "D3",
      "trigger": "Abertura ou sem resposta",
      "title": "Segundo toque consultivo",
      "action": "Novo ângulo: objeção principal, argumento de valor e CTA progressivo."
    },
    {
      "day": "D5",
      "trigger": "Clique, visita ou conexão",
      "title": "LinkedIn + social selling",
      "action": "Comentário contextual do Gabriel e registro de sinal no CRM."
    },
    {
      "day": "D7",
      "trigger": "Conteúdo de dor consumido",
      "title": "Ativo de conversão",
      "action": "Enviar LP, calculadora, checklist, kit ou régua conforme persona."
    },
    {
      "day": "D10",
      "trigger": "Score >= 50 ou formulário parcial",
      "title": "WhatsApp permitido / SDR",
      "action": "Abordagem com contexto e tentativa de diagnóstico."
    },
    {
      "day": "D14",
      "trigger": "Sem reunião",
      "title": "Reengajamento leve",
      "action": "Enviar prova, framework ou atualização de mercado sem pressão."
    },
    {
      "day": "D21-30",
      "trigger": "MQA/SQA ou no-show",
      "title": "War room de contas quentes",
      "action": "Revisar contas, stakeholders faltantes, objeções e próximo passo."
    }
  ],
  "crmFields": [
    "Conta",
    "CNPJ",
    "Site",
    "Pessoa",
    "Cargo",
    "Persona ABM",
    "Tier",
    "Score ABM",
    "Fonte",
    "Canal inicial",
    "Último conteúdo consumido",
    "LP visitada",
    "CTA acionado",
    "Status MQA/SQA",
    "Próxima ação",
    "Responsável",
    "SLA",
    "Motivo da rota",
    "Tag CRM",
    "Observação de LGPD/opt-out"
  ],
  "contentLibrary": [
    {
      "type": "Artigo SEO",
      "title": "Como reduzir churn em provedores de internet sem depender só de desconto",
      "use": "Pilar de autoridade para CEO, CS e Comercial.",
      "next": "CTA: Diagnóstico executivo"
    },
    {
      "type": "Artigo SEO",
      "title": "SVA útil vs SVA genérico: como gerar valor percebido na base",
      "use": "Nutrir Produto/SVA e Marketing com argumento de diferenciação.",
      "next": "CTA: Checklist SVA"
    },
    {
      "type": "Planilha",
      "title": "Calculadora churn x SVA",
      "use": "Converter Financeiro e CEO com impacto de margem.",
      "next": "CTA: Pedir simulação"
    },
    {
      "type": "Template",
      "title": "Régua 30 dias de ativação de benefício",
      "use": "Ativar CS e operação para uso recorrente.",
      "next": "CTA: Receber régua"
    },
    {
      "type": "Kit comercial",
      "title": "Scripts para vender saúde digital no pacote de internet",
      "use": "Apoiar gerentes e vendedores.",
      "next": "CTA: Baixar kit"
    },
    {
      "type": "Checklist técnico",
      "title": "Implantação sem atrito: CRM, atendimento e comunicação",
      "use": "Reduzir objeção de TI e operação.",
      "next": "CTA: Validar fluxo"
    },
    {
      "type": "Webinar",
      "title": "Retenção para provedores: sair da guerra de preço",
      "use": "Gerar multi-thread e sinal de intenção.",
      "next": "CTA: Inscrever-se"
    },
    {
      "type": "Case conceitual",
      "title": "Como transformar benefício em argumento de permanência",
      "use": "Prova e narrativa para decisores.",
      "next": "CTA: Ver business case"
    },
    {
      "type": "Framework ABM",
      "title": "Fit + Intent + Progression para ISPs",
      "use": "Mostrar método e justificar score.",
      "next": "CTA: Ver score ABM"
    }
  ],
  "plays": [
    {
      "code": "P01",
      "stage": "Reconhecimento",
      "priority": "Alta",
      "name": "Tese “internet virou commodity”",
      "desc": "Conteúdo de autoridade para abrir problema de diferenciação.",
      "owners": [
        "Marketing",
        "Gabriel"
      ]
    },
    {
      "code": "P02",
      "stage": "Reconhecimento",
      "priority": "Alta",
      "name": "Lista ICP + enriquecimento",
      "desc": "Montar conta, cargo, site, score e rotas ABM.",
      "owners": [
        "Operação",
        "SDR"
      ]
    },
    {
      "code": "P03",
      "stage": "Engajamento inicial",
      "priority": "Alta",
      "name": "Sequência Apollo por persona",
      "desc": "Cada cargo recebe narrativa e CTA próprio.",
      "owners": [
        "Marketing",
        "SDR"
      ]
    },
    {
      "code": "P04",
      "stage": "Engajamento inicial",
      "priority": "Média",
      "name": "Social selling Gabriel",
      "desc": "Conexão e comentário contextual em decisores estratégicos.",
      "owners": [
        "Gabriel",
        "SDR"
      ]
    },
    {
      "code": "P05",
      "stage": "Engajamento significativo",
      "priority": "Alta",
      "name": "Checklist SVA útil",
      "desc": "Ativo para Produto/SVA e Comercial qualificarem interesse.",
      "owners": [
        "Conteúdo",
        "Design"
      ]
    },
    {
      "code": "P06",
      "stage": "Engajamento significativo",
      "priority": "Alta",
      "name": "Calculadora churn x SVA",
      "desc": "Transformar dor em impacto financeiro e urgência.",
      "owners": [
        "Financeiro",
        "Marketing"
      ]
    },
    {
      "code": "P07",
      "stage": "Conversão",
      "priority": "Alta",
      "name": "Diagnóstico de Retenção",
      "desc": "CTA principal para mão levantada e MQA.",
      "owners": [
        "Marketing",
        "Comercial"
      ]
    },
    {
      "code": "P08",
      "stage": "Conversão",
      "priority": "Média",
      "name": "Webinar/mesa de retenção",
      "desc": "Multi-thread para contas estratégicas e geração de prova.",
      "owners": [
        "Gabriel",
        "Conteúdo"
      ]
    },
    {
      "code": "P09",
      "stage": "SQA/SQL",
      "priority": "Alta",
      "name": "Handoff com briefing",
      "desc": "SDR/Closer recebe contexto completo antes da abordagem.",
      "owners": [
        "SDR",
        "Closer"
      ]
    },
    {
      "code": "P10",
      "stage": "Opportunity",
      "priority": "Alta",
      "name": "Business case e piloto",
      "desc": "Proposta com simulação, próximos passos e plano de 30 dias.",
      "owners": [
        "Closer",
        "Gabriel"
      ]
    },
    {
      "code": "P11",
      "stage": "Reengajamento",
      "priority": "Média",
      "name": "No-show e formulário parcial",
      "desc": "Recuperar contas mornas com ativo de valor.",
      "owners": [
        "SDR",
        "CRM"
      ]
    },
    {
      "code": "P12",
      "stage": "Reengajamento",
      "priority": "Média",
      "name": "Closed-lost / timing futuro",
      "desc": "Retomar com atualização de mercado e nova simulação.",
      "owners": [
        "CRM",
        "Comercial"
      ]
    }
  ],
  "roadmap": [
    {
      "week": "Semana 1",
      "title": "Base, ICP e clusterização",
      "desc": "Validar planilha, personas, critérios de tier e campos CRM."
    },
    {
      "week": "Semana 2",
      "title": "LPs e ativos",
      "desc": "Publicar diagnóstico, kit comercial, checklist, régua e calculadora."
    },
    {
      "week": "Semana 3",
      "title": "Cadências e social selling",
      "desc": "Ativar Apollo/CRM, LinkedIn do Gabriel e primeiras mensagens por persona."
    },
    {
      "week": "Semana 4",
      "title": "Score, MQA e SLA",
      "desc": "Medir intent, formular handoff e criar war room de contas quentes."
    },
    {
      "week": "Semana 5",
      "title": "Diagnósticos e business cases",
      "desc": "Converter contas com score alto em reuniões e simulações."
    },
    {
      "week": "Semana 6",
      "title": "Revisão executiva",
      "desc": "Apresentar aprendizados, pipeline, contas prioritárias e próximos ciclos."
    }
  ],
  "decisions": [
    "Aprovar piloto ABM de 30 dias",
    "Validar lista Tier 1/2",
    "Escolher responsável comercial por SLA",
    "Publicar 5 LPs por persona",
    "Ativar cadências Apollo/CRM",
    "Rodar social selling do Gabriel",
    "Medir MQA/SQA semanalmente",
    "Revisar pipeline em war room"
  ],
  "scrapCluster": {
    "source": {
      "validLeads": 179,
      "uniqueAccounts": 90,
      "personas": 6,
      "rule": "Score ABM por fit ISP, profundidade da conta, senioridade, comitê e domínio corporativo"
    },
    "personas": [
      {
        "key": "decisor",
        "label": "Decisor final / Dono",
        "role": "CEO, dono, diretor executivo ou sócio com decisão sobre margem, retenção e posicionamento.",
        "short": "Decisor",
        "tone": "Executivo, financeiro e estratégico",
        "asset": "Diagnóstico executivo de retenção",
        "leads": [
          {
            "rank": 1,
            "name": "RAPHAEL ANTONIO NOGUEIRA",
            "role": "PROPRIETARIO",
            "company": "NEWNET",
            "cnpj": "09.128.236/0001-82",
            "city": "MATEUS LEME/MG",
            "email": "newnetml@gmail.com",
            "phone": "31971895508",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 156,
            "contacts": 4,
            "personas": 3,
            "seniority": "C-level / Dono",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 2,
            "name": "ROMULO DA SILVA TEIXEIRA",
            "role": "PROPRIETÁRIO",
            "company": "ALFA TELECOM",
            "cnpj": "37.197.428/0001-86",
            "city": "PARACATU/MG",
            "email": "teixeiraromulo@hotmail.com",
            "phone": "38998428938",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 156,
            "contacts": 4,
            "personas": 3,
            "seniority": "C-level / Dono",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 3,
            "name": "LUÍS GUSTAVO BALDIM",
            "role": "DIRETOR",
            "company": "VBTELECOM",
            "cnpj": "08.709.153/0001-14",
            "city": "MONSENHOR PAULO/MG",
            "email": "luis.gustavo@vbtelecom.net.br",
            "phone": "35999432682",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 156,
            "contacts": 2,
            "personas": 3,
            "seniority": "C-level / Dono",
            "reason": "Conta com 2 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T1",
            "source": "https://vbtelecom.net.br",
            "abmType": "1:1"
          },
          {
            "rank": 4,
            "name": "RODOLFO PERNA FERREIRA",
            "role": "DIRETOR EXECUTIVO",
            "company": "VBTELECOM",
            "cnpj": "08.709.153/0001-14",
            "city": "MONSENHOR PAULO/MG",
            "email": "rodolfo@vbtelecom.net.br",
            "phone": "35999520045",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 156,
            "contacts": 2,
            "personas": 3,
            "seniority": "C-level / Dono",
            "reason": "Conta com 2 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T1",
            "source": "https://vbtelecom.net.br",
            "abmType": "1:1"
          },
          {
            "rank": 5,
            "name": "HUMBERTO MANSUR RODRIGUES DA SILVA",
            "role": "SÓCIO PROPRIETÁRIO",
            "company": "ITD INTERNET",
            "cnpj": "20.418.733/0001-58",
            "city": "SIMONÉSIA/MG",
            "email": "betomansur3@hotmaip.com",
            "phone": "33984253595",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 141,
            "contacts": 3,
            "personas": 2,
            "seniority": "C-level / Dono",
            "reason": "Conta com 3 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T2",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 6,
            "name": "SAMIR MANSUR RODRIGUES DA SILVA",
            "role": "CEO",
            "company": "ITD INTERNET",
            "cnpj": "20.418.733/0001-58",
            "city": "SIMONÉSIA/MG",
            "email": "samirmansur2@gmail.com",
            "phone": "33999118361",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 141,
            "contacts": 3,
            "personas": 2,
            "seniority": "C-level / Dono",
            "reason": "Conta com 3 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T2",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 7,
            "name": "FABIO BRUNO NUNES SANTOS",
            "role": "DIRETOR COMERCIAL",
            "company": "ITANET",
            "cnpj": "00.068.334/0001-05",
            "city": "ITABIRA/MG",
            "email": "fabio@itanel.com.br",
            "phone": "31987720208",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 141,
            "contacts": 1,
            "personas": 2,
            "seniority": "C-level / Dono",
            "reason": "Conta com 1 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T2",
            "source": "https://itanel.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 8,
            "name": "FELIPE DE ASSIS BODEVAN",
            "role": "SÓCIO ADM",
            "company": "RAIMAX",
            "cnpj": "08.804.735/0001-80",
            "city": "SAO LOURENCO/MG",
            "email": "felipe@raimaxfibra.com.br",
            "phone": "35999057810",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 141,
            "contacts": 1,
            "personas": 2,
            "seniority": "C-level / Dono",
            "reason": "Conta com 1 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T2",
            "source": "https://raimaxfibra.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 9,
            "name": "PAULO JOSÉ MARTINS SANTOS",
            "role": "DIRETOR",
            "company": "JETNETWORKS",
            "cnpj": "09.643.061/0001-41",
            "city": "BELO HORIZONTE/MG",
            "email": "paulo@jetnetworks.com.br",
            "phone": "31988020936",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 134,
            "contacts": 1,
            "personas": 1,
            "seniority": "C-level / Dono",
            "reason": "Conta com 1 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T2",
            "source": "https://jetnetworks.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 10,
            "name": "HUMBERTO SOUZA BRANDAO",
            "role": "DIRETOR",
            "company": "GDNET",
            "cnpj": "32.142.571/0001-57",
            "city": "BELO HORIZONTE/MG",
            "email": "beto.cetec@gmail.com",
            "phone": "31992762843",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 133,
            "contacts": 2,
            "personas": 2,
            "seniority": "C-level / Dono",
            "reason": "Conta com 2 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque o cargo tem poder de decisão ou influência direta sobre tese de retenção, margem e diferenciação por SVA.",
            "nextStep": "Enviar diagnóstico executivo de retenção + convite para conversa de 20 min com simulação de churn.",
            "tag": "ABM_YouSafer_01_T2",
            "source": null,
            "abmType": "1:Poucos"
          }
        ],
        "crmSteps": [
          {
            "day": "D0",
            "channel": "E-mail 1:1",
            "goal": "Abrir dor executiva",
            "message": "{{Nome}}, olhando para provedores como {{Empresa}}, a discussão não é mais “ter mais um SVA”, é proteger margem e reduzir churn sem entrar em guerra de preço. Fizemos um diagnóstico rápido para medir onde a base pode estar perdendo valor percebido.",
            "cta": "Responder “quero diagnóstico”",
            "condition": "Abriu/clicou/respondeu",
            "tag": "DECISOR_D0",
            "nextStatus": "Engajamento inicial"
          },
          {
            "day": "D2",
            "channel": "LinkedIn conexão",
            "goal": "Criar familiaridade",
            "message": "{{Nome}}, vi que você está à frente da {{Empresa}}. Estou conectando com donos de provedores que estão olhando retenção e diferenciação com mais profundidade.",
            "cta": "Aceitar conexão",
            "condition": "Conectou",
            "tag": "DECISOR_D2",
            "nextStatus": "Initial engagement"
          },
          {
            "day": "D5",
            "channel": "E-mail prova/insight",
            "goal": "Gerar MQA",
            "message": "Trouxe uma simulação simples: quanto custa perder 1% da base por mês versus criar um argumento de valor percebido com saúde e assistência. Vale eu te mandar a conta?",
            "cta": "Receber simulação",
            "condition": "Resposta positiva",
            "tag": "DECISOR_D5",
            "nextStatus": "MQA"
          }
        ]
      },
      {
        "key": "comercial",
        "label": "Comercial / Vendas",
        "role": "Diretor, gerente ou liderança comercial que precisa vender plano de maior valor sem depender de desconto.",
        "short": "Comercial",
        "tone": "Prático, pitch e argumento de venda",
        "asset": "Kit comercial SVA saúde",
        "leads": [
          {
            "rank": 1,
            "name": "JULIO CESAR DE BRITO",
            "role": "GERENTE COMERCIAL",
            "company": "NET VALE LTDA",
            "cnpj": "09.460.884/0001-31",
            "city": "CORONEL FABRICIANO/MG",
            "email": "julio@netvale.psi.br",
            "phone": "31985852034",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 156,
            "contacts": 4,
            "personas": 3,
            "seniority": "Gerência",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": "https://netvale.psi.br",
            "abmType": "1:1"
          },
          {
            "rank": 2,
            "name": "RODOLFO PERNA FERREIRA",
            "role": "DIRETOR EXECUTIVO",
            "company": "VBTELECOM",
            "cnpj": "08.709.153/0001-14",
            "city": "MONSENHOR PAULO/MG",
            "email": "rodolfo@vbtelecom.net.br",
            "phone": "35999520045",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 156,
            "contacts": 2,
            "personas": 3,
            "seniority": "C-level / Dono",
            "reason": "Conta com 2 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": "https://vbtelecom.net.br",
            "abmType": "1:1"
          },
          {
            "rank": 3,
            "name": "BERNARDO MESQUITA PELLUCCI BARRETO",
            "role": "GERENTE DE VENDAS",
            "company": "OMNITEL",
            "cnpj": "49.712.446/0001-38",
            "city": "BELO HORIZONTE/MG",
            "email": "bernardopellucci@gmail.com",
            "phone": "31971832779",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 147,
            "contacts": 4,
            "personas": 4,
            "seniority": "Gerência",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 4,
            "name": "GABRIELLE MIRANDA FERREIRA",
            "role": "COMERCIAL",
            "company": "NETWISE EMPRESAS",
            "cnpj": "55.011.724/0001-22",
            "city": "LAGOA DA PRATA/MG",
            "email": "gabrielle.miranda@netwiseempresas.com.br",
            "phone": "37999964138",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 141,
            "contacts": 5,
            "personas": 4,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": "https://netwise.com.br",
            "abmType": "1:1"
          },
          {
            "rank": 5,
            "name": "FABIO BRUNO NUNES SANTOS",
            "role": "DIRETOR COMERCIAL",
            "company": "ITANET",
            "cnpj": "00.068.334/0001-05",
            "city": "ITABIRA/MG",
            "email": "fabio@itanel.com.br",
            "phone": "31987720208",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 141,
            "contacts": 1,
            "personas": 2,
            "seniority": "C-level / Dono",
            "reason": "Conta com 1 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T2",
            "source": "https://itanel.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 6,
            "name": "LUÍS FELIPE FONSECA TEIXEIRA",
            "role": "CLOSER",
            "company": "OMNITEL",
            "cnpj": "49.712.446/0001-38",
            "city": "BELO HORIZONTE/MG",
            "email": "luisfelipefonseca0071@gmail.com",
            "phone": "31995270968",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 139,
            "contacts": 4,
            "personas": 4,
            "seniority": "Coord/Supervisão",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 7,
            "name": "CASSIANA DA SILVA RODRIGUES",
            "role": "VENDEDORA EXTERNA",
            "company": "IMPLANTAR TELECOM",
            "cnpj": "29.171.619/0001-40",
            "city": "BELO HORIZONTE/MG",
            "email": "kassybhz@gmail.com",
            "phone": "31993823060",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 135,
            "contacts": 8,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 8 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 8,
            "name": "EMILY VITORIA DE ALMEIDA CUNHA",
            "role": "CONSULTORA DE VENDAS",
            "company": "IMPLANTAR TELECOM",
            "cnpj": "29.171.619/0001-40",
            "city": "BELO HORIZONTE/MG",
            "email": "emilyvac14@gmail.com",
            "phone": "31985960918",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 135,
            "contacts": 8,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 8 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 9,
            "name": "GLAUCIENE GONÇALVES BIZERRA",
            "role": "VENDEDORA",
            "company": "IMPLANTAR TELECOM",
            "cnpj": "29.171.619/0001-40",
            "city": "BELO HORIZONTE/MG",
            "email": "glauciene.dpc@gmail.com",
            "phone": "31975226990",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 135,
            "contacts": 8,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 8 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 10,
            "name": "LORENA SANTOS NASCIMENTO SOARES",
            "role": "VENDEDOR EXTERNO",
            "company": "IMPLANTAR TELECOM",
            "cnpj": "29.171.619/0001-40",
            "city": "CONTAGEM/MG",
            "email": "lorenalolo958@gmail.com",
            "phone": "31997994342",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 135,
            "contacts": 8,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 8 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque comercial/vendas sente a dor de vender valor, plano premium e redução da competição por preço.",
            "nextStep": "Enviar kit comercial: pitch de SVA saúde + argumento para plano premium + convite para treinamento rápido.",
            "tag": "ABM_YouSafer_02_T1",
            "source": null,
            "abmType": "1:Poucos"
          }
        ],
        "crmSteps": [
          {
            "day": "D0",
            "channel": "E-mail",
            "goal": "Dor comercial",
            "message": "{{Nome}}, quando o comercial vende só velocidade/preço, o concorrente sempre consegue copiar. O ponto é transformar benefício de saúde em argumento para vender plano de maior valor.",
            "cta": "Receber kit comercial",
            "condition": "Clique/abertura",
            "tag": "COMERCIAL_D0",
            "nextStatus": "Initial engagement"
          },
          {
            "day": "D3",
            "channel": "LinkedIn",
            "goal": "Pitch individual",
            "message": "Montei um pitch de abordagem para time comercial de provedor vender valor sem depender de desconto. Posso te enviar?",
            "cta": "Pedir kit",
            "condition": "Resposta",
            "tag": "COMERCIAL_D3",
            "nextStatus": "Meaningful engagement"
          },
          {
            "day": "D7",
            "channel": "WhatsApp/e-mail",
            "goal": "Converter reunião",
            "message": "Dá para adaptar esse pitch para a realidade da {{Empresa}} em 20 min e deixar pronto para o time usar.",
            "cta": "Agendar conversa",
            "condition": "Aceite reunião",
            "tag": "COMERCIAL_D7",
            "nextStatus": "SQA"
          }
        ]
      },
      {
        "key": "cs",
        "label": "CS / Retenção / Operações",
        "role": "Operação, atendimento, retenção e relacionamento com a base de assinantes.",
        "short": "CS/Retenção",
        "tone": "Operacional, régua e ativação",
        "asset": "Régua 30 dias de retenção",
        "leads": [
          {
            "rank": 1,
            "name": "YAN DE CASTRO",
            "role": "GERENTE OPERACIONAL",
            "company": "OMNITEL",
            "cnpj": "49.712.446/0001-38",
            "city": "BELO HORIZONTE/MG",
            "email": "yancastroprofissional@gmail.com",
            "phone": "31990623700",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 147,
            "contacts": 4,
            "personas": 4,
            "seniority": "Gerência",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 2,
            "name": "LUIS GUSTAVO RIBEIRO CARVALHO",
            "role": "SUPORTE",
            "company": "NETWISE EMPRESAS",
            "cnpj": "02.728.850/0001-36",
            "city": "LAGOA DA PRATA/MG",
            "email": "luisgcarvalho@netwise.com.br",
            "phone": "37998592740",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 135,
            "contacts": 5,
            "personas": 4,
            "seniority": "Operacional",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T1",
            "source": "https://netwise.com.br",
            "abmType": "1:1"
          },
          {
            "rank": 3,
            "name": "ANA FLAVIA MOREIRA DO SANTOS",
            "role": "SAC",
            "company": "IMPLANTAR TELECOM",
            "cnpj": "29.171.619/0001-40",
            "city": "BELO HORIZONTE/MG",
            "email": "ana.flavia.86241@gmail.com",
            "phone": "31992991471",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 129,
            "contacts": 8,
            "personas": 2,
            "seniority": "Operacional",
            "reason": "Conta com 8 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T1",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 4,
            "name": "MARCOS VINÍCIUS FERREIRA",
            "role": "SAC",
            "company": "IMPLANTAR TELECOM",
            "cnpj": "29.171.619/0001-40",
            "city": "BELO HORIZONTE/MG",
            "email": "marcosvfs13@gmail.com",
            "phone": "31988689925",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 129,
            "contacts": 8,
            "personas": 2,
            "seniority": "Operacional",
            "reason": "Conta com 8 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T1",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 5,
            "name": "MARCOS VINICIUS RODRIGUES DOS SANTOS",
            "role": "SAC",
            "company": "IMPLANTAR TELECOM",
            "cnpj": "29.171.619/0001-40",
            "city": "BELO HORIZONTE/MG",
            "email": "yudimarcos25@gmail.com",
            "phone": "31988740243",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 129,
            "contacts": 8,
            "personas": 2,
            "seniority": "Operacional",
            "reason": "Conta com 8 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T1",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 6,
            "name": "GABRIEL FRANCISCO CORDEIRO GARCIA",
            "role": "GESTOR OPERCIONAL",
            "company": "GDNET",
            "cnpj": "32.142.571/0001-57",
            "city": "ESMERALDAS/MG",
            "email": "gabrielspd45@gmail.com",
            "phone": "31994336357",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 125,
            "contacts": 2,
            "personas": 2,
            "seniority": "Gerência",
            "reason": "Conta com 2 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T2",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 7,
            "name": "EPOLIANE REGINA CUSTÓDIA FERREIRA",
            "role": "BACKOFFICE B2B",
            "company": "GOX",
            "cnpj": "07.543.400/0001-92",
            "city": "ITAÚNA/MG",
            "email": "epoliane.ferreira@goxinternet.com.br",
            "phone": "31996365161",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 117,
            "contacts": 4,
            "personas": 2,
            "seniority": "Não identificado",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T2",
            "source": "https://goxdatacenter.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 8,
            "name": "PEDRO HENRIQUE CARDOSO BRANDÃO",
            "role": "SUPERVISOR DE ATENDIMENTO AO CLIENTE",
            "company": "FIBINET SOLUÇÕES",
            "cnpj": "32.687.867/0001-53",
            "city": "CONTAGEM/MG",
            "email": "pedrohcb002@gmail.com",
            "phone": "31973453777",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 116,
            "contacts": 3,
            "personas": 3,
            "seniority": "Coord/Supervisão",
            "reason": "Conta com 3 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T2",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 9,
            "name": "LUCAS HENRIQUE SOUZA ARAUJO",
            "role": "ATENTENDE DE SUPORTE TECNICO",
            "company": "VIP TECNOLOGIA LTDA",
            "cnpj": "23.121.314/0001-48",
            "city": "ITAPECERICA/MG",
            "email": "lucas.araujo@viptecnologia.com.br",
            "phone": "37998691185",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 115,
            "contacts": 5,
            "personas": 2,
            "seniority": "Operacional",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T2",
            "source": "https://viptecnologia.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 10,
            "name": "CLARA OLINTO EUZEBIO",
            "role": "OPERADOR DE SUPORTE",
            "company": "GOX",
            "cnpj": "07.543.400/0001-92",
            "city": "ITAÚNA/MG",
            "email": "claraolinto3@gmail.com",
            "phone": "37998730507",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 112,
            "contacts": 4,
            "personas": 2,
            "seniority": "Operacional",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque CS/operação/SAC sofre com cancelamento, downgrade, suporte e ativação do benefício na base.",
            "nextStep": "Enviar régua de retenção/ativação 30 dias + checklist de uso no SAC/CS.",
            "tag": "ABM_YouSafer_03_T2",
            "source": "https://goxdatacenter.com.br",
            "abmType": "1:Poucos"
          }
        ],
        "crmSteps": [
          {
            "day": "D0",
            "channel": "E-mail",
            "goal": "Dor de retenção",
            "message": "{{Nome}}, quando o cliente pede cancelamento, o atendimento precisa de algo melhor que desconto. A régua mostra como usar SVA de saúde nos 30 primeiros dias e na reversão.",
            "cta": "Ver régua 30 dias",
            "condition": "Clique",
            "tag": "CS_D0",
            "nextStatus": "Initial engagement"
          },
          {
            "day": "D4",
            "channel": "E-mail",
            "goal": "Prova operacional",
            "message": "A ideia é simples: ativar, lembrar, educar e usar o benefício como argumento antes do cliente pensar em sair.",
            "cta": "Receber checklist",
            "condition": "Download",
            "tag": "CS_D4",
            "nextStatus": "Meaningful engagement"
          },
          {
            "day": "D8",
            "channel": "LinkedIn/WhatsApp",
            "goal": "Converter validação",
            "message": "Posso te mostrar como isso entraria no SAC/CS da {{Empresa}} sem aumentar carga operacional.",
            "cta": "Validar fluxo",
            "condition": "Resposta",
            "tag": "CS_D8",
            "nextStatus": "SQA"
          }
        ]
      },
      {
        "key": "financeiro",
        "label": "Financeiro / Administrativo",
        "role": "Financeiro, compras e administrativo que avaliam ROI, margem, churn e custo de implantação.",
        "short": "Financeiro",
        "tone": "Números, risco e margem",
        "asset": "Calculadora churn x SVA",
        "leads": [
          {
            "rank": 1,
            "name": "GIOVANNA SOUSA VALADÃO",
            "role": "FINANCEIRO",
            "company": "NETWISE EMPRESAS",
            "cnpj": "02.728.850/0001-36",
            "city": "LAGOA DA PRATA/MG",
            "email": "giovannavaladao@netwise.com.br",
            "phone": "37998461582",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 141,
            "contacts": 5,
            "personas": 4,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T1",
            "source": "https://netwise.com.br",
            "abmType": "1:1"
          },
          {
            "rank": 2,
            "name": "THIAGO AUGUSTO SILVA",
            "role": "SUPERVISOR DE COMPRAS",
            "company": "MAXX CONECTADO",
            "cnpj": "08.395.644/0001-38",
            "city": "BELO HORIZONTE/MG",
            "email": "thiago.augusto@maxxnettelecom.com",
            "phone": "31994667475",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 141,
            "contacts": 5,
            "personas": 2,
            "seniority": "Coord/Supervisão",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T1",
            "source": "https://maxxnettelecom.com",
            "abmType": "1:Poucos"
          },
          {
            "rank": 3,
            "name": "LUIZ GUSTAVO PAIVA MARQUES PEREIRA",
            "role": "SETOR DE COMPRAS",
            "company": "NET VALE LTDA",
            "cnpj": "09.460.884/0001-31",
            "city": "CORONEL FABRICIANO/MG",
            "email": "luizgustavo@netvale.psi.br",
            "phone": "31971458272",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 141,
            "contacts": 4,
            "personas": 3,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T1",
            "source": "https://netvale.psi.br",
            "abmType": "1:1"
          },
          {
            "rank": 4,
            "name": "FELIPE DE ASSIS BODEVAN",
            "role": "SÓCIO ADM",
            "company": "RAIMAX",
            "cnpj": "08.804.735/0001-80",
            "city": "SAO LOURENCO/MG",
            "email": "felipe@raimaxfibra.com.br",
            "phone": "35999057810",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 141,
            "contacts": 1,
            "personas": 2,
            "seniority": "C-level / Dono",
            "reason": "Conta com 1 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T2",
            "source": "https://raimaxfibra.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 5,
            "name": "LAYS FERREIRA DIANA ROCHA",
            "role": "FINANCEIRO",
            "company": "ALFA TELECOM",
            "cnpj": "37.197.428/0001-86",
            "city": "PARACATU/MG",
            "email": "laysdiana@hotmail.con",
            "phone": "38998185662",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 133,
            "contacts": 4,
            "personas": 3,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 6,
            "name": "TIAGO DOS REIS RAMOS",
            "role": "FINANCEIRO",
            "company": "NEWNET",
            "cnpj": "09.128.236/0001-82",
            "city": "MATEUS LEME/MG",
            "email": "ti_designer@hotmail.com",
            "phone": "31990722326",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 133,
            "contacts": 4,
            "personas": 3,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 7,
            "name": "ALEXANDRE HENRIQUE DIAS",
            "role": "RH",
            "company": "NETWISE EMPRESAS",
            "cnpj": "02.728.850/0001-36",
            "city": "LAGOA DA PRATA/MG",
            "email": "alexandrehdias@netwise.com.br",
            "phone": "37991362674",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 132,
            "contacts": 5,
            "personas": 4,
            "seniority": "Não identificado",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T1",
            "source": "https://netwise.com.br",
            "abmType": "1:1"
          },
          {
            "rank": 8,
            "name": "LARISSA CATARINA RAMOS",
            "role": "GERENTE ADMINISTRATIVO",
            "company": "TOP37 INTERNET",
            "cnpj": "26.198.692/0001-18",
            "city": "FORMIGA/MG",
            "email": "larissa.ramos@conexao10.com.br",
            "phone": "37998388495",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 125,
            "contacts": 1,
            "personas": 2,
            "seniority": "Gerência",
            "reason": "Conta com 1 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T2",
            "source": "https://conexao10.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 9,
            "name": "KÁTIA FAUSTINO DE CAMPOS",
            "role": "ANALISTA DE RECURSOS HUMANOS",
            "company": "INTERNET SUPER LTDA",
            "cnpj": "24.774.313/0001-65",
            "city": "JOÃO MONLEVADE/MG",
            "email": "rh@internetsuper.com.br",
            "phone": "31992115723",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 118,
            "contacts": 3,
            "personas": 3,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 3 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T2",
            "source": "https://internetsuper.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 10,
            "name": "EMERSON DE SOUZA SANTOS",
            "role": "DIR. ADMINISTRATIVO",
            "company": "HEXA TELECOM",
            "cnpj": "09.361.993/0001-00",
            "city": "BELO HORIZONTE/MG",
            "email": "emerson@hexatelecom.com.br",
            "phone": "31987997411",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 112,
            "contacts": 5,
            "personas": 2,
            "seniority": "Não identificado",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque financeiro/adm valida custo por assinante, ROI, impacto de churn e viabilidade operacional.",
            "nextStep": "Enviar calculadora churn x desconto x SVA + proposta de validar custo por assinante.",
            "tag": "ABM_YouSafer_04_T2",
            "source": "https://hexatelecom.com.br",
            "abmType": "1:Poucos"
          }
        ],
        "crmSteps": [
          {
            "day": "D0",
            "channel": "E-mail",
            "goal": "Business case",
            "message": "{{Nome}}, a conta que importa não é só custo do SVA. É custo do churn, desconto concedido e perda de LTV. Montei uma calculadora simples para isso.",
            "cta": "Receber calculadora",
            "condition": "Clique",
            "tag": "FIN_D0",
            "nextStatus": "Initial engagement"
          },
          {
            "day": "D3",
            "channel": "E-mail",
            "goal": "ROI",
            "message": "Com poucos dados — base ativa, churn médio e desconto médio — já dá para estimar se o SVA faz sentido como proteção de margem.",
            "cta": "Simular cenário",
            "condition": "Resposta",
            "tag": "FIN_D3",
            "nextStatus": "Meaningful engagement"
          },
          {
            "day": "D7",
            "channel": "E-mail",
            "goal": "Levar para decisão",
            "message": "Se fizer sentido, validamos junto com comercial/gestão o impacto esperado e montamos um business case.",
            "cta": "Agendar validação",
            "condition": "Aceite reunião",
            "tag": "FIN_D7",
            "nextStatus": "SQA"
          }
        ]
      },
      {
        "key": "ti",
        "label": "TI / Técnico / Redes",
        "role": "Time técnico que precisa reduzir objeção de implantação e entender esforço operacional.",
        "short": "TI/Técnico",
        "tone": "Viabilidade, integração e suporte",
        "asset": "Checklist técnico de implantação",
        "leads": [
          {
            "rank": 1,
            "name": "RODOLFO PERNA FERREIRA",
            "role": "DIRETOR EXECUTIVO",
            "company": "VBTELECOM",
            "cnpj": "08.709.153/0001-14",
            "city": "MONSENHOR PAULO/MG",
            "email": "rodolfo@vbtelecom.net.br",
            "phone": "35999520045",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 156,
            "contacts": 2,
            "personas": 3,
            "seniority": "C-level / Dono",
            "reason": "Conta com 2 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": "https://vbtelecom.net.br",
            "abmType": "1:1"
          },
          {
            "rank": 2,
            "name": "PEDRO HENRIQUE PEREIRA",
            "role": "SUPERVISOR NOC",
            "company": "NET VALE LTDA",
            "cnpj": "09.460.884/0001-31",
            "city": "CORONEL FABRICIANO/MG",
            "email": "pedro.pereira@netvale.psi.br",
            "phone": "31936180622",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 148,
            "contacts": 4,
            "personas": 3,
            "seniority": "Coord/Supervisão",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": "https://netvale.psi.br",
            "abmType": "1:1"
          },
          {
            "rank": 3,
            "name": "VITOR GANDRA ROCHA",
            "role": "COORDENADOR TÉCNICO",
            "company": "NET VALE LTDA",
            "cnpj": "09.460.884/0001-31",
            "city": "CORONEL FABRICIANO/MG",
            "email": "vitorg.rocha@hotmail.com",
            "phone": "31975239145",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 140,
            "contacts": 4,
            "personas": 3,
            "seniority": "Coord/Supervisão",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": "https://netvale.psi.br",
            "abmType": "1:1"
          },
          {
            "rank": 4,
            "name": "IGOR VINICIUS SANTOS SILVA",
            "role": "TÉCNICO",
            "company": "NETWISE EMPRESAS",
            "cnpj": "02.728.850/0001-36",
            "city": "LAGOA DA PRATA/MG",
            "email": "igorvinicius@netwise.com.br",
            "phone": "37998436380",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 135,
            "contacts": 5,
            "personas": 4,
            "seniority": "Operacional",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": "https://netwise.com.br",
            "abmType": "1:1"
          },
          {
            "rank": 5,
            "name": "GABRIEL LUCAS MELO FERREIRA",
            "role": "ANALISTA DE SISTEMAS",
            "company": "MAXX CONECTADO",
            "cnpj": "08.395.644/0001-38",
            "city": "BELO HORIZONTE/MG",
            "email": "gabriel.lucas@maxxnettelecom.com",
            "phone": "31997561572",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 134,
            "contacts": 5,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": "https://maxxnettelecom.com",
            "abmType": "1:Poucos"
          },
          {
            "rank": 6,
            "name": "WANDERSON ALVES SANTANA",
            "role": "ANALISTA DE REDES",
            "company": "MAXX CONECTADO",
            "cnpj": "08.395.644/0001-38",
            "city": "BELO HORIZONTE/MG",
            "email": "wanderson.alves@maxxnettelecom.com",
            "phone": "31993078476",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 134,
            "contacts": 5,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": "https://maxxnettelecom.com",
            "abmType": "1:Poucos"
          },
          {
            "rank": 7,
            "name": "DELEON PARREIRAS",
            "role": "SUPERVISOR DE TI",
            "company": "GOX",
            "cnpj": "07.543.400/0001-92",
            "city": "ITAÚNA/MG",
            "email": "deleon.parreiras@goxdatacenter.com.br",
            "phone": "37988403020",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 133,
            "contacts": 4,
            "personas": 2,
            "seniority": "Coord/Supervisão",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T2",
            "source": "https://goxdatacenter.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 8,
            "name": "GABRIEL MEIRELES CARDOSO",
            "role": "MARKETING",
            "company": "OMNITEL",
            "cnpj": "49.712.446/0001-38",
            "city": "CONTAGEM/MG",
            "email": "delzzin.meireles0609@gmail.com",
            "phone": "31987626884",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 132,
            "contacts": 4,
            "personas": 4,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 9,
            "name": "LUAN ALMEIDA E SILVA",
            "role": "TÉCNICO",
            "company": "ALFA TELECOM",
            "cnpj": "37.197.428/0001-86",
            "city": "PARACATU/MG",
            "email": "luan.almeida744@gmail.com",
            "phone": "38997411891",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 127,
            "contacts": 4,
            "personas": 3,
            "seniority": "Operacional",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 10,
            "name": "MATEUS PEREIRA SOUZA",
            "role": "DESENVOLVEDOR",
            "company": "MAXX CONECTADO",
            "cnpj": "08.395.644/0001-38",
            "city": "BELO HORIZONTE/MG",
            "email": "mateus.souza@maxxnettelecom.com",
            "phone": "31988444021",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 125,
            "contacts": 5,
            "personas": 2,
            "seniority": "Não identificado",
            "reason": "Conta com 5 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque TI/redes/operação valida implantação, integração, suporte e risco de atrito técnico.",
            "nextStep": "Enviar checklist técnico/operacional + fluxo de implantação/integracões + pedido de validação de complexidade.",
            "tag": "ABM_YouSafer_05_T1",
            "source": "https://maxxnettelecom.com",
            "abmType": "1:Poucos"
          }
        ],
        "crmSteps": [
          {
            "day": "D0",
            "channel": "E-mail",
            "goal": "Reduzir objeção técnica",
            "message": "{{Nome}}, antes de vender qualquer benefício para a base, o provedor precisa saber se a implantação vai gerar retrabalho. Separei um checklist técnico para validar isso.",
            "cta": "Receber checklist",
            "condition": "Clique",
            "tag": "TI_D0",
            "nextStatus": "Initial engagement"
          },
          {
            "day": "D4",
            "channel": "E-mail",
            "goal": "Operação",
            "message": "O checklist cobre ativação, comunicação, atendimento, dúvidas frequentes e pontos de integração/CRM.",
            "cta": "Validar checklist",
            "condition": "Download",
            "tag": "TI_D4",
            "nextStatus": "Meaningful engagement"
          },
          {
            "day": "D8",
            "channel": "E-mail/WhatsApp",
            "goal": "SQA técnico",
            "message": "Posso revisar com você onde isso entraria no fluxo atual da {{Empresa}} e o que precisa ser automatizado.",
            "cta": "Marcar validação técnica",
            "condition": "Resposta",
            "tag": "TI_D8",
            "nextStatus": "SQA"
          }
        ]
      },
      {
        "key": "marketing",
        "label": "Marketing / Conteúdo",
        "role": "Marketing e comunicação que transformam SVA em percepção de valor na base.",
        "short": "Marketing",
        "tone": "Conteúdo, campanha e uso recorrente",
        "asset": "Pauta de campanha para SVA",
        "leads": [
          {
            "rank": 1,
            "name": "GABRIEL MEIRELES CARDOSO",
            "role": "MARKETING",
            "company": "OMNITEL",
            "cnpj": "49.712.446/0001-38",
            "city": "CONTAGEM/MG",
            "email": "delzzin.meireles0609@gmail.com",
            "phone": "31987626884",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 1 - Prioridade máxima",
            "score": 132,
            "contacts": 4,
            "personas": 4,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 4 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T1",
            "source": null,
            "abmType": "1:1"
          },
          {
            "rank": 2,
            "name": "SAMARA RAISSA RIBEIRO RODRIGUES",
            "role": "MARKETING",
            "company": "LUMEN FIBRA",
            "cnpj": "07.987.876/0001-12",
            "city": "CURVELO/MG",
            "email": "samara@lumenfibra.com.br",
            "phone": "38998608594",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 118,
            "contacts": 3,
            "personas": 3,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 3 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T2",
            "source": "https://lumenfibra.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 3,
            "name": "HELOÍSA HELENA DE LIMA FERREIRA",
            "role": "ATENDENTE TELEMARKETING",
            "company": "LUMEN FIBRA",
            "cnpj": "07.987.876/0001-12",
            "city": "CURVELO/MG",
            "email": "heloisahelenah8@gmail.com",
            "phone": "38998485214",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 110,
            "contacts": 3,
            "personas": 3,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 3 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T2",
            "source": "https://lumenfibra.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 4,
            "name": "BIANCA PALOMA VIEIRA PEER",
            "role": "MARKETING",
            "company": "FIBINET SOLUÇÕES",
            "cnpj": "32.687.867/0001-53",
            "city": "CONTAGEM/MG",
            "email": "palomapeer@gmail.com",
            "phone": "31996203422",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 109,
            "contacts": 3,
            "personas": 3,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 3 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T2",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 5,
            "name": "THÁBATA SILVA COSTA",
            "role": "ANALISTA DE MARKETING",
            "company": "INFINITY - SEESTEL",
            "cnpj": "02.409.224/0001-87",
            "city": "43/43",
            "email": "thabatasilva4306@gmail.com",
            "phone": "(31) 99166-7107",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 2 - Boa prioridade",
            "score": 102,
            "contacts": 3,
            "personas": 3,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 3 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T2",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 6,
            "name": "EUZENI DA SILVA LAUREANO",
            "role": "AUXILIAR DE MARKETING",
            "company": "BMI TELECOMUNICAÇÕES",
            "cnpj": "43.176.694/0001-25",
            "city": "BELO HORIZONTE/MG",
            "email": "euzenisilva18@gmail.com",
            "phone": "31996458596",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 3 - Nutrição/validação",
            "score": 79,
            "contacts": 1,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 1 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T3",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 7,
            "name": "REULISON SILVA",
            "role": "MARKETING",
            "company": "CDB TELECOM",
            "cnpj": "17.311.597/0001-98",
            "city": "IBIRITÉ/MG",
            "email": "reulisonrodrigo@gmail.com",
            "phone": "31991172861",
            "fit": "ICP Provedor/Telecom",
            "tier": "Tier 3 - Nutrição/validação",
            "score": 79,
            "contacts": 1,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 1 contato(s) no evento/base e fit ICP Provedor/Telecom. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T3",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 8,
            "name": "STEPHANIE PIRTTIAHO PEDROSO",
            "role": "HEAD DE MARKETING",
            "company": "B4",
            "cnpj": "08.593.052/0001-20",
            "city": "SÃO PAULO/SP",
            "email": "stephanie.pedroso@somosb4.com.br",
            "phone": "(11) 94471-1601",
            "fit": "Validar ICP",
            "tier": "Tier 3 - Nutrição/validação",
            "score": 85,
            "contacts": 2,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 2 contato(s) no evento/base e fit Validar ICP. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T3",
            "source": "https://somosb4.com.br",
            "abmType": "1:Poucos"
          },
          {
            "rank": 9,
            "name": "MARCOS DELON OLIVEIRA DE ARAÚJO",
            "role": "GESTOR DE MARKETING",
            "company": "PLUGIN",
            "cnpj": "49.732.433/0001-20",
            "city": "BRASÍLIA/DF",
            "email": "marcosd.profissional@gamail.com",
            "phone": "(61) 99871-2135",
            "fit": "Adjacente/Parceiro",
            "tier": "Tier 4 - Baixa prioridade/validar",
            "score": 71,
            "contacts": 1,
            "personas": 2,
            "seniority": "Gerência",
            "reason": "Conta com 1 contato(s) no evento/base e fit Adjacente/Parceiro. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T4",
            "source": null,
            "abmType": "1:Poucos"
          },
          {
            "rank": 10,
            "name": "ANA LUIZA CALVO BORELLI",
            "role": "ANALISTA DE MARKETING",
            "company": "BRISKCOM",
            "cnpj": "05.493.946/0001-50",
            "city": "NOVA LIMA/MG",
            "email": "analuizaborelli@gmail.com",
            "phone": "31987427771",
            "fit": "Validar ICP",
            "tier": "Tier 4 - Baixa prioridade/validar",
            "score": 54,
            "contacts": 1,
            "personas": 2,
            "seniority": "Analista/Especialista",
            "reason": "Conta com 1 contato(s) no evento/base e fit Validar ICP. Priorizar porque marketing ajuda a transformar SVA em percepção de valor, campanha e conteúdo para base.",
            "nextStep": "Enviar pauta de conteúdo para comunicar benefício na base + exemplos de post/e-mail/app.",
            "tag": "ABM_YouSafer_06_T4",
            "source": null,
            "abmType": "1:Poucos"
          }
        ],
        "crmSteps": [
          {
            "day": "D0",
            "channel": "E-mail",
            "goal": "Conteúdo",
            "message": "{{Nome}}, muitos provedores já têm SVA, mas poucos comunicam isso bem para gerar valor percebido. Montei uma pauta para transformar o benefício em conteúdo para base e aquisição.",
            "cta": "Receber pauta",
            "condition": "Clique",
            "tag": "MKT_D0",
            "nextStatus": "Initial engagement"
          },
          {
            "day": "D3",
            "channel": "LinkedIn",
            "goal": "Autoridade",
            "message": "A pauta mistura post, e-mail, vídeo curto e conteúdo de educação da base para aumentar uso e retenção.",
            "cta": "Ver ideias",
            "condition": "Resposta",
            "tag": "MKT_D3",
            "nextStatus": "Meaningful engagement"
          },
          {
            "day": "D7",
            "channel": "E-mail",
            "goal": "Converter briefing",
            "message": "Posso adaptar essa pauta para a comunicação da {{Empresa}} e já sair com 4 conteúdos da semana.",
            "cta": "Agendar briefing",
            "condition": "Aceite",
            "tag": "MKT_D7",
            "nextStatus": "SQA"
          }
        ]
      }
    ],
    "abmTypes": {
      "1:1": {
        "label": "ABM 1:1",
        "position": "Conta estratégica individual",
        "criteria": "Score muito alto, conta Tier 1 e múltiplos stakeholders. Investimento e personalização máximos.",
        "motion": "O lead entra em uma rota altamente personalizada com pesquisa pública, abordagem do Gabriel, diagnóstico 1:1 e business case.",
        "steps": [
          "Scrap público e tese da conta",
          "Briefing executivo individual",
          "Contato do Gabriel + SDR",
          "Diagnóstico 1:1",
          "Business case e proposta"
        ]
      },
      "1:Poucos": {
        "label": "ABM 1:poucos",
        "position": "Cluster por dor/persona",
        "criteria": "Conta com bom score, cargo claro ou grupo de contas semelhantes. Personalização por cluster.",
        "motion": "O lead entra em uma rota por persona, com LP/ativo específico, cadência CRM e remarketing até virar SQA.",
        "steps": [
          "Agrupar por persona e dor",
          "Enviar LP/ativo específico",
          "Cadência Apollo + CRM",
          "Retargeting e prova social",
          "SDR/Closer com contexto"
        ]
      },
      "1:Muitos": {
        "label": "ABM 1:muitos",
        "position": "Nutrição em escala",
        "criteria": "Score menor, cargo menos claro ou sem múltiplos stakeholders. Escala primeiro, venda depois.",
        "motion": "O lead recebe conteúdo educativo, redes sociais, blog e remarketing até demonstrar intenção real.",
        "steps": [
          "Inserir na base segmentada",
          "Distribuir conteúdo por canal",
          "Medir clique/visita/engajamento",
          "Elevar score por intenção",
          "Mover para cluster ou SQA"
        ]
      }
    }
  }
};
