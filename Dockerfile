# Etapa de build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa final
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app
RUN npm ci --omit=dev
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]
LABEL org.opencontainers.image.source="https://github.com/OWNER/REPO"
