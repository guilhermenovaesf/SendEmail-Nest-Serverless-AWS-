/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class EmailDto {
  @IsString()
  readonly to: string;
  @IsString()
  readonly from: string;
  @IsString() 
  readonly subject: string;
  @IsString()
  readonly text: string;
}
