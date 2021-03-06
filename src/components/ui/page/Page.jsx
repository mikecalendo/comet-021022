import ServerList from '../../server/list/ServerList';

export default function Page({ children, header, rightSidebar, leftSidebar }) {
  return (
    <div className="flex flex-grow">
      <div className="flex flex-col flex-grow">
        {leftSidebar}
        {header}
        <div
          className="h-full"
        >
          {children}
        </div>
      </div>
      {leftSidebar}
    </div>
  )

  /*return (
    <div className="flex flex-col flex-grow">
      {header}
      <div
        className="flex h-full"
        style={{ maxHeight: header ? 'calc(100% - 3rem)' : '100%' }}
      >
        {leftSidebar}
        <div className="flex flex-col flex-grow">{children}</div>
        {rightSidebar}
      </div>
    </div>
  )*/
}
