import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinesService } from './lines.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('lines')
@Controller('lines')
export class LinesController {
  constructor(private readonly linesService: LinesService) {}

  @Post()
  @ApiOperation({ summary: 'Yeni üretim hattı oluşturur' })
  create(@Body() createLineDto: CreateLineDto) {
    return this.linesService.create(createLineDto);
  }

  @Get()
  @ApiOperation({ summary: 'Tüm hatları listeler' })
  findAll() {
    return this.linesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLineDto: UpdateLineDto) {
    return this.linesService.update(+id, updateLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linesService.remove(+id);
  }
}