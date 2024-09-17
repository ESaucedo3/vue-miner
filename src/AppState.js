import { reactive } from "vue";
import { Upgrade } from "./models/Upgrade.js";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  crystals: 0,

  /**@type {Upgrade[]} */
  clickUpgrades: [
    new Upgrade({ name: "Cutter", price: 30, quantity: 0, multiplier: 5 }),
    new Upgrade({ name: "Slicer", price: 70, quantity: 0, multiplier: 10 }),
  ],

  /**@type {Upgrade[]} */
  automaticUpgrades: [
    new Upgrade({ name: "Drill", price: 150, quantity: 0, multiplier: 30 }),
    new Upgrade({ name: "Laser", price: 300, quantity: 0, multiplier: 40 }),
  ],
});
