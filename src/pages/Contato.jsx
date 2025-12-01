import React from "react";

export default function Contato() {
  return (
    <div style={{ padding: "32px 40px", maxWidth: 800 }}>
      <h1 style={{ fontSize: 26, marginBottom: 12 }}>Contato</h1>
      <p style={{ fontSize: 15, color: "#555", marginBottom: 16 }}>
        Utilize os canais abaixo para solicitar propostas, tirar dúvidas sobre
        pesquisas ou agendar uma reunião.
      </p>

      <div style={{ marginTop: 16, fontSize: 15 }}>
        <p>
          <strong>E-mail:</strong> contato@idealdesenvolvimento.com.br
        </p>
        <p>
          <strong>Telefone:</strong> (00) 0000-0000
        </p>
        <p>
          <strong>Cidade / UF:</strong> (preencher com seus dados reais depois)
        </p>
      </div>
    </div>
  );
}