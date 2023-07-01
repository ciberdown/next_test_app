import Navbar from "../components/navbar";

export const metadata = {
  title: "menu",
  descripiton: "menu of this have some children",
};

function MenuLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default MenuLayout;
