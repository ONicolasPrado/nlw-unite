let participantes = [
    {
        nome: "Nicolas Prado",
        email: "nicolas@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 13)
    },
    {
        nome: "lucas silva",
        email: "lucas@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 1, 21, 13, 20),
        dataCheckIn: null
    },
    {
        nome: "Ana Maria",
        email: "ana@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 0, 15, 10, 30),
        dataCheckIn: new Date(2024, 2, 28, 14, 45)
    },
    {
        nome: "Pedro Henrique",
        email: "pedro@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 1, 3, 8, 10),
        dataCheckIn: null
    },
    {
        nome: "Julia Oliveira",
        email: "julia@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 1, 18, 17, 45),
        dataCheckIn: new Date(2024, 3, 1, 10, 15)
    },
    {
        nome: "Rodrigo Santos",
        email: "rodrigo@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 0, 9, 14, 20),
        dataCheckIn: new Date(2024, 2, 23, 16, 40)
    },
    {
        nome: "Amanda Souza",
        email: "amanda@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 1, 27, 11, 30),
        dataCheckIn: null
    },
    {
        nome: "Carlos Silva",
        email: "carlos@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 0, 4, 9, 50),
        dataCheckIn: new Date(2024, 2, 19, 12, 10)
    },
    {
        nome: "Larissa Santos",
        email: "larissa@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 1, 10, 20, 15),
        dataCheckIn: new Date(2024, 3, 10, 15, 30)
    },
    {
        nome: "Fernanda Lima",
        email: "fernanda@gmail.com",
        telefone: "51912345678",
        dataInscricao: new Date(2024, 0, 31, 16, 40),
        dataCheckIn: new Date(2024, 2, 29, 19, 50)
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now())
        .to(participante.dataInscricao)

    let dataCheckIn = dayjs(Date.now())
        .to(participante.dataCheckIn)
    // condicional 
    if (participante.dataCheckIn == null) {
        dataCheckIn = `
            <button
                data-email="${participante.email}"
                onclick="fazerCheckIn(event)"
            >
                Confirmar Check-in
            </button>
            `
    }


    return `  
    <tr>
        <td>
            <strong>
            ${participante.nome}
            </strong>
            <br>
            <small>
            ${participante.email}
            </small>
            <br>

        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
`
}
const atualizarlista = (participantes) => {
    let output = ""
    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante)
    }
    // Substituir informação do HTML
    document.
        querySelector("tbody")
        .innerHTML = output
}
atualizarlista(participantes)

const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const participante = {
        nome: dadosDoFormulario.get("nome"),
        email: dadosDoFormulario.get("email"),
        telefone: dadosDoFormulario.get("telefone"),
        dataInscricao: new Date(),
        dataCheckIn: null
    }

    // verificar se o participante ja existe
    const participanteExiste = participantes.find(
        (p) => p.email == participante.email
    )
    if (participanteExiste) {
        alert('Email já cadastrado')
        return
    }
    
    // os 3 pontos ... é um spred = espalhar
    participantes = [participante, ...participantes]
    atualizarlista(participantes)

    // limpar formulario
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
    event.target.querySelector('[name="telefone"]').value = ""
}
const fazerCheckIn = (event) => {
    // confirmar se realmente quer fazer o checkin
    const mensagemConfirmacao = "Tem certeza que deseja fazer o Check-In?"

    if (confirm(mensagemConfirmacao) == false) {
        return
    }

    // encontar o participante dentro da lista
    const participante = participantes.find(
        (p) => p.email == event.target.dataset.email
    )

    // atualizar o check-in do participante
    participante.dataCheckIn = new Date()

    // atualizar a lista de participantes
    atualizarlista(participantes)
}