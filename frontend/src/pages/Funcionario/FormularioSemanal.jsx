import { useState } from 'react';
import { toast } from 'sonner';

export default function FormularioSemanal() {
    const [respostas, setRespostas] = useState({
        estressePessoal: 3,
        qualidadeSono: 3,
        equilibrioVida: 3,
        cargaTrabalho: 3,
        relacaoColegas: 3,
        relacaoGestor: 3,
        satisfacaoAmbiente: 3
    });

    const handleChange = (campo, valor) => {
        setRespostas(prev => ({
            ...prev,
            [campo]: parseInt(valor)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Formulário enviado com sucesso! Obrigado por compartilhar seu feedback.');
        // Aqui você pode adicionar a lógica para salvar os dados
    };

    return (
        <div className="fade-in">
            <div className="page-header">
                <h1 className="page-title">Formulário Semanal</h1>
                <p className="page-subtitle">Avalie seu bem-estar de 1 a 5 (1 = Péssimo, 5 = Excelente)</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <div className="form-categories">
                        {/* Questões Pessoais */}
                        <div>
                            <h3 className="form-category-title">Questões Pessoais</h3>
                            
                            <div className="form-group">
                                <label className="form-question" htmlFor="estresse-pessoal">
                                    Como você avalia seu nível de estresse pessoal esta semana?
                                </label>
                                <div className="slider-container">
                                    <span className="slider-value">{respostas.estressePessoal}</span>
                                    <input
                                        id="estresse-pessoal"
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={respostas.estressePessoal}
                                        onChange={(e) => handleChange('estressePessoal', e.target.value)}
                                        className="slider"
                                        style={{ '--slider-value': `${(respostas.estressePessoal / 5) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-question" htmlFor="qualidade-sono">
                                    Como está sua qualidade de sono?
                                </label>
                                <div className="slider-container">
                                    <span className="slider-value">{respostas.qualidadeSono}</span>
                                    <input
                                        id="qualidade-sono"
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={respostas.qualidadeSono}
                                        onChange={(e) => handleChange('qualidadeSono', e.target.value)}
                                        className="slider"
                                        style={{ '--slider-value': `${(respostas.qualidadeSono / 5) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-question" htmlFor="equilibrio-vida">
                                    Como está seu equilíbrio entre vida pessoal e trabalho?
                                </label>
                                <div className="slider-container">
                                    <span className="slider-value">{respostas.equilibrioVida}</span>
                                    <input
                                        id="equilibrio-vida"
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={respostas.equilibrioVida}
                                        onChange={(e) => handleChange('equilibrioVida', e.target.value)}
                                        className="slider"
                                        style={{ '--slider-value': `${(respostas.equilibrioVida / 5) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Questões Profissionais */}
                        <div>
                            <h3 className="form-category-title">Questões Profissionais</h3>
                            
                            <div className="form-group">
                                <label className="form-question" htmlFor="carga-trabalho">
                                    Como você avalia sua carga de trabalho?
                                </label>
                                <div className="slider-container">
                                    <span className="slider-value">{respostas.cargaTrabalho}</span>
                                    <input
                                        id="carga-trabalho"
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={respostas.cargaTrabalho}
                                        onChange={(e) => handleChange('cargaTrabalho', e.target.value)}
                                        className="slider"
                                        style={{ '--slider-value': `${(respostas.cargaTrabalho / 5) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-question" htmlFor="relacao-colegas">
                                    Como está sua relação com os colegas?
                                </label>
                                <div className="slider-container">
                                    <span className="slider-value">{respostas.relacaoColegas}</span>
                                    <input
                                        id="relacao-colegas"
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={respostas.relacaoColegas}
                                        onChange={(e) => handleChange('relacaoColegas', e.target.value)}
                                        className="slider"
                                        style={{ '--slider-value': `${(respostas.relacaoColegas / 5) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-question" htmlFor="relacao-gestor">
                                    Como você se sente em relação ao seu gestor?
                                </label>
                                <div className="slider-container">
                                    <span className="slider-value">{respostas.relacaoGestor}</span>
                                    <input
                                        id="relacao-gestor"
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={respostas.relacaoGestor}
                                        onChange={(e) => handleChange('relacaoGestor', e.target.value)}
                                        className="slider"
                                        style={{ '--slider-value': `${(respostas.relacaoGestor / 5) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-question" htmlFor="satisfacao-ambiente">
                                    Qual seu nível de satisfação com o ambiente de trabalho?
                                </label>
                                <div className="slider-container">
                                    <span className="slider-value">{respostas.satisfacaoAmbiente}</span>
                                    <input
                                        id="satisfacao-ambiente"
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={respostas.satisfacaoAmbiente}
                                        onChange={(e) => handleChange('satisfacaoAmbiente', e.target.value)}
                                        className="slider"
                                        style={{ '--slider-value': `${(respostas.satisfacaoAmbiente / 5) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-large">
                        Enviar Formulário
                    </button>
                </div>
            </form>

            {/* Informação Adicional */}
            <div className="alert alert-info mt-lg">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <strong>Lembre-se:</strong> Suas respostas são confidenciais e ajudam a melhorar o ambiente de trabalho para todos. Seja honesto em suas avaliações.
                </div>
            </div>
        </div>
    );
}