import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto  ", () => {
    const testUser = {
      uid: "ABC123",
      usernmae: "El_Papi1502",
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });
  test("getUsuarioActivo debe de retornar un objeto", () => {
    const name = "Santiago Cepeda";
    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
