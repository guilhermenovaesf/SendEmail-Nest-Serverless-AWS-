/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import aws from "aws-sdk";
import { EmailDto } from './dto/email.dto';

@Injectable()
export class EmailService {

ses = new aws.SES({ region: "us-west-2" });
async create (emailDto: EmailDto) {

  const params = {
    Destination: {
      ToAddresses: [emailDto.to],
    },
    Message: {
      Body: {
        Text: { Data: emailDto.text },
      },

      Subject: { Data: emailDto.subject },
    },
    Source: emailDto.from,
  };

  return this.ses.sendEmail(params).promise()
};
}
