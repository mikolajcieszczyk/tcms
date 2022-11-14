import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking extends Document {
  @Prop()
  id: string;

  @Prop()
  clientName: string;

  @Prop()
  start: Date;

  @Prop()
  end: Date;

  @Prop()
  court: number;

  @Prop()
  price: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
