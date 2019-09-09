import { Request, Response } from 'express';
import { handleError, HTTP_METHOD } from '../../../utils';
import * as parentController from './parent.controller';

const API_PRE = '/parent';

export default [
  {
    path: `${API_PRE}/:id?*`,
    method: HTTP_METHOD.GET,
    handler: async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        if (id) {
          const parent = await parentController.getParentById(id);
          console.log(parent);
          res.status(200).send(parent);
        } else {
          const allParents = await parentController.getAllParents();
          res.status(200).send(allParents);
        }
      } catch (error) {
        handleError(error, res);
      }
    }
  },
  {
    path: `${API_PRE}/`,
    method: HTTP_METHOD.POST,
    handler: async (req: Request, res: Response) => {
      try {
        const { fname, lname, studentid, email, phoneno, nic } = req.body;
        const insertedParent = await parentController.createParent(
          fname,
          lname,
          studentid,
          email,
          phoneno,
          nic
        );
        res.status(200).send(insertedParent);
      } catch (error) {
        handleError(error, res);
      }
    }
  },
  {
    path: `${API_PRE}/update`,
    method: HTTP_METHOD.POST,
    handler: async (req: Request, res: Response) => {
      try {
        const { id, fname, lname, studentid, email, phoneno, nic } = req.body;
        const updatedParent = await parentController.updateParent(
          id,
          fname,
          lname,
          studentid,
          email,
          phoneno,
          nic
        );
        res.status(200).send(updatedParent);
      } catch (error) {
        handleError(error, res);
      }
    }
  },
  {
    path: `${API_PRE}/delete`,
    method: HTTP_METHOD.POST,
    handler: async (req: Request, res: Response) => {
      try {
        const { idToDelete } = req.body;
        try {
          await parentController.deleteParent(idToDelete);
          res.status(200).send({ deleted: true });
        } catch (deleteEr) {
          console.log(deleteEr);
          res.status(200).send({ deleted: false });
        }
      } catch (error) {
        handleError(error, res);
      }
    }
  }
];
