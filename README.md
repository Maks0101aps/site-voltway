# VoltWay

Преміальний лендинг українського стартапу VoltWay — інтелектуальної дорожньої системи, що бездротово заряджає електромобілі під час руху.

## Стек

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- shadcn/ui-style компоненти
- Lucide Icons

## Локальний запуск

```bash
npm install
npm run dev
```

Відкрийте сайт за адресою `http://localhost:3000`.

## Перевірка перед деплоєм

```bash
npm run lint
npm run build
```

## Деплой на Vercel

1. Завантажте проєкт у GitHub.
2. У Vercel натисніть **Add New → Project**.
3. Імпортуйте репозиторій.
4. Vercel автоматично визначить Next.js.
5. Залиште стандартні параметри:
   - Build Command: `npm run build`
   - Output Directory: автоматично
   - Install Command: `npm install`
6. Натисніть **Deploy**.

Проєкт не потребує змінних середовища для базового запуску.

## Структура

- `src/app/page.tsx` — головна сторінка
- `src/app/globals.css` — глобальні стилі та ефекти
- `src/components/ui/button.tsx` — кнопки
- `public/images` — візуальні матеріали сайту
