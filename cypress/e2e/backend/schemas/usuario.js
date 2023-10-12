
export function criacaoUsuario(nome, email, password, administrador) {
    const user = {
            nome: nome,
            email: email,
            password: password,
            administrador: administrador
    }

    return user;
}