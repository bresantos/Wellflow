export const AUTH_USERS = [
  { id: 1, displayName: 'Lívia Martins', email: 'gestor@teste.com', senha: '123', role: 'gestor' },
  { id: 2, displayName: 'Lucas Pereira', email: 'func@teste.com', senha: '123', role: 'funcionario' }
];

export const ROLE_ROUTE = {
  gestor: '/gestor',
  funcionario: '/funcionario'
};

export function findUserByCredentials(email, senha) {
  if (!email || !senha) return null;
  const normalizedEmail = email.trim().toLowerCase();
  return AUTH_USERS.find(
    (user) => user.email === normalizedEmail && user.senha === senha
  ) || null;
}

export function getDisplayName(user) {
  if (!user) return '';
  if (user.displayName) return user.displayName;
  if (user.email) return user.email.split('@')[0];
  return '';
}
