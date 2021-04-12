let index = 1;
export default function generateId(name: string) {
  return name + "-" + index++;
}
