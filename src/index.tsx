import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website freelance",
          type: "deposit",
          category: "Dev",
          amount: 3000,
          createdAt: new Date("2021-04-20 17:50:04"),
        },
        {
          id: 2,
          title: "Starbucks",
          type: "withdraw",
          category: "Food",
          amount: 30,
          createdAt: new Date("2021-07-09 03:05:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
