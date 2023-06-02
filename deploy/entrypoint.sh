#!/bin/sh

# migrate if needed
if [ "$DJANGO_MIGRATE" = "True" ]
then
    python manage.py migrate --no-input
    echo "django migrated"
fi

# create super user if password set
if [ $DJANGO_SUPERUSER_PASSWORD ]
then
    python manage.py createsuperuser --noinput \
        --username watermelonmarkets \
        --email admin@watermelonmarkets.com
fi

exec "$@"