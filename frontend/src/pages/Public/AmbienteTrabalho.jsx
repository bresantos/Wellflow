import { useState } from 'react';

export default function AmbienteTrabalho() {
    const [ambiente, setAmbiente] = useState({
        temperatura: 23.5,
        umidade: 65,
        qualidadeAr: 85
    });

    const [formData, setFormData] = useState({
        temperatura: 23.5,
        umidade: 65,
        qualidadeAr: 85
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: parseFloat(value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAmbiente(formData);
        alert('Ambiente atualizado com sucesso!');
    };

    const getStatusTemperatura = (temp) => {
        if (temp >= 20 && temp <= 24) return { label: 'Ideal', class: 'ideal' };
        if (temp >= 18 && temp <= 26) return { label: 'Bom', class: 'good' };
        return { label: 'Atenção', class: 'warning' };
    };

    const getStatusUmidade = (umidade) => {
        if (umidade >= 40 && umidade <= 60) return { label: 'Ideal', class: 'ideal' };
        if (umidade >= 30 && umidade <= 70) return { label: 'Bom', class: 'good' };
        return { label: 'Atenção', class: 'warning' };
    };

    const getStatusAr = (qualidade) => {
        if (qualidade >= 80) return { label: 'Excelente', class: 'excellent' };
        if (qualidade >= 60) return { label: 'Bom', class: 'good' };
        return { label: 'Atenção', class: 'warning' };
    };

    return (
        <div className="fade-in">
            <div className="page-header">
                <h1 className="page-title">Gestão de Ambiente</h1>
                <p className="page-subtitle">Monitore as condições do ambiente de trabalho em tempo real</p>
            </div>

            {/* Métricas Atuais */}
            <div className="mb-xl">
                <h2 className="form-category-title">Condições Atuais</h2>
                <div className="metrics-grid">
                    <div className="metric-card temperature">
                        <div className="metric-header">
                            <div className="metric-icon metric-icon--temp">
                                🌡️
                            </div>
                        </div>
                        <div className="metric-label">Temperatura</div>
                        <div className="metric-value">{ambiente.temperatura}°C</div>
                        <span className={`metric-status ${getStatusTemperatura(ambiente.temperatura).class}`}>
                            {getStatusTemperatura(ambiente.temperatura).label}
                        </span>
                    </div>

                    <div className="metric-card humidity">
                        <div className="metric-header">
                            <div className="metric-icon metric-icon--hum">
                                💧
                            </div>
                        </div>
                        <div className="metric-label">Umidade</div>
                        <div className="metric-value">{ambiente.umidade}%</div>
                        <span className={`metric-status ${getStatusUmidade(ambiente.umidade).class}`}>
                            {getStatusUmidade(ambiente.umidade).label}
                        </span>
                    </div>

                    <div className="metric-card air-quality">
                        <div className="metric-header">
                            <div className="metric-icon metric-icon--air">
                                💨
                            </div>
                        </div>
                        <div className="metric-label">Qualidade do Ar</div>
                        <div className="metric-value">{ambiente.qualidadeAr}%</div>
                        <span className={`metric-status ${getStatusAr(ambiente.qualidadeAr).class}`}>
                            {getStatusAr(ambiente.qualidadeAr).label}
                        </span>
                    </div>
                </div>
            </div>

            {/* Formulário de Atualização */}
            <div className="card mb-xl">
                <div className="card-header">
                    <h3 className="card-title">Atualizar Dados</h3>
                    <p className="card-subtitle">Insira os valores atuais dos sensores</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-3 mb-lg">
                        <div>
                            <label className="form-question">Temperatura (°C)</label>
                            <input
                                type="number"
                                name="temperatura"
                                value={formData.temperatura}
                                onChange={handleChange}
                                step="0.1"
                                min="0"
                                max="50"
                            />
                        </div>
                        <div>
                            <label className="form-question">Umidade (%)</label>
                            <input
                                type="number"
                                name="umidade"
                                value={formData.umidade}
                                onChange={handleChange}
                                min="0"
                                max="100"
                            />
                        </div>
                        <div>
                            <label className="form-question">Qualidade do Ar (%)</label>
                            <input
                                type="number"
                                name="qualidadeAr"
                                value={formData.qualidadeAr}
                                onChange={handleChange}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Atualizar Ambiente
                    </button>
                </form>
            </div>

            {/* Informações sobre Valores Ideais */}
                <div className="grid grid-2 mb-xl">
                <div className="card">
                    <h3 className="card-title card-title--primary">Temperatura Ideal</h3>
                    <p className="muted-small help-text">A temperatura ideal para ambientes de trabalho é entre 20°C e 24°C. Temperaturas fora dessa faixa podem afetar o conforto e a produtividade.</p>
                </div>

                <div className="card">
                    <h3 className="card-title card-title--primary">Umidade e Qualidade do Ar</h3>
                    <p className="muted-small help-text">A umidade ideal é entre 40% e 60%. A qualidade do ar acima de 80% é excelente. Esses fatores são essenciais para sua saúde respiratória.</p>
                </div>
            </div>

        </div>
    );
}