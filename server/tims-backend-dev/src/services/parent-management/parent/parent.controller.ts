import * as parentService from './parent.service';

export const createParent = async (fname: string, lname: string, studentid: string, email: string, phoneno: string, nic: string) => {
  const insertedParent = await parentService.createParent(
    fname,
    lname,
    studentid,
    email,
    phoneno,
    nic
  );
  return insertedParent;
};

export const getAllParents = async () => {
  const allParents = await parentService.getAllParents();
  return allParents;
};

export const getParentById = async (id: number) => {
  const parent = await parentService.getParentById(id);
  return parent;
};

export const deleteParent = async (parentId: number) => {
  await parentService.deleteParent(parentId);
};

export const updateParent = async (
  parentId: number,
  fname: string,
  lname: string,
  studentid: string,
  email: string,
  phoneno: string,
  nic: string
) => {
  const v = await parentService.updateParent(
    parentId,
    fname,
    lname,
    studentid,
    email,
    phoneno,
    nic
  );
  return updateParent;
};
