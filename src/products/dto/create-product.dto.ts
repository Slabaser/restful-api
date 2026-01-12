import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Civata' })
  name: string;

  @ApiProperty({ example: 'C-101' })
  productCode: string;

  @ApiProperty({ example: 500 })
  targetCount: number;

  @ApiProperty({ example: 1 })
  lineId: number;
}