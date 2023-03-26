import { Type } from "class-transformer";
import { isNumber, IsNumber, IsOptional, IsPositive, Min } from "class-validator";


export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    offset?: number;

}