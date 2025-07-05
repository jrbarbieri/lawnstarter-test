# syntax=docker/dockerfile:1

FROM ruby:3.3.0-slim

# Instala dependências do sistema
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential libpq-dev nodejs postgresql-client && \
    rm -rf /var/lib/apt/lists/*

# Define diretório de trabalho
WORKDIR /rails

# Copia Gemfile e Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Instala gems
RUN bundle install

# Copia o restante do código
COPY . .

# Garante que as pastas existem e têm permissão
RUN mkdir -p tmp/pids tmp/sockets log && \
    chown -R nobody:nogroup tmp log

# Usa usuário padrão (root) para facilitar dev local

# Expõe a porta padrão do Rails
EXPOSE 3000

# Comando padrão: servidor Rails
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
