console.log(1);
const fn = async () => {
  console.log(2);
  await Promise.resolve(23).then((res) => console.log(res));

  console.log(4);
};
fn();
console.log(5);
