//import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository } from 'typeorm';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firsname: { type: String, required : true },
    lastname: { type: String, required : true }
});

export interface Users {
  firstname: string;
  lastname: string;
}
