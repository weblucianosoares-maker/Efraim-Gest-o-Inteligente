
import React from 'react';
import { Banner, Division } from './types';

export const WHATSAPP_NUMBER = "5521972070247";

export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
}

export const ARTICLES: Article[] = [
  {
    id: "processos-empresa-autogerenciavel",
    category: "Processos",
    title: "Como estruturar processos para sua empresa rodar sem você",
    excerpt: "Se a sua presença é o único motor que mantém as engrenagens girando, você não tem um patrimônio, tem um autoemprego de luxo que sequestra sua liberdade.",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A ilusão do controle total</h2><p>Você acorda e a primeira coisa que faz é checar o grupo da empresa. Antes do café, já resolveu três dúvidas operacionais que sua equipe deveria saber responder sozinha. Você se sente orgulhoso de ser "o dono que está em tudo", mas a verdade é mais amarga: sua empresa é uma extensão da sua biologia. Se você para, ela para. Você não construiu um sistema; você construiu uma dependência.</p><h2>O teto invisível do esforço individual</h2><p>O problema não é que seu time é desinteressado. O problema é que eles foram treinados para não pensar, apenas para te consultar. Continuar sendo o centro de cada pequena decisão custa caro. Custa o seu sono, sua saúde e, financeiramente, limita o crescimento da empresa à sua capacidade física de estar presente. Enquanto você apaga incêndios na expedição ou valida descontos irrisórios, ninguém está pilotando o navio.</p><h2>A empresa como uma máquina replicável</h2><p>Pense no seu negócio como um motor. Se cada pistão dependesse de um comando manual para subir e descer, ele nunca passaria da marcha lenta. Processos não são burocracia; são as engrenagens que institucionalizam a inteligência do dono. O pulo do gato é tirar o "Como Fazemos Aqui" de dentro da sua cabeça e colocar em um método que qualquer colaborador treinado possa executar com o mesmo padrão de excelência que você faria.</p><h2>Estrutura sobre esforço</h2><p>Para transformar o caos em sistema, você precisa mapear os fluxos críticos. Comece pelo que gera 80% do resultado. Documente as entradas, o processamento e a saída esperada. Defina protocolos de exceção: o que o time faz quando algo sai do script? Quando a regra é clara e o indicador é público, a necessidade da sua intervenção constante desaparece. Gestão é sobre previsibilidade, não sobre heroísmo.</p><h2>O próximo passo lógico</h2><p>Se você percebe que a operação atual te consome e impede a escala real do seu negócio, talvez o problema não seja esforço, mas estrutura. Manter o modelo atual é aceitar que seu crescimento já atingiu o limite máximo.</p><p>Para entender onde estão os nós que travam sua liberdade operacional, um olhar técnico externo é fundamental. O Diagnóstico 360 da Efraim mapeia esses gargalos sistêmicos para que você recupere seu papel de estrategista.</p>`
  },
  {
    id: "rh-estrategico-talentos",
    category: "Gente & Cultura",
    title: "RH Estratégico: Por que contratar por competência e demitir por valores?",
    excerpt: "Contratar o melhor currículo e ignorar o alinhamento de valores é como colocar um motor de Ferrari em um chassi de trator: o sistema vai quebrar.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A armadilha da competência técnica isolada</h2><p>Você encontrou o candidato perfeito. Experiência nas maiores do setor, referências sólidas e um conhecimento técnico que parece a solução de todos os seus problemas. Três meses depois, o clima da sua equipe está arruinado. As fofocas aumentaram, a colaboração sumiu e você tem um "brilhante solitário" que não joga para o time. Você focou na ferramenta (técnica) e esqueceu do sistema operacional (cultura).</p><h2>O custo do talento tóxico</h2><p>Manter alguém que entrega resultados mas destrói o ambiente é uma decisão financeira desastrosa no longo prazo. O custo de reposição de um colaborador na média empresa brasileira pode chegar a 15 vezes o seu salário, considerando treinamento e perda de produtividade. Pior que isso é o desgaste emocional de gerir adultos que se comportam como crianças. O problema não é a equipe; é o filtro que você usa para deixar as pessoas entrarem no seu santuário: o seu negócio.</p><h2>Cultura como filtro de segurança</h2><p>O erro está em acreditar que cultura é um quadro na parede ou uma lista de palavras bonitas. Cultura é o sistema de filtragem que garante a integridade da máquina. Se a sua empresa valoriza a autonomia e você contrata alguém que precisa de comando e controle, haverá atrito. O segredo é contratar o caráter e treinar a habilidade. Técnica se ensina. Valores são intrínsecos e imutáveis.</p><h2>A prática do alinhamento real</h2><p>RH estratégico é sobre alinhar o propósito individual ao objetivo do negócio. Isso exige clareza do dono sobre o que é inegociável. Durante o processo seletivo, as perguntas devem focar no comportamento passado em situações de pressão, não apenas em sucessos de currículo. Da mesma forma, a demissão por desalinhamento de valores deve ser rápida para não contaminar o resto do organismo. Uma célula doente, se não removida, compromete o corpo inteiro.</p><h2>O convite inteligente</h2><p>Se você sente que está sempre remando contra a maré com sua equipe, ou que os seus melhores talentos estão indo embora, o problema está na sua estrutura de seleção e retenção. Talvez você esteja tentando construir um prédio sobre um pântano cultural.</p><p>Um diagnóstico profundo da sua estrutura de gente e cultura pode revelar por que seu time não veste a camisa. Agende uma conversa estratégica conosco para identificar esses pontos cegos.</p>`
  },
  {
    id: "nr1-seguranca-juridica",
    category: "Compliance",
    title: "NR1 e Gestão de Riscos: O que muda para o seu CNPJ em 2026",
    excerpt: "As novas normas de compliance não são apenas burocracia trabalhista; são o seguro necessário para proteger o patrimônio que você levou décadas para construir.",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    content: `<h2>O risco silencioso da negligência administrativa</h2><p>Você foca em vendas, em produção e em caixa. Enquanto isso, na gaveta do administrativo, as normas regulamentadoras estão acumulando poeira ou foram feitas "apenas para constar". No Brasil, essa é a receita para um desastre patrimonial. Um acidente de trabalho ou uma fiscalização rigorosa baseada na nova NR1 pode gerar passivos que consomem o lucro de um ano inteiro em poucas semanas. O oficial de justiça não avisa quando a bomba vai estourar.</p><h2>A ilusão do "aqui nunca aconteceu nada"</h2><p>Muitos empresários operam na base da sorte. O problema é que a conformidade documental não é conformidade real. Se o seu PGR (Programa de Gerenciamento de Riscos) não reflete a rotina da operação, ele é juridicamente nulo. Continuar ignorando as atualizações sobre saúde mental e riscos psicossociais é sentar sobre uma mina terrestre. O custo da prevenção é uma fração mínima do custo de uma indenização trabalhista ou de uma interdição operacional.</p><h2>Compliance como base estrutural de valor</h2><p>O insight aqui é ver o compliance como um sistema de blindagem. Pense na sua empresa como um cofre. As normas regulamentadoras são as travas de segurança. Se uma falha, todo o conteúdo está em risco. As mudanças de 2026 exigem uma postura proativa: o empresário precisa demonstrar que gerencia o risco, não apenas que comprou equipamentos de proteção. Isso aumenta o valuation do seu negócio e reduz drasticamente a sua vulnerabilidade jurídica.</p><h2>Ações práticas de proteção</h2><p>O primeiro passo é uma auditoria de conformidade que vá além do papel. É preciso verificar se a liderança está treinada para identificar riscos antes que eles se tornem acidentes. A integração do PGR com o dia a dia da empresa deve ser orgânica. Isso envolve treinamentos recorrentes e canais de denúncia interna. Proteger o colaborador é, antes de tudo, proteger o seu CNPJ e a continuidade do seu legado familiar.</p><h2>Proteção sem milagres</h2><p>Se você não tem certeza absoluta de que sua empresa passaria ilesa por uma fiscalização hoje, você está jogando com a sorte. E o mercado brasileiro não costuma ser gentil com quem improvisa na segurança.</p><p>A Efraim possui um método específico para adequação e blindagem jurídica. Entenda como estamos protegendo outras médias empresas através do nosso Diagnóstico 360.</p>`
  },
  {
    id: "indicadores-que-importam",
    category: "Finanças",
    title: "KPIs: Os únicos 5 números que o dono da empresa precisa olhar",
    excerpt: "Gestão não é sobre ter planilhas infinitas, é sobre ter o radar ligado nos indicadores que realmente dizem se o seu navio está afundando ou acelerando.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    content: `<h2>O naufrágio por excesso de informação</h2><p>Seu sistema gera relatórios de 40 páginas. Você olha para eles e sente uma mistura de tédio e confusão. No final, acaba tomando decisões com base no saldo da conta bancária hoje. Essa "gestão por extrato" é o que mata a maioria das médias empresas brasileiras. Você está voando às cegas em meio a uma tempestade de dados inúteis. O excesso de números gera paralisia, não clareza.</p><h2>Faturamento não é lucro, caixa é rei</h2><p>Muitos empresários se vangloriam de faturar milhões, enquanto a margem líquida é uma piada e o endividamento cresce. O esforço para vender mais muitas vezes esconde o fato de que a operação está ficando mais cara e menos eficiente. O erro está em olhar para indicadores de vaidade em vez de indicadores de saúde. Continuar ignorando a margem de contribuição por produto ou o custo de aquisição de cliente é aceitar que seu lucro seja uma questão de sorte no fim do mês.</p><h2>O painel de controle do CEO</h2><p>Pense na sua empresa como um avião. O piloto não olha para 200 botões ao mesmo tempo; ele foca no altímetro, no combustível, na velocidade e na rota. O pulo do gato na gestão financeira é selecionar os KPIs (Indicadores-Chave de Desempenho) que realmente movem o ponteiro. Se você domina cinco números fundamentais, você domina o destino do negócio. O resto é detalhe operacional para seus gerentes cuidarem.</p><h2>A bússola do resultado real</h2><p>Você precisa monitorar: Margem de Contribuição (o que sobra após os custos variáveis), Ponto de Equilíbrio (quando a empresa para de perder e começa a ganhar), CAC (quanto custa trazer um novo cliente), LTV (quanto esse cliente deixa na empresa ao longo do tempo) e Ciclo Financeiro (quanto tempo seu dinheiro fica parado no estoque ou na mão do cliente). Com esses dados, a estratégia deixa de ser um palpite e vira uma engenharia de precisão.</p><h2>Clareza gera decisão</h2><p>Se você termina o mês sem saber exatamente por que sobrou (ou faltou) dinheiro, sua gestão está no escuro. Sem métricas claras, o crescimento é um risco desnecessário que pode quebrar o negócio.</p><p>O Diagnóstico 360 da Efraim filtra o ruído e entrega a clareza financeira que você precisa para decidir. Vamos identificar juntos quais números sua empresa deve perseguir agora.</p>`
  },
  {
    id: "sucessao-empresarial",
    category: "Estratégia",
    title: "Planejando a Sucessão: Sua empresa sobreviveria a uma troca de comando?",
    excerpt: "Preparar a sucessão não é sobre se aposentar, é sobre garantir que o valor que você construiu não desapareça com o tempo.",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800",
    content: `<h2>O tabu da saída do fundador</h2><p>Você construiu tudo do zero. Cada tijolo, cada cliente, cada processo passou pelas suas mãos. A ideia de que alguém possa assumir o seu lugar parece absurda ou distante. O problema é que, sem um plano de sucessão, sua empresa não é um ativo transferível; ela é um castelo de cartas que depende da sua presença física para não desmoronar. Se algo acontecer com você amanhã, sua família herdará uma dor de cabeça insolúvel, não um legado próspero.</p><h2>O risco da dependência biológica</h2><p>Empresas que dependem 100% da visão e da energia do dono morrem com ele. Na segunda geração, 70% das empresas familiares brasileiras desaparecem. O erro não é a falta de capacidade dos herdeiros, mas a falta de um sistema de governança que permita a transição. O custo de não planejar a sucessão é a desvalorização brutal do negócio. Ninguém compra ou investe em uma empresa que para de funcionar quando o dono sai da sala.</p><h2>A empresa como herança sistêmica</h2><p>O insight central é que a sucessão é o teste final da sua competência como gestor. Se a empresa sobrevive e prospera sem você, você venceu o jogo. Planejar a sucessão significa transformar o negócio em um motor autônomo. Isso envolve profissionalizar cargos chave, documentar processos e criar um conselho que guarde os valores e a estratégia, independentemente de quem ocupe a cadeira de CEO.</p><h2>Profissionalização sobre o sobrenome</h2><p>Sucessão inteligente não significa necessariamente passar o comando para os filhos, mas garantir que o comando seja exercido por quem tem competência, sob as diretrizes que você estabeleceu. Isso exige tempo. Começar a planejar hoje é o que garante que, daqui a 10 anos, seu patrimônio esteja blindado. É necessário separar o papel de sócio do papel de executivo. Quando a base estrutural está pronta, a transição deixa de ser um trauma e vira um salto de crescimento.</p><h2>Continuidade natural</h2><p>Se hoje sua empresa vale muito por causa de você, e pouco por causa dela mesma, você tem um risco de sucessão crítico. O verdadeiro sucesso é ser dispensável na rotina e indispensável na estratégia.</p><p>O Diagnóstico 360 da Efraim avalia o nível de dependência do dono e desenha o caminho para a profissionalização real do seu negócio. Vamos proteger o seu legado?</p>`
  },
  {
    id: "lideranca-executiva",
    category: "Liderança",
    title: "De 'Faz Tudo' a CEO: A transição mental necessária para escalar",
    excerpt: "O teto de crescimento da sua empresa é o seu nível de consciência como líder. Aprenda a delegar sem perder o controle.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A síndrome do herói operacional</h2><p>Você se orgulha de conhecer cada parafuso da sua fábrica ou cada linha do seu sistema de vendas. Se alguém falta, você assume o lugar. Se um cliente reclama, você resolve pessoalmente. Você se sente produtivo, mas a verdade é que você está ocupando a cadeira de um funcionário de R$ 3.000, enquanto a cadeira de CEO de R$ 30.000 está vazia. Enquanto você faz o trabalho, ninguém está pensando na empresa. Você é o gargalo do seu próprio sonho.</p><h2>O limite da energia física</h2><p>O esforço braçal te trouxe até aqui, mas é ele que vai te impedir de dobrar de tamanho. O problema não é que falta braço na equipe; é que falta espaço para eles crescerem porque você centraliza o palco. Continuar operando no "modo bombeiro" gera um burnout silencioso e impede que você veja as oportunidades de mercado que passam na sua frente. Sua empresa só cresce até onde sua visão individual alcança, e a sua visão está focada no chão da fábrica.</p><h2>Liderança como arquitetura de sistemas</h2><p>O pulo do gato é entender que sua função mudou. De executor, você passou a ser o arquiteto do sistema. Um CEO não faz o trabalho; ele garante que o sistema que faz o trabalho esteja funcionando. O erro está em confundir controle com execução. Você pode ter controle total da operação através de indicadores e processos, sem precisar colocar a mão na massa. Delegar não é "delargar"; é transferir a autoridade mantendo a responsabilidade sobre o resultado.</p><h2>A agenda do novo CEO</h2><p>A transição mental exige que você pare de resolver problemas e comece a desenhar soluções que impeçam o problema de voltar. Isso significa investir tempo em treinar pessoas, definir métricas e olhar para fora: concorrência, tendências e novos canais de tração. A liberdade do dono é proporcional à qualidade dos processos que ele institui. Quando você se torna dispensável no operacional, sua empresa se torna invencível na estratégia.</p><h2>Ação sobre estrutura</h2><p>Se você termina o dia exausto e com a sensação de que não produziu nada estratégico, sua mentalidade ainda está presa no passado. Mudar de nível exige coragem para sair da frente e deixar a empresa passar.</p><p>O Diagnóstico 360 da Efraim ajuda a redesenhar seu papel na organização para que você volte a ser o motor do crescimento, não o freio. Vamos elevar sua gestão?</p>`
  },
  {
    id: "gestao-de-conflitos-equipe",
    category: "Gente & Cultura",
    title: "Gestão de Conflitos: Como transformar tensão em inovação",
    excerpt: "Conflitos não resolvidos são como areia nas engrenagens da sua empresa. Aprenda a usar a divergência como combustível, não como dreno.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A paz perigosa da harmonia artificial</h2><p>Na sua empresa, todos parecem concordar em tudo nas reuniões. Ninguém levanta a voz, ninguém discorda do dono. No corredor, a história é outra. As tensões não resolvidas viram fofoca, queda na produtividade e boicote silencioso às novas diretrizes. Você acha que tem um time unido, mas na verdade tem uma bomba relógio de passividade. Onde não há conflito de ideias, não há evolução. O silêncio da equipe é o primeiro sinal de estagnação.</p><h2>O dreno invisível da política interna</h2><p>Conflitos de ego entre gerentes ou falhas de comunicação entre departamentos geram um retrabalho imenso. Quando as pessoas gastam energia se protegendo ou atacando colegas, o foco no cliente desaparece. O problema não é a falta de vontade; é a falta de um sistema de resolução. Continuar ignorando esses atritos custa caro: talentos vão embora e os que ficam produzem metade do que poderiam. Você está pagando uma folha de pagamento integral por um esforço parcial.</p><h2>Conflito como ferramenta de tração</h2><p>O insight é canalizar o atrito para o processo, não para as pessoas. Pense na sua empresa como um motor de combustão: sem explosão (conflito controlado), não há movimento. Gestão inteligente cria um ambiente onde a divergência técnica é incentivada. O erro está em levar a discordância para o lado pessoal. Quando o foco é a eficiência da engrenagem, o debate vira inovação e o time sai do outro lado mais forte e alinhado.</p><h2>Protocolos de comunicação clara</h2><p>Você precisa de um método para gerir crises internas. Isso envolve estabelecer rituais de feedback, definir responsabilidades sem zonas cinzentas e promover a verdade radical. Se algo não está funcionando, o time deve ter segurança para falar. Conflitos territoriais morrem quando os processos são claros e os indicadores são compartilhados. O papel do líder é ser o mediador que mantém o foco no resultado, transformando a energia da tensão em velocidade de entrega.</p><h2>Próximo passo lógico</h2><p>Se você sente que sua equipe está desunida ou que gasta tempo demais mediando brigas de ego, sua estrutura cultural está fragilizada. Um diagnóstico de cultura pode revelar onde a comunicação está rompida.</p><p>O Diagnóstico 360 da Efraim identifica esses gargalos comportamentais que travam o desempenho do seu time. Vamos profissionalizar as relações na sua empresa?</p>`
  },
  {
    id: "eficiencia-operacional-custos",
    category: "Processos",
    title: "Eficiência Operacional: Onde estão os ralos de dinheiro na sua média empresa?",
    excerpt: "Vender mais nem sempre é a solução. Às vezes, o lucro que você procura está escondido no desperdício que você não vê.",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    content: `<h2>O balde furado do faturamento crescente</h2><p>Você comemora o aumento nas vendas, mas o saldo no fim do mês continua o mesmo. Você trabalha mais, sua equipe está sobrecarregada, mas a conta não fecha como deveria. Sua empresa é como um balde furado: você despeja esforço no topo (vendas), mas o lucro escorre por ralos operacionais que você nem percebe. Vender mais em uma operação ineficiente é apenas acelerar o tamanho do prejuízo oculto.</p><h2>O custo do improviso constante</h2><p>Cada colaborador faz a tarefa de um jeito diferente. O retrabalho é aceito como algo normal. A falta de padrão gera uma variabilidade de custos que destrói qualquer planejamento. O erro está em acreditar que "cada um tem seu estilo". Estilo é para artistas; para empresas, o que importa é o processo otimizado. Continuar operando no improviso custa caro em tempo, matéria-prima e moral da equipe. Você está jogando dinheiro fora em cada processo mal desenhado.</p><h2>O lucro está na engenharia do fluxo</h2><p>O insight é que a eficiência não vem de trabalhar mais, mas de trabalhar melhor. Pense na sua operação como uma linha de montagem, independente do seu ramo. Tudo o que não agrega valor ao cliente final é desperdício e deve ser eliminado. A eficiência operacional é o que separa as empresas que sobrevivem das que dominam o mercado. O lucro real está na margem de contribuição protegida por processos blindados contra o erro humano.</p><h2>Ações de choque na produtividade</h2><p>Você precisa olhar para a sua empresa com os olhos de um engenheiro de produção. Onde estão os gargalos? Onde o material fica parado? Por que a informação demora a chegar no financeiro? Padronizar as tarefas críticas reduz o erro em até 90% e aumenta a velocidade de entrega sem precisar contratar mais ninguém. Gestão inteligente é maximizar o uso do que você já tem antes de gastar com o que você acha que precisa.</p><h2>Eficiência sem promessas vazias</h2><p>Se o seu lucro está estagnado apesar do esforço de vendas, sua operação está sangrando. O problema não é o mercado; é a ineficiência dentro de casa que consome seu patrimônio silenciosamente.</p><p>O Diagnóstico 360 da Efraim faz uma radiografia dos seus processos para encontrar e estancar esses ralos de dinheiro. Vamos otimizar sua lucratividade agora?</p>`
  },
  {
    id: "vendas-previsiveis",
    category: "Estratégia",
    title: "Vendas Previsíveis: Acabando com a montanha-russa do faturamento",
    excerpt: "Se o seu faturamento depende de indicações ou da sorte, você não tem um canal de vendas; você tem uma esperança.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1556761175-5973cf0f32e7?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A agonia da incerteza mensal</h2><p>O mês começa e você não tem ideia de quanto vai faturar no dia 30. Você depende de indicações de clientes antigos, da sorte de alguém bater na sua porta ou do esforço heroico de um vendedor que, se for embora amanhã, leva todo o resultado com ele. Essa montanha-russa emocional impede que você faça investimentos seguros. Sem previsibilidade, você não governa a empresa; o mercado é que governa você. A esperança não é uma estratégia de negócios.</p><h2>A falha da dependência comercial</h2><p>Contratar um vendedor "estrela" e entregar as chaves da empresa para ele é um erro estratégico fatal. Vendas devem ser um processo da empresa, não um dom de uma pessoa específica. O custo de não ter canais de tração escaláveis é a estagnação. Se você não sabe quanto precisa investir hoje para trazer um novo cliente amanhã, você não tem um negócio, tem uma aposta arriscada. O improviso no comercial é o caminho mais curto para a falência em tempos de crise.</p><h2>Vendas como engenharia de funil</h2><p>O insight é que vender é uma ciência exata baseada em números e processos repetíveis. Pense no seu comercial como uma máquina de moer leads: entram contatos de um lado e saem contratos do outro, com uma taxa de conversão conhecida. O pulo do gato é construir canais de aquisição que você possa acelerar ou frear conforme sua capacidade produtiva. Quando a venda vira um processo operacional, a ansiedade desaparece e o crescimento torna-se uma escolha consciente.</p><h2>Construindo a máquina de tração</h2><p>Isso exige definir etapas claras no funil de vendas, scripts testados e uma gestão rigorosa de CRM. Você precisa saber o CAC (Custo de Aquisição de Cliente) de cada canal. O marketing deve servir à venda com precisão cirúrgica. Quando o processo é institucionalizado, qualquer vendedor treinado consegue entregar o resultado mínimo esperado. A previsibilidade vem da disciplina na execução do método, não do brilho individual de um talento isolado.</p><h2>Crescimento com clareza</h2><p>Se hoje você se sente refém do mercado ou do seu time de vendas, sua estrutura comercial está quebrada. Sem previsibilidade, seu negócio nunca terá paz para escalar.</p><p>O Diagnóstico 360 da Efraim mapeia suas falhas de tração e ajuda a desenhar sua máquina de vendas. Entenda como podemos dar previsibilidade ao seu faturamento.</p>`
  },
  {
    id: "saude-mental-corporativa",
    category: "Gente & Cultura",
    title: "Saúde Mental no Trabalho: O novo pilar da produtividade sustentável",
    excerpt: "O burnout da sua equipe não é falta de resiliência, é sintoma de uma gestão caótica que consome o ativo mais caro da sua empresa: o foco.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A exaustão como custo operacional oculto</h2><p>Sua equipe parece desmotivada, os erros aumentaram e o clima de "urgência constante" está drenando a energia de todos. Você olha para isso e pensa que o time está fraco ou que a geração atual não quer trabalhar. A verdade é mais técnica: o burnout e a exaustão são subprodutos de processos mal desenhados e falta de clareza nas metas. Pessoas estressadas erram mais, tomam decisões piores e faltam mais. Você está pagando o preço da desorganização em forma de baixa produtividade.</p><h2>O peso da desordem sistêmica</h2><p>O que realmente adoece um colaborador não é o excesso de trabalho, mas a falta de sentido e a incerteza. Trabalhar 10 horas por dia sem saber se o que você está fazendo será descartado amanhã é o que destrói a saúde mental. O empresário, por sua vez, carrega o peso de ser o único resolvedor de problemas, o que gera um estresse crônico que afeta sua visão estratégica. O custo disso é a paralisia do negócio. Uma empresa doente mentalmente é uma empresa que não inova e não escala.</p><h2>Saúde mental como eficiência do motor</h2><p>O insight é ver o bem-estar da equipe como a manutenção preventiva da sua máquina. Pense no cérebro dos seus colaboradores como o hardware mais caro do seu negócio. Se ele superaquece por falta de óleo (processos claros) ou por excesso de carga (desorganização), o sistema trava. Gestão inteligente não é sobre "ser bonzinho", é sobre ser eficiente. Ambientes psicologicamente seguros produzem 40% mais resultados com menos recursos.</p><h2>Estrutura para a sanidade e o lucro</h2><p>Promover a saúde mental exige clareza absoluta de papéis. Quando cada um sabe o que deve fazer, como será medido e tem as ferramentas para executar, a ansiedade desaparece. É necessário institucionalizar momentos de descompressão e, principalmente, acabar com a cultura da interrupção constante. Respeitar o foco é respeitar o lucro. Uma liderança equilibrada transmite segurança para o time executar com excelência, garantindo a sustentabilidade do negócio no longo prazo.</p><h2>Equilíbrio sem utopia</h2><p>Se o ambiente na sua empresa está pesado e a rotatividade de talentos é alta, sua gestão está falhando no pilar humano. O crescimento sustentável exige uma equipe mentalmente inteira.</p><p>O Diagnóstico 360 da Efraim analisa a saúde da sua gestão de pessoas e identifica como processos mais inteligentes podem reduzir o estresse e aumentar o lucro. Vamos conversar?</p>`
  }
];

export const BANNERS: Banner[] = [
  {
    id: 1,
    title: "Pare de ser o funcionário mais caro da sua empresa.",
    subtitle: "Transforme sua operação caótica em uma Empresa Autogerenciável. Saia do 'modo sobrevivência' para dobrar seus lucros.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920",
    ctaText: "Quero Agendar um Diagnóstico Empresarial",
    whatsappMsg: "Olá, vi o banner sobre controle de crescimento e quero agendar um diagnóstico empresarial gratuito para minha empresa."
  },
  {
    id: 2,
    title: "Segurança Jurídica e Gestão de Pessoas de Alto Nível.",
    subtitle: "Blinde seu CNPJ contra multas e construa um time que veste a camisa. Gestão moderna focada na realidade brasileira.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920",
    ctaText: "Agendar Reunião Estratégica",
    whatsappMsg: "Olá, tenho interesse na blindagem jurídica (NR1) e na gestão de cultura da Efraim."
  },
  {
    id: 3,
    title: "O Próximo Nível da sua Gestão Começa Aqui.",
    subtitle: "Consultoria executiva para pequenas e médias empresas brasileiras que buscam excelência, processos e liberdade para o dono.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1920",
    ctaText: "Quero Escalar Meu Negócio",
    whatsappMsg: "Olá, quero saber como a metodologia Efraim pode levar minha empresa para o próximo nível de escala."
  }
];

export const DIVISIONS: Division[] = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "1. Efraim Consultoria Empresarial",
    description: "Organização da casa e lucro maximizado.",
    details: "Reestruturação de processos, organização financeira e gestão estratégica. Transforme o caos em um relógio suíço."
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "2. Efraim Gente & Cultura",
    description: "Um time que realmente veste a camisa.",
    details: "Implantação de Cultura Organizacional, recrutamento estratégico e redução de turnover. Pare de perder talentos."
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "3. Efraim NR1 & Compliance",
    description: "Durma tranquilo com seu CNPJ blindado.",
    details: "Diagnóstico de Riscos Psicossociais (DRSP) e adequação às novas normas 2026. Evite multas e passivos trabalhistas."
  },
  {
    id: 4,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "4. Efraim Academy",
    description: "Velocidade e treinamento in-company.",
    details: "Palestras e workshops de vendas e liderança. Injete ânimo e técnica na sua equipe imediatamente."
  }
];
