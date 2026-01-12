import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Bumper', description: 'Name of the product' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'P-1001', description: 'Unique product code' })
  @IsString()
  @IsNotEmpty()
  productCode: string;

  @ApiProperty({ example: 500, description: 'Target production count' })
  @IsNumber()
  targetCount: number;

  @ApiProperty({
    example: 1,
    description: 'ID of the associated production line',
  })
  @IsNumber()
  @IsNotEmpty()
  lineId: number;
}
