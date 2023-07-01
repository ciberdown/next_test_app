import ToolsNavbar from "@/app/components/toolsNavbar";

export const metadata = {
  title:'tools',
  description:'tools created by Amin'
}

function ToolsLayout({ children }) {
  return (
    <div>
      <ToolsNavbar />
      {children}
    </div>
  );
}

export default ToolsLayout;
