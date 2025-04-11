FROM node:20.11.0-alpine3.19 as builder

WORKDIR /build

COPY prisma ./prisma
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20.11.0-alpine3.19 as runtime

WORKDIR /app

COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/.svelte-kit ./.svelte-kit
COPY --from=builder /build/package.json /build/vite.config.ts ./

EXPOSE 8080

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8080"]
