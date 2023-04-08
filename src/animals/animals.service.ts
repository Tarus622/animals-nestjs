import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal, AnimalDocument, AnimalSchema } from './schemas/animal.schema';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(Animal.name) private animalModel: Model<AnimalDocument>,
  ) {}

  // Create new animal
  async create(createAnimalDto: CreateAnimalDto) {
    const createdAnimal = new this.animalModel(createAnimalDto); 
    return await createdAnimal.save()
    .catch((error) => {
      console.error(error);
      throw new Error('Error creating animal');
    })
  }

  // Find all animals
  async findAll() {
    return await this.animalModel.find().exec();    
  }

  // Find animal by "id"
  async findOne(id: ObjectId) {
    const animal = await this.animalModel.findById(id).exec();

    if (!animal) {
    return "Error: Animal not found 😿";
  }
  return animal;
  }

  // Find animal by "id" and update this animal 
  async update(id: ObjectId, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.animalModel.findByIdAndUpdate(id, updateAnimalDto, { new: true }).exec();

    if (!animal) {
      return "Error: Animal not found 😿";
    }
    return animal;
  }

  // Find animal by "id" and remove this animal
  async remove(id: ObjectId) {
    const animal = await this.animalModel.findByIdAndRemove(id).exec();

    if (!animal) {
      return "Error: Animal not found 😿";
    }
    return `This animal has been removed of the database:\n\n${animal}`;
  }
}
