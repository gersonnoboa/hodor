export class JWT {
  static get() {
    return localStorage.getItem("jwt");
  }

  static set(token: string) {
    localStorage.setItem("jwt", token);
  }
}