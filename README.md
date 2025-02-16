# Subscrption Tracker

## About

This is a small project for practicing subscription API using express

### Install

```bash
npm install
```

### Define Env Variables

1.  define env file

    - .env.development.local
    - .env.production.local

2.  define variable

    ```bash
    # PORT
    PORT=<you port || 5500>

    # NODE 环境
    NODE_ENV=<'development'||'production'>

    # DATABASE
    DB_URI=''

    #JWT AUTH
    JWT_SECRET="secret"
    JWT_EXPIRES_IN=90d

    #ARCJET https://arcjet.com/
    ARCJET_ENV=development
    ARCJET_KEY=""

    #QSTASH
    QSTASH_URL=https://qstash.upstash.io
    QSTASH_TOKEN=""
    QSTASH_CURRENT_SIGNING_KEY=""
    QSTASH_NEXT_SIGNING_KEY=""
    ```
