import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName() : string {
    return "Regina Nazombe";    // always returns one thing
  }

  getSpeech() : string {
    return "I am a student at Moringa School, I am learning web development and I am loving it. This is my second year and I can't wait to graduate";
  }
}
