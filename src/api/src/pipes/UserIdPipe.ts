import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { UserRepository } from "src/repositories.ts/UserRepository";
import { InvalidEntityIdException } from "src/utils/exceptions/InvalidEntityIdException";


@Injectable()
export class UserIdPipe implements PipeTransform {
  constructor(
    private userRepository: UserRepository
  ) {}
  
  transform(userId: number) {
    userId = Number(userId);
    const user = this.userRepository.findUserById(userId);
    if(!user) {
      throw new InvalidEntityIdException('User');
    }
    return userId;
  }
}