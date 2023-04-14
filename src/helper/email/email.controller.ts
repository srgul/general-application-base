import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post()
    async sendEmail(
        @Body('to') to: string,
        @Body('subject') subject: string,
        @Body('message') message: string,
    ) {
        await this.emailService.sendEmail(to, subject, message);
        return { message: 'Email sent successfully' };
    }
}
