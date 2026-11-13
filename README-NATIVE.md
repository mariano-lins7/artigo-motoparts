# Artigo Moto Parts — Android e iOS com Capacitor

## Requisitos
- Node.js 22 ou superior.
- Android: Android Studio e Android SDK.
- iOS: macOS, Xcode e CocoaPods.

## Instalar dependências e preparar os arquivos
```bash
npm install
npm run build
```

## Adicionar os projetos nativos (uma única vez)
```bash
npx cap add android
npx cap add ios
```

## Sincronizar e abrir os projetos
```bash
npm run cap:sync
npx cap open android
npx cap open ios
```

Android pode ser compilado pelo Android Studio. A compilação iOS requer macOS e Xcode. Publicar nas lojas exige as contas de desenvolvedor correspondentes.

## Antes de publicar
- Os produtos, preços e estoque atuais são demonstrativos e precisam ser confirmados pela loja.
- Configurar o número oficial de WhatsApp em app.js (window.ARTIGO_WHATSAPP).
- Ainda faltam integração de pagamento real, banco de dados, estoque e painel administrativo.
- Confirmar que assets/logo-artigo.jpg está presente; o HTML atual referencia esse arquivo.
