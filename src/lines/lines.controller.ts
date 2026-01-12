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
  @ApiOperation({ summary: 'Create a new production line' })
  create(@Body() createLineDto: CreateLineDto) {
    return this.linesService.create(createLineDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all production lines' })
  findAll() {
    return this.linesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a production line by ID' })
  findOne(@Param('id') id: string) {
    return this.linesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a production line' })
  update(@Param('id') id: string, @Body() updateLineDto: UpdateLineDto) {
    return this.linesService.update(+id, updateLineDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a production line' })
  remove(@Param('id') id: string) {
    return this.linesService.remove(+id);
  }
}