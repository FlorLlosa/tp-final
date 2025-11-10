# TP Final - Backend Express con MongoDB usando Docker.

Este proyecto es parte del trabajo práctico final de la materia Laboratorio II. Se trata de una aplicación backend hecha con Express que se conecta a una base de datos MongoDB, todo corriendo en contenedores Docker.

## Requisitos.

- Tener instalado **Docker Desktop**
- Tener instalado **Git** (para clonar el proyecto)

## Cómo ejecutar el proyecto.

1. Clonar el repositorio:

```bash
    git clone https://github.com/tu-usuario/mi-stack-backend.git
    cd tp-final

2. Levantar los servicios con Docker Compose:
    docker-compose up --build

3. - Abrir el navegador y visitar:
    http://localhost:3000/api
    Debería ver un mensaje JSON como:
        { "mensaje: '¡Tp final corriendo con éxito en Docker!' }

## Estructura del Proyecto

mi-stack-backend/
├── app.js               # Código del servidor Express
├── package.json         # Dependencias del proyecto
├── Dockerfile           # Imagen del backend
├── docker-compose.yml   # Orquestación de servicios
└── .env                 # (No usado en este proyecto)

## Servicios Incluidos
    - Backend Express corriendo en el puerto 3000
    - MongoDB corriendo en el puerto 27017
    - Ambos se levantan juntos con docker-compose