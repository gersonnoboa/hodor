export class JWT {
  private name = "jwt";

  static get() {
    return localStorage.getItem(name);
  }

  static isMissingToken() {
    return JWT.get() == null
  }

  static set(token: string) {
    localStorage.setItem(name, token);
  }

  static remove() {
    localStorage.removeItem(name);
  }

  static getHeader() {
    return { "x-auth-token": this.get() }
  }
}