import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateBookDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  Author: string;
}

export class UpdateBookDTO {
  @IsOptional()
  @ApiProperty()
  name: string;
  @IsOptional()
  @ApiProperty()
  quantity: number;
  @IsOptional()
  @ApiProperty()
  Author: string;
}
