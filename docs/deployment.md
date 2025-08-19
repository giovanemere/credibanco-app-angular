# Deployment Guide

## Build para Producción

```bash
cd perceptor
ng build --prod
```

## Despliegue

### Nginx
```nginx
server {
    listen 80;
    server_name credibanco-app.com;
    root /var/www/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Docker (Recomendado)
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
```
