import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
    constructor(private readonly configService: ConfigService) {}

    async sendEmail(to: string, subject: string, message: string) {
        const smtpHost = this.configService.get<string>('SMTP_HOST');
        const smtpPort = this.configService.get<number>('SMTP_PORT');
        const smtpUsername = this.configService.get<string>('SMTP_USERNAME');
        const smtpPassword = this.configService.get<string>('SMTP_PASSWORD');

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            auth: {
                user: smtpUsername,
                pass: smtpPassword,
            },
        });

        const mailOptions = {
            from: smtpUsername,
            to,
            subject,
            text: message,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    }
}
