export default function DicasBemEstar() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <h1 className="page-title">Dicas de Bem-estar</h1>
                <p className="page-subtitle">Dicas práticas para melhorar sua qualidade de vida</p>
            </div>

            {/* Grid de Dicas */}
            <div className="tips-grid mb-xl">
                <div className="tip-card">
                    <div className="tip-header">
                        <div className="tip-icon tip-icon--pink">
                            🧘
                        </div>
                        <h3 className="tip-title">Gestão de Estresse</h3>
                    </div>
                    <ul className="tip-list">
                        <li>Pratique respiração profunda por 5 minutos durante o dia</li>
                        <li>Faça pequenas pausas a cada 2 horas de trabalho</li>
                        <li>Organize suas tarefas por prioridade</li>
                        <li>Comunique-se quando sentir sobrecarga</li>
                    </ul>
                </div>

                <div className="tip-card">
                    <div className="tip-header">
                        <div className="tip-icon tip-icon--blue">
                            🕐
                        </div>
                        <h3 className="tip-title">Imprevistos e Transporte</h3>
                    </div>
                    <ul className="tip-list">
                        <li>Saia de casa 15 minutos mais cedo do que o habitual</li>
                        <li>Tenha sempre um plano B de transporte</li>
                        <li>Use aplicativos de trânsito em tempo real</li>
                        <li>Comunique atrasos ao gestor o quanto antes</li>
                    </ul>
                </div>

                <div className="tip-card">
                    <div className="tip-header">
                        <div className="tip-icon tip-icon--green">
                            ❤️
                        </div>
                        <h3 className="tip-title">Bem-estar Pessoal</h3>
                    </div>
                    <ul className="tip-list">
                        <li>Mantenha uma rotina de sono regular (7-8 horas)</li>
                        <li>Pratique exercícios físicos regularmente</li>
                        <li>Mantenha-se hidratado durante o dia</li>
                        <li>Reserve tempo para hobbies e lazer</li>
                    </ul>
                </div>

                <div className="tip-card">
                    <div className="tip-header">
                        <div className="tip-icon tip-icon--yellow">
                            💼
                        </div>
                        <h3 className="tip-title">Produtividade</h3>
                    </div>
                    <ul className="tip-list">
                        <li>Use a técnica Pomodoro (25min trabalho + 5min pausa)</li>
                        <li>Mantenha sua área de trabalho organizada</li>
                        <li>Evite multitarefas, foque em uma atividade por vez</li>
                        <li>Peça feedback regularmente sobre seu desempenho</li>
                    </ul>
                </div>
            </div>

            {/* Seção de Alimentação */}
                <div className="card mb-xl">
                <div className="card-header">
                    <div className="tip-icon tip-icon--purple tip-icon--large">🥗</div>
                    <div>
                        <h3 className="card-title card-title--primary">
                            Alimentação Saudável
                        </h3>
                        <p className="card-subtitle">Dicas nutricionais para o dia a dia</p>
                    </div>
                </div>
                <div className="grid grid-2">
                    <div>
                        <h4 className="form-category-title">Durante o Trabalho</h4>
                        <ul className="tip-list">
                            <li>Faça refeições balanceadas no horário regular</li>
                            <li>Evite excesso de café e bebidas energéticas</li>
                            <li>Tenha lanches saudáveis disponíveis (frutas, castanhas)</li>
                            <li>Mantenha-se hidratado (2L de água por dia)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="form-category-title">Fora do Trabalho</h4>
                        <ul className="tip-list">
                            <li>Planeje suas refeições com antecedência</li>
                            <li>Cozinhe em casa sempre que possível</li>
                            <li>Inclua vegetais e frutas em todas as refeições</li>
                            <li>Evite pular refeições, especialmente o café da manhã</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Seção de Exercícios */}
                <div className="card mb-xl">
                <div className="card-header">
                    <div className="tip-icon tip-icon--green tip-icon--large">🏃</div>
                    <div>
                        <h3 className="card-title card-title--primary">Atividade Física</h3>
                        <p className="card-subtitle">Movimente-se para uma vida mais saudável</p>
                    </div>
                </div>
                <div className="grid grid-3">
                    <div className="center-block-padded">
                        <div className="big-emoji">🚶</div>
                        <h4 className="">Caminhada</h4>
                        <p className="muted-small">30 minutos diários de caminhada leve</p>
                    </div>
                    <div className="center-block-padded">
                        <div className="big-emoji">🧘</div>
                        <h4 className="">Alongamento</h4>
                        <p className="muted-small">Alongue-se a cada 2 horas no trabalho</p>
                    </div>
                    <div className="center-block-padded">
                        <div className="big-emoji">💪</div>
                        <h4 className="">Exercício</h4>
                        <p className="muted-small">3x por semana de atividade moderada</p>
                    </div>
                </div>
            </div>

            {/* Seção de Saúde Mental */}
                <div className="card mb-xl">
                <div className="card-header">
                    <div className="tip-icon tip-icon--pink tip-icon--large">🧠</div>
                    <div>
                        <h3 className="card-title card-title--primary">Saúde Mental</h3>
                        <p className="card-subtitle">Cuide da sua mente com carinho</p>
                    </div>
                </div>
                <ul className="tip-list">
                    <li>Reserve momentos de descanso sem tecnologia</li>
                    <li>Pratique meditação ou mindfulness por 10 minutos diários</li>
                    <li>Mantenha conexões sociais com amigos e família</li>
                    <li>Não hesite em buscar ajuda profissional quando necessário</li>
                    <li>Estabeleça limites saudáveis entre trabalho e vida pessoal</li>
                    <li>Celebre suas conquistas, mesmo as pequenas</li>
                </ul>
            </div>

            {/* Card de Ajuda Profissional */}
                    <div className="help-card">
                <h3 className="help-title">Precisa de Ajuda?</h3>
                <p className="help-text">
                    Se você está enfrentando dificuldades persistentes com estresse ou bem-estar, 
                    não hesite em conversar com seu gestor ou procurar apoio profissional. 
                    Sua saúde mental é prioridade!
                </p>
            </div>

            {/* Recursos Adicionais */}
            <div className="card mt-xl">
                <div className="card-header">
                    <h3 className="card-title">Recursos Adicionais</h3>
                </div>
                <div className="grid grid-3">
                    <div>
                        <h4 className="form-category-title">📱 Apps Recomendados</h4>
                        <ul className="tip-list muted-small">
                            <li>• Headspace (Meditação)</li>
                            <li>• Calm (Relaxamento)</li>
                            <li>• MyFitnessPal (Nutrição)</li>
                            <li>• Strava (Exercícios)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="form-category-title">📚 Livros Sugeridos</h4>
                        <ul className="tip-list muted-small">
                            <li>• O Poder do Hábito</li>
                            <li>• Mindset</li>
                            <li>• Inteligência Emocional</li>
                            <li>• O Milagre da Manhã</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="form-category-title">🎯 Metas Semanais</h4>
                        <ul className="tip-list muted-small">
                            <li>• 30min de exercício 3x</li>
                            <li>• 7-8h de sono por noite</li>
                            <li>• 2L de água por dia</li>
                            <li>• 1 momento de lazer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}