import { form, query } from "$app/server";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

let list: number[] = [];

const db = {
  list
};


export const getList = query(async () => {
  await sleep(1000); // simulate network delay
  return db.list;
});

export const addEntry = form(async () => {
  db.list.push(420);
  await getList().refresh();
});

export const clear = form(async () => {
  db.list = [];
  await getList().refresh();
});