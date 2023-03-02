import fs from "fs-extra"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const { readJSON, writeJSON } = fs

const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data") // D:\Work\Epicode\2022\EN\BE-Master-04\U4\epicode-u4-d4-4\src\data
console.log("DATA FOLDER:", dataFolderPath)
const usersJSONPath = join(dataFolderPath, "users.json")
const booksJSONPath = join(dataFolderPath, "books.json")

export const getUsers = () => readJSON(usersJSONPath)
export const writeUsers = usersArray => writeJSON(usersJSONPath, usersArray)
export const getBooks = () => readJSON(booksJSONPath)
export const writeBooks = booksArray => writeJSON(booksJSONPath, booksArray)

// USAGE
// await getUsers()
// await writeUsers([{}])
