const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
