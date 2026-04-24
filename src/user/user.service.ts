import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prismaService.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prismaService.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.prisma.user.delete({
      where: { id },
    });
  }
}
