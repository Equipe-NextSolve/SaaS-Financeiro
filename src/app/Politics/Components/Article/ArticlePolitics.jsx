"use client"
import React from 'react'
import styles from './ArticlePolitics.module.css'

export default function ArticlePolitics() {
    const dt_text = [
        {
            title: 'Quem Somos?',
            text: `Somos a NextSolve Studio Vision, empresa de tecnologia fundada por Wendell Bonucci, Engenheiro de Software e Administrador de Empresas, em parceria com o cofundador Guilherme Barroso, Desenvolvedor Full Stack.

            Iniciamos nossa trajetória desenvolvendo sistemas essenciais para pequenas empresas, sempre com foco em compreender as reais necessidades de cada cliente e oferecer soluções acessíveis, eficientes e estrategicamente alinhadas ao seu negócio.

            Com a evolução do mercado e a ampliação da nossa expertise, passamos a desenvolver uma plataforma completa de gestão empresarial, voltada para organizações que buscam controle total de dados e operações. Nosso sistema combina simplicidade, eficiência e facilidade de uso, permitindo tratativas rápidas, aprendizado intuitivo e maior produtividade no dia a dia.`
        },
        {
            title: 'O que o Korivo faz?',
            text: `O Korivo é um sistema completo de gestão empresarial, desenvolvido para centralizar e organizar todos os dados da sua empresa de forma simples e eficiente.

            No primeiro acesso, é possível cadastrar as informações principais do negócio, como razão social, nome fantasia, CNPJ, CEP, logotipo, responsável pelo sistema e uma breve descrição institucional (opcional). Após essa etapa, o usuário já tem acesso total à plataforma.

            O sistema permite o gerenciamento financeiro completo, com registro de receitas e despesas, controle de contas a pagar e a receber, geração de relatórios detalhados e notificações automáticas sobre vencimentos e recebimentos.

            Além disso, o Korivo oferece controle de produtos e estoque, possibilitando o cadastro de itens com nome, imagem, peso e quantidade disponível. Também é possível cadastrar clientes e realizar vendas por meio de uma página dedicada, onde o sistema integra automaticamente cliente e produto (desde que haja estoque disponível).

            Todas as funcionalidades contam com relatórios e dashboards inteligentes, permitindo a análise clara e estratégica das movimentações da empresa em períodos semanais, mensais ou anuais.`
        },
        {
            title: 'Politica de Privacidade',
            text: `A NextSolve, inscrita no CNPJ nº 63.091.626/326, reafirma seu compromisso com a segurança, privacidade e integridade das informações coletadas tanto em nossa página institucional quanto no sistema Korivo.

            Todos os dados fornecidos por nossos clientes são tratados com total responsabilidade, seguindo rigorosamente as diretrizes da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD). Isso significa que realizamos o tratamento de dados pessoais de forma transparente, segura e exclusivamente para finalidades legítimas, previamente informadas ao titular.

            Adotamos medidas técnicas e administrativas adequadas para proteger as informações contra acessos não autorizados, perda, alteração ou qualquer forma de uso indevido. Também garantimos a realização de backups periódicos, monitoramento de segurança e suporte técnico contínuo para assegurar a integridade e disponibilidade dos dados.

            Além disso, respeitamos os direitos dos titulares previstos na LGPD, incluindo o direito de acesso, correção, atualização, portabilidade e exclusão de dados, mediante solicitação formal.

            Nosso compromisso é oferecer não apenas tecnologia e eficiência, mas também confiança, transparência e conformidade legal em todas as nossas operações.`
        }
    ]

    return (
        <article className={styles.ArticlePolitics}>
            {dt_text.map((item, index) => (
                <div key={index} className={styles.boxText}>
                    <h1 className={styles.titleArticle}>{item.title}</h1>
                    <p className={styles.descriptionArticle}>{item.text}</p>
                </div>
            ))}
        </article>
    )
}
