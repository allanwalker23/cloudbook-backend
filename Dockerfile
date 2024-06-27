# Use uma imagem base do Node.js
FROM node:latest

# Cria o diretório de trabalho dentro do contêiner
WORKDIR /app

# Instala as dependências
RUN npm install

# Gera os artefatos do Prisma
RUN npx prisma generate

# Compila a aplicação
RUN npm run build

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
