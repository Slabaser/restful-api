import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Line } from './entities/line.entity';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';

@Injectable()
export class LinesService {
  constructor(
    @InjectRepository(Line)
    private lineRepository: Repository<Line>,
  ) {}

  async create(createLineDto: CreateLineDto) {
    const line = this.lineRepository.create(createLineDto);
    return await this.lineRepository.save(line);
  }

  async findAll() {
    // Hattın içindeki ürünleri de görmek için relations ekledik
    return await this.lineRepository.find({ relations: ['products'] });
  }

  async findOne(id: number) {
    const line = await this.lineRepository.findOne({ 
      where: { id }, 
      relations: ['products'] 
    });
    if (!line) {
      throw new NotFoundException(`Line with ID ${id} not found`);
    }
    return line;
  }

  async update(id: number, updateLineDto: UpdateLineDto) {
    await this.lineRepository.update(id, updateLineDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const line = await this.findOne(id);
    return await this.lineRepository.remove(line);
  }
}