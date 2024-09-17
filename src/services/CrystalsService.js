import { AppState } from "@/AppState.js";

class CrystalsService {
  purchaseTool(upgrade) {
    const crystals = AppState.crystals;
    if (crystals < upgrade.price) return;

    AppState.crystals -= upgrade.price;
    ++upgrade.quantity;
    upgrade.price *= 2;
  }

  clickCollect() {
    let bonusCrystals = 0;
    const clickUpgrades = AppState.clickUpgrades;
    clickUpgrades.forEach(
      (click) => (bonusCrystals += click.quantity * click.multiplier)
    );
    ++AppState.crystals;
    AppState.crystals += bonusCrystals;
  }

  autoCollect() {
    let bonusCrystals = 0;
    const autoUpgrades = AppState.automaticUpgrades;
    autoUpgrades.forEach(
      (automatic) =>
        (bonusCrystals += automatic.quantity * automatic.multiplier)
    );
    AppState.crystals += bonusCrystals;
  }
}

export const crystalsService = new CrystalsService();
