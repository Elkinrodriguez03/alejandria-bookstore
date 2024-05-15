import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class OrderItemCreateDto {
  @IsNumber()
  @IsNotEmpty()
  quantity: number

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsString()
  @IsOptional()
  orderId?: string

  @IsString()
  @IsOptional()
  bookId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class OrderItemUpdateDto {
  @IsNumber()
  @IsOptional()
  quantity?: number

  @IsNumber()
  @IsOptional()
  price?: number

  @IsString()
  @IsOptional()
  orderId?: string

  @IsString()
  @IsOptional()
  bookId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
