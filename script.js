const arquivos = [
    "myllena.json"
];

const container = document.querySelector("#container");

async function carregarParticipantes() {

    const participantes = await Promise.all(
        arquivos.map(async (arquivo) => {
            const resposta = await fetch(`json/${arquivo}`);
            return await resposta.json();
        })
    );

    container.innerHTML = participantes
        .map(({ nome, imagem, descricao, github }) => `
            <article class="card">
                <h2>${nome}</h2>
                <img src="${imagem}" alt="${nome}">
                <p>${descricao}</p>
                <a href="${github}" target="_blank">GitHub</a>
            </article>
        `)
        .join("");
}
carregarParticipantes();