import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class CognitoAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
