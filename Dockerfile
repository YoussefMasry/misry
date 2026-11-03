# 1. مرحلة التثبيت والبناء
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. مرحلة الإنتاج والتشغيل
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# قم بحذف أو تعليق سطر الـ public إذا لم يكن المجلد موجوداً
# COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
