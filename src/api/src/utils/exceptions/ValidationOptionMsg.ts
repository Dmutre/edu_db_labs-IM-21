import { ValidationOptions } from "class-validator";


export function validationOptionMsg(message: string) :ValidationOptions {
  return {message};
}