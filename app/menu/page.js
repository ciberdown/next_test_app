
function Menu() {
  const wait = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  wait(20000);
  return <div>Menu</div>;
}

export default Menu;
