# Despliegue - Credibanco App Angular

## 🚀 Despliegue Local

```bash
git clone https://github.com/giovanemere/credibanco-app-angular.git
cd credibanco-app-angular

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 🐳 Docker

```bash
# Construir imagen
docker build -t credibanco-app-angular .

# Ejecutar contenedor
docker run -p 4200:4200 credibanco-app-angular
```
