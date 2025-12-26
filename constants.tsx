
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
    excerpt: "Você construiu um negócio ou uma gaiola de ouro? Entenda por que sua presença física ainda é o maior gargalo do seu crescimento.",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    content: `<h2>O paradoxo da presença indispensável</h2><p>Você acorda cedo e, antes do primeiro café, o WhatsApp já transborda. Problemas com fornecedores, dúvidas da equipe e incêndios operacionais que, por algum motivo, só você pode apagar. Sua empresa cresceu, o faturamento aumentou, mas sua liberdade desapareceu. O que muitos empresários chamam de "olho do dono" é, na verdade, uma dependência orgânica perigosa. Se o negócio para quando você se ausenta, você não tem um ativo; você tem um emprego de luxo onde é o funcionário mais explorado.</p><h2>O peso invisível da centralização</h2><p>O problema não é falta de esforço ou vontade da equipe. O erro está na crença de que centralizar decisões é a única forma de manter a qualidade. Essa centralização cria um teto de vidro: sua empresa só cresce até onde sua capacidade física e mental de resolver problemas alcança. Continuar operando nesse modelo custa caro em energia, saúde e, principalmente, em decisões estratégicas que deixam de ser tomadas porque você está ocupado demais escolhendo a cor do uniforme ou validando descontos irrisórios.</p><h2>A empresa como sistema operacional</h2><p>Imagine sua empresa como um motor. Se cada peça depender de um comando manual constante para girar, o motor nunca alcançará alta rotação. Processos inteligentes são o sistema operacional que permite que as engrenagens girem sozinhas. Não se trata de burocracia, mas de documentar o "Como Fazemos Aqui" de forma que a execução saia da sua cabeça e vá para um método replicável. Quando o conhecimento é institucionalizado, a equipe ganha autonomia e você recupera sua função de piloto, não de motor.</p><h2>Implementação estratégica</h2><p>Para estruturar processos que rodam sozinhos, é necessário mapear os fluxos que geram 80% do resultado. Isso envolve definir critérios de sucesso claros e protocolos de exceção. Gestão é sobre previsibilidade. Quando o colaborador sabe exatamente o que fazer quando algo sai do padrão, ele para de te ligar. Isso exige disciplina na criação de padrões visuais e rotinas de conferência que não dependam da sua visão direta.</p><h2>O próximo passo da sua liberdade</h2><p>Se você percebe que a operação atual consome mais tempo do que deveria e impede sua visão de longo prazo, talvez o problema não seja a equipe, mas a falta de estrutura sistêmica. Identificar onde estão os nós que travam sua saída do operacional é o primeiro passo para a escala real.</p><p>Para entender como transformar sua operação atual em um sistema autogerenciável, o caminho é clareza técnica. O Diagnóstico 360 da Efraim mapeia exatamente esses gargalos para que você volte a ser o estrategista do seu negócio.</p>`
  },
  {
    id: "rh-estrategico-talentos",
    category: "Gente & Cultura",
    title: "RH Estratégico: Por que contratar por competência e demitir por valores?",
    excerpt: "O custo de um colaborador tecnicamente brilhante mas culturalmente tóxico pode destruir anos de reputação da sua empresa.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A armadilha do currículo perfeito</h2><p>Você já contratou alguém com uma experiência impecável, referências sólidas e um histórico de dar inveja, apenas para ver o clima da sua equipe desmoronar em três meses? Esse é o cenário clássico na média empresa brasileira. O empresário foca na técnica porque é o que ele consegue medir no papel, mas ignora o caráter e o alinhamento de valores, que é o que realmente sustenta a operação no dia a dia. Uma peça tecnicamente forte em uma engrenagem que gira no sentido oposto acaba quebrando o sistema inteiro.</p><h2>O custo oculto da rotatividade</h2><p>Manter um processo de contratação reativo — aquele onde você só busca alguém quando a água já bateu no pescoço — é um dreno de caixa. Além do custo de rescisão e treinamento, existe o desgaste emocional do time que fica e a perda de produtividade. Continuar negligenciando a cultura organizacional como um pilar estratégico é aceitar que sua empresa seja um eterno canteiro de obras, onde nada se consolida porque as pessoas não param.</p><h2>Cultura como sistema de filtragem</h2><p>Insight central: a cultura da sua empresa é o sistema operacional sobre o qual a estratégia roda. Se o sistema está infectado por valores desalinhados, nenhuma estratégia de vendas ou produção vai funcionar. O RH estratégico não é sobre "bem-estar" ou eventos de confraternização; é sobre criar filtros rígidos que garantam que apenas pessoas com o DNA da empresa entrem e permaneçam. Demitir por valores não é crueldade, é preservação do organismo vivo que é seu negócio.</p><h2>Estratégia de gente de alto nível</h2><p>Isso exige definir o que é inegociável na sua gestão. Se a sua empresa valoriza a autonomia, você não pode contratar alguém que precisa de comando e controle constante, por melhor que seja o currículo. O alinhamento de propósito cria uma força de tração onde a supervisão constante se torna desnecessária. O resultado é um time que veste a camisa porque ela realmente serve neles, não porque são obrigados.</p><h2>Construindo o time do próximo nível</h2><p>Se você sente que está sempre remando contra a maré com sua equipe atual, ou que gasta mais tempo mediando conflitos do que crescendo, sua base cultural precisa de uma intervenção. O talento certo no lugar errado é um desperdício de potencial e dinheiro.</p><p>O Diagnóstico 360 da Efraim analisa a saúde da sua gestão de pessoas e identifica se sua estrutura cultural suporta o crescimento que você planeja para os próximos anos.</p>`
  },
  {
    id: "nr1-seguranca-juridica",
    category: "Compliance",
    title: "NR1 e Gestão de Riscos: O que muda para o seu CNPJ em 2026",
    excerpt: "Compliance não é apenas papelada. É a blindagem necessária para que um erro administrativo não leve embora o patrimônio da sua família.",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A bomba relógio dos passivos invisíveis</h2><p>Muitos donos de médias empresas olham para as normas regulamentadoras como um mal necessário ou uma burocracia que pode ser deixada para depois. No entanto, o cenário jurídico brasileiro não perdoa o descuido. Um acidente de trabalho ou uma falha de compliance na NR1 pode gerar um passivo trabalhista capaz de paralisar seu fluxo de caixa ou, em casos graves, comprometer o patrimônio pessoal dos sócios. Ignorar os riscos psicossociais e a segurança do trabalho é como dirigir em alta velocidade sem cinto: funciona até o primeiro impacto.</p><h2>A ilusão da conformidade documental</h2><p>Ter os documentos assinados em uma pasta não significa que sua empresa está protegida. A justiça do trabalho foca na realidade fática, não apenas no papel. Se o seu PGR (Programa de Gerenciamento de Riscos) não reflete a rotina real da operação, ele é inútil em uma fiscalização ou processo. O desgaste de lidar com perícias, multas e interdições consome um tempo que você deveria estar usando para buscar novos mercados e inovar seu produto.</p><h2>Segurança como base de sustentabilidade</h2><p>O insight é que a segurança jurídica e o compliance são os alicerces de uma estrutura sólida. Sem uma base estrutural protegida, qualquer andar que você construa acima estará em risco constante. As atualizações para 2026 exigem uma postura proativa na identificação de perigos, incluindo a saúde mental da equipe. Empresas que tratam a NR1 como estratégia de prevenção de perdas tornam-se mais valiosas e menos suscetíveis a crises externas.</p><h2>Gestão proativa de riscos</h2><p>Isso envolve treinar a liderança para identificar sinais de alerta antes que eles virem processos. O compliance moderno integra a segurança do trabalho ao RH e à operação. É um sistema de vigilância contínua que garante a continuidade do negócio. Quando o empresário domina esses riscos, ele para de ter medo do oficial de justiça e passa a ter controle total sobre a integridade da sua marca.</p><h2>Blindagem e continuidade</h2><p>Se você não tem certeza absoluta de que seu PGR está atualizado ou se sua equipe está realmente seguindo as normas de segurança, você está operando sob um risco desnecessário. A proteção do que você levou anos para construir deve ser prioridade zero.</p><p>Inicie seu Diagnóstico 360 com a Efraim e entenda como blindar seu CNPJ contra as incertezas jurídicas e operacionais do mercado atual.</p>`
  },
  {
    id: "indicadores-que-importam",
    category: "Finanças",
    title: "KPIs: Os únicos 5 números que o dono da empresa precisa olhar",
    excerpt: "Pare de se afogar em dashboards complexos. Descubra como gerir sua empresa olhando apenas para o que realmente move o ponteiro.",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A paralisia por excesso de informação</h2><p>Vivemos na era dos dados, mas a maioria dos empresários está "obesa" de informação e desnutrida de clareza. Você tem planilhas que não terminam mais, sistemas de ERP que geram centenas de relatórios, mas na hora de decidir o próximo investimento ou corte, você ainda usa a intuição. Olhar para muitos números ao mesmo tempo é o mesmo que não olhar para nenhum. O dashboard de um avião tem dezenas de ponteiros, mas o piloto sabe exatamente quais são críticos para não cair.</p><h2>O perigo dos indicadores de vaidade</h2><p>Faturamento é ego. Muitos empresários se orgulham de faturar milhões, enquanto a margem de lucro real é consumida por ineficiências ocultas. O esforço para vender mais muitas vezes esconde o fato de que a operação está ficando mais cara e menos lucrativa. Continuar focando apenas na linha final do faturamento é um erro estratégico que ignora a saúde do fluxo de caixa e a sustentabilidade do modelo de negócio.</p><h2>O painel de controle do CEO</h2><p>Insight central: gerir é medir. Se você não mede, você não governa. Mas você precisa medir o que é vital. Pense na sua empresa como um sistema de vasos comunicantes. Você precisa de indicadores que mostrem a pressão do sistema. O segredo é simplificar a visão para que, em 5 minutos por dia, você saiba se a empresa está saudável ou se existe um vazamento silencioso drenando seus recursos.</p><h2>Os pilares da medição estratégica</h2><p>Você precisa dominar cinco áreas: Aquisição (quanto custa trazer um cliente), Valor (quanto esse cliente deixa na casa), Eficiência (custo da operação versus entrega), Liquidez (saúde do caixa imediato) e Retenção (capacidade de manter quem já comprou). Quando esses números estão no seu radar, as decisões deixam de ser emocionais e passam a ser matemáticas. Você para de "achar" e passa a saber.</p><h2>Governança orientada a resultados</h2><p>Se hoje você se sente perdido entre o que o financeiro diz e o que a operação entrega, sua governança de dados está rompida. Sem números confiáveis, o crescimento é apenas um palpite arriscado.</p><p>O Diagnóstico 360 da Efraim ajuda a filtrar o ruído e definir os indicadores que realmente importam para o seu estágio atual de negócio.</p>`
  },
  {
    id: "sucessao-empresarial",
    category: "Estratégia",
    title: "Planejando a Sucessão: Sua empresa sobreviveria a uma troca de comando?",
    excerpt: "Sua empresa é um legado duradouro ou um castelo de cartas que desmorona sem a sua mão para segurá-lo?",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800",
    content: `<h2>O tabu da sucessão na média empresa</h2><p>Falar de sucessão parece algo distante ou um prenúncio de aposentadoria. Por causa desse tabu, a maioria dos empresários brasileiros morre com o negócio no colo. O problema é que, sem um plano de sucessão, sua empresa não tem valor de mercado (valuation) real, pois ela depende totalmente da sua figura. Se algo acontece com você amanhã, sua família herda um problema complexo e uma operação que pode sangrar até o fim em poucos meses por falta de diretriz.</p><h2>O peso da dependência do fundador</h2><p>O esforço de uma vida inteira pode ser evaporado pela falta de governança. A ausência de processos e de uma liderança preparada para assumir o bastão cria uma tensão constante entre os herdeiros ou sócios remanescentes. O desgaste emocional de não saber quem manda e como o negócio deve seguir é o principal motivo de falência de empresas familiares na segunda geração. O custo de não planejar a saída é a destruição do legado que você trabalhou décadas para construir.</p><h2>Empresa como ativo transferível</h2><p>O pulo do gato é entender que uma empresa só é realmente valiosa quando ela funciona sem o dono. O planejamento sucessório não é sobre sair hoje, mas sobre tornar o negócio uma engrenagem independente que possa ser operada por outros, seja sua família, um fundo de investimento ou um CEO profissional. Sucessão é o teste final da qualidade da sua gestão. Se ela sobrevive à sua saída, você venceu o jogo empresarial.</p><h2>Construindo a ponte para o futuro</h2><p>Isso exige a profissionalização imediata de cargos chave e a criação de um conselho, mesmo que consultivo. Preparar sucessores — sejam eles parentes ou não — envolve um processo rigoroso de mentoria e delegação de autoridade real. É necessário que a base estrutural da empresa suporte a troca de comando sem perder o ritmo. Gestão inteligente antecipa o inevitável para proteger o patrimônio.</p><h2>Proteja o valor do seu esforço</h2><p>Se hoje sua empresa vale "zero" sem você no comando, você tem um risco de sucessão crítico. Transformar o negócio em um ativo independente é o maior seguro que você pode deixar para o futuro.</p><p>Entenda o nível de maturidade e independência do seu negócio através do Diagnóstico 360 da Efraim e comece a desenhar seu legado com segurança.</p>`
  },
  {
    id: "lideranca-executiva",
    category: "Liderança",
    title: "De 'Faz Tudo' a CEO: A transição mental necessária para escalar",
    excerpt: "Você ainda se orgulha de saber trocar a lâmpada e fechar o caixa? Entenda por que suas habilidades operacionais estão matando sua empresa.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A armadilha da competência técnica</h2><p>A maioria dos donos de médias empresas começou "fazendo tudo". Você era o melhor vendedor, o melhor técnico, o financeiro e o comprador. Essa polivalência foi o que te trouxe até aqui, mas é exatamente o que vai te impedir de ir adiante. Existe uma sensação falsa de controle quando você coloca a mão na massa, mas enquanto você está resolvendo um problema de logística no galpão, ninguém está pensando na estratégia de mercado do próximo semestre. Você virou o funcionário mais caro e menos produtivo da sua própria empresa.</p><h2>O teto de crescimento do dono</h2><p>O empresário que não evolui para o papel de CEO torna-se o principal gargalo do negócio. Suas decisões são tomadas com base no cansaço e na urgência, não na visão. O problema não é falta de foco da equipe; é que a equipe não tem espaço para crescer porque você ocupa todos os espaços de decisão. O custo disso é a estagnação. Sua empresa só cresce até onde sua visão individual alcança. Continuar nesse ciclo gera um burnout silencioso e um negócio que não escala porque o "motor" está sempre no limite.</p><h2>Liderança como engenharia de sistemas</h2><p>Mude sua percepção: seu papel como CEO não é fazer o trabalho, é garantir que o sistema que faz o trabalho esteja funcionando. Um piloto de Fórmula 1 não troca o pneu durante a corrida; ele confia no sistema e na equipe para focar em pilotar. Ser CEO é sobre desenhar jogadas, contratar os melhores talentos e cobrar resultados baseados em indicadores. O insight é que sua autoridade deve vir da sua visão estratégica, não da sua capacidade de execução braçal.</p><h2>A agenda do estrategista</h2><p>A transição exige que você limpe sua agenda de tarefas repetitivas. Delegar é transferir o peso, mas manter o controle através de métricas. Você precisa de tempo livre para pensar, ler o mercado e antecipar crises. Uma empresa autogerenciável precisa de um líder que olhe para fora, enquanto a equipe e os processos cuidam do que acontece dentro. Gestão inteligente é saber quando sair da frente para o negócio passar.</p><h2>Recupere sua visão de comando</h2><p>Se você termina o dia exausto e com a sensação de que não produziu nada relevante para o futuro, sua mentalidade ainda está presa no operacional. É hora de mudar o nível do jogo.</p><p>Descubra como redesenhar seu papel na empresa através do Diagnóstico 360 da Efraim e saiba exatamente o que delegar para voltar a crescer.</p>`
  },
  {
    id: "gestao-de-conflitos-equipe",
    category: "Gente & Cultura",
    title: "Gestão de Conflitos: Como transformar tensão em inovação",
    excerpt: "Conflitos não resolvidos são como areia nas engrenagens da sua empresa. Aprenda a usar a divergência como combustível, não como dreno.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    content: `<h2>O custo do silêncio e da harmonia artificial</h2><p>Muitos empresários fogem de conflitos na equipe, acreditando que a paz interna é sinal de saúde. No entanto, o que muitas vezes existe é uma "harmonia artificial", onde os problemas são varridos para debaixo do tapete e as tensões se acumulam silenciosamente. Equipes que não discordam costumam ser apáticas e pouco inovadoras. O perigo real não é a discussão, mas o conflito não resolvido que vira fofoca de corredor, queda na produtividade e perda de talentos que se cansam do ambiente tóxico.</p><h2>O dreno de energia operacional</h2><p>Conflitos de ego e falta de clareza nas funções geram um retrabalho imenso. Quando as pessoas gastam mais tempo se protegendo ou atacando colegas do que focando no cliente, sua rentabilidade despenca. O empresário acaba gastando metade do seu dia atuando como mediador de picuinhas, o que é um uso medíocre da sua capacidade de liderança. Esse desgaste emocional corrói a base estrutural da empresa, tornando-a frágil diante de desafios externos.</p><h2>Conflito produtivo vs. Conflito destrutivo</h2><p>O insight é que você precisa de conflito de ideias, não de pessoas. Em uma estrutura de gestão inteligente, a tensão é canalizada para a solução de problemas. O papel do líder é criar um sistema onde o feedback seja direto e orientado a processos. Quando as pessoas entendem que o foco é a eficiência do motor e não o ataque pessoal, a tensão vira inovação. Transformar atrito em tração é o que separa as empresas amadoras das organizações de alto desempenho.</p><h2>Protocolos de comunicação e feedback</h2><p>Isso exige a implementação de rotinas claras de alinhamento e transparência. Funções bem definidas eliminam 80% dos conflitos territoriais. Quando cada um sabe exatamente onde começa e termina sua responsabilidade, o atrito diminui. É necessário treinar a equipe para lidar com a divergência de forma técnica e profissional, mantendo o foco no resultado final. Gestão de cultura é, acima de tudo, gestão de expectativas e comunicações.</p><h2>Sincronize sua equipe para o resultado</h2><p>Se você sente que sua equipe gasta energia demais em disputas internas ou se o clima organizacional está pesado, sua estrutura de comunicação está falhando. Um time desalinhado é um negócio estagnado.</p><p>Avalie a saúde das suas relações internas através do Diagnóstico 360 da Efraim e estabeleça uma cultura de alta performance focada no que importa.</p>`
  },
  {
    id: "eficiencia-operacional-custos",
    category: "Processos",
    title: "Eficiência Operacional: Onde estão os ralos de dinheiro na sua média empresa?",
    excerpt: "Vender mais nem sempre é a solução. Às vezes, o lucro que você procura está escondido no desperdício que você não vê.",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A ilusão do faturamento crescente</h2><p>Muitos empresários acreditam que todos os seus problemas seriam resolvidos se as vendas dobrassem. No entanto, se sua operação atual é ineficiente, dobrar as vendas só vai dobrar o tamanho do seu problema. Muitas médias empresas são como baldes furados: o dono despeja esforço e marketing no topo, mas o lucro escorre por ralos invisíveis de retrabalho, desperdício de insumos e horas-homem mal utilizadas. Faturar muito não é sinônimo de ser rico; ser eficiente é o que realmente coloca dinheiro no bolso.</p><h2>O custo do improviso constante</h2><p>A falta de padrões operacionais gera uma variabilidade de custo imensa. Cada colaborador faz do seu jeito, os erros se repetem e o empresário aceita o desperdício como "custo do negócio". Esse pensamento medíocre custa caro no longo prazo. O retrabalho não consome apenas material, consome a margem de contribuição e a paciência da sua equipe. Continuar operando no improviso é uma decisão de ficar pequeno, pois sistemas ineficientes não suportam o peso da escala.</p><h2>O método Lean aplicado à média empresa</h2><p>Insight central: eficiência operacional é sobre eliminar o que não agrega valor ao cliente final. Tudo o que acontece dentro da sua empresa que o cliente não estaria disposto a pagar é desperdício. Gestão inteligente é identificar esses gargalos e padronizar a execução para que ela seja sempre otimizada. Pense na sua empresa como uma linha de produção, independente do seu setor. Fluxos lineares, sem idas e vindas desnecessárias, são o caminho para a lucratividade real.</p><h2>Maximização de recursos e produtividade</h2><p>Isso exige olhar para os dados com crueza. Onde o tempo está sendo perdido? Por que o prazo não é cumprido? A resposta quase sempre está na falha de um processo ou na falta de uma ferramenta adequada. Implementar uma cultura de melhoria contínua faz com que a equipe se torne guardiã da eficiência. Cortar custos com inteligência é remover a gordura, mantendo o músculo que faz o negócio girar.</p><h2>Encontre o lucro oculto na sua operação</h2><p>Se você sente que trabalha demais, fatura bem, mas o saldo no fim do mês não reflete esse esforço, sua operação está sangrando. O lucro que você deseja pode estar escondido na sua própria ineficiência.</p><p>O Diagnóstico 360 da Efraim mapeia seus fluxos operacionais para identificar exatamente onde estão seus ralos de dinheiro e como estancá-los imediatamente.</p>`
  },
  {
    id: "vendas-previsiveis",
    category: "Estratégia",
    title: "Vendas Previsíveis: Acabando com a montanha-russa do faturamento",
    excerpt: "Se o seu faturamento depende de indicações ou da sorte, você não tem um canal de vendas; você tem uma esperança.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1556761175-5973cf0f32e7?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A agonia da imprevisibilidade comercial</h2><p>O mês começa e você não sabe quanto vai faturar no dia 30. Você depende de indicações, do "boca a boca" ou de um vendedor "estrela" que detém todo o conhecimento do mercado. Essa falta de controle gera uma ansiedade que paralisa qualquer plano de investimento. Sem previsibilidade, você não consegue contratar, não consegue expandir e vive em um estado de alerta constante. Uma empresa que não domina a geração de demanda está sempre a um passo do desastre.</p><h2>O erro de delegar o que não foi estruturado</h2><p>Muitos empresários tentam resolver a falta de vendas contratando um vendedor caro, esperando que ele traga a solução mágica. No entanto, o comercial é um processo de engenharia, não um dom divino. Se você não tem um método de vendas estruturado, o novo vendedor vai bater cabeça e ir embora em poucos meses, levando seu dinheiro e sua paciência. O problema não é o vendedor; é a falta de um canal de tração replicável e previsível sob o seu controle.</p><h2>Vendas como engenharia de funil</h2><p>Insight central: vender é um jogo de números e processos. Você precisa de uma máquina de geração de leads e um script de conversão que não dependa do humor de ninguém. O segredo está em entender seu CAC (Custo de Aquisição de Cliente) e seu LTV (Lifetime Value). Quando você sabe que, se investir R$ 1.000 em um canal X, retornam R$ 5.000 em vendas, você tem um negócio. Antes disso, você tem apenas um comércio reativo.</p><h2>A construção da máquina de tração</h2><p>Estruturar o comercial exige definir etapas claras no funil de vendas, usar tecnologia para monitorar conversões e ter processos de follow-up que não deixem o dinheiro esfriar na mesa. O marketing deve estar alinhado com as vendas como as duas mãos de um mesmo corpo. A previsibilidade vem da constância nas ações e no acompanhamento rigoroso de métricas. Gestão inteligente é transformar a venda em uma rotina operacional, não em um evento heróico.</p><h2>Assuma o controle do seu crescimento</h2><p>Se o seu faturamento atual é uma montanha-russa e você sente que a sorte joga mais papel do que o método no seu comercial, é hora de profissionalizar sua máquina de vendas. Sem demanda previsível, o crescimento é impossível.</p><p>Descubra como estruturar seu comercial para gerar resultados constantes através do Diagnóstico 360 da Efraim.</p>`
  },
  {
    id: "saude-mental-corporativa",
    category: "Gente & Cultura",
    title: "Saúde Mental no Trabalho: O novo pilar da produtividade sustentável",
    excerpt: "O burnout da sua liderança e da sua equipe não é falta de resiliência. É falta de processos saudáveis.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800",
    content: `<h2>A exaustão como sintoma de má gestão</h2><p>Muitos donos de médias empresas acreditam que o estresse faz parte do cargo e que a equipe deve aguentar a pressão se quiser crescer. No entanto, o que vemos hoje é uma epidemia de burnout que atinge desde o operacional até a alta gestão. O problema é que a exaustão não é sinal de produtividade, mas de ineficiência sistêmica. Pessoas cansadas erram mais, tomam decisões piores e faltam mais. O custo da saúde mental negligenciada aparece na conta de luz, no desperdício de matéria-prima e na rotatividade de talentos que você levou anos para treinar.</p><h2>O desgaste invisível da incerteza</h2><p>O que realmente adoece uma equipe não é o excesso de trabalho, mas a falta de clareza, a desorganização e a pressão por resultados impossíveis em sistemas falhos. Trabalhar 12h por dia sem saber se o que você está fazendo está certo é o caminho mais rápido para o colapso mental. O empresário, por sua vez, carrega o peso do mundo nos ombros, achando que a resiliência infinita é um pré-requisito do empreendedorismo. Continuar ignorando o fator humano é aceitar que seu negócio tenha data de validade.</p><h2>Segurança psicológica e ordem operacional</h2><p>Insight central: ambientes psicologicamente seguros são mais produtivos. Quando o colaborador sente que tem os processos certos e o apoio da liderança para executar seu papel, a ansiedade diminui e o foco aumenta. A saúde mental corporativa não é sobre "benefícios relaxantes", mas sobre ordem, respeito e previsibilidade. Gestão inteligente entende que o cérebro do colaborador é o ativo mais caro da empresa e deve ser preservado como tal.</p><h2>Liderança consciente e sustentável</h2><p>Isso exige que o empresário cuide da sua própria saúde mental para poder liderar com clareza. Delegar com critério, eliminar a cultura da urgência desnecessária e promover uma comunicação honesta são passos práticos. A adequação à NR1 também passa pela gestão dos riscos psicossociais. Uma empresa saudável atrai os melhores talentos e os mantém engajados no longo prazo. O lucro sustentável é filho de uma cultura equilibrada.</p><h2>O equilíbrio que gera escala</h2><p>Se você e seu time estão no limite da exaustão e o ambiente de trabalho parece uma panela de pressão, sua gestão precisa de um ajuste de rota. O crescimento não precisa custar a sua saúde.</p><p>Entenda como equilibrar produtividade e bem-estar através do Diagnóstico 360 da Efraim e construa uma empresa feita para durar.</p>`
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
