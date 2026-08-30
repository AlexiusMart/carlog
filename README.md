# CarLog

CarLog — приложение для учета автомобилей, обслуживания, заправок, расходов и других событий, связанных с владением автомобилем.

## Стек

- Framework: Next.js 16, React
- Language: TypeScript
- UI: Tailwind CSS, shadcn/ui
- Code quality: ESLint, Prettier

## Разработка

Установка зависимостей:

```bash
npm install
```

Запуск development-сервера:

```bash
npm run dev
```

Проверка ESLint:

```bash
npm run lint
```

Проверка форматирования Prettier:

```bash
npm run format:check
```

Автоматическое форматирование файлов:

```bash
npm run format
```

Production build:

```bash
npm run build
```

## Структура проекта

Базовая структура:

```text
src/
  app/
  modules/
  shared/
```

- `app` — routing, layouts и Next.js-specific код
- `modules` — бизнесовые модули приложения
- `shared` — переиспользуемый UI и общие технические утилиты