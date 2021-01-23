export interface StringValidator {
  isAcceptable(s: string): boolean;
}

/**
 * Interface de usuarios
 * 
 * @export
 * @interface CustomUser
 */
export interface CustomUser {
  name: string;
}