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
    return await this.lineRepository.find({ relations: ['products'] });
  }

  async findOne(id: number) {
    const line = await this.lineRepository.findOne({ 
      where: { id }, 
      relations: ['products'] 
    });
    if (!line) throw new NotFoundException(`Line #${id} not found`);
    return line;
  }

  async update(id: number, updateLineDto: UpdateLineDto) {
    const line = await this.lineRepository.preload({
      id: id,
      ...updateLineDto,
    });
    if (!line) throw new NotFoundException(`Line #${id} not found`);
    return this.lineRepository.save(line);
  }

  async remove(id: number) {
    const line = await this.findOne(id);
    return this.lineRepository.remove(line);
  }
}