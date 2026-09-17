# Правила разработки

## Коммиты

В проекте используется соглашение Conventional Commits.

Формат:

```text
<type>[optional scope]: <description>
```

Основные типы:

- `feat` - новая функциональность
- `fix` - исправление ошибки
- `refactor` - изменение структуры кода без изменения поведения
- `test` - добавление или изменение тестов
- `docs` - изменения документации
- `chore` - конфигурация, tooling и техническое обслуживание
- `build` - изменения build-системы и зависимостей
- `ci` - изменения CI/CD
- `perf` - улучшения производительности

Примеры:

```text
feat(garage): add empty state
fix(vehicles): validate mileage
refactor(shared): move UI components
chore(web): configure path alias
docs: update development workflow
```

Описание коммита должно отражать смысл изменения, а не сам факт редактирования файлов.

## Ветки

Ветки создаются от актуального `master`.

Перед началом работы:

```bash
git switch master
git fetch origin
git pull --ff-only
```

После этого создаётся рабочая ветка:

```bash
git switch -c <type>/<short-description>
```

Формат имени:

```text
<type>/<short-description>
```

Примеры:

```text
feat/garage
feat/add-vehicle
fix/mileage-validation
refactor/shared-ui
chore/rebootstrap-web
docs/readme
```

Основные префиксы:

- `feat/`
- `fix/`
- `refactor/`
- `chore/`
- `docs/`
- `test/`

Одна ветка должна содержать логически связанное изменение.

Изменения объединяются с `master` через Pull Request.

## Проверки перед merge

Перед merge ветки в `master` необходимо выполнить:

```bash
npm run lint
npm run typecheck
npm run format:check
```

Если изменение затрагивает приложение, зависимости или build-конфигурацию, также необходимо проверить production build:

```bash
npm run build
```

При наличии автоматических тестов дополнительно запускаются соответствующие test-команды.

`master` должен оставаться в рабочем состоянии.

## Форматирование

Для автоматического форматирования проекта используется Prettier:

```bash
npm run format
```

Проверка форматирования без изменения файлов:

```bash
npm run format:check
```

Не следует вручную форматировать код в стиле, отличающемся от конфигурации проекта.
