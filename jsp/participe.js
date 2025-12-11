// Obtém qual doença foi clicada
const params = new URLSearchParams(window.location.search);
const ajudaDoenca = params.get("ajuda");

// Base completa de todas as doenças (versão para ajudar outra pessoa)
const ajuda = {
    ajuda_ansiedade: {
        titulo: "Ajudando alguém com Ansiedade",
        texto: "Para ajudar alguém com ansiedade, é importante agir com calma e acolhimento. A pessoa pode estar lidando com medo, tensão e sensação de perda de controle. Seu papel é oferecer segurança emocional, ajudando-a a respirar melhor, se centrar e diminuir o estado de alerta. Pequenas atitudes de apoio fazem grande diferença.",
        passos: [
            { img: "/imagens/respiracao_profunda.png", texto: "Ajude a pessoa a respirar devagar: orientar respirações profundas reduz a tensão e acalma o corpo." },
            { img: "/imagens/pessoa_confianca.png", texto: "Converse de forma acolhedora: ouvir sem julgar diminui a sensação de isolamento." },
            { img: "/imagens/atividade_fisica.png", texto: "Sugira movimentos leves: caminhar devagar ou alongar ajuda a liberar tensão." },
            { img: "/imagens/descanso.png", texto: "Incentive pausas: lembre a pessoa de descansar e desacelerar." },
            { img: "/imagens/escrever_diario.png", texto: "Estimule pensamentos positivos: convide a pessoa a lembrar conquistas e motivos de gratidão." }
        ]
    },

    ajuda_estresse: {
        titulo: "Ajudando alguém com Estresse",
        texto: "Para ajudar alguém estressado, é necessário compreender que ela pode estar sobrecarregada mental e fisicamente. Seu suporte deve oferecer clareza, calma e organização emocional. A presença de alguém calmo ajuda a reduzir o estado de alerta do corpo.",
        passos: [
            { img: "/imagens/respiracao_profunda.png", texto: "Guie a respiração da pessoa: inspirar e expirar devagar diminui a tensão." },
            { img: "/imagens/praticar_alongamentos.png", texto: "Mostre alongamentos simples: isso ajuda a soltar músculos e reduzir dores." },
            { img: "/imagens/organizar_listas.png", texto: "Auxilie a organizar tarefas: dividir em etapas menores reduz a sensação de peso." },
            { img: "/imagens/ouvir_musica.png", texto: "Sugira uma pausa de qualidade: ouvir música ou descansar alguns minutos ajuda muito." },
            { img: "/imagens/escrever.png", texto: "Incentive expressão emocional: escrever ou desenhar ajuda a aliviar a mente." }
        ]
    },

    ajuda_raiva: {
        titulo: "Ajudando alguém com Raiva",
        texto: "Ajudar alguém com raiva exige paciência e postura tranquila. A pessoa pode agir por impulso, e sua calma ajuda a orientar a situação. Não confronte durante o pico da raiva; ajude a pessoa a recuperar o controle.",
        passos: [
            { img: "/imagens/respiracao_profunda.png", texto: "Ensine respiração lenta e contagem regressiva: isso reduz impulsos imediatos." },
            { img: "/imagens/atividades_seguras.png", texto: "Ofereça alternativas seguras: rasgar papel ou escrever libera energia sem prejuízos." },
            { img: "/imagens/atividade_fisica.png", texto: "Sugira afastar-se do local: retirar a pessoa da situação evita conflitos." },
            { img: "/imagens/ouvir_musica.png", texto: "Indique recursos de relaxamento: música, banho morno ou silêncio ajudam." },
            { img: "/imagens/ajuda_profissional.png", texto: "Incentive apoio profissional se necessário: terapia ajuda no autocontrole." }
        ]
    },

    ajuda_luto: {
        titulo: "Ajudando alguém em Luto",
        texto: "Quem está de luto precisa de acolhimento, não de pressa para melhorar. Seu apoio deve validar emoções, oferecer companhia e respeitar o tempo da pessoa.",
        passos: [
            { img: "/imagens/reconhecer_emocoes.png", texto: "Valide o sentimento: diga que é normal sentir tristeza ou saudade." },
            { img: "/imagens/pessoa_confianca.png", texto: "Seja companhia: ouvir e conversar reduz a solidão." },
            { img: "/imagens/tarefas_simples.png", texto: "Ajude com rotinas leves: pequenas atividades trazem estabilidade." },
            { img: "/imagens/descanso.png", texto: "Incentive cuidados básicos: descanso e boa alimentação são importantes." },
            { img: "/imagens/praticar_lembrancas.png", texto: "Apoie rituais de memória: fotos, cartas e homenagens ajudam na cura." }
        ]
    },

    ajuda_burnout: {
        titulo: "Ajudando alguém com Burnout",
        texto: "O burnout envolve exaustão extrema. Para ajudar, ofereça compreensão, incentivo a pausas e apoio emocional. Evite cobranças e reduza pressões.",
        passos: [
            { img: "/imagens/burnout1.png", texto: "Reconheça os sinais junto da pessoa: validar a exaustão já traz alívio." },
            { img: "/imagens/estabelecer_limites.png", texto: "Incentive limites: ajude a pessoa a dizer 'não' a excessos." },
            { img: "/imagens/escrever_diario.png", texto: "Sugira atividades prazerosas: hobbies leves recuperam energia." },
            { img: "/imagens/pausas_programadas.png", texto: "Lembre sobre pausas: beber água, descansar e alongar tira a pressão." },
            { img: "/imagens/ajuda_profissional.png", texto: "Estimule apoio profissional: tratamento adequado evita recaídas." }
        ]
    },

    ajuda_depressao: {
        titulo: "Ajudando alguém com Depressão",
        texto: "A pessoa com depressão precisa de acolhimento, paciência e apoio constante. Evite frases que minimizem a dor; ofereça companhia, estabilidade e incentivo gradual.",
        passos: [
            { img: "/imagens/reconhecer_emocoes.png", texto: "Valide sentimentos: acolha a tristeza sem julgamentos." },
            { img: "/imagens/pessoa_confianca.png", texto: "Esteja presente: conversar diminui o isolamento emocional." },
            { img: "/imagens/tarefas_simples.png", texto: "Ajude a iniciar pequenas atividades: isso traz ritmo e autoestima." },
            { img: "/imagens/ouvir_musica.png", texto: "Sugira autocuidado leve: música suave, caminhadas ou escrita." },
            { img: "/imagens/ajuda_profissional.png", texto: "Incentive buscar ajuda profissional: psicólogos e médicos são essenciais." }
        ]
    },

    ajuda_insonia: {
        titulo: "Ajudando alguém com Insônia",
        texto: "Para ajudar alguém com insônia, é útil colaborar na criação de hábitos saudáveis e oferecer apoio sem pressão. Estabelecer ambiente e rotina adequados ajuda muito.",
        passos: [
            { img: "/imagens/rotina_sono.png", texto: "Ajude a criar rotina de sono: horários fixos melhoram o ritmo do corpo." },
            { img: "/imagens/praticar_alongamentos.png", texto: "Sugira relaxamento antes de dormir: alongar e respirar ajuda a desligar." },
            { img: "/imagens/evitar_eletronicos.png", texto: "Lembre de evitar telas: luz intensa atrapalha o sono." },
            { img: "/imagens/ambiente_escuro.png", texto: "Apoie na organização do ambiente: escuridão e silêncio melhoram o descanso." },
            { img: "/imagens/evitar_cafe.png", texto: "Oriente evitar estimulantes: café e energéticos devem ser evitados à noite." }
        ]
    },

    ajuda_inseguranca: {
        titulo: "Ajudando alguém com Insegurança",
        texto: "Para ajudar alguém inseguro, ofereça apoio emocional, palavras de incentivo e lembretes sobre suas capacidades. Evite críticas e comparações.",
        passos: [
            { img: "/imagens/reconhecer_qualidades.png", texto: "Reforce qualidades: lembrar conquistas aumenta a confiança." },
            { img: "/imagens/crescimento_pessoal.png", texto: "Evite comparações: cada pessoa tem seu ritmo." },
            { img: "/imagens/organizar_listas.png", texto: "Ajude a criar metas simples: pequenas vitórias fortalecem autoestima." },
            { img: "/imagens/pessoa_confianca.png", texto: "Seja uma presença positiva: ofereça apoio sincero." },
            { img: "/imagens/autoafirmacao.png", texto: "Incentive autoafirmações: frases positivas fortalecem o emocional." }
        ]
    }
};


// --------------------------
// MONTAGEM DINÂMICA DA PÁGINA
// --------------------------

const titulo = document.getElementById("titulo-doenca");
const descricao = document.getElementById("descricao-doenca");
const passos = document.getElementById("passos");

if (!ajuda[ajudaDoenca]) {
    titulo.innerText = "Erro";
    descricao.innerText = "Não foi possível carregar a condição selecionada.";
} else {
    const guia = ajuda[ajudaDoenca];

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
