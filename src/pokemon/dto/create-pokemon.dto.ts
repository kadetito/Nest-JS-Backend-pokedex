import { Min, IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1, { message: `el minimo de longitud del NUMBER debe ser de 1` })
  no: number;

  @IsString()
  @MinLength(1, { message: `el minimo de longitud del NAME debe ser de 1` })
  name: string;
}
