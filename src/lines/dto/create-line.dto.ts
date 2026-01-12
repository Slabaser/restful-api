import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateLineDto {
  @ApiProperty({
    example: 'Assembly Line A',
    description: 'Name of the production line',
  })
  @IsString()
  @IsNotEmpty()
  lineName: string;

  @ApiProperty({ example: true, description: 'Is the line active?' })
  @IsBoolean()
  isActive: boolean;
}
