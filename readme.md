# Description:

Seller onboarding demo for [watermelonmarkets.com](watermelonmarkets.com).

# Live Demo:

(Please enable http if browser warns that it's not https. The aesthentic.com domain is a loaner from author)

- Onboarding Survey Form: http://aesthentic.com/
- Survey Results: http://aesthentic.com/seller_intake_survey_results

# Prerequisites:

(The pinned version was used in development therefore recommended to ensure compatibility)

- Python 3.11.2 [Instruction](https://wiki.python.org/moin/BeginnersGuide/Download)
- Pipenv [Instruction](https://pypi.org/project/pipenv/). Other Python virtual environment management packages can be used, follow their instructions for details.
- Nodejs version 18.15.0 [Instruction](https://nodejs.org/en/download/package-manager/). If multiple Node versions needed for different projects on the same dev machine, use https://github.com/volta-cli
- Git version control 2.39.1 or higher. [Instruction](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- Visual Studio Code -- VSCode (recommended) Text Editor/IDE. [Instruction](https://code.visualstudio.com/docs/introvideos/basics).

# Setup:

- Clone the repo:

```
git clone https://github.com/tinutmap/watermelonmarket_onboarding_demo.git
```

- Django setup (backend):

  - In terminal, at project root directory), create new virtual environment and install the required packages by:

  ```
  $ pipenv shell
  $ pipenv install
  ```

  - From project root directory, change to Django root directory:

  ```
  $ cd backend
  ```

  - Migrate to the database:

  ```
  python manage.py migrate
  ```

  - Start Django backend server by:

  ```
  $ python manage.py runserver 0.0.0.0:8000
  ```

- React setup (frontend)
  - From project root directory (`/frontend/onboarding_demo`), change to React front end root directory:
  ```
  $ cd ./frontend/onboarding_demo
  ```
  - Install packages by npm:
  ```
  $ npm install
  ```
  - Run backend server by:
  ```
  $ npm run start
  ```
  - Browse the website at `http://localhost:3000`
