import { Controller, Get, Query } from '@nestjs/common';
import { PetsIndexDTO } from './dtos/pets-index.dto';

@Controller('pets')
export class PetsController {
  @Get()
  public index(@Query() query: PetsIndexDTO) {
    return query;
  }
}
