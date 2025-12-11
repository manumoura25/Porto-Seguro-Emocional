// Obtém qual doença foi clicada
const params = new URLSearchParams(window.location.search);
const doenca = params.get("doenca");

// Base completa de todas as doenças
const guias = {
    ansiedade: {
        titulo: "Ansiedade",
        texto: "A ansiedade é uma resposta natural do corpo diante de pressões, incertezas ou situações percebidas como ameaçadoras. Em níveis moderados, ela pode ajudar a manter o foco e a preparar o corpo para agir. Porém, quando se intensifica ou surge sem motivo claro, começa a gerar desconforto físico e emocional. Momentos de ansiedade podem causar coração acelerado, respiração curta, tensão muscular, medo, pensamentos acelerados e sensação de perda de controle. Esses sintomas surgem porque o cérebro ativa o 'modo de alerta', preparando o corpo para reagir. Com pequenas ações, porém, é possível acalmar o organismo e recuperar o equilíbrio.",
        passos: [
            { img: "/imagens/respiracao_profunda.png", texto: "Respirar profunda e conscientemente: respirar devagar, enchendo o pulmão pelo nariz e soltando o ar pela boca, reduz a tensão e ajuda o corpo a sair do estado de alerta." },
            { img: "/imagens/pessoa_confianca.png", texto: "Conversar com alguém de confiança: falar com alguém acolhedor alivia a pressão emocional e reduz o isolamento." },
            { img: "/imagens/atividade_fisica.png", texto: "Praticar atividade física leve: caminhar, alongar ou fazer exercícios simples libera endorfina e reduz a inquietação." },
            { img: "/imagens/descanso.png", texto: "Fazer uma pausa e descansar: pausas curtas ajudam a interromper o ciclo de tensão e recuperar equilíbrio emocional." },
            { img: "/imagens/escrever_diario.png", texto: "Praticar gratidão ou reflexão positiva: escrever, listar coisas boas do dia ou refletir sobre conquistas reorganiza pensamentos e diminui o negativismo." }
        ]
    },

    estresse: {
        titulo: "Estresse",
        texto: "O estresse é uma reação natural do corpo diante de situações desafiadoras, mudanças ou excesso de demandas. Em níveis equilibrados, ele pode aumentar o foco e a motivação. Porém, quando se torna constante ou muito intenso, passa a afetar a saúde física e emocional. Irritabilidade, cansaço mental, dores musculares, dificuldade de concentração e alterações no sono são sinais comuns. O corpo entra em tensão e acelera a respiração e os batimentos cardíacos. Sem pausas, o estresse se acumula e gera desgaste significativo.",
        passos: [
            { img: "/imagens/respiracao_profunda.png", texto: "Respirar lentamente e com consciência: regular a respiração relaxa os músculos e acalma o sistema nervoso." },
            { img: "/imagens/praticar_alongamentos.png", texto: "Praticar relaxamento físico: alongamentos leves, massagens ou técnicas simples diminuem dores e reduzem a tensão corporal." },
            { img: "/imagens/organizar_listas.png", texto: "Organizar pequenas tarefas: dividir grandes tarefas em partes menores reduz a sobrecarga mental." },
            { img: "/imagens/ouvir_musica.png", texto: "Fazer uma pausa de qualidade: ouvir música, caminhar ou descansar alguns minutos permite ao cérebro 'resetar'." },
            { img: "/imagens/escrever.png", texto: "Expressar emoções de forma criativa: desenhar, escrever, cantar ou tocar transforma tensão em expressão saudável." }
        ]
    },

    raiva: {
        titulo: "Raiva / Transtorno de Raiva",
        texto: "A raiva é uma emoção natural diante de injustiça, frustração ou ameaça. Em equilíbrio, ela ajuda a estabelecer limites. Porém, quando intensa ou difícil de controlar, prejudica decisões, relações e bem-estar. Sinais incluem irritação constante, impulsividade, tensão física e dificuldade de raciocinar no momento da explosão. Reconhecer a raiva cedo evita atitudes impulsivas.",
        passos: [
            { img: "/imagens/respiracao_profunda.png", texto: "Respirar fundo e contar lentamente: inspirações profundas e contagem regressiva de 10 a 1 ajudam a evitar impulsos." },
            { img: "/imagens/atividades_seguras.png", texto: "Canalizar a energia de forma segura: exercícios leves, rasgar papel ou escrever liberam a emoção sem causar danos." },
            { img: "/imagens/atividade_fisica.png", texto: "Afastar-se da situação: sair do ambiente evita aumento da irritação e conflitos." },
            { img: "/imagens/ouvir_musica.png", texto: "Usar estratégias de relaxamento: ouvir música, meditar ou tomar banho morno ajuda a estabilizar mente e corpo." },
            { img: "/imagens/ajuda_profissional.png", texto: "Buscar apoio profissional quando necessário: terapias ajudam a desenvolver autocontrole e estratégias saudáveis." }
        ]
    },

    luto: {
        titulo: "Luto",
        texto: "O luto é uma resposta natural e profunda diante da perda de alguém ou algo significativo. Envolve tristeza, saudade, confusão, culpa e irritação. Cada pessoa vive o luto de forma única. O corpo pode reagir com insônia, cansaço e dificuldade de concentração. Permitir-se sentir e buscar apoio é fundamental.",
        passos: [
            { img: "/imagens/reconhecer_emocoes.png", texto: "Permitir-se sentir: chorar, sentir tristeza ou saudade faz parte da cura." },
            { img: "/imagens/pessoa_confianca.png", texto: "Buscar apoio em pessoas de confiança: conversar reduz a solidão e ajuda a elaborar a dor." },
            { img: "/imagens/tarefas_simples.png", texto: "Manter uma rotina leve: pequenas tarefas diárias trazem estabilidade." },
            { img: "/imagens/descanso.png", texto: "Cuidar do corpo e da mente: descansar, alimentar-se bem e buscar ajuda profissional quando necessário fortalece emocionalmente." },
            { img: "/imagens/praticar_lembrancas.png", texto: "Praticar lembranças significativas: escrever histórias, ver fotos ou fazer homenagens transforma a dor em memória afetiva." }
        ]
    },

    burnout: {
        titulo: "Burnout",
        texto: "O burnout é um estado de exaustão emocional, mental e física causado por estresse intenso e prolongado, geralmente ligado ao trabalho ou aos estudos. Cansaço extremo, irritabilidade, falta de motivação e dificuldade de concentração são sinais comuns. Agir cedo é essencial para recuperar o bem-estar.",
        passos: [
            { img: "/imagens/burnout1.png", texto: "Reconhecer os sinais de exaustão: irritabilidade, cansaço extremo e queda de desempenho indicam necessidade de pausa." },
            { img: "/imagens/estabelecer_limites.png", texto: "Estabelecer limites: reduzir sobrecargas e aprender a dizer 'não' preserva energia mental." },
            { img: "/imagens/escrever_diario.png", texto: "Resgatar atividades prazerosas: hobbies e lazer, mesmo que breves, recuperam motivação." },
            { img: "/imagens/pausas_programadas.png", texto: "Criar pausas programadas: alongar, caminhar e beber água ajuda a interromper a exaustão." },
            { img: "/imagens/ajuda_profissional.png", texto: "Buscar apoio profissional: psicólogos e médicos ajudam no tratamento e prevenção de recaídas." }
        ]
    },

    depressao: {
        titulo: "Depressão",
        texto: "A depressão afeta profundamente o humor, a energia e o pensamento. Não é tristeza passageira, mas um estado persistente que dificulta atividades do dia a dia. Falta de motivação, cansaço, insônia e irritabilidade são comuns. Depressão tem tratamento e melhora com apoio profissional e autocuidado.",
        passos: [
            { img: "/imagens/reconhecer_emocoes.png", texto: "Validar os sentimentos: reconhecer tristeza e cansaço como sinais importantes, não como fraqueza." },
            { img: "/imagens/pessoa_confianca.png", texto: "Conversar com alguém de confiança: falar reduz o isolamento e traz acolhimento." },
            { img: "/imagens/tarefas_simples.png", texto: "Estimular pequenas ações diárias: levantar, tomar banho e organizar o espaço recuperam ritmo e autoestima." },
            { img: "/imagens/ouvir_musica.png", texto: "Praticar autocuidado gradual: caminhar, ouvir música suave ou escrever ajuda a aliviar a mente." },
            { img: "/imagens/ajuda_profissional.png", texto: "Buscar apoio profissional: terapia e, quando necessário, tratamento médico auxiliam na recuperação." }
        ]
    },

    insonia: {
        titulo: "Insônia",
        texto: "A insônia é a dificuldade de iniciar ou manter o sono, ou acordar sem descanso. Pode surgir por estresse, ansiedade, rotina irregular ou uso de telas. Quando persistente, prejudica energia, foco e desempenho. Hábitos saudáveis ajudam a recuperar o sono.",
        passos: [
            { img: "/imagens/rotina_sono.png", texto: "Criar uma rotina de sono: horários fixos ajudam o corpo a regular o ciclo natural." },
            { img: "/imagens/praticar_alongamentos.png", texto: "Praticar relaxamento antes de dormir: respiração profunda e alongamentos reduzem a tensão." },
            { img: "/imagens/evitar_eletronicos.png", texto: "Evitar telas antes de dormir: a luz ativa o cérebro e dificulta o sono." },
            { img: "/imagens/ambiente_escuro.png", texto: "Manter um ambiente adequado: escuridão, silêncio e temperatura confortável favorecem o descanso." },
            { img: "/imagens/evitar_cafe.png", texto: "Evitar estimulantes à noite: café, energéticos e refeições pesadas atrapalham o adormecer." }
        ]
    },

    inseguranca: {
        titulo: "Insegurança / Baixa Autoestima",
        texto: "A insegurança e a baixa autoestima surgem quando a pessoa duvida de suas capacidades, se compara aos outros ou sente que nunca é 'boa o suficiente'. Isso afeta decisões, relações e motivação. Trabalhar a autoconfiança é um processo gradual.",
        passos: [
            { img: "/imagens/reconhecer_qualidades.png", texto: "Reconhecer qualidades pessoais: lembrar conquistas e características positivas fortalece a autoconfiança." },
            { img: "/imagens/crescimento_pessoal.png", texto: "Evitar comparações: cada pessoa tem seu tempo; comparações aumentam sensação de inadequação." },
            { img: "/imagens/organizar_listas.png", texto: "Estabelecer pequenas metas alcançáveis: objetivos simples, quando concluídos, criam sensação de capacidade." },
            { img: "/imagens/pessoa_confianca.png", texto: "Buscar apoio em pessoas de confiança: aproximar-se de quem apoia e incentiva é essencial." },
            { img: "/imagens/autoafirmacao.png", texto: "Praticar autoafirmações positivas: repetir frases verdadeiras e gentis fortalece a autoimagem." }
        ]
    }
};



// --------------------------
// MONTAGEM DINÂMICA DA PÁGINA
// --------------------------

const titulo = document.getElementById("titulo-doenca");
const descricao = document.getElementById("descricao-doenca");
const passos = document.getElementById("passos");

if (!guias[doenca]) {
    titulo.innerText = "Erro";
    descricao.innerText = "Não foi possível carregar a doença selecionada.";
} else {
    const guia = guias[doenca];

    titulo.innerText = guia.titulo;
    descricao.innerText = guia.texto;

    passos.innerHTML = "";

    guia.passos.forEach((p, index) => {
        const numero = index + 1;
        const classe = (index % 2 === 0) ? "conteudo_r" : "conteudo_l";

        passos.innerHTML += `
            <h3>Passo ${numero}</h3>
            <div class="${classe}">
                <img src="${p.img}" alt="">
                <p class="justificado">${p.texto}</p>
            </div>
        `;
    });
}
