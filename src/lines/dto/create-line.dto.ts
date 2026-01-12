import { ApiProperty } from '@nestjs/swagger';

export class CreateLineDto {
  @ApiProperty({ example: 'Hattat-1' })
  lineName: string;

  @ApiProperty({ example: true })
  isActive: boolean;
}