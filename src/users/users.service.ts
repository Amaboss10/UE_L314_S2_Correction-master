
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
   /* @InjectRepository(Users)
    private usersRepository: Repository<Users>*/
    @InjectModel('Users')  private readonly UserModel: Model<Users>,
) { }

    async createUser(firstname: string, lastname: string): Promise<Users> {
        const newUser =  new this.UserModel({ firstname, lastname });

        return  await newUser.save();
        
    }
 /* createUser(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    return await this.usersRepository.findOne({ where: { id: id } });  
   }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }*/

}

