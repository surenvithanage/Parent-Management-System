import dbCon from '../../../utils/db';
import { Parent } from './parent.entity';
import { Connection } from 'typeorm';

let con: Connection;

const getRepo = async () => {
  con = await dbCon;
  const repo = con.getRepository(Parent);
  return repo;
};

export const createParent = async (
  fname: string,
  lname: string,
  studentid: string,
  email: string,
  phoneno: string,
  nic: string,
): Promise<Parent> => {
  let parent = new Parent(fname, lname, studentid, email, phoneno, nic);

  const parentRepo = await getRepo();
  await parentRepo.insert(parent);

  return parent;
};

export const getAllParents = async (): Promise<Parent[]> => {
  const parentRepo = await getRepo();

  // const allParents = await parentRepo.find({ relations: ['studentClasses'] });
  const allParents = await parentRepo.find();
  return allParents;
};

export const getParentById = async (id: number): Promise<Parent | null> => {
  const parentRepo = await getRepo();

  const parent = (await parentRepo.findOne(id)) || null;
  return parent;
};

export const updateParent = async (
  id: number,
  fname: string,
  lname: string,
  studentid: string,
  email: string,
  phoneno: string,
  nic: string
): Promise<Parent> => {
  const parentRepo = await getRepo();

  const parentToUpdate = new Parent(fname, lname, studentid, email, phoneno, nic);
  parentToUpdate.id = id;

  await parentRepo.save(parentToUpdate);
  return parentToUpdate;
};

export const deleteParent = async (id: number) => {
  const parentRepo = await getRepo();

  const parentToDelete: Parent = (await parentRepo.findOne(id))!;
  await parentRepo.remove(parentToDelete);
  return;
};
