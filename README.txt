ARTIGO MOTO PARTS — PRIMEIRO PROTÓTIPO

O QUE JÁ FUNCIONA
- Layout responsivo para celular e computador
- Vitrine com categorias e busca
- Carrinho com quantidade e subtotal
- Formulário de pedido com cidade, entrega e pagamento preferido
- Estrutura PWA inicial (instalável após publicação em HTTPS)

IMPORTANTE
Este é um protótipo visual/funcional de frontend. Ainda NÃO existe:
- Banco de dados, login real ou painel administrativo
- Integração real de Pix/cartão
- Cálculo de frete, estoque ou rastreamento
- Envio real do pedido até configurar o WhatsApp oficial

ANTES DE PUBLICAR
1. Confirmar com o proprietário o catálogo, preços, fotos e disponibilidade.
2. Inserir o número oficial do WhatsApp (somente números, com DDI e DDD) em app.js:
   window.ARTIGO_WHATSAPP = "55DDDNUMERO";
   Colocar essa linha no início do arquivo app.js.
3. Validar endereço, telefone, política de troca, privacidade e condições de entrega.
4. Integrar um provedor de pagamento e um backend seguro antes de receber pagamentos online.

PUBLICAR NO GITHUB PAGES
1. Criar um repositório público chamado artigo-motoparts.
2. Enviar todos os arquivos e a pasta assets.
3. Em Settings > Pages, selecionar Deploy from a branch, branch main, pasta /(root).
4. Salvar e aguardar a publicação.

Não usar dados ou preços de demonstração como oferta real.
