export const makeMoney = (n = 0)=>{
  return n
  .toString()
  .split("")
  .reverse()
  .join("")
  .match(/\d{0,3}/g)
  .join(" ")
  .split("")
  .reverse()
  .join("")
  .trim();
}