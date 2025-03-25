import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test("getHeroesById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroesById debe de retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBe.toBeFalsy();
  });
  test("getHeroesByOwner debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });
  test("getHeroesByOwner debe de retornar un arreglo con los heroes de MARVEL", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
