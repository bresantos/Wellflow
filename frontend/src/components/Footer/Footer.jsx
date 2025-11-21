import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

export default function Footer() {
  // Dados mockados dos devs
  const developers = [
    {
      id: 1,
      nome: 'Brenda Santos',
      foto: '/brenda.jpg',
      linkedin: 'https://www.linkedin.com/in/brendatrsantos/',
      github: 'https://github.com/bresantos'
    },
    {
      id: 2,
      nome: 'Lucas Santana',
      foto: '/lucas.jpg',
      linkedin: 'https://www.linkedin.com/in/lucas-santana',
      github: 'https://github.com/yzSant'
    },
    {
      id: 3,
      nome: 'Gustavo',
      foto: 'https://i.pravatar.cc/150?img=15',
      linkedin: 'https://www.linkedin.com/in/gustavo',
      github: 'https://github.com/gustavo'
    }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        
        {/* Desenvolvedores - 3 colunas */}
        {developers.map((dev) => (
          <div key={dev.id} className="dev-card">
            <img src={dev.foto} alt={dev.nome} className="dev-avatar" />

            <div className="dev-name">{dev.nome}</div>

            <div className="dev-links">
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="dev-link" aria-label={`LinkedIn de ${dev.nome}`} title={`LinkedIn de ${dev.nome}`}>
                <IconBrandLinkedin size={24} stroke={1.5} />
              </a>

              <a href={dev.github} target="_blank" rel="noopener noreferrer" className="dev-link" aria-label={`GitHub de ${dev.nome}`} title={`GitHub de ${dev.nome}`}>
                <IconBrandGithub size={24} stroke={1.5} />
              </a>
            </div>
          </div>
        ))}

        {/* Créditos - 4ª coluna */}
        <div className="footer-credits">
          <div className="credits-inner">
            <div className="credits-label">Desenvolvido por</div>
            <div className="credits-team">Equipe WellFlow</div>
            <div className="credits-year">2025</div>
          </div>
        </div>
      </div>

      {/* Logo centralizado */}
      <div className="footer-logo-container">
        <img src="/logo-wellflow.svg" alt="WellFlow Logo" className="footer-logo" />
      </div>
    </footer>
  );
}