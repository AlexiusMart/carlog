# CarLog

CarLog - приложение для учёта автомобилей, технического обслуживания, заправок, расходов и других событий, связанных с владением автомобилем.

## Технологии

Frontend:

- React 19
- Vite
- TypeScript
- React Router
- Ant Design
- TanStack Query
- CSS Modules

Инструменты разработки:

- ESLint
- Prettier
- npm workspaces

Репозиторий организован как monorepo.

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

Проверка TypeScript:

```bash
npm run typecheck
```

Проверка форматирования Prettier:

```bash
npm run format:check
```

Автоматическое форматирование:

```bash
npm run format
```

Production build:

```bash
npm run build
```

## Структура проекта

Базовая структура frontend-приложения:

```text
apps/
  web/
    src/
      app/
      modules/
      shared/
```

### `app`

Application-level инфраструктура:

- запуск приложения
- router
- глобальные providers
- глобальные стили
- application shell
- общая конфигурация приложения

Пример:

```text
app/
  App.tsx
  App.module.css
  global.css
  providers.tsx
  router.tsx
```

### `modules`

Функциональные и предметные модули приложения.

Например, модуль гаража со временем может выглядеть так:

```text
modules/
  garage/
    GaragePage.tsx
    GaragePage.module.css
    components/
      VehicleCard.tsx
      VehicleCard.module.css
    api/
      garage.api.ts
    hooks/
      useVehicles.ts
    types.ts
```

Структура конкретного модуля зависит от его сложности.

Не требуется заранее создавать все возможные директории. Они добавляются только тогда, когда появляется соответствующий код.

Типичное назначение:

- `*Page.tsx` - страница или основной экран модуля
- `*.module.css` - стили конкретной страницы или компонента
- `components/` - UI-компоненты, используемые только внутри этого модуля
- `api/` - функции и конфигурация для работы с backend API этого модуля
- `hooks/` - React hooks, специфичные для модуля
- `types.ts` - типы предметной области модуля

При росте функциональности структура может быть дополнительно разделена, если это действительно упрощает поддержку кода.

### `shared`

Код, который используется несколькими модулями приложения.

Например:

```text
shared/
  ui/
  api/
  lib/
  types/
  config/
```

Здесь могут находиться:

- переиспользуемые UI-компоненты
- общий API client
- технические утилиты
- общие типы
- конфигурация приложения

Код не следует переносить в `shared` заранее. Он становится общим только тогда, когда действительно используется несколькими частями приложения.
