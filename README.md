### Hexlet tests and linter status:
[![Hexlet Badge](https://img.shields.io/badge/Hexlet-projects-008A9C?logo=hexlet)](https://hexlet.io)

[![Actions Status](https://github.com/Mokey-Mokey-Adrift/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Mokey-Mokey-Adrift/frontend-project-44/actions)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Mokey-Mokey-Adrift_frontend-project-44&metric=alert_status)](https://sonarcloud.io/dashboard?id=Mokey-Mokey-Adrift_frontend-project-44)

Чётность
https://asciinema.org/a/6YyefFFN858jA6oN

Калькулятор
https://asciinema.org/a/JBjbkfMJdCeKGkXA

НОД
https://asciinema.org/a/IaUC0L405NsLeJMh

Прогрессия
https://asciinema.org/a/olx664gIJlYcgu3t

Простое число
https://asciinema.org/a/d2P7hm2i6ANbLwy7


# Brain Games

Набор консольных игр, написанных на JavaScript. Включает в себя игры на чётность, калькулятор, поиск НОД, определение пропущенного числа в прогрессии и определение простых чисел.

## Минимальные требования

- Node.js &gt;= 16

## Установка

```bash
git clone https://github.com/Mokey-Mokey-Adrift/frontend-project-44.git
cd frontend-project-44
npm install
npm link
```
## Запуск игр

После установки можно запускать игры из терминала:
```bash
brain-games        # приветствие
brain-even         # игра на чётность
brain-calc         # калькулятор
brain-gcd          # поиск НОД
brain-progression  # прогрессия
brain-prime        # простое число
```
## Или напрямую через Node.js без глобальной установки:
```bash
node bin/brain-even.js
node bin/brain-calc.js
node bin/brain-gcd.js
node bin/brain-progression.js
node bin/brain-prime.js
```