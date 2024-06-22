import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('users')
export class UsersController {
  @Get()
  async findAllUsers(): Promise<any[]> {
    return prisma.user.findMany();
  }

  @Post()
  async createUser(
    @Body() createUserDto: { name: string; emoji: number },
  ): Promise<any> {
    const { name, emoji } = createUserDto;
    return prisma.user.create({
      data: {
        name,
        emoji,
      },
    });
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: { name?: string; emoji?: number },
  ): Promise<any> {
    const { name, emoji } = updateUserDto;
    return prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        emoji,
      },
    });
  }
}
