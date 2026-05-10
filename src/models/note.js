import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, 
    },
    content: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      required: true,
      enum: [Work, Personal, Meeting, Shopping, Ideas, Travel, Finance, Health, Important, Todo],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model('Note', noteSchema);