import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import CreateCategoryController from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUSeCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUSeCase)

export {createCategoryController}