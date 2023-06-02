# pull official base image
FROM python:3.11-alpine

RUN apk update \
    && apk add --virtual build-deps \
    postgresql-dev \
    gcc python3-dev musl-dev jpeg-dev zlib-dev libjpeg \
    tzdata

ENV PROJECT_DIR /usr/src/watermelonmarkets_root/backend

# set work directory
WORKDIR ${PROJECT_DIR}

# install dependencies
RUN pip install --upgrade pip
RUN pip install pipenv==2023.2.4
COPY ./Pipfile ./Pipfile.lock ${PROJECT_DIR}/
RUN pipenv install --system --deploy
# RUN pipenv install


# set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1
# ENV DATABASE postgres
# ENV DJANGO_SETTINGS_MODULE=grocerfinder.settings.production

# Set to True if wanting to Flush data upon container init. 
# Warning will delete current data
# ENV DJANGO_FLUSH_DATA=False

# Set to True if wanting to migrate database. 
ENV DJANGO_MIGRATE=True

# Set to True if loading data from data.json file
# ENV DJANGO_LOAD_DATA=False

ENV TZ=America/New_York


# copy entrypoint.sh
COPY ./deploy/entrypoint.sh ${PROJECT_DIR}

# copy project
COPY ./backend .

# run entrypoint.sh
CMD ["dos2unix", './entrypoint.sh']
ENTRYPOINT [ "./entrypoint.sh" ]