// tarefa.ts
// Sistema simples de cadastro e listagem de usuários em TypeScript

// 1) Interface Usuario
interface Usuario {
  nome: string;
  email: string;
  idade: number;
  status: boolean; // true = ativo, false = inativo
}

// 2) Array de usuários (inicialmente vazio)
const listaDeUsuarios: Usuario[] = [];

// 3) Função de cadastro
function cadastrarUsuario(usuario: Usuario): void {
  listaDeUsuarios.push(usuario);
}

// 4) Função de exibição
function listarUsuarios(): void {
  if (listaDeUsuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
    return;
  }

  console.log("\n==== Lista de Usuários ====");
  listaDeUsuarios.forEach((u, i) => {
    console.log(`\n#${i + 1}`);
    console.log(`Nome  : ${u.nome}`);
    console.log(`E-mail: ${u.email}`);
    console.log(`Idade : ${u.idade}`);
    console.log(`Status: ${u.status ? "Ativo" : "Inativo"}`);
  });
  console.log("\n===========================\n");
}

// --- Exemplos de uso ---
cadastrarUsuario({
  nome: "Ana Silva",
  email: "ana.silva@example.com",
  idade: 28,
  status: true,
});

cadastrarUsuario({
  nome: "Bruno Costa",
  email: "bruno.costa@example.com",
  idade: 35,
  status: false,
});

cadastrarUsuario({
  nome: "Carla Souza",
  email: "carla.souza@example.com",
  idade: 22,
  status: true,
});

// Listar no console
listarUsuarios();
