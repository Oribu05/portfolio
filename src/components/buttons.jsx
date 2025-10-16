function Botones({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 rounded-4xl border hover:bg-blue-900 hover:border-blue-900  border-white px-4 py-2 text-sm text-white bg-gray-500/30 transition"
    >   
      {Icon && <Icon style={{ fontSize: '20px' }} />}
      <span>{children}</span>
    </a>
  );
}


export default Botones;
