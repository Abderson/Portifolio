import React, { useState, FormEvent } from "react";
import './Contato.css';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  assunto?: string;
  mensagem?: string;
}

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "anderson2013ferreira@gmail.com", // ← Coloque seu email real aqui
      link: "mailto:anderson2013ferreira@gmail.com", // ← Coloque seu email real aqui
      color: "#61dafb"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      value: "+55 (12) 99176-9951", // ← Coloque seu número formatado aqui
      link: "https://wa.me/5512991769951", // ← IMPORTANTE: Apenas números (55 + DDD + número)
      color: "#25D366"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "/anderson-ferreira-dev", // ← Coloque seu usuário do LinkedIn
      link: "https://www.linkedin.com/in/anderson-ferreira-dev/", // ← Coloque o link completo
      color: "#0077b5"
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = 'Nome deve ter pelo menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (formData.telefone && !/^\(?[0-9]{2}\)?\s?[0-9]{4,5}-?[0-9]{4}$/.test(formData.telefone.replace(/\s/g, ''))) {
      newErrors.telefone = 'Telefone inválido';
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = 'Assunto é obrigatório';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Limpa o erro ao digitar
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simula envio (substitua por sua API)
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form data:', formData);

      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="contato-section" data-aos="fade-up">
      <div className="contato-container">
        {/* Header */}
        <div className="contato-header">
          <h2 className="contato-title">
            <span className="title-icon">💬</span>
            Vamos Conversar?
          </h2>
          <p className="contato-subtitle">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
        </div>

        <div className="contato-content">
          {/* Métodos de Contato */}
          <div className="contato-methods">
            <h3 className="methods-title">Formas de Contato</h3>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="method-card"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="method-icon" style={{ color: method.color }}>
                    <i className={method.icon}></i>
                  </div>
                  <div className="method-info">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                  <i className="fas fa-arrow-right method-arrow"></i>
                </a>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="contato-form-wrapper">
            <h3 className="form-title">Envie uma Mensagem</h3>
            <form className="contato-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">
                  Nome Completo <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={errors.nome ? 'error' : ''}
                  placeholder="Seu nome completo"
                />
                {errors.nome && <span className="error-message">{errors.nome}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className={errors.telefone ? 'error' : ''}
                    placeholder="(00) 00000-0000"
                  />
                  {errors.telefone && <span className="error-message">{errors.telefone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="assunto">
                  Assunto <span className="required">*</span>
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className={errors.assunto ? 'error' : ''}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="freelance">Trabalho Freelance</option>
                  <option value="emprego">Oportunidade de Emprego</option>
                  <option value="projeto">Proposta de Projeto</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.assunto && <span className="error-message">{errors.assunto}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">
                  Mensagem <span className="required">*</span>
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className={errors.mensagem ? 'error' : ''}
                  placeholder="Descreva sua proposta ou dúvida..."
                  rows={6}
                ></textarea>
                {errors.mensagem && <span className="error-message">{errors.mensagem}</span>}
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Enviar Mensagem
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-message success">
                  <i className="fas fa-check-circle"></i>
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-message error">
                  <i className="fas fa-exclamation-circle"></i>
                  Erro ao enviar mensagem. Tente novamente mais tarde.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
