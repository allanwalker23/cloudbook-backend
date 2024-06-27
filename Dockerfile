# Use uma imagem base do Node.js
FROM node:latest

# Cria o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração e dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do código fonte
COPY . .

# Gera os artefatos do Prisma
RUN npx prisma generate

# Compila a aplicação
RUN npm run build

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
