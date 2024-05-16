import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'

export class BookCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsString()
  @IsOptional()
  previewImageUrl?: string

  @IsString()
  @IsOptional()
  authorId?: string

  @IsString()
  @IsNotEmpty()
  genre: string
  
  @IsString()
  @IsNotEmpty()
  publisher: string

  @IsString()
  @IsNotEmpty()
  quantity: number

  @IsString()
  @IsNotEmpty()
  authorPub: string

  @IsString()
  @IsOptional()
  sellerId?: string

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

export class BookUpdateDto {
  @IsString()
  @IsOptional()
  title?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsOptional()
  price?: number

  @IsString()
  @IsOptional()
  previewImageUrl?: string

  @IsString()
  @IsOptional()
  authorId?: string

  @IsString()
  @IsOptional()
  sellerId?: string

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
