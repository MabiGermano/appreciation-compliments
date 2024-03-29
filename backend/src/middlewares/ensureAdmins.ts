import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const { authenticatedUser } = request;

  const userRepository = getCustomRepository(UserRepository);

  const { admin } = await userRepository.findOne(authenticatedUser);

  if (admin) {
    return next();
  }
  return response.status(401).json("Unauthorized");
}