# Правила разработки 

## Коммиты

В проекте используется соглашение Conventional Commits.

Формат:

```text
<type>[optional scope]: <description>
```

Основные типы:

- `feat` — новая функциональность
- `fix` — исправление ошибки
- `refactor` — изменение структуры кода без изменения поведения
- `test` — добавление или изменение тестов
- `docs` — изменения документации
- `chore` — конфигурация, tooling и техническое обслуживание
- `build` — изменения build-системы и зависимостей
- `ci` — изменения CI/CD
- `perf` — улучшения производительности

Примеры:

```text
feat(garage): add empty state
fix(vehicles): validate mileage
refactor(shared): move UI components
chore: configure prettier
docs: update development workflow
```

Описание коммита должно отражать смысл изменения, а не сам факт редактирования файлов.

## Ветки

Ветки создаются от `master`.

Формат:

```text
<type>/<short-description>
```

Примеры:

```text
feat/garage
feat/add-vehicle
fix/mileage-validation
refactor/shared-ui
chore/prettier
```

Основные префиксы:

- `feat/`
- `fix/`
- `refactor/`
- `chore/`
- `docs/`
- `test/`

Одна ветка должна содержать логически связанное изменение.

## Перед merge

Перед merge ветки в `master` необходимо выполнить:

```bash
npm run lint
npm run format:check
```

При наличии тестов также запускаются соответствующие test-команды.

Для существенных изменений рекомендуется проверить production build:

```bash
npm run build
```

`master` должен оставаться в рабочем состоянии.
