import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Sample Product',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The description of the product',
    example: 'This is a sample product description',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 29.99,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'The version of the product',
    example: '1.0',
  })
  @IsString()
  version: string;  
}