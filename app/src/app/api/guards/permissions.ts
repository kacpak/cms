import {Role} from "../../../typings/responses/responses";
export class Permissions {

  private constructor() {}

  static canAccessAdminPanel(role: Role): boolean {
    return ['writer', 'editor', 'administrator'].indexOf(role) >= 0
  }

  static canAccessNewsPanel(role: Role): boolean {
    return ['writer', 'editor', 'administrator'].indexOf(role) >= 0
  }

  static canAccessArticlesPanel(role: Role): boolean {
    return ['writer', 'editor', 'administrator'].indexOf(role) >= 0
  }

  static canAccessMenuPanel(role: Role): boolean {
    return ['editor', 'administrator'].indexOf(role) >= 0
  }

  static canAccessMultimediaPanel(role: Role): boolean {
    return ['writer', 'editor', 'administrator'].indexOf(role) >= 0
  }

  static canAccessUsersPanel(role: Role): boolean {
    return ['administrator'].indexOf(role) >= 0
  }
}
