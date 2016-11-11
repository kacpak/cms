import {Role} from "../../../typings/responses/responses";
export class Permissions {

  private constructor() {}

  static isAdminPanelAllowed(role: Role): boolean {
    return ['writer', 'editor', 'administrator'].indexOf(role) >= 0
  }
}
