### Continuous Integration & Continuous Delivery (CI/CD)

[![Build Status](https://travis-ci.com/MaximeChartier/5-ci-cd.svg?branch=master)](https://travis-ci.com/MaximeChartier/5-ci-cd)

Repo GitHub :
[Github - MaximeChartier/5-ci-cd](https://github.com/MaximeChartier/5-ci-cd)

**Intégration continue**

`Objectif` : Lancer les tests unitaires de l'application sur un ou plusieurs environnement(s) afin de remonter automatiquement d'éventuel bugs

`Outil`: Travis-ci.com (opensource), configuration [.travis.yml](.travis.yml)

**Déploiement continu**

`Objectif` : Automatiser le déploiement d'un service en production

`Outil`: Heroku.com (opensource), configuration 'deploy:' dans [.travis.yml](.travis.yml)
