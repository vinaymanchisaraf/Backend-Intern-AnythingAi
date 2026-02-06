const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Scalable REST API",
      version: "1.0.0",
      description: "API documentation for Auth and Task management",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },


  apis: [path.join(__dirname, "../routes/*.js")],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
