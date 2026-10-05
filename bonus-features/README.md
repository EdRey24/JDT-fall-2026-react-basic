# Bonus Features

1. **Delete Cards**: Filter array state by ID and recalculate current index bounds.
2. **LocalStorage Persistence**: Use lazy initializer state `useState(() => ...)` and `useEffect` to sync state with `localStorage`.
3. **JSON File Export/Import**: Use `FileReader` to import external JSON card files and dynamic blob downloads to export current cards.