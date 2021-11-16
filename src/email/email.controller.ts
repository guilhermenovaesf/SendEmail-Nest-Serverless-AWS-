import { EmailService } from './email.service';
import { Body, Controller, Post } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Post()
  create(@Body() emailDto: EmailDto) {
    return this.emailService.create(emailDto);
  }
}
