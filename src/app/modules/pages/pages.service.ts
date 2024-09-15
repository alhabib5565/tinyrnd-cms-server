import { TPage } from './pages.interface';
import { Page } from './pages.model';

const createPage = async (payload: TPage) => {
  const result = await Page.create(payload);
  return result;
};

const getAllPage = async () => {
  const result = await Page.find();
  return result;
};

const getSinglePage = async (id: string) => {
  const result = await Page.findById(id);
  return result;
};

const editPage = async (id: string, payload: Partial<TPage>) => {
  const result = await Page.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deletePage = async (id: string) => {
  const result = await Page.findByIdAndDelete(id);
  return result;
};

export const PageService = {
  createPage,
  getAllPage,
  getSinglePage,
  editPage,
  deletePage,
};
