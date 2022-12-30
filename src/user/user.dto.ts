import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  age: number;
  @ApiProperty()
  @IsNotEmpty()
  Department: string;
}

export class UpdateUserDTO {
  @ApiProperty()
  @IsOptional()
  name: string;
  @IsOptional()
  @ApiProperty()
  age: number;
  @IsOptional()
  @ApiProperty()
  Department: string;
}
