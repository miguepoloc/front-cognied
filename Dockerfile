FROM node:alpine as build
RUN mkdir /frontend
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend
COPY package-lock.json /frontend
RUN npm install -g npm@latest
RUN npm install 
RUN npx browserslist@latest --update-db
# && npm fund

COPY . /frontend/
RUN npm run build:prod

# production environment
FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]