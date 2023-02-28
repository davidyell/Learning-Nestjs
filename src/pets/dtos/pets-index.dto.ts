import { Transform } from 'class-transformer';
import { IsArray, IsInt, IsString, Min } from 'class-validator';

export class PetsIndexDTO {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  age: number;

  @IsString()
  description: string;

  @IsArray()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.split(',') : value,
  )
  tags: string[];
}
